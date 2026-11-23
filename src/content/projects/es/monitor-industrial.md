---
title: 'Monitor de control industrial'
description: 'Telemetría y control bidireccional para plantas industriales: convierte señales Modbus RTU en datos de nube con OPC UA y MQTT y los muestra en tiempo real.'
tech: ['Python', 'C++', 'JavaScript', 'Modbus RTU', 'OPC UA', 'MQTT', 'WebSocket']
kind: 'Proyecto de facultad'
image: '../../../assets/projects/monitor-industrial.png'
imageAlt: 'Panel web de control industrial con el control de un LED, los valores de entradas y salidas y el estado de las comunicaciones Modbus, OPC UA y MQTT'
date: 2025-11-01
priority: 5
---

## De qué se trata

Trabajo en grupo de la materia Protocolos de comunicación industriales: un sistema para digitalizar entornos industriales y eliminar los puntos ciegos de información en una planta: ver en tiempo real qué pasa en el campo y actuar sobre los equipos desde una interfaz web.

## Cómo funciona

Una arquitectura de **5 capas** que lleva las señales del campo a la nube, con estas tecnologías:

- **Modbus RTU sobre RS485** para las señales de campo.
- **OPC UA** como estándar de interoperabilidad.
- **MQTT** para propagar los datos de forma escalable.
- **WebSocket** para una web reactiva que muestra los valores y controla actuadores.

## Qué muestra el panel

Entradas y salidas (potenciómetro, sensor de distancia, dos botones y un LED), envío de valores y el estado de cada enlace de comunicación, para ver enseguida dónde falla algo.
