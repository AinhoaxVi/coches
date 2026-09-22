# MotorClaro 2.0

PWA en español para organizar vehículos, orientar averías con triaje de seguridad, interpretar códigos OBD y registrar mantenimiento. Funciona en GitHub Pages sin servidor y conserva los datos del usuario en su dispositivo.

Aplicación publicada: <https://ainhoaxvi.github.io/coches/>

## Funciones

- Garaje con alta, edición y eliminación de vehículos, kilometraje, matrícula, VIN y código de motor.
- Catálogo local de 633 variantes de 26 modelos europeos, con 6 marcas, generaciones, combustible, potencia, cambio y sistemas confirmados.
- 14 grupos de síntomas, 29 preguntas adaptativas y 74 causas de avería compatibles con gasolina, diésel, híbridos, eléctricos, transmisiones y sistemas de seguridad.
- Formulario previo detallado: gravedad, frecuencia, aparición, temperatura/uso, códigos OBD, señales de emergencia y texto libre.
- Diccionario integrado de 35 códigos OBD frecuentes y clasificación de coincidencia sin porcentajes engañosos.
- Triaje explícito para frenos, temperatura, aceite, combustible y alta tensión.
- Plan de mantenimiento por fecha y kilómetros, con coste, taller, notas e historial.
- Decodificación VIN básica con WMI local y consulta opcional a NHTSA vPIC.
- Validación de formato de matrícula española y acceso al informe oficial de la DGT.
- Copias de seguridad JSON, importación, modo oscuro, accesibilidad de teclado e instalación PWA.
- Migración automática de datos guardados con MotorClaro 1.x.

## Límites de datos y privacidad

MotorClaro es una herramienta orientativa, no una diagnosis confirmada. Un resultado debe verificarse con inspección, mediciones, documentación del fabricante y lectura completa de las unidades electrónicas.

- Los datos personales, vehículos e historiales se guardan en `localStorage`; no se envían a un servidor de MotorClaro.
- NHTSA vPIC es una fuente estadounidense y su cobertura de vehículos europeos puede ser incompleta.
- La matrícula no se usa para buscar titulares ni para hacer scraping. La app abre la vía oficial de la DGT.
- Un catálogo europeo completo por VIN o matrícula requiere un proveedor profesional como TecDoc y un backend que mantenga las credenciales fuera del navegador. La arquitectura propuesta está en [docs/API-INTEGRATION.md](docs/API-INTEGRATION.md).
- Amazon Rekognition puede extraer texto de una imagen, pero no convierte por sí mismo una matrícula en marca, modelo o motor.

## Desarrollo

No hay dependencias en producción ni proceso de compilación. Para las comprobaciones locales se necesita Node.js 20 o compatible:

```bash
npm test
npm run check
```

Para abrirla localmente:

```bash
python3 -m http.server 8080
```

Después visita `http://localhost:8080`. El flujo de GitHub Actions ejecuta las pruebas en cada `push` y `pull_request`.

## Estructura

- `index.html`: estructura accesible y carga de recursos.
- `app.js`: estado, vistas, formularios, historial, VIN y mantenimiento.
- `catalog.js`: variantes y perfil técnico confirmado.
- `diagnosis-data.js`: causas, síntomas, preguntas y códigos OBD.
- `styles.css`: diseño adaptable y temas.
- `sw.js` / `manifest.webmanifest`: instalación y modo sin conexión.
- `tests/`: controles de integridad del catálogo, motor de diagnóstico y PWA.

## Publicación

GitHub Pages sirve directamente la rama principal. Los recursos llevan versión en la URL y el service worker actualiza la navegación desde red, conserva una copia sin conexión y muestra un aviso cuando hay una versión nueva.

## Licencia y datos

El repositorio no redistribuye bases comerciales. Antes de reutilizar datos de un proveedor externo, verifica su contrato, licencia, límites, base jurídica y política de retención. Consulta [docs/API-INTEGRATION.md](docs/API-INTEGRATION.md) antes de conectar un proveedor de VIN o matrícula.
