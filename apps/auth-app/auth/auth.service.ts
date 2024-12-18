import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../libs/entities/users/user.entity';
import { SessionEntity } from '../../libs/entities/users/session.entity';
import { AccountEntity } from '../../libs/entities/users/account.entity';
import { VerificationTokenEntity } from '../../libs/entities/users/verification-token.entity';
import { UpdateUserDto } from 'apps/libs/dto/user/update-user.dto';
import { SessionTokenDto } from 'apps/libs/dto/session/session-token.dto';
import { CreateAccountDto } from 'apps/libs/dto/account/create-account.dto';
import { UpdateAccountDto } from 'apps/libs/dto/account/update-account.dto';
import { CreateSessionDto } from 'apps/libs/dto/session/create-session.dto';
import { CreateUserDto } from 'apps/libs/dto/user/create-user.dto';
import { ValidateUserDto } from 'apps/libs/dto/user/validate-user.dto';
import { SignInDto } from 'apps/libs/dto/auth/sign-in.dto';
import { ProfileEntity } from 'apps/libs/entities/users/profile.entity';
import { CreateProfileDto } from 'apps/libs/dto/profile/create-profile.dto';
import { UpdateProfileDto } from 'apps/libs/dto/profile/update-profile.dto';
import * as nodemailer from 'nodemailer';

import { envs } from 'apps/libs/config';
import { ByEmailDto } from 'apps/libs/dto/common/by-mail.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(SessionEntity)
    private readonly sessionRepository: Repository<SessionEntity>,
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
    @InjectRepository(VerificationTokenEntity)
    private readonly verificationTokenRepository: Repository<VerificationTokenEntity>,
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  async validateUser(
    validateUserDto: ValidateUserDto,
  ): Promise<UserEntity | null> {
    const { email } = validateUserDto;
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async singIn(signInDto: SignInDto): Promise<UserEntity> {
    const { email, password } = signInDto;

    const user = await this.validateUser({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    } else {
      // Verifica la contraseña
      // if (!await bcrypt.compare(password, user.password)) {
      //   throw new UnauthorizedException('Invalid credentials

      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      } else {
        return user;
      }
    }
  }

  async registerUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.validateUser({ email: createUserDto.email });
    if (user) {
      throw new UnauthorizedException('User already exists');
    } else {
      const newUser = this.userRepository.create(createUserDto);
      return this.userRepository.save(newUser);
    }
  }

  async createProfile(dto: CreateProfileDto): Promise<ProfileEntity> {
    const profile = this.profileRepository.create(dto);
    return this.profileRepository.save(profile);
  }

  async findProfileByUserId(userId: string): Promise<ProfileEntity> {
    return this.profileRepository.findOne({ where: { userId } });
  }



  async isProfileComplete(profileId: string): Promise<Boolean> {
    const profile = await this.profileRepository.findOne({
      where: { id: profileId },
    });

    const { gender, birthdate, neighborhood } = profile;

    if (gender == null || birthdate == null || neighborhood == null) {
      return false;
    }

    return true;
  }

  async updateProfile(dto: UpdateProfileDto): Promise<ProfileEntity> {
    const profile = await this.profileRepository.findOne({
      where: { id: dto.id },
    });

    if (!profile) {
      throw new UnauthorizedException('Profile not found');
    }

    Object.assign(profile, dto);
    return this.profileRepository.save(profile);
  }

  async createSession(sessionDto: CreateSessionDto): Promise<SessionEntity> {
    const session = this.sessionRepository.create(sessionDto);
    return this.sessionRepository.save(session);
  }

  async findSessionByToken(token: string): Promise<SessionEntity> {
    return this.sessionRepository.findOne({ where: { sessionToken: token } });
  }

  async findUserById(id: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id } });
  }

  async createAccount(
    createAccountDto: CreateAccountDto,
  ): Promise<AccountEntity> {
    const account = this.accountRepository.create(createAccountDto);
    return this.accountRepository.save(account);
  }

  async findAccountById(id: string): Promise<AccountEntity> {
    return this.accountRepository.findOne({ where: { id } });
  }

  async findAccountsByUserId(userId: string): Promise<AccountEntity[]> {
    return this.accountRepository.find({ where: { userId } });
  }

  async updateAccount(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<AccountEntity> {
    const account = await this.accountRepository.findOne({ where: { id } });

    if (!account) {
      throw new UnauthorizedException('Account not found');
    }

    Object.assign(account, updateAccountDto);
    return this.accountRepository.save(account);
  }

  async findVerificationToken(token: string): Promise<VerificationTokenEntity> {
    return this.verificationTokenRepository.findOne({ where: { token } });
  }

  async removeVerificationToken(token: string): Promise<void> {
    const verificationToken = await this.verificationTokenRepository.findOne({
      where: { token },
    });

    if (verificationToken) {
      await this.verificationTokenRepository.remove(verificationToken);
    } else {
      throw new UnauthorizedException('Verification token not found');
    }
  }

  async createOrUpdateUser(updateUserDto: UpdateUserDto) {
    const { googleId, email, name } = updateUserDto;
    let user = await this.userRepository.findOne({
      where: { googleId: googleId },
    });

    if (!user) {
      user = this.userRepository.create({ googleId, email, name });
      await this.userRepository.save(user);
    }

    return user;
  }

  async invalidateSession(sessionTokenDto: SessionTokenDto): Promise<void> {
    const { token } = sessionTokenDto;

    // Encuentra la sesión correspondiente al token
    const session = await this.sessionRepository.findOne({
      where: { sessionToken: token },
    });

    if (session) {
      // Elimina la sesión o marca el token como inválido
      await this.sessionRepository.remove(session);
    } else {
      throw new Error('Session not found');
    }
  }

  async sendRecoveryPassEmail(dto: ByEmailDto): Promise<void> {
    const { email } = dto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

 

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'miparraldev@gmail.com',
        pass: 'gqiz amla wqdk qfqt',
      },
      tls: {
        rejectUnauthorized: false, // Esto puede ayudar si hay un problema de TLS
      },
    });

   

    const mailOptions = {
      from: envs.mailer.mail,
      to: email,
      subject: 'Recuperación de contraseña',
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            width: 100%;
            background-color: #f02850;
            height: 80px;
            display: flex;
            color: white;
            justify-content: center;
            align-items: center;
          "
        >
          <h1 style="
          color: white;
          font-size: 2rem;
          marginLeft: 20px; 
          ">Mi Parral</h1>
        </div>
    
        <div
          style="
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 30px;
            margin-top: 20px; 
            box-sizing: border-box;
            width: 100%;
            background-color: #fff;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          "
        >
          <div
            style="
              max-width: 300px;
              width: 100%;
              padding: 20px;
              border-radius: 30px;
              border: 1px solid #1d1d1d;
              text-align: left;
            "
          >
            <h1 style="color: #f02850;">Recuperación de contraseña</h1>
            <p style="color: black;">Hola, <strong>${user.name}</strong></p>
            <p style="color: black;">Tu contraseña es: <strong>${user.password}</strong></p>
          </div>
        </div>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);

    } catch (error) {

      throw new Error('Error sending email');
    }
  }
}
