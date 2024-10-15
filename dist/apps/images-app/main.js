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
exports.ImagesAppModule = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(3);
const service_image_entity_1 = __webpack_require__(4);
const commerce_image_entity_1 = __webpack_require__(6);
const product_image_entity_1 = __webpack_require__(7);
const serve_static_1 = __webpack_require__(8);
const path_1 = __webpack_require__(9);
const service_controller_1 = __webpack_require__(10);
const service_service_1 = __webpack_require__(11);
const commerce_controller_1 = __webpack_require__(21);
const commerce_service_1 = __webpack_require__(22);
const config_1 = __webpack_require__(14);
const product_controller_1 = __webpack_require__(24);
const product_service_1 = __webpack_require__(25);
let ImagesAppModule = class ImagesAppModule {
};
exports.ImagesAppModule = ImagesAppModule;
exports.ImagesAppModule = ImagesAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: config_1.envs.database.host,
                port: config_1.envs.database.port,
                username: config_1.envs.database.user,
                password: config_1.envs.database.password,
                database: config_1.envs.database.imagesDatabaseName,
                entities: [service_image_entity_1.ServiceImageEntity, commerce_image_entity_1.CommerceImageEntity, product_image_entity_1.ProductImageEntity],
                synchronize: true,
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([service_image_entity_1.ServiceImageEntity, commerce_image_entity_1.CommerceImageEntity, product_image_entity_1.ProductImageEntity]),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'images'),
                serveRoot: '/images'
            }),
        ],
        controllers: [service_controller_1.ServiceController, commerce_controller_1.CommerceController, product_controller_1.ProductController],
        providers: [service_service_1.ServiceService, commerce_service_1.CommerceService, product_service_1.ProductService],
    })
], ImagesAppModule);


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


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceImageEntity = void 0;
const typeorm_1 = __webpack_require__(5);
let ServiceImageEntity = class ServiceImageEntity {
};
exports.ServiceImageEntity = ServiceImageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ServiceImageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceImageEntity.prototype, "serviceId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceImageEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ServiceImageEntity.prototype, "principal", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ServiceImageEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ServiceImageEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ServiceImageEntity.prototype, "deletedAt", void 0);
exports.ServiceImageEntity = ServiceImageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'service_images' })
], ServiceImageEntity);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 6 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceImageEntity = void 0;
const typeorm_1 = __webpack_require__(5);
let CommerceImageEntity = class CommerceImageEntity {
};
exports.CommerceImageEntity = CommerceImageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CommerceImageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CommerceImageEntity.prototype, "commerceId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CommerceImageEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], CommerceImageEntity.prototype, "principal", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CommerceImageEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CommerceImageEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CommerceImageEntity.prototype, "deletedAt", void 0);
exports.CommerceImageEntity = CommerceImageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'commerce_images' })
], CommerceImageEntity);


