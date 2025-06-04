# 📘 README – MaranaTha Landing Page

**Autor:** Oscar Matos  
**Proyecto:** Suplidora MaranaTha – Página Web Oficial  
**Dominio:** https://suplidoramaranatha.com  
**Versión:** 1.0  
**Última actualización:** 2025-06-03

---

## 📄 Descripción

Este repositorio contiene el código fuente de la landing page oficial de **Suplidora MaranaTha**, diseñada con un enfoque premium, sobrio y alineado con principios de neuroventa, claridad visual y experiencia de cliente tipo Apple.


---

## 🧱 Estructura del sitio

```html
<body>
├── <header>
│   ├── .navbar
│   │   ├── .nav-logo
│   │   ├── .nav-links
│   │   └── .nav-toggle
│
├── <section id="hero">
│   ├── .hero-container
│   │   ├── .hero-text
│   │   ├── .hero-button
│   │   └── .hero-title-behind
│
├── <section id="about">
│   ├── .section-title
│   ├── .icon-list
│   │   └── .icon-item
│
├── <section id="catalog">
│   ├── .catalog-grid
│   │   └── .catalog-card
│
├── <section id="contact">
│   ├── .form-glass
│   ├── .contact-social
│   └── .contact-info
│
└── <footer>
    ├── .footer-logo
    ├── .footer-copy
    └── .a-container
```

---

## 🎨 Convención de nombres

| Selector / ID           | Descripción                                                 |
|-------------------------|-------------------------------------------------------------|
| `.navbar`               | Menú superior fijo                                          |
| `.nav-toggle`           | Ícono hamburguesa (móvil)                                   |
| `#hero`                 | Hero section con título y llamada a la acción               |
| `.hero-title-behind`    | Texto gigante de fondo (“Premium”)                          |
| `.icon-list`            | Lista con íconos y textos de misión, valores, etc.          |
| `.catalog-grid`         | Grilla de categorías principales                            |
| `.form-glass`           | Contenedor del formulario de contacto                       |
| `.a-container`          | Íconos sociales en footer                                   |

---

## 📱 Responsive Design

### Breakpoints principales:

```css
@media (max-width: 1024px) { ... } // iPad Pro vertical
@media (max-width: 768px)  { ... } // Tablets y móviles grandes
@media (max-width: 576px)  { ... } // iPhone SE y similares
```

Cambios clave por breakpoint:
- Menú se convierte en toggle
- Grid del catálogo pasa de 2x4 a 1x8
- Hero section y footer se reestructuran verticalmente
- Optimizado para resoluciones desde 375px hasta escritorio full HD

---

## 🧪 Funcionalidades

| Elemento         | Comportamiento                                              |
|------------------|-------------------------------------------------------------|
| Menú Toggle      | Abre/cierra `.nav-links` con clase `.open`                  |
| Botón catálogo   | Abre el PDF en nueva pestaña                                |
| Formulario       | Envía a través de FormSubmit con redirección a `gracias.html` |
| ScrollReveal.js  | Anima secciones al hacer scroll                             |

---

## 🧰 Tecnologías Usadas

- **HTML5 + CSS3 vanilla**
- **JavaScript básico** (sin frameworks)
- **Google Fonts** (Oswald + Poppins)
- **Font Awesome v6.5.0**
- **FormSubmit.io** (para manejo de formularios)

---

## 🚀 Instrucciones para desplegar en producción

1. Clonar el repositorio
2. Editar textos e imágenes según necesidad
3. Subir carpeta a GitHub y conectar con Netlify
4. Asociar dominio en Netlify + habilitar HTTPS + redirección con www

---

## 📌 Notas finales

- El diseño está alineado con el **Brand Book MaranaTha**
- Todos los estilos siguen una línea sobria, limpia y funcional
- Ideal para integrarse como plantilla base de futuros micrositios

---

**Desarrollado con propósito, detalle y visión premium.**

---

© 2025 Suplidora MaranaTha. Todos los derechos reservados.
