# PokéStore - Frontend

![License](https://img.shields.io/github/license/canosa92/Pokestore_Front)

## Descripción

**PokéStore** es una aplicación web para la compra y venta de Pokémon. Este repositorio contiene el frontend de la aplicación, desarrollado con React y Vite, proporcionando una interfaz moderna y responsiva para la gestión de productos y usuarios.

## Características

- **Interfaz de usuario intuitiva**: Navegación fácil y amigable.
- **Autenticación de usuarios**: Registro, inicio de sesión y gestión de sesiones.
- **Listado de Pokémon**: Visualiza y administra Pokémon disponibles para compra y venta.
- **Historial de transacciones**: Accede a un registro de compras y ventas.
- **Integración con API**: Comunicación con el backend para la gestión de datos.

## Tecnologías Utilizadas

- **Framework**: React
- **Herramienta de Construcción**: Vite
- **Gestión de Estado**: React Context API
- **Estilos**: CSS Modules
- **Solicitud HTTP**: Fetch API
- **Variables de Entorno**: Vite env variables

## Instalación

Para configurar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/canosa92/Pokestore_Back.git
   cd Pokestore_Back
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```
3.Inicia el servidor:

   ```bash
   npm run dev
   ```
La aplicación estará disponible en http://localhost:5173
## Scripts Disponibles

En el directorio del proyecto, puedes usar los siguientes comandos:

- **`npm run dev`**: Inicia la aplicación en modo de desarrollo.
- **`npm run build`**: Crea una versión optimizada para producción.
- **`npm run preview`**: Muestra una vista previa de la versión de producción generada.

## Estructura del Proyecto

```plaintext
src/
│
├── assets/             # Imágenes y otros recursos estáticos
├── components/         # Componentes reutilizables de la UI
├── usecontexts/        # Contextos para la gestión del estado global
├── pages/              # Páginas principales de la aplicación
├── Routes/             # Rutas principales de la aplicación
└── App.jsx             # Componente principal de la aplicación
```
## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Empuja los cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier pregunta o sugerencia, puedes contactar al mantenedor del proyecto:

- **GitHub**: [canosa92](https://github.com/canosa92)
- **Email**: [adrian.canosa1992@gmail.com](mailto:adrian.canosa1992@gmail.com)

