---
title: 'Industrial control monitor'
description: 'Bidirectional telemetry and control system that digitizes an industrial environment: it turns Modbus RTU field signals into cloud data using OPC UA and MQTT, and shows them on a real-time web interface.'
tech: ['Python', 'C++', 'JavaScript', 'Modbus RTU', 'OPC UA', 'MQTT', 'WebSocket']
image: '../../../assets/projects/monitor-industrial.jpg'
imageAlt: 'Industrial control web panel with LED control, input and output values and the status of the Modbus, OPC UA and MQTT communications'
date: 2025-11-01
---

## What it is about

A group project: a bidirectional telemetry and control system designed to digitize industrial environments. The goal is to remove information blind spots on a plant floor: seeing in real time what happens in the field and also acting on the equipment from a web interface.

## How it works

We implemented a **5-layer architecture** that turns field signals into cloud data:

- **Field:** signals arrive over **Modbus RTU on RS485**, a standard widely used in industry.
- **Interoperability:** they are exposed through **OPC UA**, the industrial communication standard.
- **Propagation:** data is distributed with **MQTT**, which scales well to many consumers.
- **Interface:** a reactive web app using **WebSocket** shows values in real time and lets you **control actuators**.

The panel shows input and output values (a potentiometer, a distance sensor and two buttons), lets you switch an LED on and send an analog value, and has a section with the status of every communication link (Modbus slave and master, OPC UA server and client, and MQTT) so you can see right away where something fails.

## What I learned

- Industrial protocols and how they translate into one another: Modbus RTU/RS485, OPC UA and MQTT.
- Designing a layered architecture, where each layer has a clear responsibility.
- Real-time bidirectional communication between a device and a web interface.
