/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CouponsAppModule = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const campaign_entity_1 = __webpack_require__(8);
const coupon_entity_1 = __webpack_require__(11);
const campaign_controller_1 = __webpack_require__(12);
const campaign_service_1 = __webpack_require__(13);
const coupon_controller_1 = __webpack_require__(18);
const coupon_service_1 = __webpack_require__(14);
let CouponsAppModule = class CouponsAppModule {
};
exports.CouponsAppModule = CouponsAppModule;
exports.CouponsAppModule = CouponsAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: config_1.envs.database.host,
                port: config_1.envs.database.port,
                username: config_1.envs.database.user,
                password: config_1.envs.database.password,
                database: config_1.envs.database.couponsDatabaseName,
                entities: [campaign_entity_1.CampaignEntity, coupon_entity_1.CouponEntity],
                synchronize: true,
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([campaign_entity_1.CampaignEntity, coupon_entity_1.CouponEntity]),
        ],
        controllers: [campaign_controller_1.CampaignController, coupon_controller_1.CouponController],
        providers: [campaign_service_1.CampaignService, coupon_service_1.CouponService],
    })
], CouponsAppModule);


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 4 */
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
__exportStar(__webpack_require__(5), exports);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.envs = void 0;
__webpack_require__(6);
const joi = __webpack_require__(7);
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
/* 6 */
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("joi");

/***/ }),
/* 8 */
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CampaignEntity = void 0;
const typeorm_1 = __webpack_require__(9);
const enums_1 = __webpack_require__(10);
const coupon_entity_1 = __webpack_require__(11);
let CampaignEntity = class CampaignEntity {
};
exports.CampaignEntity = CampaignEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CampaignEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CampaignEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.DiscountType,
        default: enums_1.DiscountType.SERVICE,
    }),
    __metadata("design:type", typeof (_a = typeof enums_1.DiscountType !== "undefined" && enums_1.DiscountType) === "function" ? _a : Object)
], CampaignEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CampaignEntity.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CampaignEntity.prototype, "minAge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CampaignEntity.prototype, "maxAge", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.Gender,
        default: enums_1.Gender.ALL,
    }),
    __metadata("design:type", typeof (_b = typeof enums_1.Gender !== "undefined" && enums_1.Gender) === "function" ? _b : Object)
], CampaignEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.Neighborhoods,
        default: enums_1.Neighborhoods.ALL,
    }),
    __metadata("design:type", typeof (_c = typeof enums_1.Neighborhoods !== "undefined" && enums_1.Neighborhoods) === "function" ? _c : Object)
], CampaignEntity.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => coupon_entity_1.CouponEntity, (coupon) => coupon.campaign, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], CampaignEntity.prototype, "discounts", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CampaignEntity.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], CampaignEntity.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], CampaignEntity.prototype, "deleted", void 0);
exports.CampaignEntity = CampaignEntity = __decorate([
    (0, typeorm_1.Entity)('campaigns')
], CampaignEntity);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiscountType = exports.DiscountStatus = exports.Neighborhoods = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["ALL"] = 0] = "ALL";
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
    Gender[Gender["OTHER"] = 3] = "OTHER";
})(Gender || (exports.Gender = Gender = {}));
var Neighborhoods;
(function (Neighborhoods) {
    Neighborhoods[Neighborhoods["ALL"] = 0] = "ALL";
    Neighborhoods[Neighborhoods["CENTRO"] = 1] = "CENTRO";
    Neighborhoods[Neighborhoods["BUENOS_AIRES"] = 2] = "BUENOS_AIRES";
    Neighborhoods[Neighborhoods["ARRAU_MENDEZ"] = 3] = "ARRAU_MENDEZ";
    Neighborhoods[Neighborhoods["IGUALDAD_SUR"] = 4] = "IGUALDAD_SUR";
    Neighborhoods[Neighborhoods["LOS_OLIVOS"] = 5] = "LOS_OLIVOS";
    Neighborhoods[Neighborhoods["VI\u00D1A_DEL_MAR"] = 6] = "VI\u00D1A_DEL_MAR";
    Neighborhoods[Neighborhoods["CAMINO_A_CATILLO"] = 7] = "CAMINO_A_CATILLO";
    Neighborhoods[Neighborhoods["CAMINO_A_BULLILEO"] = 8] = "CAMINO_A_BULLILEO";
    Neighborhoods[Neighborhoods["TALQUITA"] = 9] = "TALQUITA";
    Neighborhoods[Neighborhoods["OTROS"] = 10] = "OTROS";
})(Neighborhoods || (exports.Neighborhoods = Neighborhoods = {}));
var DiscountStatus;
(function (DiscountStatus) {
    DiscountStatus[DiscountStatus["CREATED"] = 0] = "CREATED";
    DiscountStatus[DiscountStatus["TAKEN"] = 1] = "TAKEN";
    DiscountStatus[DiscountStatus["REDEEMED"] = 2] = "REDEEMED";
    DiscountStatus[DiscountStatus["EXPIRED"] = 3] = "EXPIRED";
})(DiscountStatus || (exports.DiscountStatus = DiscountStatus = {}));
var DiscountType;
(function (DiscountType) {
    DiscountType[DiscountType["SERVICE"] = 0] = "SERVICE";
    DiscountType[DiscountType["PRODUCT"] = 1] = "PRODUCT";
    DiscountType[DiscountType["COMMERCE"] = 2] = "COMMERCE";
})(DiscountType || (exports.DiscountType = DiscountType = {}));


