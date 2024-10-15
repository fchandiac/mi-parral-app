/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/auth-app/account/account.service.ts":
/*!**************************************************!*\
  !*** ./apps/auth-app/account/account.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const account_entity_1 = __webpack_require__(/*! ../../libs/entities/users/account.entity */ "./apps/libs/entities/users/account.entity.ts");
let AccountService = class AccountService {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async create(createAccountDto) {
        const account = this.accountRepository.create(createAccountDto);
        return this.accountRepository.save(account);
    }
    async findOne(id) {
        const account = await this.accountRepository.findOneBy({ id });
        if (!account) {
            throw new common_1.NotFoundException(`Account with ID ${id} not found`);
        }
        return account;
    }
    async findByUserId(userId) {
        return this.accountRepository.findBy({ userId });
    }
    async update(id, updateAccountDto) {
        const account = await this.findOne(id);
        Object.assign(account, updateAccountDto);
        return this.accountRepository.save(account);
    }
    async remove(id) {
        const result = await this.accountRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Account with ID ${id} not found`);
        }
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_entity_1.AccountEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AccountService);


/***/ }),

/***/ "./apps/auth-app/auth/auth.controller.ts":
/*!***********************************************!*\
  !*** ./apps/auth-app/auth/auth.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/auth-app/auth/auth.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./apps/auth-app/user/user.service.ts");
const sign_in_dto_1 = __webpack_require__(/*! apps/libs/dto/auth/sign-in.dto */ "./apps/libs/dto/auth/sign-in.dto.ts");
const session_service_1 = __webpack_require__(/*! ../session/session.service */ "./apps/auth-app/session/session.service.ts");
const account_service_1 = __webpack_require__(/*! ../account/account.service */ "./apps/auth-app/account/account.service.ts");
const create_user_dto_1 = __webpack_require__(/*! apps/libs/dto/user/create-user.dto */ "./apps/libs/dto/user/create-user.dto.ts");
const validate_user_dto_1 = __webpack_require__(/*! apps/libs/dto/user/validate-user.dto */ "./apps/libs/dto/user/validate-user.dto.ts");
const update_profile_dto_1 = __webpack_require__(/*! apps/libs/dto/profile/update-profile.dto */ "./apps/libs/dto/profile/update-profile.dto.ts");
let AuthController = class AuthController {
    constructor(authService, userService, sessionService, accountService) {
        this.authService = authService;
        this.userService = userService;
        this.sessionService = sessionService;
        this.accountService = accountService;
    }
    async hello() {
        return 'Hello World!';
    }
    async signIn(signInDto) {
        try {
            const { email, password } = signInDto;
            const user = await this.authService.singIn(signInDto);
            return user;
        }
        catch (e) {
            return e.response;
        }
    }
    async validateUser(validateUserDto) {
        const user = await this.authService.validateUser(validateUserDto);
        if (user === null) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
    async registerUser(createUserDto) {
        try {
            const user = await this.authService.registerUser(createUserDto);
            const profile = await this.authService.createProfile({ userId: user.id, birthdate: null, neighborhood: null, gender: null });
            return user;
        }
        catch (e) {
            return e.response;
        }
    }
    async signOut(req, res) {
        try {
            const { sessionToken } = req.body;
            if (!sessionToken) {
                throw new common_1.HttpException('Session token is required', common_1.HttpStatus.BAD_REQUEST);
            }
            await this.authService.invalidateSession(sessionToken);
            res.clearCookie('sessionToken');
            res.status(common_1.HttpStatus.OK).json({
                message: 'User signed out successfully',
            });
        }
        catch (error) {
            throw new common_1.HttpException('Failed to sign out', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getProfile(userId) {
        const profile = await this.authService.findProfileByUserId(userId);
        if (!profile) {
            throw new common_1.NotFoundException('Profile not found');
        }
        return profile;
    }
    async isProfileComplete(profileId) {
        return this.authService.isProfileComplete(profileId);
    }
    async updateProfile(dto) {
        return this.authService.updateProfile(dto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('/hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "hello", null);
__decorate([
    (0, common_1.Post)('/signIn'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof sign_in_dto_1.SignInDto !== "undefined" && sign_in_dto_1.SignInDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('/validateUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof validate_user_dto_1.ValidateUserDto !== "undefined" && validate_user_dto_1.ValidateUserDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthController.prototype, "validateUser", null);
__decorate([
    (0, common_1.Post)('/registerUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('signout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _m : Object, typeof (_o = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOut", null);
__decorate([
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('/profile/isComplete'),
    __param(0, (0, common_1.Query)('profileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], AuthController.prototype, "isProfileComplete", null);
__decorate([
    (0, common_1.Post)('/profile/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof update_profile_dto_1.UpdateProfileDto !== "undefined" && update_profile_dto_1.UpdateProfileDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], AuthController.prototype, "updateProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, typeof (_c = typeof session_service_1.SessionService !== "undefined" && session_service_1.SessionService) === "function" ? _c : Object, typeof (_d = typeof account_service_1.AccountService !== "undefined" && account_service_1.AccountService) === "function" ? _d : Object])
], AuthController);


/***/ }),

/***/ "./apps/auth-app/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./apps/auth-app/auth/auth.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/auth-app/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/auth-app/auth/auth.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ../../libs/entities/users/user.entity */ "./apps/libs/entities/users/user.entity.ts");
const account_entity_1 = __webpack_require__(/*! ../../libs/entities/users/account.entity */ "./apps/libs/entities/users/account.entity.ts");
const session_entity_1 = __webpack_require__(/*! ../../libs/entities/users/session.entity */ "./apps/libs/entities/users/session.entity.ts");
const verification_token_entity_1 = __webpack_require__(/*! ../../libs/entities/users/verification-token.entity */ "./apps/libs/entities/users/verification-token.entity.ts");
const verification_token_service_1 = __webpack_require__(/*! ../verification-token/verification-token.service */ "./apps/auth-app/verification-token/verification-token.service.ts");
const session_service_1 = __webpack_require__(/*! ../session/session.service */ "./apps/auth-app/session/session.service.ts");
const account_service_1 = __webpack_require__(/*! ../account/account.service */ "./apps/auth-app/account/account.service.ts");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./apps/auth-app/user/user.service.ts");
const profile_entity_1 = __webpack_require__(/*! apps/libs/entities/users/profile.entity */ "./apps/libs/entities/users/profile.entity.ts");
const profile_service_1 = __webpack_require__(/*! ../profile/profile.service */ "./apps/auth-app/profile/profile.service.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([profile_entity_1.ProfileEntity, user_entity_1.UserEntity, account_entity_1.AccountEntity, session_entity_1.SessionEntity, verification_token_entity_1.VerificationTokenEntity]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, user_service_1.UserService, account_service_1.AccountService, session_service_1.SessionService, verification_token_service_1.VerificationTokenService, profile_service_1.ProfileService],
    })
], AuthModule);


/***/ }),

/***/ "./apps/auth-app/auth/auth.service.ts":
/*!********************************************!*\
  !*** ./apps/auth-app/auth/auth.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../libs/entities/users/user.entity */ "./apps/libs/entities/users/user.entity.ts");
const session_entity_1 = __webpack_require__(/*! ../../libs/entities/users/session.entity */ "./apps/libs/entities/users/session.entity.ts");
const account_entity_1 = __webpack_require__(/*! ../../libs/entities/users/account.entity */ "./apps/libs/entities/users/account.entity.ts");
const verification_token_entity_1 = __webpack_require__(/*! ../../libs/entities/users/verification-token.entity */ "./apps/libs/entities/users/verification-token.entity.ts");
const profile_entity_1 = __webpack_require__(/*! apps/libs/entities/users/profile.entity */ "./apps/libs/entities/users/profile.entity.ts");
let AuthService = class AuthService {
    constructor(userRepository, sessionRepository, accountRepository, verificationTokenRepository, profileRepository) {
        this.userRepository = userRepository;
        this.sessionRepository = sessionRepository;
        this.accountRepository = accountRepository;
        this.verificationTokenRepository = verificationTokenRepository;
        this.profileRepository = profileRepository;
    }
    async validateUser(validateUserDto) {
        const { email } = validateUserDto;
        const user = await this.userRepository.findOne({ where: { email } });
        return user;
    }
    async singIn(signInDto) {
        const { email, password } = signInDto;
        const user = await this.validateUser({ email });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        else {
            const isPasswordValid = password === user.password;
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            else {
                return user;
            }
        }
    }
    async registerUser(createUserDto) {
        const user = await this.validateUser({ email: createUserDto.email });
        if (user) {
            throw new common_1.UnauthorizedException('User already exists');
        }
        else {
            const newUser = this.userRepository.create(createUserDto);
            return this.userRepository.save(newUser);
        }
    }
    async createProfile(dto) {
        const profile = this.profileRepository.create(dto);
        return this.profileRepository.save(profile);
    }
    async findProfileByUserId(userId) {
        return this.profileRepository.findOne({ where: { userId } });
    }
    async isProfileComplete(profileId) {
        const profile = await this.profileRepository.findOne({
            where: { id: profileId }
        });
        const { gender, birthdate, neighborhood } = profile;
        if (gender == null || birthdate == null || neighborhood == null) {
            return false;
        }
        return true;
    }
    async updateProfile(dto) {
        const profile = await this.profileRepository.findOne({ where: { id: dto.id } });
        if (!profile) {
            throw new common_1.UnauthorizedException('Profile not found');
        }
        Object.assign(profile, dto);
        return this.profileRepository.save(profile);
    }
    async createSession(sessionDto) {
        const session = this.sessionRepository.create(sessionDto);
        return this.sessionRepository.save(session);
    }
    async findSessionByToken(token) {
        return this.sessionRepository.findOne({ where: { sessionToken: token } });
    }
    async findUserById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async createAccount(createAccountDto) {
        const account = this.accountRepository.create(createAccountDto);
        return this.accountRepository.save(account);
    }
    async findAccountById(id) {
        return this.accountRepository.findOne({ where: { id } });
    }
    async findAccountsByUserId(userId) {
        return this.accountRepository.find({ where: { userId } });
    }
    async updateAccount(id, updateAccountDto) {
        const account = await this.accountRepository.findOne({ where: { id } });
        if (!account) {
            throw new common_1.UnauthorizedException('Account not found');
        }
        Object.assign(account, updateAccountDto);
        return this.accountRepository.save(account);
    }
    async findVerificationToken(token) {
        return this.verificationTokenRepository.findOne({ where: { token } });
    }
    async removeVerificationToken(token) {
        const verificationToken = await this.verificationTokenRepository.findOne({ where: { token } });
        if (verificationToken) {
            await this.verificationTokenRepository.remove(verificationToken);
        }
        else {
            throw new common_1.UnauthorizedException('Verification token not found');
        }
    }
    async createOrUpdateUser(updateUserDto) {
        const { googleId, email, name } = updateUserDto;
        let user = await this.userRepository.findOne({ where: { googleId: googleId } });
        if (!user) {
            user = this.userRepository.create({ googleId, email, name });
            await this.userRepository.save(user);
        }
        return user;
    }
    async invalidateSession(sessionTokenDto) {
        const { token } = sessionTokenDto;
        const session = await this.sessionRepository.findOne({ where: { sessionToken: token } });
        if (session) {
            await this.sessionRepository.remove(session);
        }
        else {
            throw new Error('Session not found');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(session_entity_1.SessionEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(account_entity_1.AccountEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(verification_token_entity_1.VerificationTokenEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(profile_entity_1.ProfileEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object])
], AuthService);


/***/ }),

/***/ "./apps/auth-app/profile/profile.service.ts":
/*!**************************************************!*\
  !*** ./apps/auth-app/profile/profile.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const profile_entity_1 = __webpack_require__(/*! ../../libs/entities/users/profile.entity */ "./apps/libs/entities/users/profile.entity.ts");
let ProfileService = class ProfileService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async findAll() {
        return await this.profileRepository.find();
    }
    async findOne(id) {
        const profile = await this.profileRepository.findOneBy({ id });
        if (!profile) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        return profile;
    }
    async create(dto) {
        const profile = this.profileRepository.create(dto);
        return await this.profileRepository.save(profile);
    }
    async update(id, updateProfileDto) {
        const profile = await this.findOne(id);
        Object.assign(profile, updateProfileDto);
        return await this.profileRepository.save(profile);
    }
    async delete(id) {
        const result = await this.profileRepository.delete({ id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.ProfileEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ProfileService);


/***/ }),

/***/ "./apps/auth-app/session/session.service.ts":
/*!**************************************************!*\
  !*** ./apps/auth-app/session/session.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const session_entity_1 = __webpack_require__(/*! ../../libs/entities/users/session.entity */ "./apps/libs/entities/users/session.entity.ts");
let SessionService = class SessionService {
    constructor(sessionRepository) {
        this.sessionRepository = sessionRepository;
    }
    async create(createSessionDto) {
        const session = this.sessionRepository.create(createSessionDto);
        return this.sessionRepository.save(session);
    }
    async findOne(id) {
        const session = await this.sessionRepository.findOneBy({ id });
        if (!session) {
            throw new common_1.NotFoundException(`Session with ID ${id} not found`);
        }
        return session;
    }
    async findByToken(sessionToken) {
        const session = await this.sessionRepository.findOneBy({ sessionToken });
        if (!session) {
            throw new common_1.NotFoundException(`Session with token ${sessionToken} not found`);
        }
        return session;
    }
    async update(id, updateSessionDto) {
        const session = await this.findOne(id);
        Object.assign(session, updateSessionDto);
        return this.sessionRepository.save(session);
    }
    async remove(id) {
        const result = await this.sessionRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Session with ID ${id} not found`);
        }
    }
};
exports.SessionService = SessionService;
exports.SessionService = SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(session_entity_1.SessionEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SessionService);