/***/ }),
/* 7 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductImageEntity = void 0;
const typeorm_1 = __webpack_require__(5);
let ProductImageEntity = class ProductImageEntity {
};
exports.ProductImageEntity = ProductImageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProductImageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductImageEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductImageEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ProductImageEntity.prototype, "principal", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ProductImageEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ProductImageEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ProductImageEntity.prototype, "deletedAt", void 0);
exports.ProductImageEntity = ProductImageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_images' })
], ProductImageEntity);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 10 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceController = void 0;
const common_1 = __webpack_require__(2);
const service_service_1 = __webpack_require__(11);
const platform_express_1 = __webpack_require__(18);
const set_principal_service_image_dto_1 = __webpack_require__(19);
let ServiceController = class ServiceController {
    constructor(service) {
        this.service = service;
    }
    async upload(serviceId, file) {
        const uploadServiceImageDto = {
            serviceId,
            file,
        };
        return await this.service.upload(uploadServiceImageDto);
    }
    async setPrincipalImage(dto) {
        return await this.service.setPrincipalImage(dto);
    }
    async getImage(serviceId) {
        return await this.service.findPrincipalImage(serviceId);
    }
    async getServiceImages(serviceId) {
        return await this.service.findAllById(serviceId);
    }
    async deleteServiceImage(imageId) {
        return await this.service.deleteImage(imageId);
    }
};
exports.ServiceController = ServiceController;
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: service_service_1.ServiceService.storage,
    })),
    __param(0, (0, common_1.Body)('serviceId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ServiceController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)('/setPrincipal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof set_principal_service_image_dto_1.SetPrincipalServiceImageDto !== "undefined" && set_principal_service_image_dto_1.SetPrincipalServiceImageDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ServiceController.prototype, "setPrincipalImage", null);
__decorate([
    (0, common_1.Get)('/image'),
    __param(0, (0, common_1.Query)('serviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ServiceController.prototype, "getImage", null);
__decorate([
    (0, common_1.Get)('/images'),
    __param(0, (0, common_1.Query)('serviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ServiceController.prototype, "getServiceImages", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('imageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ServiceController.prototype, "deleteServiceImage", null);
exports.ServiceController = ServiceController = __decorate([
    (0, common_1.Controller)('service'),
    __metadata("design:paramtypes", [typeof (_a = typeof service_service_1.ServiceService !== "undefined" && service_service_1.ServiceService) === "function" ? _a : Object])
], ServiceController);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(3);
const typeorm_2 = __webpack_require__(5);
const multer_1 = __webpack_require__(12);
const path_1 = __webpack_require__(9);
const promises_1 = __webpack_require__(13);
const service_image_entity_1 = __webpack_require__(4);
const config_1 = __webpack_require__(14);
let ServiceService = class ServiceService {
    constructor(serviceImageRepository) {
        this.serviceImageRepository = serviceImageRepository;
    }
    async upload(uploadServiceImageDto) {
        const { serviceId, file } = uploadServiceImageDto;
        const newImage = this.serviceImageRepository.create({
            serviceId,
            image: file.filename,
        });
        return await this.serviceImageRepository.save(newImage);
    }
    async findAllById(serviceId) {
        return this.serviceImageRepository.find({ where: { serviceId } });
    }
    async setPrincipalImage(dto) {
        const { serviceId, imageId } = dto;
        const images = await this.findAllById(serviceId);
        const image = images.find((img) => img.id === imageId);
        if (!image) {
            throw new common_1.NotFoundException('Image not found');
        }
        await Promise.all(images.map(async (img) => {
            if (img.principal) {
                img.principal = false;
                await this.serviceImageRepository.save(img);
            }
        }));
        image.principal = true;
        return await this.serviceImageRepository.save(image);
    }
    async findPrincipalImage(serviceId) {
        const image = await this.serviceImageRepository.findOne({
            where: { serviceId, principal: true },
        });
        if (!image) {
            return {
                id: null,
                serviceId,
                image: config_1.envs.images.defaultImageUrl,
                principal: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        }
        return image;
    }
    async deleteImage(imageId) {
        const image = await this.serviceImageRepository.findOne({
            where: { id: imageId },
        });
        if (!image) {
            throw new common_1.NotFoundException('Image not found');
        }
        const imagePath = (0, path_1.join)(__dirname, '../../dist/apps/images/services', image.image);
        try {
            await (0, promises_1.unlink)(imagePath);
        }
        catch (error) {
            console.error('Error deleting file:', error);
        }
        await this.serviceImageRepository.remove(image);
    }
};
exports.ServiceService = ServiceService;
ServiceService.storage = (0, multer_1.diskStorage)({
    destination: './dist/apps/images/services',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = `${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`;
        cb(null, filename);
    },
});
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_image_entity_1.ServiceImageEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ServiceService);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),
/* 14 */
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
__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.envs = void 0;
__webpack_require__(16);
const joi = __webpack_require__(17);
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
/* 16 */
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("joi");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetPrincipalServiceImageDto = void 0;
const class_validator_1 = __webpack_require__(20);
class SetPrincipalServiceImageDto {
}
exports.SetPrincipalServiceImageDto = SetPrincipalServiceImageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetPrincipalServiceImageDto.prototype, "serviceId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetPrincipalServiceImageDto.prototype, "imageId", void 0);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 21 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceController = void 0;
const common_1 = __webpack_require__(2);
const commerce_service_1 = __webpack_require__(22);
const platform_express_1 = __webpack_require__(18);
const set_principal_commerce_image_dto_1 = __webpack_require__(23);
let CommerceController = class CommerceController {
    constructor(commerceService) {
        this.commerceService = commerceService;
    }
    async upload(commerceId, file) {
        const uploadCommerceImageDto = {
            commerceId,
            file,
        };
        return await this.commerceService.upload(uploadCommerceImageDto);
    }
    async setPrincipalImage(dto) {
        return await this.commerceService.setPrincipalCommerceImage(dto);
    }
    async getImage(commerceId) {
        return await this.commerceService.findPrincipalImage(commerceId);
    }
    async getCommerceImages(commerceId) {
        return await this.commerceService.findAllById(commerceId);
    }
    async deleteCommerceImage(imageId) {
        return await this.commerceService.deleteImage(imageId);
    }
};
exports.CommerceController = CommerceController;
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: commerce_service_1.CommerceService.storage,
    })),
    __param(0, (0, common_1.Body)('commerceId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], CommerceController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)('/setPrincipal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof set_principal_commerce_image_dto_1.SetPrincipalCommerceImageDto !== "undefined" && set_principal_commerce_image_dto_1.SetPrincipalCommerceImageDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], CommerceController.prototype, "setPrincipalImage", null);
