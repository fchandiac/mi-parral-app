module.exports = {
    apps: [
        {
            name: 'nextMiParral',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 9000',
            instances: 1,
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',  // Establecer el modo de producción
            },
            env_production: {
                NODE_ENV: 'production',  // Establecer el modo de producción para el entorno de producción
            }
        }
    ]
}