---
title: 'AURA: nivel de los tanques de agua'
description: 'Nodo IoT con ESP32-S3 y LoRaWAN que mide el nivel de dos tanques de agua de la terraza y avisa cuando se vacían o rebalsan.'
tech: ['ESP32', 'C++', 'LoRaWAN', 'Python', 'ChirpStack', 'MQTT']
kind: 'Proyecto de facultad · AURA'
image: '../../../assets/projects/aura-tanques-diagrama-es.png'
imageAlt: 'Diagrama del sistema: dos sensores ultrasónicos conectados al ESP32-S3, que envía la distancia por LoRaWAN a ChirpStack; de ahí por MQTT al conector, que calcula nivel y volumen para la plataforma AURA. Los comandos vuelven por LoRaWAN clase C.'
date: 2026-10-21
priority: 4
repo: 'https://github.com/Universidad-Nacional-de-Rafaela/aura-firmware'
gallery:
  - image: '../../../assets/projects/aura-tanques-diagrama-es.png'
    alt: 'Diagrama del sistema: dos sensores ultrasónicos conectados al ESP32-S3, que envía la distancia por LoRaWAN a ChirpStack; de ahí por MQTT al conector, que calcula nivel y volumen para la plataforma AURA. Los comandos vuelven por LoRaWAN clase C.'
  - image: '../../../assets/projects/aura-tanques.jpg'
    alt: 'Los dos tanques de agua de la terraza del Edificio 1'
  - image: '../../../assets/projects/aura-tanques-nodo.jpg'
    alt: 'El nodo en su caja azul con el logo de la UNRaf, montada sobre un riel dentro de un tablero eléctrico'
---

## De qué se trata

Parte de AURA, el proyecto de la UNRaf para administrar recursos con dispositivos IoT. Mi grupo desarrolló el nodo que mide los dos tanques de la terraza del Edificio 1 (1.000 L y 500 L). Está instalado al aire libre desde octubre de 2026 y envía por LoRaWAN, el transporte que AURA usa para los dispositivos de exterior.

## Qué hace

- **Mide la distancia al agua** con un sensor ultrasónico sumergible por tanque.
- **Manda solo la distancia** (4 bytes). El conector de la plataforma calcula nivel y volumen, así las medidas del tanque se corrigen sin reflashear la placa.
- **Avisa una vez** cuando un tanque baja del 20 % o llega al 95 %.
- **Recibe comandos en segundos** (LoRaWAN clase C): medir ahora o cambiar el intervalo de lectura.
- **Se recupera sola:** si no logra unirse a la red, reintenta cada 5 minutos.
