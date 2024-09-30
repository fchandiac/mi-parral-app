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
import { ProfileEntity } from 'apps/libs/entities/profiles/profile.entity';
import { CreateProfileDto } from 'apps/libs/dto/profile/create-profile.dto';


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

  async validateUser(validateUserDto: ValidateUserDto): Promise<UserEntity | null> {
    const { email } = validateUserDto;
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async singIn(signInDto: SignInDto): Promise<UserEntity  > {
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
      const newUser =  this.userRepository.create(createUserDto);
      return this.userRepository.save(newUser);
    }
  }

  async createProfile(dto: CreateProfileDto): Promise<ProfileEntity> {
    const profile = this.profileRepository.create(dto);
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

  async createAccount(createAccountDto: CreateAccountDto): Promise<AccountEntity> {
    const account = this.accountRepository.create(createAccountDto);
    return this.accountRepository.save(account);
  }

  async findAccountById(id: string): Promise<AccountEntity> {
    return this.accountRepository.findOne({ where: { id } });
  }

  async findAccountsByUserId(userId: string): Promise<AccountEntity[]> {
    return this.accountRepository.find({ where: { userId } });
  }

  async updateAccount(id: string, updateAccountDto: UpdateAccountDto): Promise<AccountEntity> {
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
    const verificationToken = await this.verificationTokenRepository.findOne({ where: { token } });

    if (verificationToken) {
      await this.verificationTokenRepository.remove(verificationToken);
    } else {
      throw new UnauthorizedException('Verification token not found');
    }
  }

 

  

  async createOrUpdateUser(updateUserDto: UpdateUserDto)  {
    const { googleId, email, name } = updateUserDto;
    let user = await this.userRepository.findOne({ where: { googleId: googleId } });

    if (!user) {
      user = this.userRepository.create({ googleId, email, name });
      await this.userRepository.save(user);
    }

    return user;
  }

  async invalidateSession(sessionTokenDto: SessionTokenDto): Promise<void> {

    const { token } = sessionTokenDto;

    // Encuentra la sesión correspondiente al token
    const session = await this.sessionRepository.findOne({ where: { sessionToken: token } });

    if (session) {
      // Elimina la sesión o marca el token como inválido
      await this.sessionRepository.remove(session);
    } else {
      throw new Error('Session not found');
    }
  }



 
}
