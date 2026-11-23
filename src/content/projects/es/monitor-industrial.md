---
title: 'Monitor de control industrial'
description: 'Sistema de telemetría y control bidireccional que digitaliza un entorno industrial: convierte señales de campo Modbus RTU en datos de nube con OPC UA y MQTT, y los muestra en una web en tiempo real.'
tech: ['Python', 'C++', 'JavaScript', 'Modbus RTU', 'OPC UA', 'MQTT', 'WebSocket']
image: '../../../assets/projects/monitor-industrial.jpg'
imageAlt: 'Panel web de control industrial con el control de un LED, los valores de entradas y salidas y el estado de las comunicaciones Modbus, OPC UA y MQTT'
date: 2025-11-01
---

## De qué se trata

Proyecto que hicimos en grupo: un sistema de telemetría y control bidireccional pensado para digitalizar entornos industriales. La idea es eliminar los puntos ciegos de información en una planta: poder ver en tiempo real qué pasa en el campo y también actuar sobre los equipos desde una interfaz web.

## Cómo funciona

Implementamos una **arquitectura de 5 capas** que transforma las señales de campo en datos de nube:

- **Campo:** las señales llegan por **Modbus RTU sobre RS485**, un estándar muy usado en la industria.
- **Interoperabilidad:** se exponen con **OPC UA**, el estándar de comunicación industrial.
- **Propagación:** los datos se distribuyen con **MQTT**, que escala bien a muchos consumidores.
- **Interfaz:** una web reactiva con **WebSocket** muestra los valores en tiempo real y permite **controlar actuadores**.

El panel muestra los valores de entradas y salidas (un potenciómetro, un sensor de distancia y dos botones), permite encender un LED y enviar un valor analógico, y tiene una sección con el estado de cada enlace de comunicación (Modbus esclavo y maestro, servidor y cliente OPC UA, y MQTT) para saber enseguida dónde falla algo.

## Qué aprendí

- Los protocolos industriales y cómo se traducen unos a otros: Modbus RTU/RS485, OPC UA y MQTT.
- Diseñar una arquitectura por capas, donde cada una tiene una responsabilidad clara.
- Comunicación bidireccional en tiempo real entre un dispositivo y una interfaz web.
