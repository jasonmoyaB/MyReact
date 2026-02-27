# Parte 1 - Full Stack Application

Aplicación full-stack construida con **React + TypeScript** en el frontend y **FastAPI + PostgreSQL** en el backend.

##  Descripción

Plataforma para gestionar usuarios, tareas y mascotas con una interfaz moderna y una API REST robusta.

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **React Router v7** - Enrutamiento
- **Bootstrap 5** - Estilos CSS

### Backend
- **FastAPI** - Framework web moderno
- **SQLAlchemy** - ORM para bases de datos
- **PostgreSQL** - Base de datos relacional
- **Uvicorn** - Servidor ASGI

##  Estructura del Proyecto

```
.
├── src/                      # Código frontend (React + TypeScript)
│   ├── pages/               # Páginas principales
│   │   ├── calculadora/     # Página calculadora
│   │   ├── MyProfile/       # Perfil de usuario
│   │   ├── Tareas/          # Gestión de tareas
│   │   └── Test/            # Componentes de prueba
│   ├── components/          # Componentes reutilizables
│   ├── services/            # Llamadas a API
│   ├── interfaces/          # Tipos TypeScript
│   ├── hooks/               # Hooks personalizados
│   └── main.tsx
├── backend/                  # Código backend (FastAPI + Python)
│   ├── lib/                 # Lógica de negocio
│   │   ├── models/          # Modelos de BD (SQLAlchemy)
│   │   ├── tareas/          # Operaciones CRUD de tareas
│   │   └── usuarios/        # Operaciones CRUD de usuarios
│   ├── alembic/             # Migraciones de BD
│   ├── main.py              # Entrada principal de FastAPI
│   ├── database.py          # Configuración de BD
│   └── requirements.txt      # Dependencias Python
├── package.json             # Dependencias Node.js
├── tsconfig.json           # Configuración TypeScript
├── vite.config.ts          # Configuración Vite
└── README.md               # Este archivo
```

##  Inicio Rápido

### Requisitos Previos
- Node.js 18+
- Python 3.10+
- PostgreSQL 13+

### Frontend

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

### Backend

```bash
# Activar entorno virtual
# Windows (PowerShell):
.\venv\Scripts\Activate

# Windows (CMD):
venv\Scripts\activate

# Linux/Mac:
source venv/bin/activate

# Instalar dependencias
pip install -r backend/requirements.txt

# Iniciar servidor
cd backend
python -m uvicorn main:app --reload
```

El backend estará disponible en `http://localhost:8000`

## 🗄️ Configuración de Base de Datos

```bash
# Conectarse a PostgreSQL
psql -U postgres

# Crear la base de datos
CREATE DATABASE "MyFirstDB";
```

## 📚 Endpoints Principales

- **GET** `/users` - Obtener todos los usuarios
- **POST** `/users` - Crear nuevo usuario
- **GET** `/tareas` - Obtener todas las tareas
- **POST** `/tareas` - Crear nueva tarea
- **GET** `/pets` - Obtener todas las mascotas

Documentación interactiva: `http://localhost:8000/docs`

##  Notas

- Las migraciones de BD se manejan con Alembic
- El proyecto usa TypeScript strict mode
- Bootstrap se utiliza para estilos responsive

##  Autor

Jason

---

**Última actualización:** Febrero 2026