__decorate([
    (0, common_1.Get)('/image'),
    __param(0, (0, common_1.Query)('commerceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CommerceController.prototype, "getImage", null);
__decorate([
    (0, common_1.Get)('/images'),
    __param(0, (0, common_1.Query)('commerceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], CommerceController.prototype, "getCommerceImages", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('imageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], CommerceController.prototype, "deleteCommerceImage", null);
exports.CommerceController = CommerceController = __decorate([
    (0, common_1.Controller)('commerce'),
    __metadata("design:paramtypes", [typeof (_a = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _a : Object])
], CommerceController);


/***/ }),
/* 22 */
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
exports.CommerceService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(3);
const typeorm_2 = __webpack_require__(5);
const multer_1 = __webpack_require__(12);
const path_1 = __webpack_require__(9);
const promises_1 = __webpack_require__(13);
const commerce_image_entity_1 = __webpack_require__(6);
const config_1 = __webpack_require__(14);
let CommerceService = class CommerceService {
    constructor(commerceImageRepository) {
        this.commerceImageRepository = commerceImageRepository;
    }
    async upload(dto) {
        const { commerceId, file } = dto;
        const newImage = this.commerceImageRepository.create({
            commerceId,
            image: file.filename,
        });
        return await this.commerceImageRepository.save(newImage);
    }
    async findAllById(commerceId) {
        return this.commerceImageRepository.find({ where: { commerceId } });
    }
    async setPrincipalCommerceImage(dto) {
        const { commerceId, imageId } = dto;
        const images = await this.findAllById(commerceId);
        const image = images.find((img) => img.id === imageId);
        if (!image) {
            throw new common_1.NotFoundException('Image not found');
        }
        await Promise.all(images.map(async (img) => {
            if (img.principal) {
                img.principal = false;
                await this.commerceImageRepository.save(img);
            }
        }));
        image.principal = true;
        return await this.commerceImageRepository.save(image);
    }
    async findPrincipalImage(commerceId) {
        const image = await this.commerceImageRepository.findOne({
            where: { commerceId, principal: true },
        });
        if (!image) {
            return {
                id: null,
                commerceId,
                image: config_1.envs.images.defaultImageUrl,
                principal: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        }
        return image;
    }
    async deleteImage(imageId) {
        const image = await this.commerceImageRepository.findOne({ where: { id: imageId } });
        if (!image) {
            throw new common_1.NotFoundException('Image not found');
        }
        const imagePath = (0, path_1.join)(__dirname, '../../dist/apps/images/commerces', image.image);
        try {
            await (0, promises_1.access)(imagePath);
            await (0, promises_1.unlink)(imagePath);
        }
        catch (error) {
            console.error('Error deleting file:', error);
        }
        await this.commerceImageRepository.remove(image);
    }
};
exports.CommerceService = CommerceService;
CommerceService.storage = (0, multer_1.diskStorage)({
    destination: './dist/apps/images/commerces',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = `${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`;
        cb(null, filename);
    },
});
exports.CommerceService = CommerceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(commerce_image_entity_1.CommerceImageEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CommerceService);


/***/ }),
/* 23 */
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
exports.SetPrincipalCommerceImageDto = void 0;
const class_validator_1 = __webpack_require__(20);
class SetPrincipalCommerceImageDto {
}
exports.SetPrincipalCommerceImageDto = SetPrincipalCommerceImageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetPrincipalCommerceImageDto.prototype, "commerceId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetPrincipalCommerceImageDto.prototype, "imageId", void 0);


/***/ }),
/* 24 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(2);
const product_service_1 = __webpack_require__(25);
const platform_express_1 = __webpack_require__(18);
const set_principal_product_image_dto_1 = __webpack_require__(26);
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async upload(productId, file) {
        const uploadProductImageDto = {
            productId,
            file,
        };
        return await this.productService.upload(uploadProductImageDto);
    }
    async setPrincipalImage(dto) {
        return await this.productService.setPrincipalProductImage(dto);
    }
    async getImage(productId) {
        return await this.productService.findPrincipalImage(productId);
    }
    async getProductImages(productId) {
        return await this.productService.findAllByProductId(productId);
    }
    async deleteProductImage(imageId) {
        return await this.productService.deleteImage(imageId);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: product_service_1.ProductService.storage,
    })),
    __param(0, (0, common_1.Body)('productId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ProductController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)('/setPrincipal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof set_principal_product_image_dto_1.SetPrincipalProductImageDto !== "undefined" && set_principal_product_image_dto_1.SetPrincipalProductImageDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ProductController.prototype, "setPrincipalImage", null);
__decorate([
    (0, common_1.Get)('/image'),
    __param(0, (0, common_1.Query)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ProductController.prototype, "getImage", null);
__decorate([
    (0, common_1.Get)('/images'),
    __param(0, (0, common_1.Query)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ProductController.prototype, "getProductImages", null);
__decorate([
    (0, common_1.Delete)('/image'),
    __param(0, (0, common_1.Query)('imageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ProductController.prototype, "deleteProductImage", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], ProductController);


/***/ }),
/* 25 */
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
exports.ProductService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(3);
const typeorm_2 = __webpack_require__(5);
const multer_1 = __webpack_require__(12);
const path_1 = __webpack_require__(9);
const promises_1 = __webpack_require__(13);
const product_image_entity_1 = __webpack_require__(7);
const envs_1 = __webpack_require__(15);
let ProductService = class ProductService {
    constructor(productImageRepository) {
        this.productImageRepository = productImageRepository;
    }
    async upload(dto) {
        const { productId, file } = dto;
        const newImage = this.productImageRepository.create({
            productId,
            image: file.filename,
        });
        return await this.productImageRepository.save(newImage);
    }
    async findAllByProductId(productId) {
        return this.productImageRepository.find({ where: { productId } });
    }
    async setPrincipalProductImage(dto) {
        const { productId, imageId } = dto;
        const images = await this.findAllByProductId(productId);
        const image = images.find((img) => img.id === imageId);
        if (!image) {
            throw new common_1.NotFoundException('Image not found');
        }
        await Promise.all(images.map(async (img) => {
            if (img.principal) {
                img.principal = false;
                await this.productImageRepository.save(img);
            }
        }));
        image.principal = true;
        return await this.productImageRepository.save(image);
    }
    async findPrincipalImage(productId) {
        const image = await this.productImageRepository.findOne({
            where: { productId, principal: true },
        });
        if (!image) {
            return {
                id: null,
                productId,
                image: envs_1.envs.images.defaultImageUrl,
                principal: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        }
        return image;
    }
    async deleteImage(imageId) {
        const image = await this.productImageRepository.findOne({ where: { id: imageId } });
        if (!image) {
            throw new common_1.NotFoundException('Image not found');
        }
        const imagePath = (0, path_1.join)(__dirname, '../../dist/apps/images/products', image.image);
        try {
            await (0, promises_1.access)(imagePath);
            await (0, promises_1.unlink)(imagePath);
        }
        catch (error) {
            console.error('Error deleting file:', error);
        }
        await this.productImageRepository.remove(image);
    }
};
exports.ProductService = ProductService;
ProductService.storage = (0, multer_1.diskStorage)({
    destination: './dist/apps/images/products',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = `${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`;
        cb(null, filename);
    },
});
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_image_entity_1.ProductImageEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ProductService);


/***/ }),
/* 26 */
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
exports.SetPrincipalProductImageDto = void 0;
const class_validator_1 = __webpack_require__(20);
class SetPrincipalProductImageDto {
}
exports.SetPrincipalProductImageDto = SetPrincipalProductImageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetPrincipalProductImageDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetPrincipalProductImageDto.prototype, "imageId", void 0);


/***/ }),
/* 27 */
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
const images_app_module_1 = __webpack_require__(1);
const core_1 = __webpack_require__(27);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(14);
async function bootstrap() {
    const logger = new common_1.Logger('ImagesApp');
    const port = config_1.envs.images.port;
    const app = await core_1.NestFactory.create(images_app_module_1.ImagesAppModule);
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