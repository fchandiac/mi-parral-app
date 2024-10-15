/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/category/category-seeder.service.ts":
/*!******************************************************!*\
  !*** ./apps/api/category/category-seeder.service.ts ***!
  \******************************************************/
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
exports.CategorySeederService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const category_entity_1 = __webpack_require__(/*! ../../libs/entities/categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let CategorySeederService = class CategorySeederService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async seed() {
        const categories = [
            { name: 'Cafeterías' },
            { name: 'Pastelerías' },
            { name: 'Restaurantes' },
            { name: 'Peluquerías' },
            { name: 'Barberías' },
            { name: 'Spa y Bienestar' },
            { name: 'Salud y Belleza' },
            { name: 'Tiendas de Ropa' },
            { name: 'Tiendas de Calzado' },
            { name: 'Supermercados' },
            { name: 'Fruterías' },
            { name: 'Panaderías' },
            { name: 'Tiendas de Mascotas' },
            { name: 'Farmacias' },
            { name: 'Gimnasios' },
            { name: 'Clínicas Dentales' },
            { name: 'Estéticas' },
            { name: 'Ferreterías' },
            { name: 'Servicios de Limpieza' },
            { name: 'Servicios de Plomería' },
            { name: 'Servicios de Electricidad' },
            { name: 'Talleres Mecánicos' },
            { name: 'Tiendas de Electrónica' },
            { name: 'Papelerías' },
            { name: 'Tiendas de Juguetes' },
            { name: 'Floristerías' },
            { name: 'Librerías' },
            { name: 'Servicios de Transporte' },
            { name: 'Servicios de Entrega a Domicilio' },
            { name: 'Lavanderías' }
        ];
        for (const category of categories) {
            const exists = await this.categoryRepository.findOne({ where: { name: category.name } });
            if (!exists) {
                await this.categoryRepository.save(category);
            }
        }
    }
};
exports.CategorySeederService = CategorySeederService;
exports.CategorySeederService = CategorySeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategorySeederService);


/***/ }),

/***/ "./apps/api/category/category.controller.ts":
/*!**************************************************!*\
  !*** ./apps/api/category/category.controller.ts ***!
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const category_service_1 = __webpack_require__(/*! ./category.service */ "./apps/api/category/category.service.ts");
const create_category_dto_1 = __webpack_require__(/*! ../../libs/dto/category/create-category.dto */ "./apps/libs/dto/category/create-category.dto.ts");
const update_category_dto_1 = __webpack_require__(/*! ../../libs/dto/category/update-category.dto */ "./apps/libs/dto/category/update-category.dto.ts");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    findAll() {
        return this.categoryService.findAll();
    }
    findOne(id) {
        return this.categoryService.findOne(id);
    }
    create(createCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }
    update(id, updateCategoryDto) {
        return this.categoryService.update(id, updateCategoryDto);
    }
    remove(id) {
        return this.categoryService.remove(id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_category_dto_1.CreateCategoryDto !== "undefined" && create_category_dto_1.CreateCategoryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_category_dto_1.UpdateCategoryDto !== "undefined" && update_category_dto_1.UpdateCategoryDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "remove", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [typeof (_a = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _a : Object])
], CategoryController);


/***/ }),

/***/ "./apps/api/category/category.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/category/category.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const category_service_1 = __webpack_require__(/*! ./category.service */ "./apps/api/category/category.service.ts");
const category_controller_1 = __webpack_require__(/*! ./category.controller */ "./apps/api/category/category.controller.ts");
const category_entity_1 = __webpack_require__(/*! ../../libs/entities/categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.CategoryEntity])],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService],
    })
], CategoryModule);


/***/ }),

/***/ "./apps/api/category/category.service.ts":
/*!***********************************************!*\
  !*** ./apps/api/category/category.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const category_entity_1 = __webpack_require__(/*! ../../libs/entities/categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async findAll() {
        return this.categoryRepository.find();
    }
    async findOne(id) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return category;
    }
    async create(createCategoryDto) {
        const category = this.categoryRepository.create(createCategoryDto);
        return this.categoryRepository.save(category);
    }
    async update(id, updateCategoryDto) {
        const category = await this.categoryRepository.preload({
            id,
            ...updateCategoryDto,
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return this.categoryRepository.save(category);
    }
    async remove(id) {
        const category = await this.findOne(id);
        await this.categoryRepository.remove(category);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategoryService);


/***/ }),

/***/ "./apps/api/commerce/commerce.controller.ts":
/*!**************************************************!*\
  !*** ./apps/api/commerce/commerce.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commerce_service_1 = __webpack_require__(/*! ./commerce.service */ "./apps/api/commerce/commerce.service.ts");
