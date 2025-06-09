# 📘 README – Landing Page Oficial – Suplidora MaranaTha

**Autor:** Oscar Matos  
**Proyecto:** Suplidora MaranaTha – Página Web Oficial  
**Dominio:** [https://suplidoramaranatha.com](https://suplidoramaranatha.com)  
**Versión:** 1.2  
**Última actualización:** 2025-06-08

---

## 📄 Descripción

Este repositorio contiene el código fuente de la **Landing Page oficial de Suplidora MaranaTha**, desarrollada como parte de la transformación digital de la empresa, bajo un enfoque premium, sobrio y alineado con principios de:

- **Neuroventa aplicada con elegancia y ética**  
- **Diseño editorial inspirado en la experiencia Apple**  
- **Claridad visual y jerarquía profesional**  
- **Experiencia mobile-first optimizada**  
- **Glassmorphism en componentes clave (formulario, social, navbar)**  

---

## 🧱 Estructura del sitio (HTML)

```html
<body>
├── <header> .navbar + .nav-links + .nav-toggle
├── <aside>  .scrollspy
├── <main>
│   ├── <section id="hero"> .hero-title-line1 + .hero-visual + .hero-title-behind + .btn-box
│   ├── <section id="about"> .section-title + .section-text + .icons-grid
│   ├── <section id="sectors"> .sectors-grid + .sector-item
│   ├── <section id="catalog"> .catalog-container + .catalog-mockup
│   ├── <section id="testimonials"> .testimonials-grid + .testimonial-item
│   ├── <section id="contact"> .form-glass + .contact-social + .contact-info
└── <footer>
    ├── .footer-wrapper
    ├── .footer-brand + .footer-tagline + .footer-line
    ├── .footer-links (oculto en mobile)
    ├── .social-icons
    └── .footer-copy

```

---

## 🎨 Convención de nombres

| Selector / ID        | Descripción                                             |
| -------------------- | ------------------------------------------------------- |
| `.navbar`            | Menú superior fijo con efecto glass                     |
| `.nav-toggle`        | Ícono hamburguesa para versión mobile                   |
| `.scrollspy`         | Indicador lateral de navegación                         |
| `#hero`              | Sección Hero con imagen e ilustración central           |
| `.hero-title-behind` | Texto "Premium" en background                           |
| `.icons-grid`        | Beneficios en secciones de valor (About)                |
| `.sectors-grid`      | Grid de sectores atendidos                              |
| `.catalog-mockup`    | Imagen mockup del catálogo premium                      |
| `.testimonials-grid` | Grid con testimonios                                    |
| `.form-glass`        | Formulario de contacto con efecto Glassmorphism         |
| `.contact-social`    | Bloque de contacto directo (email, WhatsApp, Instagram) |
| `.footer-wrapper`    | Footer institucional con logo y mensaje editorial       |


---

## 📱 Responsive Design
Breakpoints optimizados y validados (Responsively App):
| Preset       | Breakpoint que cubre | Media query aplicable | Dispositivo referencial         |
| ------------ | -------------------- | --------------------- | ------------------------------- |
| 🖥️ Laptop S  | ≤ 1200px             | `max-width: 1200px`   | Laptop 13” / 14”                |
| 📲 Tablet H  | ≤ 992px              | `max-width: 992px`    | iPad landscape                  |
| 📲 Tablet V  | ≤ 768px              | `max-width: 768px`    | iPad portrait                   |
| 📱 Mobile M  | ≤ 430px              | `max-width: 430px`    | iPhone 14 Pro Max / Galaxy S22+ |
| 📱 Mobile XS | ≤ 375px              | `max-width: 375px`    | iPhone SE / Galaxy A3           |

Probada en:

- iPhone SE  
- iPhone 14 Pro Max  
- iPad Pro  
- Surface Pro  
- Laptops y desktops  
- Android phones

```

## 🚀 Componentes interactivos

### Navbar
- Sticky + transparente
- Color institucional al hacer scroll
- Toggle hamburguesa optimizado para todos los dispositivos

### ScrollSpy
- Barra lateral con animación de sección activa

### ScrollReveal
- Animaciones suaves para cada bloque de contenido

### Contact Form
- Integración con FormSubmit (sin backend requerido)
- Redirección a `/gracias.html` con visual glass premium
- Pronto: versión pop-up para mejorar UX sin reload (fase futura)

---

## 🎨 Estilo visual

- Tipografías: `Oswald` + `Poppins`
- Paleta institucional:  
  - Azul primario: `#0A0A63`  
  - Azul secundario: `#1C1C9B`  
  - Blanco, gris claro
- Diseño editorial (mucho espacio en blanco, legibilidad alta)
- Glassmorphism en formularios y elementos destacados

---

## 🔎 SEO & optimización

- Meta tags básicos de SEO incluidos
- Favicon profesional multi-device
- Imágenes optimizadas
- Experiencia de carga rápida (Netlify + GitHub)
- Validado en PageSpeed Insights

---

## 🧪 Funcionalidades

| Elemento            | Comportamiento                                           |
| ------------------- | -------------------------------------------------------- |
| Menú Toggle         | .nav-links alterna la clase .open con transición     |
| ScrollSpy           | Indicador lateral activo según sección en viewport       |
| ScrollReveal.js     | Animaciones suaves de entrada en secciones clave         |
| Botón Catálogo      | Abre el catálogo en nueva pestaña (Hezyine flipbook)     |
| Formulario Contacto | Envía formulario vía FormSubmit + muestra `gracias.html` |


---

## 🖥️ Tecnologías usadas

- HTML5 semántico
- CSS3 con responsive avanzado (flexible grid + media queries optimizados)
- Vanilla JS (sin frameworks) para:
  - Navbar sticky + toggle móvil
  - Animaciones suaves con ScrollReveal
  - ScrollSpy dinámico
- Imágenes servidas desde GitHub optimizadas
- Favicon profesional
- Integración con FormSubmit para contacto
---

## 🚀 Instrucciones para desplegar en producción

1. Clonar el repositorio
2. Editar textos e imágenes según necesidad
3. Subir carpeta a GitHub y conectar con Netlify
4. Asociar dominio en Netlify + habilitar HTTPS + redirección con www

---

🏆 Validaciones de calidad realizadas
✅ Google PageSpeed Insights: rendimiento optimizado
✅ W3C Validator: HTML5 válido
✅ Mobile-friendly test: aprobado
✅ Responsively App: validado manualmente en múltiples dispositivos
✅ Glassmorphism: aplicado de forma coherente y no intrusiva

---

## 🛠️ Estado actual

✅ Responsive optimizado  
✅ Animaciones suaves  
✅ Integración FormSubmit  
✅ Estructura HTML profesional  
✅ Glass effect consistente  
✅ Footer simplificado para mobile  
✅ GitHub + Netlify CI/CD funcionando  

---

## ✨ Mejoras futuras

- Implementar sistema de tracking de pedidos en la landing
- Integración de Pop-up elegante en Contact Form (ya en diseño)
- Mejorar SEO avanzado (Open Graph, Twitter Cards)
- Validación adicional en Lighthouse
- Micro-optimizaciones de CSS

---

## 📫 Contacto

[info@suplidoramaranatha.com](mailto:info@suplidoramaranatha.com)  
[ventas@suplidoramaranatha.com](mailto:ventas@suplidoramaranatha.com)  
[www.suplidoramaranatha.com](https://www.suplidoramaranatha.com)  

---

## 📌 Notas finales

- El diseño está alineado con el **Brand Book MaranaTha**
- Todos los estilos siguen una línea sobria, limpia y funcional
- Ideal para integrarse como plantilla base de futuros micrositios

---

## ⚠️ Disclaimer

Este código es propiedad de **Suplidora MaranaTha** y se ha desarrollado como parte de un proyecto de branding y experiencia premium para el mercado dominicano.

Su uso fuera del entorno de MaranaTha requiere autorización expresa.

---

**Desarrollado con propósito, detalle y visión premium.**

---

© 2025 Suplidora MaranaTha. Todos los derechos reservados.
