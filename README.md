# 1. Crear proyecto con Vite
npm create vite@latest Parte1 -- --template react-ts

# 2. Entrar al directorio
cd Parte1

# 3. Instalar dependencias del package.json
npm install

# 4. Dependencias instaladas (según package.json):
npm install react@^19.2.0 react-dom@^19.2.0 react-router-dom@^7.13.0
npm install bootstrap@^5.3.8 cors@^2.8.6 dotenv@^17.3.1 express@^5.2.1 pg@^8.18.0

# 5. Instalar devDependencies
npm install --save-dev typescript@~5.9.3 vite@^8.0.0-beta.13 eslint typescript-eslint
npm install --save-dev @vitejs/plugin-react-swc @types/react @types/react-dom @types/node

# 6. Para iniciar desarrollo
npm run dev
==================================================================================
==================================================================================
==================================================================================
BACKEND (Python + FastAPI + PostgreSQL)

# 1. Crear entorno virtual de Python
python -m venv venv

# 2. Activar el entorno virtual
# En Windows (PowerShell):
.\venv\Scripts\Activate

# En Windows (CMD):
venv\Scripts\activate

# 3. Instalar dependencias de Python
pip install fastapi
pip install uvicorn
pip install sqlalchemy
pip install psycopg2-binary  # Para PostgreSQL
pip install python-dotenv

# 4. Crear la Base de Datos en PostgreSQL
# Conectarse a PostgreSQL:
psql -U postgres

# Ejecutar en PostgreSQL:
CREATE DATABASE "MyFirstDB";

# 5. Iniciar el servidor backend
uvicorn main:app --reload