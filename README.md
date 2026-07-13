# MotorClaro

PWA móvil para guardar vehículos, seguir su mantenimiento y obtener orientación guiada sobre averías.

## Incluido en esta primera versión

- Garaje local con SEAT, Volkswagen, Renault, Hyundai, Ford y Opel.
- 26 modelos comercializados en España y arquitectura para variantes técnicas verificadas.
- Primer catálogo detallado: Hyundai i30 N Line 2018–2026, con 11 combinaciones de motor/cambio y componentes instalados.
- Diagnóstico por 12 grupos de síntomas, más de 50 causas y filtrado por componentes del vehículo.
- Plan de mantenimiento orientativo y lista de tareas.
- Datos guardados únicamente en el dispositivo mediante `localStorage`.
- Funcionamiento sin conexión mediante service worker.
- Compatible con GitHub Pages; no necesita compilación ni servidor.

## Publicar con GitHub Pages

1. Sube todos los archivos a la rama principal de un repositorio.
2. En GitHub, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama principal y la carpeta raíz (`/`).

La dirección resultante tendrá el formato `https://usuario.github.io/repositorio/`.

## Limitaciones deliberadas del MVP

Los intervalos de mantenimiento son rangos orientativos. Antes de convertirlos en instrucciones exactas se debe verificar cada combinación de generación y código de motor con documentación fiable. Los porcentajes del asistente son niveles de coincidencia, no diagnósticos confirmados.

## Fuentes técnicas usadas en la ficha i30 N Line

- Documentación de prensa y fichas técnicas oficiales de Hyundai Motor España y Hyundai Motor Europe.
- Catálogos oficiales i30 de 2017, 2020 y MY2025.
- Manual del propietario oficial de Hyundai.

El resto de modelos permanece en configuración manual hasta incorporar su ficha técnica verificada. La aplicación no presenta una configuración manual como si fuera una versión identificada.