/***/ }),

/***/ "./apps/auth-app/src/authApp.module.ts":
/*!*********************************************!*\
  !*** ./apps/auth-app/src/authApp.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthAppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ../../libs/entities/users/user.entity */ "./apps/libs/entities/users/user.entity.ts");
const account_entity_1 = __webpack_require__(/*! apps/libs/entities/users/account.entity */ "./apps/libs/entities/users/account.entity.ts");
const session_entity_1 = __webpack_require__(/*! apps/libs/entities/users/session.entity */ "./apps/libs/entities/users/session.entity.ts");
const verification_token_entity_1 = __webpack_require__(/*! apps/libs/entities/users/verification-token.entity */ "./apps/libs/entities/users/verification-token.entity.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/auth-app/auth/auth.module.ts");
const profile_entity_1 = __webpack_require__(/*! apps/libs/entities/users/profile.entity */ "./apps/libs/entities/users/profile.entity.ts");
const config_1 = __webpack_require__(/*! apps/libs/config */ "./apps/libs/config/index.ts");
const serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
const path_1 = __webpack_require__(/*! path */ "path");
let AuthAppModule = class AuthAppModule {
};
exports.AuthAppModule = AuthAppModule;
exports.AuthAppModule = AuthAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: config_1.envs.database.host,
                port: config_1.envs.database.port,
                username: config_1.envs.database.user,
                password: config_1.envs.database.password,
                database: config_1.envs.database.authDatabaseName,
                entities: [user_entity_1.UserEntity, account_entity_1.AccountEntity, session_entity_1.SessionEntity, verification_token_entity_1.VerificationTokenEntity, profile_entity_1.ProfileEntity],
                synchronize: true,
                logging: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../', 'auth'),
                serveRoot: '/'
            }),
        ],
        controllers: [],
        providers: [],
    })
], AuthAppModule);


