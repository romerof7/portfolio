---
title: 'Lunar Landing Site Navigator'
description: 'Web app that shows the Sun and Earth above the horizon of any lunar site and answers whether there will be solar power and communication.'
tech: ['JavaScript', 'three.js', 'Vite', 'Python', 'FastAPI', 'JPL Horizons']
kind: 'NASA hackathon'
image: '../../../assets/projects/lunar-landing-navigator.png'
imageAlt: 'Sky view from the Odysseus landing site on the Moon: the Sun and Earth above the terrain horizon and, below, the elevation chart of both'
date: 2026-11-15
priority: 1
repo: 'https://github.com/VainstubTomas/NASA-APP-CHALLENGE'
demo: 'https://vizcachasfueradeorbita.vercel.app/?lang=en'
video: '/videos/lunar-landing-navigator.mp4'
featured: true
---

## What it is about

A **NASA Space Apps Challenge 2026** project. Near the Moon's south pole the Sun and Earth barely rise above the horizon and a mountain can block them. You pick a site and a date, and the app draws the horizon with both bodies and shows the hours of sunlight, the hours with Earth in view and a countdown to when they set. Every number comes from JPL Horizons (NASA) and is checked with tests.

## My part

- **Live API with FastAPI** for any latitude and longitude on the Moon. Horizons does not accept browser requests, so the API sits in between, caches them and returns the error instead of making up data.
- **Coordinates form** that uses that API.
- **Mission mode:** jumps to the landing day of 14 missions.
- **Sky view:** a draggable horizon, animations and a language menu with flags.
