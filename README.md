# MotorClaro

PWA móvil para guardar vehículos, seguir su mantenimiento y obtener orientación guiada sobre averías.

## Incluido en esta primera versión

- Garaje local con SEAT, Volkswagen, Renault, Hyundai, Ford y Opel.
- 26 modelos comercializados en España, con selección de año, combustible, potencia, cambio y código de motor.
- Diagnóstico por preguntas con filtrado según el vehículo y tres coincidencias principales.
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