/***/ }),

/***/ "./apps/auth-app/user/user.service.ts":
/*!********************************************!*\
  !*** ./apps/auth-app/user/user.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../libs/entities/users/user.entity */ "./apps/libs/entities/users/user.entity.ts");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(createUserDto) {
        try {
            return await this.userRepository.save(createUserDto);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException(`User with email ${createUserDto.email} already exists`);
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async getUserById(byIdDto) {
        const id = byIdDto.id;
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async getAllUsers() {
        return this.userRepository.find();
    }
    async updateUser(updateUserDto) {
        const id = updateUserDto.id;
        const user = await this.userRepository.preload({
            id: id,
            ...updateUserDto,
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return this.userRepository.save(user);
    }
    async deleteUser(id) {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
    }
    async createOrUpdateUser(userData) {
        const { email, name } = userData;
        let user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            user = this.userRepository.create({ email, name });
            await this.userRepository.save(user);
        }
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserService);


/***/ }),

/***/ "./apps/auth-app/verification-token/verification-token.service.ts":
/*!************************************************************************!*\
  !*** ./apps/auth-app/verification-token/verification-token.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerificationTokenService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const verification_token_entity_1 = __webpack_require__(/*! ../../libs/entities/users/verification-token.entity */ "./apps/libs/entities/users/verification-token.entity.ts");
let VerificationTokenService = class VerificationTokenService {
    constructor(verificationTokenRepository) {
        this.verificationTokenRepository = verificationTokenRepository;
    }
    async create(createVerificationTokenDto) {
        const token = this.verificationTokenRepository.create(createVerificationTokenDto);
        return this.verificationTokenRepository.save(token);
    }
    async findOne(id) {
        const token = await this.verificationTokenRepository.findOneBy({ id });
        if (!token) {
            throw new common_1.NotFoundException(`Verification token with ID ${id} not found`);
        }
        return token;
    }
    async remove(id) {
        const result = await this.verificationTokenRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Verification token with ID ${id} not found`);
        }
    }
};
exports.VerificationTokenService = VerificationTokenService;
exports.VerificationTokenService = VerificationTokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(verification_token_entity_1.VerificationTokenEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], VerificationTokenService);


/***/ }),

/***/ "./apps/libs/config/envs.ts":
/*!**********************************!*\
  !*** ./apps/libs/config/envs.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.envs = void 0;
__webpack_require__(/*! dotenv/config */ "dotenv/config");
const joi = __webpack_require__(/*! joi */ "joi");
const envVarsSchema = joi.object({
    API_PORT: joi.number().default(3001),
    AUTH_PORT: joi.number().default(3002),
    IMAGES_PORT: joi.number().default(3003),
    NEXT_PORT: joi.number().default(3000),
    DATABASE_HOST: joi.string().required(),
    DATABASE_PORT: joi.number().default(3306),
    DATABASE_USER: joi.string().required(),
    DATABASE_PASSWORD: joi.string().required(),
    API_DATABASE_NAME: joi.string().required(),
    IMAGES_DATABASE_NAME: joi.string().required(),
    AUTH_DATABASE_NAME: joi.string().required(),
    DEFAULT_IMAGE_URL: joi.string().required(),
    COUPONS_DATABASE_NAME: joi.string().required(),
    COUPONS_PORT: joi.number().default(3004),
}).unknown(true);
const { value: envVars, error } = envVarsSchema.validate(process.env, {
    allowUnknown: true,
});
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
exports.envs = {
    api: {
        port: envVars.API_PORT,
    },
    next: {
        port: envVars.NEXT_PORT,
    },
    auth: {
        port: envVars.AUTH_PORT,
    },
    images: {
        port: envVars.IMAGES_PORT,
        defaultImageUrl: envVars.DEFAULT_IMAGE_URL,
    },
    coupons: {
        port: envVars.COUPONS_PORT,
    },
    database: {
        host: envVars.DATABASE_HOST,
        port: envVars.DATABASE_PORT,
        user: envVars.DATABASE_USER,
        password: envVars.DATABASE_PASSWORD,
        apiDatabaseName: envVars.API_DATABASE_NAME,
        imagesDatabaseName: envVars.IMAGES_DATABASE_NAME,
        authDatabaseName: envVars.AUTH_DATABASE_NAME,
        couponsDatabaseName: envVars.COUPONS_DATABASE_NAME,
    },
};


/***/ }),

/***/ "./apps/libs/config/index.ts":
/*!***********************************!*\
  !*** ./apps/libs/config/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./envs */ "./apps/libs/config/envs.ts"), exports);


/***/ }),

/***/ "./apps/libs/dto/auth/sign-in.dto.ts":
/*!*******************************************!*\
  !*** ./apps/libs/dto/auth/sign-in.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignInDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SignInDto {
}
exports.SignInDto = SignInDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignInDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignInDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/libs/dto/profile/update-profile.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/libs/dto/profile/update-profile.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProfileDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateProfileDto {
}
exports.UpdateProfileDto = UpdateProfileDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "neighborhood", void 0);


/***/ }),

/***/ "./apps/libs/dto/user/create-user.dto.ts":
/*!***********************************************!*\
  !*** ./apps/libs/dto/user/create-user.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value || 'user'),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "googleId", void 0);


/***/ }),

/***/ "./apps/libs/dto/user/validate-user.dto.ts":
/*!*************************************************!*\
  !*** ./apps/libs/dto/user/validate-user.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ValidateUserDto {
}
exports.ValidateUserDto = ValidateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidateUserDto.prototype, "email", void 0);


/***/ }),

/***/ "./apps/libs/entities/users/account.entity.ts":
/*!****************************************************!*\
  !*** ./apps/libs/entities/users/account.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./apps/libs/entities/users/user.entity.ts");
const transformer = {
    date: {
        from: (date) => (date ? new Date(parseInt(date, 10)) : null),
        to: (date) => (date ? date.valueOf().toString() : null),
    },
    bigint: {
        from: (bigInt) => (bigInt ? parseInt(bigInt, 10) : null),
        to: (bigInt) => (bigInt ? bigInt.toString() : null),
    },
};
let AccountEntity = class AccountEntity {
};
exports.AccountEntity = AccountEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], AccountEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], AccountEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "providerAccountId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], AccountEntity.prototype, "refresh_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], AccountEntity.prototype, "access_token", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: "bigint",
        transformer: transformer.bigint,
    }),
    __metadata("design:type", Number)
], AccountEntity.prototype, "expires_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], AccountEntity.prototype, "token_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], AccountEntity.prototype, "scope", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], AccountEntity.prototype, "id_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], AccountEntity.prototype, "session_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], AccountEntity.prototype, "oauth_token_secret", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], AccountEntity.prototype, "oauth_token", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.accounts, {
        createForeignKeyConstraints: true,
    }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _a : Object)
], AccountEntity.prototype, "user", void 0);
exports.AccountEntity = AccountEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "accounts" })
], AccountEntity);


/***/ }),

/***/ "./apps/libs/entities/users/profile.entity.ts":
/*!****************************************************!*\
  !*** ./apps/libs/entities/users/profile.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./apps/libs/entities/users/user.entity.ts");
let ProfileEntity = class ProfileEntity {
};
exports.ProfileEntity = ProfileEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProfileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ProfileEntity.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _b : Object)
], ProfileEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "userId", void 0);
exports.ProfileEntity = ProfileEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'profiles' }),
    (0, typeorm_1.Unique)(['userId'])
], ProfileEntity);


/***/ }),

/***/ "./apps/libs/entities/users/session.entity.ts":
/*!****************************************************!*\
  !*** ./apps/libs/entities/users/session.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./apps/libs/entities/users/user.entity.ts");
const transformer = {
    date: {
        from: (date) => (date ? new Date(parseInt(date, 10)) : null),
        to: (date) => (date ? date.valueOf().toString() : null),
    },
};
let SessionEntity = class SessionEntity {
};
exports.SessionEntity = SessionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SessionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], SessionEntity.prototype, "sessionToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], SessionEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ transformer: transformer.date }),
    __metadata("design:type", String)
], SessionEntity.prototype, "expires", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.sessions),
    __metadata("design:type", typeof (_a = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _a : Object)
], SessionEntity.prototype, "user", void 0);
exports.SessionEntity = SessionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "sessions" })
], SessionEntity);


/***/ }),

/***/ "./apps/libs/entities/users/user.entity.ts":
/*!*************************************************!*\
  !*** ./apps/libs/entities/users/user.entity.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const session_entity_1 = __webpack_require__(/*! ./session.entity */ "./apps/libs/entities/users/session.entity.ts");
const account_entity_1 = __webpack_require__(/*! ./account.entity */ "./apps/libs/entities/users/account.entity.ts");
const transformer = {
    date: {
        from: (date) => (date ? new Date(parseInt(date, 10)) : null),
        to: (date) => (date ? date.valueOf().toString() : null),
    },
    bigint: {
        from: (bigInt) => (bigInt ? parseInt(bigInt, 10) : null),
        to: (bigInt) => (bigInt ? bigInt.toString() : null),
    },
};
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, transformer: transformer.date }),
    __metadata("design:type", String)
], UserEntity.prototype, "emailVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: 'user' }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "googleId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => session_entity_1.SessionEntity, (session) => session.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "sessions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => account_entity_1.AccountEntity, (account) => account.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "accounts", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], UserEntity);


/***/ }),

/***/ "./apps/libs/entities/users/verification-token.entity.ts":
/*!***************************************************************!*\
  !*** ./apps/libs/entities/users/verification-token.entity.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerificationTokenEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const transformer = {
    date: {
        from: (date) => (date ? new Date(parseInt(date, 10)) : null),
        to: (date) => (date ? date.valueOf().toString() : null),
    },
};
let VerificationTokenEntity = class VerificationTokenEntity {
};
exports.VerificationTokenEntity = VerificationTokenEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], VerificationTokenEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VerificationTokenEntity.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VerificationTokenEntity.prototype, "identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ transformer: transformer.date }),
    __metadata("design:type", String)
], VerificationTokenEntity.prototype, "expires", void 0);
exports.VerificationTokenEntity = VerificationTokenEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "verification_tokens" })
], VerificationTokenEntity);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!***********************************!*\
  !*** ./apps/auth-app/src/main.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const authApp_module_1 = __webpack_require__(/*! ./authApp.module */ "./apps/auth-app/src/authApp.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! apps/libs/config */ "./apps/libs/config/index.ts");
async function bootstrap() {
    const logger = new common_1.Logger('AuthApp');
    const port = config_1.envs.auth.port;
    const app = await core_1.NestFactory.create(authApp_module_1.AuthAppModule);
    app.enableCors({
        origin: [
            'http://localhost:9000',
            'https://miparral.app',
            '*',
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(port);
    logger.log(`Server started at http://localhost:${port}`);
}
bootstrap();

})();

/******/ })()
;