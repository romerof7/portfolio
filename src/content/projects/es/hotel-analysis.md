---
title: 'Análisis y predicción de reservas hoteleras'
description: 'Análisis de más de 119 mil reservas de dos hoteles y una app que predice ocupación mensual, probabilidad de cancelación y perfil del cliente.'
tech: ['Python', 'pandas', 'scikit-learn', 'Streamlit']
image: '../../../assets/projects/hotel-analysis.png'
imageAlt: 'Interfaz de la app en Streamlit: formulario para predecir la ocupación mensual de un hotel y la cancelación de una reserva'
date: 2025-11-10
repo: 'https://github.com/FerChaparro27/AA_hotel'
demo: 'https://aa-hotel-booking-loshijosdelstackoverflow.streamlit.app'
video: '/videos/hotel-analysis.mp4'
featured: true
---

## De qué se trata

Trabajo en equipo de la carrera de Ingeniería en Computación. Partimos de un dataset de 119.390 reservas de un City Hotel y un Resort Hotel, con 32 variables por reserva. Hicimos la limpieza de datos y un análisis exploratorio para responder preguntas de negocio: estacionalidad, impacto del tiempo de anticipación en las cancelaciones, canales de venta, países de origen y evolución de la tarifa diaria. Después entrenamos y comparamos modelos de machine learning y los integramos en una app web interactiva.

## Qué hicimos

- **Predicción de ocupación mensual** con SVR: R² de 0,86, el mejor resultado entre cuatro modelos probados (árbol de decisión, KNN y Bayes).
- **Predicción de cancelación de reservas** con KNN: 80,5 % de accuracy, por encima del árbol de decisión (74,7 %).
- **Segmentación de clientes** con K-Means en 4 perfiles, desde el turista planificador hasta la familia de vacaciones.
- **App en Streamlit** para probar los tres modelos con datos de una reserva.

## Qué aprendí

- Comparar modelos con métricas y ajustar hiperparámetros para mejorar el resultado.
- Descartar enfoques que no funcionan: Naive Bayes Gaussiano quedó en 44,8 % de accuracy.
- Pasar de modelos entrenados en notebooks de Jupyter a una app interactiva.