const create_commerce_dto_1 = __webpack_require__(/*! apps/libs/dto/commerce/create-commerce.dto */ "./apps/libs/dto/commerce/create-commerce.dto.ts");
const update_commerce_dto_1 = __webpack_require__(/*! apps/libs/dto/commerce/update-commerce.dto */ "./apps/libs/dto/commerce/update-commerce.dto.ts");
let CommerceController = class CommerceController {
    constructor(commerceService) {
        this.commerceService = commerceService;
    }
    async create(dto) {
        return this.commerceService.create(dto);
    }
    async findAll() {
        return this.commerceService.findAll();
    }
    async findOne(dto) {
        return this.commerceService.findOne(dto);
    }
    async findAllByUserId(id) {
        return this.commerceService.findAllByUserId({ id });
    }
    async findRandom() {
        return this.commerceService.findRandom();
    }
    async findAllByCategoryNameOrCommerceName(searchTerm) {
        return this.commerceService.findAllByCategoryNameOrCommerceName(searchTerm);
    }
    async update(dto) {
        return this.commerceService.update(dto);
    }
    async remove(id) {
        return this.commerceService.remove(id);
    }
};
exports.CommerceController = CommerceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_commerce_dto_1.CreateCommerceDto !== "undefined" && create_commerce_dto_1.CreateCommerceDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CommerceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], CommerceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/findOne'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CommerceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/findAllByUserId'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], CommerceController.prototype, "findAllByUserId", null);
__decorate([
    (0, common_1.Get)('/findRandom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CommerceController.prototype, "findRandom", null);
__decorate([
    (0, common_1.Get)('/findAllByCategoryNameOrCommerceName'),
    __param(0, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], CommerceController.prototype, "findAllByCategoryNameOrCommerceName", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof update_commerce_dto_1.UpdateCommerceDto !== "undefined" && update_commerce_dto_1.UpdateCommerceDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], CommerceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], CommerceController.prototype, "remove", null);
exports.CommerceController = CommerceController = __decorate([
    (0, common_1.Controller)('commerces'),
    __metadata("design:paramtypes", [typeof (_a = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _a : Object])
], CommerceController);


/***/ }),

/***/ "./apps/api/commerce/commerce.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/commerce/commerce.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const commerce_entity_1 = __webpack_require__(/*! apps/libs/entities/commerces/commerce.entity */ "./apps/libs/entities/commerces/commerce.entity.ts");
const commerce_service_1 = __webpack_require__(/*! ./commerce.service */ "./apps/api/commerce/commerce.service.ts");
const commerce_controller_1 = __webpack_require__(/*! ./commerce.controller */ "./apps/api/commerce/commerce.controller.ts");
const category_service_1 = __webpack_require__(/*! ../category/category.service */ "./apps/api/category/category.service.ts");
const category_entity_1 = __webpack_require__(/*! apps/libs/entities/categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let CommerceModule = class CommerceModule {
};
exports.CommerceModule = CommerceModule;
exports.CommerceModule = CommerceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([commerce_entity_1.CommerceEntity, category_entity_1.CategoryEntity]),
        ],
        controllers: [commerce_controller_1.CommerceController],
        providers: [commerce_service_1.CommerceService, category_service_1.CategoryService]
    })
], CommerceModule);


/***/ }),

/***/ "./apps/api/commerce/commerce.service.ts":
/*!***********************************************!*\
  !*** ./apps/api/commerce/commerce.service.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const commerce_entity_1 = __webpack_require__(/*! apps/libs/entities/commerces/commerce.entity */ "./apps/libs/entities/commerces/commerce.entity.ts");
const category_service_1 = __webpack_require__(/*! ../category/category.service */ "./apps/api/category/category.service.ts");
let CommerceService = class CommerceService {
    constructor(commerceRepository, categoryService) {
        this.commerceRepository = commerceRepository;
        this.categoryService = categoryService;
    }
    async create(dto) {
        const category = await this.categoryService.findOne(dto.categoryId);
        const commerce = this.commerceRepository.create(dto);
        commerce.category = category;
        return this.commerceRepository.save(commerce);
    }
    async findAll() {
        return this.commerceRepository.find({
            order: { createdAt: 'DESC' },
            withDeleted: false,
            relations: ['category'],
        });
    }
    async findOne(id) {
        const commerce = await this.commerceRepository.findOne({
            where: { id },
            relations: ['category'],
        });
        if (!commerce) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
        return commerce;
    }
    async findAllByCategoryNameOrCommerceName(searchTerm) {
        if (!searchTerm) {
            return this.commerceRepository.find({
                relations: ['category'],
            });
        }
        return this.commerceRepository.find({
            where: [
                { category: { name: (0, typeorm_2.ILike)(`%${searchTerm}%`) } },
                { name: (0, typeorm_2.ILike)(`%${searchTerm}%`) },
            ],
            relations: ['category'],
        });
    }
    async findAllByUserId(dto) {
        const commerces = await this.commerceRepository.find({
            where: { userId: dto.id },
            order: { createdAt: 'DESC' },
            relations: ['category']
        });
        return commerces;
    }
    async remove(id) {
        const result = await this.commerceRepository.softDelete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
    }
    async findRandom() {
        const commerce = await this.commerceRepository.find({ withDeleted: false, relations: ['category'] });
        const randomIndex = Math.floor(Math.random() * commerce.length);
        return commerce ? commerce[randomIndex] : null;
    }
    async update(dto) {
        const commerce = await this.commerceRepository.findOneBy({ id: dto.id });
        if (!commerce) {
            throw new common_1.NotFoundException(`Commerce with ID ${dto.id} not found`);
        }
        const updatedCommerce = this.commerceRepository.merge(commerce, dto);
        return this.commerceRepository.save(updatedCommerce);
    }
};
exports.CommerceService = CommerceService;
exports.CommerceService = CommerceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(commerce_entity_1.CommerceEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _b : Object])
], CommerceService);


