# Historial de cambios

## 2.3.0 — 2026-10-11

- Añadido el resumen de qué operaciones corresponden a cada hito de mantenimiento para el Hyundai i30 1.0 T-GDi europeo.
- Afinadas las inspecciones y cambios del filtro de aire, refrigeración, frenos, combustible y cambio manual según el programa europeo del i30 PDe.
- Los vehículos sin historial dejan de aparecer automáticamente como atrasados; muestran un hito de referencia para confirmar cuándo se hizo el último servicio.
## 2.2.0 — 2026-09-23

- Añadido diagnóstico directo por código OBD en la pantalla Diagnosticar, sin pasar por el cuestionario de síntomas.
- Sincronizada automáticamente la versión de todos los recursos entre `index.html`, las pruebas y el precache del service worker.
- Actualizadas las pruebas del catálogo para validar las 725 variantes actuales y la cobertura específica del Saab 9-3.

## 2.1.0 — 2026-09-22

- Añadidas 92 configuraciones del Saab 9-3 entre 1998 y 2014: YS3D, YS3F, Sedan, SportCombi, Cabrio, Viggen, 9-3X, Griffin y NEVS.
- Corregida la clasificación técnica de los motores Saab turbo de inyección indirecta.
- Nuevo perfil de mantenimiento europeo específico para Hyundai i30 PDe 1.0 T-GDi, con uso normal o exigente.
- Los modelos sin plan exacto ya no reciben intervalos genéricos inventados: muestran tareas compatibles y piden confirmación por VIN/manual.
- Rediseñadas las tarjetas de Cuidados para evitar botones y etiquetas solapados en iPhone.
- El decodificador confirma el VIN europeo válido aunque NHTSA no devuelva modelo, año o motor, y añade Saab al reconocimiento WMI.
- Añadidas pruebas automáticas del catálogo Saab, mantenimiento por versión, recursos PWA y clasificación de inyección.

## 2.0.0 — 2026-09-22

- Rediseño completo adaptable, modo oscuro y mejoras de accesibilidad.
- Garaje editable con VIN, matrícula, código de motor, kilometraje y carrocería.
- Motor de diagnóstico ampliado a 74 causas, 14 síntomas y preguntas adaptativas.
- Formulario de contexto, códigos OBD, triaje crítico e historial detallado.
- Mantenimiento por tiempo/kilómetros con registros, costes, taller y notas.
- Consulta VIN con respaldo local y acceso legal al informe de vehículo de la DGT.
- Exportación/importación de datos y migración desde la versión anterior.
- Service worker actualizado, aviso de nueva versión y soporte de instalación iOS.
- Pruebas automáticas y control de calidad en GitHub Actions.
