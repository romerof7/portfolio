---
title: 'AURA: control de acceso con llavero'
description: 'Firmware para puertas con llavero RFID y cerradura eléctrica. La puerta decide sola y avisa a la plataforma por una red mesh.'
tech: ['ESP-IDF', 'C', 'ESP32-C3', 'RFID', 'MQTT', 'ESP-WIFI-MESH']
kind: 'Proyecto de facultad · AURA'
image: '../../../assets/projects/aura-puertas-es.png'
imageAlt: 'Diagrama del sistema: llavero RFID, lector RC522, ESP32-C3, relé y cerradura, con el sensor magnético, el buzzer y la red mesh hacia la plataforma AURA'
date: 2026-11-13
priority: 2
repo: 'https://github.com/Universidad-Nacional-de-Rafaela/aura-firmware'
featured: true
---

## De qué se trata

Parte de AURA, el proyecto de la UNRaf para administrar recursos y accesos con dispositivos IoT. La universidad quiere controlar el acceso a nueve oficinas del Edificio 2 con llaveros de proximidad. Mi grupo desarrolló el firmware de la puerta: un único modelo (`PUE-RFID`) para las nueve placas. Compila, tiene tests que corren en la PC y se probó en placa.

## Qué hace

- **Abre con un llavero autorizado** y registra cada acceso. Un llavero desconocido se rechaza y queda registrado.
- **Vigila la puerta:** alarma si queda abierta y alerta de intrusión si está armada.
- **Se arma con dos pasadas** del llavero y se frena tras 5 rechazos en un minuto.
- **Se administra a distancia:** la plataforma carga y quita llaveros.
- **Decide sola y queda trabada:** si se cae la red o se cuelga el firmware, la cerradura se traba. Se energiza en pulsos de 10 s como máximo.
