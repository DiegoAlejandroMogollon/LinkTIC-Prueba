# LinkTIC Project

Este proyecto consiste en un API Gateway, varios microservicios y un frontend desarrollado para una plataforma de comercio electrónico.

## Introducción

### 1. API Gateway
El API Gateway es un punto centralizado que redirige las solicitudes a los microservicios correspondientes. Se desarrolló utilizando Node.js y se documenta con Swagger.

- **Lenguaje**: Node.js
- **Versión**: v20.12.0
- **Puerto**: 4000

### 2. Microservicio de Autenticación
Este microservicio maneja el inicio de sesión y la autenticación de usuarios.

- **Lenguaje**: .NET Core
- **Versión**: 8.0.204
- **Puerto**: 5089

### 3. Microservicio de Productos
Gestiona la información de productos, incluyendo la creación, modificación, y eliminación.

- **Lenguaje**: .NET Core
- **Versión**: 8.0.204
- **Puerto**: 5240

### 4. Microservicio de Pedidos
Gestiona la creación, modificación y consulta de pedidos.

- **Lenguaje**: Node.js
- **Versión**: v20.12.0
- **Puerto**: 3000

### 5. Frontend
El frontend es una aplicación Angular que consume los servicios expuestos por los microservicios.

- **Lenguaje**: Angular
- **Versión**: Angular CLI: 18.1.4
- **Puerto**: 4200

## Getting Started

### Requisitos Previos
- **Node.js** v20.12.0 o superior
- **.NET Core SDK** 8.0.204 o superior
- **Angular CLI** 18.1.4

### 1. API Gateway

1. Navega hasta la carpeta `LinkTIC/BACKEND/apigateway`.
2. Instala las dependencias necesarias:
3. npm install
4. Ejecuta el API Gateway: node index.js
5. Accede a la documentación de Swagger en http://localhost:4000/api-docs.

### 2. Microservicio de Autenticación
1. Navega hasta la carpeta LinkTIC/BACKEND/AuthenticationService
2. Ejecuta el microservicio de autenticación: dotnet run
3. Accede al servicio en http://localhost:5089

### 3. Microservicio de Productos

1. Navega hasta la carpeta LinkTIC/BACKEND/ProductoService
2. Ejecuta el microservicio de productos: dotnet run
3. Accede al servicio en http://localhost:5240.

   
### 4. Microservicio de Pedidos

1. Navega hasta la carpeta LinkTIC/BACKEND/PedidoService/src
2. Ejecuta el microservicio de pedidos: node index.js
3. Accede al servicio en http://localhost:3000.

### 5. Frontend
1. Navega hasta la carpeta LinkTIC/FRONTEND/angular-app
2. Instala las dependencias necesarias: npm install
3. Ejecuta la aplicación Angular: ng serve






   

   
