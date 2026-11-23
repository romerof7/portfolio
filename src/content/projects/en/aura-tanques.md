---
title: 'AURA: water tank level monitor'
description: 'IoT node with an ESP32-S3 and LoRaWAN that measures the level of two rooftop water tanks and alerts when they run low or overflow.'
tech: ['ESP32', 'C++', 'LoRaWAN', 'Python', 'ChirpStack', 'MQTT']
kind: 'University project · AURA'
image: '../../../assets/projects/aura-tanques-diagrama-en.png'
imageAlt: 'System diagram: two ultrasonic sensors connected to the ESP32-S3, which sends the distance over LoRaWAN to ChirpStack; from there over MQTT to the connector, which computes level and volume for the AURA platform. Commands return over LoRaWAN class C.'
date: 2026-10-21
priority: 4
repo: 'https://github.com/Universidad-Nacional-de-Rafaela/aura-firmware'
gallery:
  - image: '../../../assets/projects/aura-tanques-diagrama-en.png'
    alt: 'System diagram: two ultrasonic sensors connected to the ESP32-S3, which sends the distance over LoRaWAN to ChirpStack; from there over MQTT to the connector, which computes level and volume for the AURA platform. Commands return over LoRaWAN class C.'
  - image: '../../../assets/projects/aura-tanques.jpg'
    alt: 'The two water tanks on the Building 1 terrace'
  - image: '../../../assets/projects/aura-tanques-nodo.jpg'
    alt: 'The node in its blue UNRaf-branded enclosure, mounted on a rail inside an electrical panel'
---

## What it is about

Part of AURA, the UNRaf project to manage resources with IoT devices. My group developed the node that measures the two tanks on the roof of Building 1 (1,000 L and 500 L). It has been installed outdoors since October 2026 and sends over LoRaWAN, the transport AURA uses for outdoor devices.

## What it does

- **Measures the distance to the water** with one submersible ultrasonic sensor per tank.
- **Sends only the distance** (4 bytes). The platform connector computes level and volume, so tank dimensions can be fixed without reflashing the board.
- **Alerts once** when a tank drops below 20% or reaches 95%.
- **Receives commands within seconds** (LoRaWAN class C): measure now or change the reading interval.
- **Recovers on its own:** if it cannot join the network, it retries every 5 minutes.
