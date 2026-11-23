---
title: 'AURA: key fob access control'
description: 'Firmware for doors with an RFID key fob and an electric lock. The door decides on its own and reports to the platform over a mesh network.'
tech: ['ESP-IDF', 'C', 'ESP32-C3', 'RFID', 'MQTT', 'ESP-WIFI-MESH']
kind: 'University project · AURA'
image: '../../../assets/projects/aura-puertas-en.png'
imageAlt: 'System diagram: RFID key fob, RC522 reader, ESP32-C3, relay and door lock, with the magnetic sensor, the buzzer and the mesh network to the AURA platform'
date: 2026-11-13
priority: 2
repo: 'https://github.com/Universidad-Nacional-de-Rafaela/aura-firmware'
featured: true
---

## What it is about

Part of AURA, the UNRaf project to manage resources and access with IoT devices. The university wants to control access to nine offices in Building 2 with proximity key fobs. My group developed the door firmware: a single model (`PUE-RFID`) for all nine boards. It builds, has tests that run on a PC and was tested on a board.

## What it does

- **Opens with an authorized key fob** and logs every access. An unknown fob is rejected and logged.
- **Watches the door:** an alarm if it is left open and an intrusion alert when armed.
- **Arms with two swipes** of the key fob and slows down after 5 rejections in a minute.
- **Is managed remotely:** the platform adds and removes key fobs.
- **Decides on its own and stays locked:** if the network drops or the firmware hangs, the lock engages. It is energized in pulses of 10 s at most.