/***/ }),

/***/ "./apps/api/discount/discount.controller.ts":
/*!**************************************************!*\
  !*** ./apps/api/discount/discount.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiscountController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const discount_service_1 = __webpack_require__(/*! ./discount.service */ "./apps/api/discount/discount.service.ts");
const create_discount_dto_1 = __webpack_require__(/*! ../../libs/dto/discount/create-discount.dto */ "./apps/libs/dto/discount/create-discount.dto.ts");
const update_discount_dto_1 = __webpack_require__(/*! ../../libs/dto/discount/update-discount.dto */ "./apps/libs/dto/discount/update-discount.dto.ts");
let DiscountController = class DiscountController {
    constructor(discountService) {
        this.discountService = discountService;
    }
    async create(createDiscountDto) {
        const discount = await this.discountService.create(createDiscountDto);
        return discount;
    }
    async findAll() {
        return await this.discountService.findAll();
    }
    async findOne(id) {
        return await this.discountService.findOne(id);
    }
    async update(id, updateDiscountDto) {
        return await this.discountService.update(id, updateDiscountDto);
    }
    async remove(id) {
        return await this.discountService.remove(id);
    }
};
exports.DiscountController = DiscountController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_discount_dto_1.CreateDiscountDto !== "undefined" && create_discount_dto_1.CreateDiscountDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DiscountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], DiscountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], DiscountController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof update_discount_dto_1.UpdateDiscountDto !== "undefined" && update_discount_dto_1.UpdateDiscountDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], DiscountController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], DiscountController.prototype, "remove", null);
exports.DiscountController = DiscountController = __decorate([
    (0, common_1.Controller)('discount'),
    __metadata("design:paramtypes", [typeof (_a = typeof discount_service_1.DiscountService !== "undefined" && discount_service_1.DiscountService) === "function" ? _a : Object])
], DiscountController);


/***/ }),

/***/ "./apps/api/discount/discount.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/discount/discount.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiscountModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const discount_service_1 = __webpack_require__(/*! ./discount.service */ "./apps/api/discount/discount.service.ts");
const discount_controller_1 = __webpack_require__(/*! ./discount.controller */ "./apps/api/discount/discount.controller.ts");
const discount_entity_1 = __webpack_require__(/*! ../../libs/entities/discounts/discount.entity */ "./apps/libs/entities/discounts/discount.entity.ts");
let DiscountModule = class DiscountModule {
};
exports.DiscountModule = DiscountModule;
exports.DiscountModule = DiscountModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([discount_entity_1.DiscountEntity])],
        controllers: [discount_controller_1.DiscountController],
        providers: [discount_service_1.DiscountService],
    })
], DiscountModule);


/***/ }),

/***/ "./apps/api/discount/discount.service.ts":
/*!***********************************************!*\
  !*** ./apps/api/discount/discount.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiscountService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const discount_entity_1 = __webpack_require__(/*! ../../libs/entities/discounts/discount.entity */ "./apps/libs/entities/discounts/discount.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let DiscountService = class DiscountService {
    constructor(discountRepository) {
        this.discountRepository = discountRepository;
    }
    async create(createDiscountDto) {
        const discount = this.discountRepository.create(createDiscountDto);
        return await this.discountRepository.save(discount);
    }
    async findAll() {
        return await this.discountRepository.find();
    }
    async findOne(id) {
        const discount = await this.discountRepository.findOne({ where: { id } });
        if (!discount) {
            throw new common_1.NotFoundException(`Discount with ID ${id} not found`);
        }
        return discount;
    }
    async update(id, updateDiscountDto) {
        await this.findOne(id);
        await this.discountRepository.update(id, updateDiscountDto);
        return this.findOne(id);
    }
    async remove(id) {
        const discount = await this.findOne(id);
        await this.discountRepository.remove(discount);
    }
};
exports.DiscountService = DiscountService;
exports.DiscountService = DiscountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(discount_entity_1.DiscountEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], DiscountService);


