---
title: 'AURA: key fob access control for doors'
description: 'ESP-IDF firmware for doors with an RFID proximity key fob, a magnetic sensor and an electric lock, which makes decisions on its own and reports to the platform over a mesh network.'
tech: ['ESP-IDF', 'C', 'ESP32-C3', 'RFID', 'MQTT', 'ESP-WIFI-MESH']
date: 2026-11-13
repo: 'https://github.com/Universidad-Nacional-de-Rafaela/aura-firmware'
featured: true
---

## What it is about

The second part of my work on AURA, the Universidad Nacional de Rafaela project to manage resources and access with IoT devices. The university wanted to control access to nine offices on the second floor of Building 2 with proximity key fobs: who can enter each space, plus a log of entries.

My group developed the door firmware: a single model (`PUE-RFID`) that serves all nine boards. It reads the key fob, unlocks an electric lock, watches the door with a magnetic sensor and talks to the platform through a mesh network. Today it builds and has automated tests; it still needs to be tested on a board inside the mesh and installed.

## What it does

- **Opens with an authorized key fob:** it sends a current pulse to the lock, beeps and logs the access. An unknown fob is rejected and logged with its UID.
- **Watches the door:** it warns if the door is left open too long, with an alarm that gets louder (capped at 2 minutes).
- **Arms and disarms** with two swipes of the key fob, and if someone opens the door while it is armed, the intrusion alert is the first thing sent.
- **Slows down abuse:** after 5 rejections in a minute, it blocks reads for 30 seconds and raises an alert.
- **Is managed remotely:** the platform adds and removes key fobs with commands (`tarjeta_agregar`, `tarjeta_quitar`), compares the list with a hash (CRC-32) and reloads it if it does not match.

## Technical decisions

- **The door decides on its own.** If the network fails, the door keeps working. The platform supervises and manages the list, but does not drive the lock in real time.
- **A single resting state: locked.** The lock is only energized in a short pulse, capped at 10 s with a per-minute limit, because it burns out if left energized. An `esp_timer` locks it even if the logic hangs, and a watchdog reboots the board if something stops responding. A power cut, a reboot or a firmware fault leaves the door locked.
- **Pure, testable logic.** The door state machine, the pulse limit, the key fob list and the sound patterns live in plain C headers with no board dependencies, with tests that run on a PC (including a simulated 100 days of uptime).
- **Security designed in:** remote opening is disabled at compile time, events are not lost without a network (queue with `ingest_id`) and the sensor is wired so that a cut cable reads as "door open".
- **One binary for nine doors.** Whatever differs per door (pulse length, sensor type, warning delay) is changed through remote configuration.

## What I learned

- Programming with ESP-IDF: tasks, timers, NVS, watchdog and SPI communication with the RC522 reader.
- Designing for failure: what happens with a power cut, a hang or a tampered sensor, and documenting what is still unresolved.
- Separating logic from hardware so it can be tested without the board.
- Working with architecture decision records (ADRs) and a contract shared with other teams.
