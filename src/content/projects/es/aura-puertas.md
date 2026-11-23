---
title: 'AURA: control de acceso con llavero para puertas'
description: 'Firmware en ESP-IDF para puertas con llavero de proximidad RFID, sensor magnético y cerradura eléctrica, que decide sola y avisa a la plataforma por una red mesh.'
tech: ['ESP-IDF', 'C', 'ESP32-C3', 'RFID', 'MQTT', 'ESP-WIFI-MESH']
date: 2026-11-13
repo: 'https://github.com/Universidad-Nacional-de-Rafaela/aura-firmware'
featured: true
---

## De qué se trata

Segunda parte de mi trabajo en AURA, el proyecto de la Universidad Nacional de Rafaela para administrar recursos y accesos con dispositivos IoT. La universidad planteó controlar el acceso a nueve oficinas del segundo piso del Edificio 2 con llaveros de proximidad: quién puede entrar a cada espacio y un registro de los ingresos.

Mi grupo desarrolló el firmware de la puerta: un único modelo (`PUE-RFID`) que sirve para las nueve placas. Lee el llavero, destraba una cerradura eléctrica, vigila la puerta con un sensor magnético y se comunica con la plataforma a través de una red mesh. Hoy compila y tiene tests automáticos; falta probarlo en placa dentro de la mesh e instalarlo.

## Qué hace

- **Abre con un llavero autorizado:** manda un pulso de corriente a la cerradura, suena un pitido y registra el acceso. Un llavero desconocido se rechaza y se registra con su UID.
- **Vigila la puerta:** avisa si queda abierta de más, con una alarma sonora que va subiendo (con tope de 2 minutos).
- **Se arma y se desarma** con dos pasadas del llavero, y si alguien abre estando armada, la alerta de intrusión es lo primero que sale.
- **Se frena ante abusos:** tras 5 rechazos en un minuto, bloquea las lecturas 30 segundos y avisa.
- **Se administra a distancia:** la plataforma carga y quita llaveros con comandos (`tarjeta_agregar`, `tarjeta_quitar`), compara la lista con un hash (CRC-32) y recarga si no coincide.

## Decisiones técnicas

- **La puerta decide sola.** Si falla la red, la puerta sigue funcionando. La plataforma supervisa y administra la lista, pero no maneja la cerradura en tiempo real.
- **Un solo estado de reposo: trabada.** La cerradura solo se energiza en un pulso corto, con tope de 10 s y un límite por minuto, porque se quema si queda energizada. Un `esp_timer` la traba aunque la lógica se cuelgue, y un watchdog reinicia la placa si algo no responde. Un corte de luz, un reinicio o una falla del firmware dejan la puerta trabada.
- **Lógica pura y testeable.** La máquina de estados de la puerta, el tope del pulso, la lista de llaveros y los patrones de sonido están en headers en C sin dependencias de la placa, con tests que corren en la PC (incluso simulando 100 días sin reiniciar).
- **Seguridad pensada desde el diseño:** la apertura remota viene deshabilitada al compilar, los eventos no se pierden sin red (cola con `ingest_id`) y el sensor se cablea para que un cable cortado se lea como "puerta abierta".
- **Un binario para nueve puertas.** Lo propio de cada una (duración del pulso, tipo de sensor, aviso) se cambia por configuración remota.

## Qué aprendí

- Programar en ESP-IDF: tareas, temporizadores, NVS, watchdog y comunicación SPI con el lector RC522.
- Diseñar pensando en las fallas: qué pasa con un corte de luz, un cuelgue o un sensor sabotado, y dejar documentado lo que todavía no se resolvió.
- Separar la lógica del hardware para poder probarla sin la placa.
- Trabajar con decisiones de arquitectura (ADR) y un contrato compartido con otros equipos.