/***/ }),

/***/ "./apps/api/product/product.controller.ts":
/*!************************************************!*\
  !*** ./apps/api/product/product.controller.ts ***!
  \************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_service_1 = __webpack_require__(/*! ./product.service */ "./apps/api/product/product.service.ts");
const create_product_dto_1 = __webpack_require__(/*! ../../libs/dto/product/create-product.dto */ "./apps/libs/dto/product/create-product.dto.ts");
const update_product_dto_1 = __webpack_require__(/*! apps/libs/dto/product/update-product.dto */ "./apps/libs/dto/product/update-product.dto.ts");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async create(createProductDto) {
        return this.productService.create(createProductDto);
    }
    async findAll() {
        return this.productService.findAll();
    }
    async findOne(id) {
        return this.productService.findOne(id);
    }
    async findAllByUserId(id) {
        return this.productService.findAllByUserId({ id });
    }
    async findRandom() {
        return this.productService.findRandom();
    }
    async remove(id) {
        return this.productService.remove(id);
    }
    async update(dto) {
        return this.productService.update(dto);
    }
    async findAllByCategoryNameOrProductName(searchTerm) {
        return this.productService.findAllByCategoryNameOrProductName(searchTerm);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_product_dto_1.CreateProductDto !== "undefined" && create_product_dto_1.CreateProductDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/findOne'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/findAllByUserId'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ProductController.prototype, "findAllByUserId", null);
__decorate([
    (0, common_1.Get)('/findRandom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ProductController.prototype, "findRandom", null);
__decorate([
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ProductController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof update_product_dto_1.UpdateProductDto !== "undefined" && update_product_dto_1.UpdateProductDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/findAllByCategoryNameOrProductName'),
    __param(0, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], ProductController.prototype, "findAllByCategoryNameOrProductName", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], ProductController);


/***/ }),

/***/ "./apps/api/product/product.module.ts":
/*!********************************************!*\
  !*** ./apps/api/product/product.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_controller_1 = __webpack_require__(/*! ./product.controller */ "./apps/api/product/product.controller.ts");
const product_service_1 = __webpack_require__(/*! ./product.service */ "./apps/api/product/product.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const product_entity_1 = __webpack_require__(/*! apps/libs/entities/products/product.entity */ "./apps/libs/entities/products/product.entity.ts");
const category_service_1 = __webpack_require__(/*! ../category/category.service */ "./apps/api/category/category.service.ts");
const category_entity_1 = __webpack_require__(/*! apps/libs/entities/categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.ProductEntity, category_entity_1.CategoryEntity]),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService, category_service_1.CategoryService],
    })
], ProductModule);


/***/ }),

