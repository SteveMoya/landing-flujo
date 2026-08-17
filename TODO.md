# 📋 TODO — landing-flujo (Backlog de mejoras)

> **Creado:** 2026-08-17
> **Repo:** [SteveMoya/landing-flujo](https://github.com/SteveMoya/landing-flujo)
> **Estado:** 1/3 completados — la primera mejora pedida se implementó al momento.

## ✅ Completados

### 1. Agregar los logos de las integraciones ✅
- Sección Integraciones con **logos reales de las marcas** (SVG inline, sin assets externos):
  - **GitHub, Figma, Google Drive, Notion, Zapier, Dropbox** → paths oficiales de `simple-icons` con el color de cada marca.
  - **Slack** → símbolo # de 4 píldoras reconstruido en SVG (la marca salió de simple-icons por licencia).
  - **Teams** → icono de personas sobre el plato del color oficial `#6264A7`.
- QA verificado: 8 chips renderizados, 6 logos oficiales + 2 custom, 0 errores de consola, CSP intacta (todo inline).
- Commit: `logos integraciones`.

## ⏳ Pendientes

### 2. Crear una sección About
- Sección de marca/empresa Flujo: historia, misión, valores.
- Ideas: quién está detrás (foto/equipo ficticio), por qué existe Flujo, timeline de hitos (fundación 2022 → hoy).
- Ubicación sugerida: entre `Integrations` y `Testimonials` (o tras el hero si se quiere más peso).
- Estilo: mantener Material (elevación + superficies), avatar de equipo, cita de la fundadora.

### 3. Crear una sección de caso de uso exitoso
- Caso de estudio de un cliente (ficticio): problema → solución con Flujo → resultados con números.
- Formato sugerido: card destacada estilo Material (Surface + elevación 3) con:
  - Logo/nombre del cliente ficticio
  - Cita/resumen del reto
  - 3 métricas de resultado (+38% entregas a tiempo, −12 h/semana en reuniones, etc.)
  - Testimonio corto quoted.
- Ubicación sugerida: entre `Testimonials` y `Pricing`.

---

## Criterios de aceptación (para cualquiera de los 3)

- `pnpm astro check` → 0 errores
- `pnpm build` → OK, 0 scripts inline (`assetsInlineLimit: 0`)
- QA Playwright con CSP real simulada → 0 violaciones, 0 overflow desktop/móvil
- Contraste AA (≥ 4.5:1 texto normal)
- Contenido en `src/data/*.ts` tipado (no hardcodear en el componente)