/***/ }),
/* 11 */
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CouponEntity = void 0;
const typeorm_1 = __webpack_require__(9);
const campaign_entity_1 = __webpack_require__(8);
let CouponEntity = class CouponEntity {
};
exports.CouponEntity = CouponEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CouponEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CouponEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CouponEntity.prototype, "validationUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CouponEntity.prototype, "validationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CouponEntity.prototype, "expire", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CouponEntity.prototype, "rules", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => campaign_entity_1.CampaignEntity, (campaign) => campaign.discounts),
    __metadata("design:type", typeof (_c = typeof campaign_entity_1.CampaignEntity !== "undefined" && campaign_entity_1.CampaignEntity) === "function" ? _c : Object)
], CouponEntity.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CouponEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], CouponEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], CouponEntity.prototype, "deletedAt", void 0);
exports.CouponEntity = CouponEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupons' })
], CouponEntity);


/***/ }),
/* 12 */
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CampaignController = void 0;
const common_1 = __webpack_require__(2);
const campaign_service_1 = __webpack_require__(13);
const create_campaign_dto_1 = __webpack_require__(15);
const update_campaign_dto_1 = __webpack_require__(17);
let CampaignController = class CampaignController {
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    async create(createCampaignDto) {
        return await this.campaignService.create(createCampaignDto);
    }
    async findAll() {
        return await this.campaignService.findAll();
    }
    async findOne(uuid) {
        return await this.campaignService.findOne(uuid);
    }
    async update(uuid, updateCampaignDto) {
        return await this.campaignService.update(uuid, updateCampaignDto);
    }
    async remove(uuid) {
        return await this.campaignService.remove(uuid);
    }
};
exports.CampaignController = CampaignController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_campaign_dto_1.CreateCampaignDto !== "undefined" && create_campaign_dto_1.CreateCampaignDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CampaignController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], CampaignController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CampaignController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof update_campaign_dto_1.UpdateCampaignDto !== "undefined" && update_campaign_dto_1.UpdateCampaignDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CampaignController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], CampaignController.prototype, "remove", null);
exports.CampaignController = CampaignController = __decorate([
    (0, common_1.Controller)('campaigns'),
    __metadata("design:paramtypes", [typeof (_a = typeof campaign_service_1.CampaignService !== "undefined" && campaign_service_1.CampaignService) === "function" ? _a : Object])
], CampaignController);


/***/ }),
/* 13 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CampaignService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(3);
const typeorm_2 = __webpack_require__(9);
const campaign_entity_1 = __webpack_require__(8);
const coupon_service_1 = __webpack_require__(14);
let CampaignService = class CampaignService {
    constructor(campaignRepository, couponService) {
        this.campaignRepository = campaignRepository;
        this.couponService = couponService;
    }
    async create(createCampaignDto) {
        const campaign = this.campaignRepository.create(createCampaignDto);
        return await this.campaignRepository.save(campaign);
    }
    async update(uuid, updateCampaignDto) {
        await this.campaignRepository.update(uuid, updateCampaignDto);
        return await this.campaignRepository.findOneBy({ uuid });
    }
    async findAll() {
        return await this.campaignRepository.find();
    }
    async findOne(uuid) {
        return await this.campaignRepository.findOneBy({ uuid });
    }
    async remove(uuid) {
        await this.campaignRepository.softDelete(uuid);
    }
};
exports.CampaignService = CampaignService;
exports.CampaignService = CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(campaign_entity_1.CampaignEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof coupon_service_1.CouponService !== "undefined" && coupon_service_1.CouponService) === "function" ? _b : Object])
], CampaignService);


/***/ }),
/* 14 */
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
exports.CouponService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(3);
const typeorm_2 = __webpack_require__(9);
const coupon_entity_1 = __webpack_require__(11);
let CouponService = class CouponService {
    constructor(couponRepository) {
        this.couponRepository = couponRepository;
    }
    async create(createCouponDto) {
        const newCoupon = this.couponRepository.create(createCouponDto);
        return await this.couponRepository.save(newCoupon);
    }
    async findAll() {
        return await this.couponRepository.find();
    }
    async updateStatus(id, status) {
        const coupon = await this.couponRepository.findOneBy({ id });
        if (!coupon) {
            throw new common_1.NotFoundException(`Coupon with ID ${id} not found`);
        }
        coupon.status = status;
        return await this.couponRepository.save(coupon);
    }
};
exports.CouponService = CouponService;
exports.CouponService = CouponService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(coupon_entity_1.CouponEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CouponService);


