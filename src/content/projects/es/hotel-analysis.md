---
title: 'Análisis y predicción de reservas hoteleras'
description: 'Análisis de más de 119 mil reservas de dos hoteles y una app que predice ocupación, cancelaciones y perfil del cliente.'
tech: ['Python', 'pandas', 'scikit-learn', 'Streamlit']
kind: 'Proyecto de facultad'
image: '../../../assets/projects/hotel-analysis.png'
imageAlt: 'Interfaz de la app en Streamlit: formulario para predecir la ocupación mensual de un hotel y la cancelación de una reserva'
date: 2025-11-10
priority: 3
repo: 'https://github.com/FerChaparro27/AA_hotel'
demo: 'https://aa-hotel-booking-loshijosdelstackoverflow.streamlit.app'
video: '/videos/hotel-analysis.mp4'
featured: true
---

## De qué se trata

Partimos de 119.390 reservas de un City Hotel y un Resort Hotel, con 32 variables cada una. Las limpiamos y analizamos para responder preguntas de negocio (estacionalidad, cancelaciones, canales de venta y evolución de la tarifa), y después entrenamos modelos y los integramos en una app web.

## Qué hicimos

- **Ocupación mensual** con SVR: R² de 0,86, el mejor de cuatro modelos probados.
- **Cancelaciones** con KNN: 80,5 % de accuracy, contra 74,7 % del árbol de decisión y 44,8 % de Naive Bayes Gaussiano.
- **Segmentación de clientes** con K-Means en 4 perfiles, del turista planificador a la familia de vacaciones.
- **App en Streamlit** para probar los tres modelos con los datos de una reserva.
