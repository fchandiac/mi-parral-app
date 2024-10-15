module.exports = {
  apps: [
    {
      name: 'mi-app-nest', // Nombre de la aplicación
      script: 'dist/apps/api/main.js', // Ruta al archivo de entrada compilado
      instances: 1, // Usar el número máximo de núcleos de CPU disponibles
      exec_mode: 'cluster', // Ejecutar en modo clúster
      env: {
        NODE_ENV: 'production', // Establecer el entorno en producción
        API_PORT: 9003, // Puerto para la API
        AUTH_PORT: 9001, // Puerto para la autenticación
        IMAGES_PORT: 9002, // Puerto para imágenes
        NEXT_PORT: 9000, // Puerto para Next.js
        COUPONS_PORT: 9004, // Puerto para cupones
        DATABASE_HOST: 'localhost', // Host de la base de datos
        DATABASE_PORT: 3306, // Puerto de la base de datos
        DATABASE_USER: 'pincoyano', // Usuario de la base de datos
        DATABASE_PASSWORD: '1234', // Contraseña de la base de datos
        API_DATABASE_NAME: 'app-miparral', // Nombre de la base de datos de la API
        IMAGES_DATABASE_NAME: 'images-miparral', // Nombre de la base de datos de imágenes
        AUTH_DATABASE_NAME: 'users-miparral', // Nombre de la base de datos de usuarios
        COUPONS_DATABASE_NAME: 'coupons-miparral', // Nombre de la base de datos de cupones
        DEFAULT_IMAGE_URL: 'default.png', // URL de la imagen predeterminada
      },
    },
    {
      name: 'authMiParral', // Nombre de la aplicación
      script: 'dist/apps/auth/main.js', // Ruta al archivo de entrada compilado
      instances: 1, // Usar el número máximo de núcleos de CPU disponibles
      exec_mode: 'cluster', // Ejecutar en modo clúster
      env: {
        NODE_ENV: 'production', // Establecer el entorno en producción
        API_PORT: 9003, // Puerto para la API
        AUTH_PORT: 9001, // Puerto para la autenticación
        IMAGES_PORT: 9002, // Puerto para imágenes
        NEXT_PORT: 9000, // Puerto para Next.js
        COUPONS_PORT: 9004, // Puerto para cupones
        DATABASE_HOST: 'localhost', // Host de la base de datos
        DATABASE_PORT: 3306, // Puerto de la base de datos
        DATABASE_USER: 'pincoyano', // Usuario de la base de datos
        DATABASE_PASSWORD: '1234', // Contraseña de la base de datos
        API_DATABASE_NAME: 'app-miparral', // Nombre de la base de datos de la API
        IMAGES_DATABASE_NAME: 'images-miparral', // Nombre de la base de datos de imágenes
        AUTH_DATABASE_NAME: 'users-miparral', // Nombre de la base de datos de usuarios
        COUPONS_DATABASE_NAME: 'coupons-miparral', // Nombre de la base de datos de cupones
        DEFAULT_IMAGE_URL: 'default.png', // URL de la imagen predeterminada
      },
    },
    {
      name: 'imagesMiParral', // Nombre de la aplicación
      script: 'dist/apps/images/main.js', // Ruta al archivo de entrada compilado
      instances: 1, // Usar el número máximo de núcleos de CPU disponibles
      exec_mode: 'cluster', // Ejecutar en modo clúster
      env: {
        NODE_ENV: 'production', // Establecer el entorno en producción
        API_PORT: 9003, // Puerto para la API
        AUTH_PORT: 9001, // Puerto para la autenticación
        IMAGES_PORT: 9002, // Puerto para imágenes
        NEXT_PORT: 9000, // Puerto para Next.js
        COUPONS_PORT: 9004, // Puerto para cupones
        DATABASE_HOST: 'localhost', // Host de la base de datos
        DATABASE_PORT: 3306, // Puerto de la base de datos
        DATABASE_USER: 'pincoyano', // Usuario de la base de datos
        DATABASE_PASSWORD: '1234', // Contraseña de la base de datos
        API_DATABASE_NAME: 'app-miparral', // Nombre de la base de datos de la API
        IMAGES_DATABASE_NAME: 'images-miparral', // Nombre de la base de datos de imágenes
        AUTH_DATABASE_NAME: 'users-miparral', // Nombre de la base de datos de usuarios
        COUPONS_DATABASE_NAME: 'coupons-miparral', // Nombre de la base de datos de cupones
        DEFAULT_IMAGE_URL: 'default.png', // URL de la imagen predeterminada
      },
    }
  ],
};