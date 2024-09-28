import 'dotenv/config';
import * as joi from 'joi';

//     DATABASE_HOST:
// DATABASE_PORT=5432
// DATABASE_USER=myuser
// DATABASE_PASSWORD=mypassword
// DATABASE_NAME=mydatabase


interface EnvVars {
    API_PORT: number;
    AUTH_PORT: number;
    NEXT_PORT: number;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;

}

const envVarsSchema: joi.ObjectSchema = joi.object({
    API_PORT: joi.number().default(3001),
    AUTH_PORT: joi.number().default(3002),
    NEXT_PORT: joi.number().default(3000),
    DATABASE_HOST: joi.string().required(),
    DATABASE_PORT: joi.number().default(3306),
    DATABASE_USER: joi.string().required(),
    DATABASE_PASSWORD: joi.string().required(),
    DATABASE_NAME: joi.string().required(),
    

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
    },
    next: {
        port: envVars.NEXT_PORT,
    },
    auth: {
        port: envVars.AUTH_PORT,
    },
    database: {
        host: envVars.DATABASE_HOST,
        port: envVars.DATABASE_PORT,
        user: envVars.DATABASE_USER,
        password: envVars.DATABASE_PASSWORD,
        name: envVars.DATABASE_NAME,
    },
};