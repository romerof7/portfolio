---
title: 'Lunar Landing Site Navigator (NASA Space Apps)'
description: 'Web app that, given a lunar site and a date, draws the local horizon with the Sun and Earth above it and answers whether there will be solar power and communication. Built at the NASA Space Apps Challenge 2026 hackathon.'
tech: ['JavaScript', 'three.js', 'Vite', 'Python', 'FastAPI', 'JPL Horizons']
image: '../../../assets/projects/lunar-landing-navigator.png'
imageAlt: 'Sky view from the Odysseus landing site on the Moon: the Sun and Earth above the terrain horizon and, below, the elevation chart of both'
date: 2026-11-15
repo: 'https://github.com/VainstubTomas/NASA-APP-CHALLENGE'
demo: 'https://vizcachasfueradeorbita.vercel.app/?lang=en'
featured: true
---

## What it is about

A team project for the **NASA Space Apps Challenge 2026**, a two-day hackathon. We picked the _Lunar Landing Site Navigator_ challenge: near the Moon's south pole the Sun and Earth barely rise above the horizon, and any mountain can block them. The tool answers one question: **if I land here on this date, will I have Sun, and will I be able to talk to Earth?**

You pick a site and a date, and the app draws the local horizon with the Sun and Earth above it, shows the hours of sunlight and Earth visibility, and counts down to when they set. It can also compare 2 or 3 scenarios side by side. Every number comes from JPL Horizons (NASA) and is checked with tests against saved responses.

## What I did

- **Live API with FastAPI** to query any latitude and longitude on the Moon. Horizons does not allow requests from the browser (CORS), so the web app goes through this API, which validates parameters, caches each query and returns the error instead of making up data. It has Swagger docs and tests.
- **Latitude and longitude form in the web app** that uses that API, with the design decision documented in an ADR.
- **Sun and Earth timeline** with language support.
- **Mission mode:** jumps to the landing day of 14 historic missions.
- **Sky view improvements:** the 360° horizon chart can be dragged to aim the camera, the Sun and Earth glide between samples, the stars rotate with the date, the view can be locked on a body, and there is a language menu with flags.
- Ephemeris download scripts, tests and documentation.

## Technical decisions

- **Precomputed data + optional API:** known sites use JSON generated offline and the app works without the API or a connection; the API is only used for free points.
- **Horizon with real terrain** from the LOLA elevation map at south pole sites; where there is no data, the app says the horizon is ideal.
- **The comparison does not pick a winner:** it marks which scenario has more Sun hours and which has more Earth hours, and the decision is left to the user.
- Web app in four languages (Spanish, English, Hindi and Chinese) and automated tests in JavaScript and Python.

## What I learned

- Working in a large team against the clock, with branches, reviewed pull requests and documented decisions.
- Putting a slow, restrictive external API (CORS, response times) behind a service of our own.
- Presenting astronomical data so that both an engineer and a high-school student can understand it.
