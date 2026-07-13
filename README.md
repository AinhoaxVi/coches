# MotorClaro

PWA móvil para guardar vehículos, seguir su mantenimiento y obtener orientación guiada sobre averías.

## Incluido en esta primera versión

- Garaje local con SEAT, Volkswagen, Renault, Hyundai, Ford y Opel.
- 26 modelos comercializados en España, organizados por generación y año.
- Más de 600 combinaciones de motor y cambio: gasolina, diésel, microhíbrido de 48 V, híbrido, enchufable y eléctrico.
- Hyundai i30 completo desde 2007, con versiones convencionales, N Line y N; gasolina y microhíbrido aparecen como combustibles distintos.
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

## Criterio del catálogo técnico

- Fichas técnicas, catálogos y documentación de prensa de los fabricantes para el mercado europeo y español.
- Las variantes se agrupan por generación comercial y se filtran por año y combustible.
- El código de motor, cuando se conoce, prevalece sobre la denominación comercial para confirmar distribución, emisiones e intervalos exactos.

El catálogo permite identificar los principales sistemas instalados y descartar fallos incompatibles. No sustituye la comprobación mediante VIN, código de motor o documentación oficial del vehículo concreto.
