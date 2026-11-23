---
title: 'Hotel booking analysis and prediction'
description: 'Analysis of over 119,000 bookings from two hotels and an app that predicts occupancy, cancellations and customer profile.'
tech: ['Python', 'pandas', 'scikit-learn', 'Streamlit']
kind: 'University project'
image: '../../../assets/projects/hotel-analysis.png'
imageAlt: 'Streamlit app interface: form to predict the monthly occupancy of a hotel and the cancellation of a booking'
date: 2025-11-10
priority: 3
repo: 'https://github.com/FerChaparro27/AA_hotel'
demo: 'https://aa-hotel-booking-loshijosdelstackoverflow.streamlit.app'
video: '/videos/hotel-analysis.mp4'
featured: true
---

## What it is about

We started from 119,390 bookings from a City Hotel and a Resort Hotel, with 32 variables each. We cleaned and analyzed them to answer business questions (seasonality, cancellations, sales channels and rate evolution), then trained models and integrated them into a web app.

## What we did

- **Monthly occupancy** with SVR: R² of 0.86, the best of four models tested.
- **Cancellations** with KNN: 80.5% accuracy, versus 74.7% for the decision tree and 44.8% for Gaussian Naive Bayes.
- **Customer segmentation** with K-Means into 4 profiles, from the planning tourist to the vacationing family.
- **Streamlit app** to try the three models with a booking's data.
