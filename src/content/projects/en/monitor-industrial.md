---
title: 'Industrial control monitor'
description: 'Bidirectional telemetry and control for industrial plants: turns Modbus RTU signals into cloud data with OPC UA and MQTT and shows them in real time.'
tech: ['Python', 'C++', 'JavaScript', 'Modbus RTU', 'OPC UA', 'MQTT', 'WebSocket']
kind: 'University project'
image: '../../../assets/projects/monitor-industrial.png'
imageAlt: 'Industrial control web panel with LED control, input and output values and the status of the Modbus, OPC UA and MQTT communications'
date: 2025-11-01
priority: 5
---

## What it is about

Group project for the Industrial Communication Protocols course: a system to digitize industrial environments and remove information blind spots on a plant floor: see in real time what happens in the field and act on the equipment from a web interface.

## How it works

A **5-layer** architecture that takes signals from the field to the cloud, using these technologies:

- **Modbus RTU over RS485** for the field signals.
- **OPC UA** as the interoperability standard.
- **MQTT** to propagate the data in a scalable way.
- **WebSocket** for a reactive web app that shows the values and controls actuators.

## What the panel shows

Inputs and outputs (a potentiometer, a distance sensor, two buttons and an LED), value sending and the status of every communication link, so you can see right away where something fails.