/***/ }),
/* 15 */
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCampaignDto = void 0;
const class_validator_1 = __webpack_require__(16);
const enums_1 = __webpack_require__(10);
class CreateCampaignDto {
}
exports.CreateCampaignDto = CreateCampaignDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCampaignDto.prototype, "minAge", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCampaignDto.prototype, "maxAge", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Gender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof enums_1.Gender !== "undefined" && enums_1.Gender) === "function" ? _a : Object)
], CreateCampaignDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Neighborhoods),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof enums_1.Neighborhoods !== "undefined" && enums_1.Neighborhoods) === "function" ? _b : Object)
], CreateCampaignDto.prototype, "neighborhood", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateCampaignDto.prototype, "created", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CreateCampaignDto.prototype, "updated", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], CreateCampaignDto.prototype, "deleted", void 0);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 17 */
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCampaignDto = void 0;
const class_validator_1 = __webpack_require__(16);
const enums_1 = __webpack_require__(10);
class UpdateCampaignDto {
}
exports.UpdateCampaignDto = UpdateCampaignDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCampaignDto.prototype, "uuid", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCampaignDto.prototype, "minAge", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCampaignDto.prototype, "maxAge", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Gender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof enums_1.Gender !== "undefined" && enums_1.Gender) === "function" ? _a : Object)
], UpdateCampaignDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Neighborhoods),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof enums_1.Neighborhoods !== "undefined" && enums_1.Neighborhoods) === "function" ? _b : Object)
], UpdateCampaignDto.prototype, "neighborhood", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UpdateCampaignDto.prototype, "created", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UpdateCampaignDto.prototype, "updated", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], UpdateCampaignDto.prototype, "deleted", void 0);


/***/ }),
/* 18 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CouponController = void 0;
const common_1 = __webpack_require__(2);
const coupon_service_1 = __webpack_require__(14);
const create_coupon_dto_1 = __webpack_require__(19);
let CouponController = class CouponController {
    constructor(couponService) {
        this.couponService = couponService;
    }
    async create(createCouponDto) {
        return await this.couponService.create(createCouponDto);
    }
    async findAll() {
        return await this.couponService.findAll();
    }
    async updateStatus(id, status) {
        return await this.couponService.updateStatus(id, status);
    }
};
exports.CouponController = CouponController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_coupon_dto_1.CreateCouponDto !== "undefined" && create_coupon_dto_1.CreateCouponDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], CouponController.prototype, "updateStatus", null);
exports.CouponController = CouponController = __decorate([
    (0, common_1.Controller)('coupons'),
    __metadata("design:paramtypes", [typeof (_a = typeof coupon_service_1.CouponService !== "undefined" && coupon_service_1.CouponService) === "function" ? _a : Object])
], CouponController);


/***/ }),
/* 19 */
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
exports.CreateCouponDto = void 0;
const class_validator_1 = __webpack_require__(16);
class CreateCouponDto {
}
exports.CreateCouponDto = CreateCouponDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCouponDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "validationUserId", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateCouponDto.prototype, "validationDate", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateCouponDto.prototype, "expire", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCouponDto.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCouponDto.prototype, "campaignId", void 0);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ })
/******/ 	]);
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

Object.defineProperty(exports, "__esModule", ({ value: true }));
const coupons_app_module_1 = __webpack_require__(1);
const core_1 = __webpack_require__(20);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(4);
async function bootstrap() {
    const logger = new common_1.Logger('CouponApp');
    const port = config_1.envs.coupons.port;
    const app = await core_1.NestFactory.create(coupons_app_module_1.CouponsAppModule);
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'https://miparral.app',
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