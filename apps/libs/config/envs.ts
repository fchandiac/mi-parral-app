import 'dotenv/config';
import * as joi from 'joi';

// MAILER_MAIL=miparraldev@gmail.com
// MAILER_PASS=Crush2024%

// NEXT_PUBLIC_AUTH_BACKEND_URL=http://localhost:9001
// NEXT_PUBLIC_BACKEND_URL=http://localhost:9003
// NEXT_PUBLIC_IMAGES_BACKEND_URL=http://localhost:9002
// NEXT_PUBLIC_COUPONS_BACKEND_URL=http://localhost:9004



interface EnvVars {
    API_PORT: number;
    AUTH_PORT: number;
    IMAGES_PORT: number;
    NEXT_PORT: number;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    API_DATABASE_NAME: string;
    IMAGES_DATABASE_NAME: string;
    AUTH_DATABASE_NAME: string;
    DEFAULT_IMAGE_URL: string;
    COUPONS_DATABASE_NAME: string;
    COUPONS_PORT: number;
    MAILER_MAIL: string;
    MAILER_PASS: string;
    NEXT_PUBLIC_AUTH_BACKEND_URL: string;
    NEXT_PUBLIC_BACKEND_URL: string;
    NEXT_PUBLIC_IMAGES_BACKEND_URL: string;
    NEXT_PUBLIC_COUPONS_BACKEND_URL: string;


}

const envVarsSchema: joi.ObjectSchema = joi.object({
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
    MAILER_MAIL: joi.string().required(),
    MAILER_PASS: joi.string().required(),
    NEXT_PUBLIC_AUTH_BACKEND_URL: joi.string().required(),
    NEXT_PUBLIC_BACKEND_URL: joi.string().required(),
    NEXT_PUBLIC_IMAGES_BACKEND_URL: joi.string().required(),
    NEXT_PUBLIC_COUPONS_BACKEND_URL: joi.string().required(),

}).unknown(true);


const { value: envVars, error } = envVarsSchema.validate(process.env, {
    allowUnknown: true,
 
});

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}




export const envs = {
    api: {
        port: envVars.API_PORT,
        backendUrl: envVars.NEXT_PUBLIC_BACKEND_URL,
    },
    next: {
        port: envVars.NEXT_PORT,
    },
    auth: {
        port: envVars.AUTH_PORT,
        backenUrl: envVars.NEXT_PUBLIC_AUTH_BACKEND_URL,
    },
    images: {
        port: envVars.IMAGES_PORT,
        defaultImageUrl: envVars.DEFAULT_IMAGE_URL,
        backendUrl: envVars.NEXT_PUBLIC_IMAGES_BACKEND_URL,
    },
    coupons: {
        port: envVars.COUPONS_PORT,
        backendUrl: envVars.NEXT_PUBLIC_COUPONS_BACKEND_URL
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
    mailer: {
        mail: envVars.MAILER_MAIL,
        pass: envVars.MAILER_PASS,
    },
};