---
title: 'Lunar Landing Site Navigator (NASA Space Apps)'
description: 'Web que, dado un sitio de la Luna y una fecha, dibuja el horizonte con el Sol y la Tierra encima y responde si habrá energía solar y comunicación. Hecha en el hackatón NASA Space Apps Challenge 2026.'
tech: ['JavaScript', 'three.js', 'Vite', 'Python', 'FastAPI', 'JPL Horizons']
image: '../../../assets/projects/lunar-landing-navigator.png'
imageAlt: 'Vista del cielo desde el sitio de aterrizaje Odysseus en la Luna: el Sol y la Tierra sobre el horizonte con relieve y, abajo, el gráfico de elevación de ambos'
date: 2026-11-15
repo: 'https://github.com/VainstubTomas/NASA-APP-CHALLENGE'
demo: 'https://vizcachasfueradeorbita.vercel.app/?lang=es'
featured: true
---

## De qué se trata

Proyecto que hicimos en equipo para el **NASA Space Apps Challenge 2026**, un hackatón de dos días. Elegimos el desafío _Lunar Landing Site Navigator_: cerca del polo sur de la Luna el Sol y la Tierra apenas asoman sobre el horizonte y cualquier montaña los tapa. La herramienta responde una pregunta: **si aterrizo en este lugar en esta fecha, ¿voy a tener Sol y voy a poder comunicarme con la Tierra?**

Se elige un sitio y una fecha, y la web dibuja el horizonte del lugar con el Sol y la Tierra encima, muestra las horas de luz y de visibilidad de la Tierra, y cuenta cuánto falta para que se oculten. También permite comparar de 2 a 3 escenarios lado a lado. Todos los números salen de JPL Horizons (NASA) y se validan con tests contra respuestas guardadas.

## Qué hice yo

- **API en vivo con FastAPI** para consultar cualquier latitud y longitud de la Luna. Horizons no permite pedidos desde el navegador (CORS), así que la web pasa por esta API, que valida los parámetros, guarda en caché cada consulta y devuelve el error en vez de inventar datos. Tiene documentación Swagger y tests.
- **Formulario de latitud y longitud en la web** que usa esa API, y la decisión de diseño documentada en un ADR.
- **Línea de tiempo del Sol y la Tierra** con soporte de idiomas.
- **Modo misión:** salta al día del alunizaje de 14 misiones históricas.
- **Mejoras de la vista del cielo:** el gráfico del horizonte de 360° se arrastra para apuntar la cámara, el Sol y la Tierra se deslizan entre muestras, las estrellas giran con la fecha, se puede fijar la vista en un cuerpo, y el menú de idioma con banderas.
- Scripts de descarga de efemérides, tests y documentación.

## Decisiones técnicas

- **Datos precalculados + API opcional:** los sitios conocidos usan JSON generados offline y la web funciona sin API ni conexión; la API solo se usa para puntos libres.
- **Horizonte con relieve real** del mapa de elevación LOLA en los sitios del polo sur; donde no hay datos, se avisa que el horizonte es ideal.
- **La comparación no elige un ganador:** marca qué escenario tiene más horas de Sol y cuál más horas de Tierra, y la decisión es de quien usa la herramienta.
- Web en cuatro idiomas (español, inglés, hindi y chino) y tests automáticos en JavaScript y Python.

## Qué aprendí

- Trabajar en un equipo grande a contrarreloj, con ramas, pull requests revisados y decisiones documentadas.
- Integrar una API externa lenta y con limitaciones (CORS, tiempos de respuesta) detrás de un servicio propio.
- Mostrar datos astronómicos de forma que los entienda tanto un ingeniero como un estudiante.