/***/ "./apps/api/product/product.service.ts":
/*!*********************************************!*\
  !*** ./apps/api/product/product.service.ts ***!
  \*********************************************/
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
exports.ProductService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const product_entity_1 = __webpack_require__(/*! ../../libs/entities/products/product.entity */ "./apps/libs/entities/products/product.entity.ts");
const category_service_1 = __webpack_require__(/*! ../category/category.service */ "./apps/api/category/category.service.ts");
let ProductService = class ProductService {
    constructor(productRepository, categoryService) {
        this.productRepository = productRepository;
        this.categoryService = categoryService;
    }
    async create(dto) {
        const category = await this.categoryService.findOne(dto.categoryId);
        const product = this.productRepository.create(dto);
        product.category = category;
        return this.productRepository.save(product);
    }
    async findAll() {
        return this.productRepository.find({
            order: { createdAt: 'DESC' },
            withDeleted: false,
            relations: ['category'],
        });
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({
            where: { id },
            relations: ['category'],
            withDeleted: false,
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    async findAllByUserId(byIdDto) {
        return this.productRepository.find({
            where: { userId: byIdDto.id },
            order: { createdAt: 'DESC' },
            withDeleted: false,
            relations: ['category'],
        });
    }
    async remove(id) {
        const result = await this.productRepository.softDelete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
    }
    async findRandom() {
        const products = await this.productRepository.find({ withDeleted: false, relations: ['category'] });
        const randomIndex = Math.floor(Math.random() * products.length);
        return products ? products[randomIndex] : null;
    }
    async update(dto) {
        const product = await this.productRepository.findOneBy({ id: dto.id });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${dto.id} not found`);
        }
        const updatedProduct = this.productRepository.merge(product, dto);
        return this.productRepository.save(updatedProduct);
    }
    async findAllByCategoryNameOrProductName(searchTerm) {
        if (!searchTerm) {
            return this.productRepository.find({
                relations: ['category'],
            });
        }
        return this.productRepository.find({
            where: [
                { category: { name: (0, typeorm_2.ILike)(`%${searchTerm}%`) } },
                { name: (0, typeorm_2.ILike)(`%${searchTerm}%`) },
            ],
            relations: ['category'],
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _b : Object])
], ProductService);


/***/ }),

/***/ "./apps/api/sedeer/seeder.module.ts":
/*!******************************************!*\
  !*** ./apps/api/sedeer/seeder.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeederModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const category_entity_1 = __webpack_require__(/*! apps/libs/entities/categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
const category_seeder_service_1 = __webpack_require__(/*! ../category/category-seeder.service */ "./apps/api/category/category-seeder.service.ts");
let SeederModule = class SeederModule {
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.CategoryEntity])],
        providers: [category_seeder_service_1.CategorySeederService],
        exports: [category_seeder_service_1.CategorySeederService],
    })
], SeederModule);


/***/ }),

/***/ "./apps/api/service/service.controller.ts":
/*!************************************************!*\
  !*** ./apps/api/service/service.controller.ts ***!
  \************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const service_service_1 = __webpack_require__(/*! ./service.service */ "./apps/api/service/service.service.ts");
const create_service_dto_1 = __webpack_require__(/*! ../../libs/dto/service/create-service.dto */ "./apps/libs/dto/service/create-service.dto.ts");
const update_service_dto_1 = __webpack_require__(/*! apps/libs/dto/service/update-service.dto */ "./apps/libs/dto/service/update-service.dto.ts");
let ServiceController = class ServiceController {
    constructor(serviceService) {
        this.serviceService = serviceService;
    }
    async hello() {
        return 'Hello World!';
    }
    async create(createServiceDto) {
        return this.serviceService.create(createServiceDto);
    }
    async findAll() {
        return this.serviceService.findAll();
    }
    async findOne(dto) {
        return this.serviceService.findOne(dto);
    }
    async findAllByUserId(id) {
        return this.serviceService.findAllByUserId({ id });
    }
    async findRandom() {
        return this.serviceService.findRandom();
    }
    async findAllByCategoryName(name) {
        return this.serviceService.findAllByCategoryName(name);
    }
    async findAllByCategoryNameOrServiceName(searchTerm) {
        return this.serviceService.findAllByCategoryNameOrServiceName(searchTerm);
    }
    async remove(id) {
        return this.serviceService.remove(id);
    }
    async update(dto) {
        return this.serviceService.update(dto);
    }
};
exports.ServiceController = ServiceController;
__decorate([
    (0, common_1.Get)('/hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ServiceController.prototype, "hello", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_service_dto_1.CreateServiceDto !== "undefined" && create_service_dto_1.CreateServiceDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ServiceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ServiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/findOne'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ServiceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/findAllByUserId'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ServiceController.prototype, "findAllByUserId", null);
__decorate([
    (0, common_1.Get)('/findRandom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ServiceController.prototype, "findRandom", null);
__decorate([
    (0, common_1.Get)('/findAllByCategoryName'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ServiceController.prototype, "findAllByCategoryName", null);
__decorate([
    (0, common_1.Get)('/findAllByCategoryNameOrServiceName'),
    __param(0, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ServiceController.prototype, "findAllByCategoryNameOrServiceName", null);
__decorate([
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], ServiceController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof update_service_dto_1.UpdateServiceDto !== "undefined" && update_service_dto_1.UpdateServiceDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], ServiceController.prototype, "update", null);
exports.ServiceController = ServiceController = __decorate([
    (0, common_1.Controller)('services'),
    __metadata("design:paramtypes", [typeof (_a = typeof service_service_1.ServiceService !== "undefined" && service_service_1.ServiceService) === "function" ? _a : Object])
], ServiceController);


/***/ }),

/***/ "./apps/api/service/service.module.ts":
/*!********************************************!*\
  !*** ./apps/api/service/service.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const service_controller_1 = __webpack_require__(/*! ../service/service.controller */ "./apps/api/service/service.controller.ts");
const service_service_1 = __webpack_require__(/*! ../service/service.service */ "./apps/api/service/service.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const service_entity_1 = __webpack_require__(/*! apps/libs/entities/services/service.entity */ "./apps/libs/entities/services/service.entity.ts");
const category_module_1 = __webpack_require__(/*! ../category/category.module */ "./apps/api/category/category.module.ts");
const category_service_1 = __webpack_require__(/*! ../category/category.service */ "./apps/api/category/category.service.ts");
const category_entity_1 = __webpack_require__(/*! apps/libs/entities/categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let ServiceModule = class ServiceModule {
};
exports.ServiceModule = ServiceModule;
exports.ServiceModule = ServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            category_module_1.CategoryModule,
            typeorm_1.TypeOrmModule.forFeature([service_entity_1.ServiceEntity, category_entity_1.CategoryEntity]),
        ],
        controllers: [service_controller_1.ServiceController],
        providers: [service_service_1.ServiceService, category_service_1.CategoryService],
    })
], ServiceModule);


/***/ }),

/***/ "./apps/api/service/service.service.ts":
/*!*********************************************!*\
  !*** ./apps/api/service/service.service.ts ***!
  \*********************************************/
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
exports.ServiceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const service_entity_1 = __webpack_require__(/*! ../../libs/entities/services/service.entity */ "./apps/libs/entities/services/service.entity.ts");
const category_service_1 = __webpack_require__(/*! ../category/category.service */ "./apps/api/category/category.service.ts");
let ServiceService = class ServiceService {
    constructor(serviceRepository, categoryService) {
        this.serviceRepository = serviceRepository;
        this.categoryService = categoryService;
    }
    async create(dto) {
        const category = await this.categoryService.findOne(dto.categoryId);
        if (!category) {
            throw new Error('Categoría no encontrada');
        }
        const service = new service_entity_1.ServiceEntity();
        service.name = dto.name;
        service.description = dto.description;
        service.price = dto.price;
        service.userId = dto.userId;
        service.whatsapp = dto.whatsapp || null;
        service.category = category;
        return this.serviceRepository.save(service);
    }
    async findAll() {
        return this.serviceRepository.find({
            order: { createdAt: 'DESC' },
            withDeleted: false,
            relations: ['category'],
        });
    }
    async findAllByCategoryName(name) {
        if (name === '') {
            return this.serviceRepository.find({
                order: { createdAt: 'DESC' },
                withDeleted: false,
                relations: ['category'],
            });
        }
        else {
            return this.serviceRepository.find({
                where: { category: { name } },
                relations: ['category'],
            });
        }
    }
    async findAllByName(name) {
        return this.serviceRepository.find({
            where: { name: name },
            relations: ['category'],
        });
    }
    async findAllByCategoryNameOrServiceName(searchTerm) {
        if (!searchTerm) {
            return this.serviceRepository.find({
                relations: ['category'],
            });
        }
        return this.serviceRepository.find({
            where: [
                { category: { name: (0, typeorm_2.ILike)(`%${searchTerm}%`) } },
                { name: (0, typeorm_2.ILike)(`%${searchTerm}%`) },
            ],
            relations: ['category'],
        });
    }
    async findOne(id) {
        const service = await this.serviceRepository.findOne({
            where: { id },
            relations: ['category'],
            withDeleted: false,
        });
        if (!service) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
        return service;
    }
    async findAllByUserId(byIdDto) {
        const services = await this.serviceRepository.find({
            where: { userId: byIdDto.id },
            relations: ['category'],
        });
        return services;
    }
    async remove(id) {
        const result = await this.serviceRepository.softDelete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
    }
    async findRandom() {
        const services = await this.serviceRepository.find({ withDeleted: false });
        const randomIndex = Math.floor(Math.random() * services.length);
        return services ? services[randomIndex] : null;
    }
    async update(dto) {
        const service = await this.serviceRepository.findOneBy({ id: dto.id });
        if (!service) {
            throw new common_1.NotFoundException(`Service with ID ${dto.id} not found`);
        }
        const updatedService = this.serviceRepository.merge(service, dto);
        return this.serviceRepository.save(updatedService);
    }
};
exports.ServiceService = ServiceService;
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_entity_1.ServiceEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _b : Object])
], ServiceService);


/***/ }),

/***/ "./apps/api/src/api.module.ts":
/*!************************************!*\
  !*** ./apps/api/src/api.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const service_entity_1 = __webpack_require__(/*! apps/libs/entities/services/service.entity */ "./apps/libs/entities/services/service.entity.ts");
const commerce_entity_1 = __webpack_require__(/*! apps/libs/entities/commerces/commerce.entity */ "./apps/libs/entities/commerces/commerce.entity.ts");
const service_module_1 = __webpack_require__(/*! ../service/service.module */ "./apps/api/service/service.module.ts");
const commerce_module_1 = __webpack_require__(/*! ../commerce/commerce.module */ "./apps/api/commerce/commerce.module.ts");
const product_module_1 = __webpack_require__(/*! ../product/product.module */ "./apps/api/product/product.module.ts");
const product_entity_1 = __webpack_require__(/*! apps/libs/entities/products/product.entity */ "./apps/libs/entities/products/product.entity.ts");
const discount_module_1 = __webpack_require__(/*! ../discount/discount.module */ "./apps/api/discount/discount.module.ts");
const discount_entity_1 = __webpack_require__(/*! apps/libs/entities/discounts/discount.entity */ "./apps/libs/entities/discounts/discount.entity.ts");
const seeder_module_1 = __webpack_require__(/*! ../sedeer/seeder.module */ "./apps/api/sedeer/seeder.module.ts");
const category_module_1 = __webpack_require__(/*! ../category/category.module */ "./apps/api/category/category.module.ts");
const category_entity_1 = __webpack_require__(/*! apps/libs/entities/categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
const config_1 = __webpack_require__(/*! apps/libs/config */ "./apps/libs/config/index.ts");
let ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            service_module_1.ServiceModule,
            commerce_module_1.CommerceModule,
            product_module_1.ProductModule,
            discount_module_1.DiscountModule,
            category_module_1.CategoryModule,
            seeder_module_1.SeederModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: config_1.envs.database.host,
                port: config_1.envs.database.port,
                username: config_1.envs.database.user,
                password: config_1.envs.database.password,
                database: config_1.envs.database.apiDatabaseName,
                entities: [service_entity_1.ServiceEntity, commerce_entity_1.CommerceEntity, product_entity_1.ProductEntity, discount_entity_1.DiscountEntity, category_entity_1.CategoryEntity],
                synchronize: true,
                logging: true,
            }),
        ],
        controllers: [],
        providers: [],
    })
], ApiModule);


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

/***/ "./apps/libs/dto/category/create-category.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/libs/dto/category/create-category.dto.ts ***!
  \*******************************************************/
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
exports.CreateCategoryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateCategoryDto {
}
exports.CreateCategoryDto = CreateCategoryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);


/***/ }),

/***/ "./apps/libs/dto/category/update-category.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/libs/dto/category/update-category.dto.ts ***!
  \*******************************************************/
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
exports.UpdateCategoryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateCategoryDto {
}
exports.UpdateCategoryDto = UpdateCategoryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "name", void 0);


/***/ }),

/***/ "./apps/libs/dto/commerce/create-commerce.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/libs/dto/commerce/create-commerce.dto.ts ***!
  \*******************************************************/
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
exports.CreateCommerceDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateCommerceDto {
}
exports.CreateCommerceDto = CreateCommerceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommerceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommerceDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommerceDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommerceDto.prototype, "whatsapp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommerceDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommerceDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommerceDto.prototype, "categoryId", void 0);


/***/ }),

/***/ "./apps/libs/dto/commerce/update-commerce.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/libs/dto/commerce/update-commerce.dto.ts ***!
  \*******************************************************/
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
exports.UpdateCommerceDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateCommerceDto {
}
exports.UpdateCommerceDto = UpdateCommerceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCommerceDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCommerceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCommerceDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCommerceDto.prototype, "whatsapp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCommerceDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCommerceDto.prototype, "location", void 0);


/***/ }),

/***/ "./apps/libs/dto/discount/create-discount.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/libs/dto/discount/create-discount.dto.ts ***!
  \*******************************************************/
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
exports.CreateDiscountDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const enums_1 = __webpack_require__(/*! apps/libs/enums */ "./apps/libs/enums.ts");
class CreateDiscountDto {
}
exports.CreateDiscountDto = CreateDiscountDto;
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.DiscountStatus),
    __metadata("design:type", typeof (_a = typeof enums_1.DiscountStatus !== "undefined" && enums_1.DiscountStatus) === "function" ? _a : Object)
], CreateDiscountDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.DiscountType),
    __metadata("design:type", Number)
], CreateDiscountDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Neighborhoods),
    __metadata("design:type", Number)
], CreateDiscountDto.prototype, "neighborhood", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Gender),
    __metadata("design:type", Number)
], CreateDiscountDto.prototype, "gender", void 0);


/***/ }),

/***/ "./apps/libs/dto/discount/update-discount.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/libs/dto/discount/update-discount.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDiscountDto = void 0;
class UpdateDiscountDto {
}
exports.UpdateDiscountDto = UpdateDiscountDto;


/***/ }),

/***/ "./apps/libs/dto/product/create-product.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/libs/dto/product/create-product.dto.ts ***!
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
exports.CreateProductDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "whatsapp", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);


/***/ }),

/***/ "./apps/libs/dto/product/update-product.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/libs/dto/product/update-product.dto.ts ***!
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
exports.UpdateProductDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class UpdateProductDto {
}
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "whatsapp", void 0);


/***/ }),

/***/ "./apps/libs/dto/service/create-service.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/libs/dto/service/create-service.dto.ts ***!
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
exports.CreateServiceDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateServiceDto {
}
exports.CreateServiceDto = CreateServiceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], CreateServiceDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "whatsapp", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "categoryId", void 0);


/***/ }),

/***/ "./apps/libs/dto/service/update-service.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/libs/dto/service/update-service.dto.ts ***!
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
exports.UpdateServiceDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class UpdateServiceDto {
}
exports.UpdateServiceDto = UpdateServiceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateServiceDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateServiceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateServiceDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], UpdateServiceDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateServiceDto.prototype, "whatsapp", void 0);


/***/ }),

/***/ "./apps/libs/entities/categories/category.entity.ts":
/*!**********************************************************!*\
  !*** ./apps/libs/entities/categories/category.entity.ts ***!
  \**********************************************************/
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
exports.CategoryEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const service_entity_1 = __webpack_require__(/*! ../services/service.entity */ "./apps/libs/entities/services/service.entity.ts");
const commerce_entity_1 = __webpack_require__(/*! ../commerces/commerce.entity */ "./apps/libs/entities/commerces/commerce.entity.ts");
const product_entity_1 = __webpack_require__(/*! ../products/product.entity */ "./apps/libs/entities/products/product.entity.ts");
let CategoryEntity = class CategoryEntity {
};
exports.CategoryEntity = CategoryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => service_entity_1.ServiceEntity, (service) => service.category),
    __metadata("design:type", Array)
], CategoryEntity.prototype, "services", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => commerce_entity_1.CommerceEntity, (commerce) => commerce.category),
    __metadata("design:type", Array)
], CategoryEntity.prototype, "commerces", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.ProductEntity, (product) => product.category),
    __metadata("design:type", Array)
], CategoryEntity.prototype, "products", void 0);
exports.CategoryEntity = CategoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'categories' })
], CategoryEntity);


/***/ }),

/***/ "./apps/libs/entities/commerces/commerce.entity.ts":
/*!*********************************************************!*\
  !*** ./apps/libs/entities/commerces/commerce.entity.ts ***!
  \*********************************************************/
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const category_entity_1 = __webpack_require__(/*! ../categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let CommerceEntity = class CommerceEntity {
};
exports.CommerceEntity = CommerceEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CommerceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CommerceEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CommerceEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CommerceEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CommerceEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], CommerceEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], CommerceEntity.prototype, "whatsapp", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CommerceEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CommerceEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CommerceEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.commerces),
    __metadata("design:type", typeof (_d = typeof category_entity_1.CategoryEntity !== "undefined" && category_entity_1.CategoryEntity) === "function" ? _d : Object)
], CommerceEntity.prototype, "category", void 0);
exports.CommerceEntity = CommerceEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'commerces' })
], CommerceEntity);


/***/ }),

/***/ "./apps/libs/entities/discounts/discount.entity.ts":
/*!*********************************************************!*\
  !*** ./apps/libs/entities/discounts/discount.entity.ts ***!
  \*********************************************************/
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
exports.DiscountEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let DiscountEntity = class DiscountEntity {
};
exports.DiscountEntity = DiscountEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DiscountEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DiscountEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiscountEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiscountEntity.prototype, "validationUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], DiscountEntity.prototype, "validationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], DiscountEntity.prototype, "expire", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiscountEntity.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "minAge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "maxAge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DiscountEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], DiscountEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], DiscountEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], DiscountEntity.prototype, "deletedAt", void 0);
exports.DiscountEntity = DiscountEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'discount' })
], DiscountEntity);


/***/ }),

/***/ "./apps/libs/entities/products/product.entity.ts":
/*!*******************************************************!*\
  !*** ./apps/libs/entities/products/product.entity.ts ***!
  \*******************************************************/
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const category_entity_1 = __webpack_require__(/*! ../categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let ProductEntity = class ProductEntity {
};
exports.ProductEntity = ProductEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], ProductEntity.prototype, "whatsapp", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ProductEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ProductEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.products),
    __metadata("design:type", typeof (_d = typeof category_entity_1.CategoryEntity !== "undefined" && category_entity_1.CategoryEntity) === "function" ? _d : Object)
], ProductEntity.prototype, "category", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'products' })
], ProductEntity);


/***/ }),

/***/ "./apps/libs/entities/services/service.entity.ts":
/*!*******************************************************!*\
  !*** ./apps/libs/entities/services/service.entity.ts ***!
  \*******************************************************/
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const category_entity_1 = __webpack_require__(/*! ../categories/category.entity */ "./apps/libs/entities/categories/category.entity.ts");
let ServiceEntity = class ServiceEntity {
};
exports.ServiceEntity = ServiceEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ServiceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ServiceEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ServiceEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], ServiceEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], ServiceEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], ServiceEntity.prototype, "whatsapp", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ServiceEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ServiceEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ServiceEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.services),
    __metadata("design:type", typeof (_d = typeof category_entity_1.CategoryEntity !== "undefined" && category_entity_1.CategoryEntity) === "function" ? _d : Object)
], ServiceEntity.prototype, "category", void 0);
exports.ServiceEntity = ServiceEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'services' })
], ServiceEntity);


/***/ }),

/***/ "./apps/libs/enums.ts":
/*!****************************!*\
  !*** ./apps/libs/enums.ts ***!
  \****************************/
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
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const api_module_1 = __webpack_require__(/*! ./api.module */ "./apps/api/src/api.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! apps/libs/config */ "./apps/libs/config/index.ts");
async function bootstrap() {
    const logger = new common_1.Logger('Api');
    const port = config_1.envs.api.port;
    const app = await core_1.NestFactory.create(api_module_1.ApiModule);
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