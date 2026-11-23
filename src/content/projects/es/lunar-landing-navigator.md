---
title: 'Lunar Landing Site Navigator'
description: 'Web que muestra el Sol y la Tierra sobre el horizonte de cualquier sitio lunar y responde si habrá energía solar y comunicación.'
tech: ['JavaScript', 'three.js', 'Vite', 'Python', 'FastAPI', 'JPL Horizons']
kind: 'Hackatón NASA'
image: '../../../assets/projects/lunar-landing-navigator.png'
imageAlt: 'Vista del cielo desde el sitio de aterrizaje Odysseus en la Luna: el Sol y la Tierra sobre el horizonte con relieve y, abajo, el gráfico de elevación de ambos'
date: 2026-11-15
priority: 1
repo: 'https://github.com/VainstubTomas/NASA-APP-CHALLENGE'
demo: 'https://vizcachasfueradeorbita.vercel.app/?lang=es'
video: '/videos/lunar-landing-navigator.mp4'
featured: true
---

## De qué se trata

Proyecto del **NASA Space Apps Challenge 2026**. Cerca del polo sur lunar el Sol y la Tierra apenas asoman y una montaña puede taparlos. Elegís un sitio y una fecha, y la web dibuja el horizonte con ambos cuerpos y muestra las horas de luz, las horas con la Tierra a la vista y cuánto falta para que se oculten. Todos los números salen de JPL Horizons (NASA) y se validan con tests.

## Mi parte

- **API en vivo con FastAPI** para cualquier latitud y longitud de la Luna. Horizons no admite pedidos del navegador, así que la API los intermedia, los guarda en caché y devuelve el error en vez de inventar datos.
- **Formulario de coordenadas** que usa esa API.
- **Modo misión:** salta al día del alunizaje de 14 misiones.
- **Vista del cielo:** horizonte arrastrable, animaciones y menú de idiomas con banderas.
