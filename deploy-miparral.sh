#!/bin/bash

# Variables
APP_NAME="miParralApp"  # Nombre de la carpeta raíz
REPO_URL="https://github.com/fchandiac/mi-parral-app.git"  # URL del repositorio
CURRENT_DIR=$(pwd)  # Directorio actual donde se ejecuta el script
DEPLOY_DIR="$CURRENT_DIR/$APP_NAME"  # Directorio de despliegue basado en la ruta actual
NEXT_ENV_PATH="$DEPLOY_DIR/apps/mi-parral/next/.env.local"
NEXT_PATH="$DEPLOY_DIR/apps/mi-parral/next"

# Función para mostrar mensajes
function log {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1"
}

# Saludo al iniciar el script
log "¡Hola! Iniciando el proceso de despliegue para $APP_NAME..."

# Validar si los comandos necesarios están instalados
function check_command {
    if ! command -v "$1" &> /dev/null; then
        log "Error: $1 no está instalado. Por favor, instálalo primero."
        exit 1
    fi
}



check_command git
check_command npm
check_command pm2 

# Verificar si el directorio de despliegue ya existe y eliminarlo si es así
if [ -d "$DEPLOY_DIR" ]; then
    log "El directorio $DEPLOY_DIR ya existe. Eliminándolo..."
    rm -rf "$DEPLOY_DIR"
fi

# Clonar el repositorio
log "Clonando el repositorio..."
git clone "$REPO_URL" "$DEPLOY_DIR"

# Crear el archivo .env
log "Creando el archivo .env..."
cat <<EOL > "$DEPLOY_DIR/.env"
# Configuraciones para la aplicación
API_PORT=9003
AUTH_PORT=9001
IMAGES_PORT=9002
NEXT_PORT=9000
COUPONS_PORT=9004
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=pincoyano
DATABASE_PASSWORD=1234
API_DATABASE_NAME=app-miparral
IMAGES_DATABASE_NAME=images-miparral
AUTH_DATABASE_NAME=users-miparral
COUPONS_DATABASE_NAME=coupons-miparral
DEFAULT_IMAGE_URL=default.png
EOL

log "Archivo .env creado en $DEPLOY_DIR."

# Crear el archivo .env.local
log "Creando el archivo .env.local..."
cat <<EOL > "$NEXT_ENV_PATH"
NEXTAUTH_SECRET="OW9tCwayWKLrZV0PbXMp5KsRjMqwnaeiqHzPDiXgBAU="
NEXTAUTH_URL=http://localhost:9000/api/auth
AUTH_REDIRECT_PROXY_URL=http://localhost:9000/api/auth
NEXT_PUBLIC_AUTH_BACKEND_URL=http://localhost:9001
NEXT_PUBLIC_BACKEND_URL=http://localhost:9003
NEXT_PUBLIC_IMAGES_BACKEND_URL=http://localhost:9002
NEXT_PUBLIC_COUPONS_BACKEND_URL=http://localhost:9004
EOL

log "Archivo .env.local creado en $NEXT_ENV_PATH."

# Instalar dependencias de npm en la carpeta next
log "Instalando dependencias de npm en $NEXT_PATH..."
npm install --prefix "$DEPLOY_DIR/apps/mi-parral/next"

log "Dependencias instaladas correctamente en la carpeta next."

# Instalar dependencias de npm en la raíz
log "Instalando dependencias de npm en la raíz de $DEPLOY_DIR..."
npm install --prefix "$DEPLOY_DIR"



log "Dependencias instaladas correctamente en la raíz."
