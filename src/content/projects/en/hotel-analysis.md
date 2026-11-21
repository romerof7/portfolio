---
title: 'Hotel booking analysis and prediction'
description: 'Analysis of over 119,000 bookings from two hotels and an app that predicts monthly occupancy, cancellation probability and customer profile.'
tech: ['Python', 'pandas', 'scikit-learn', 'Streamlit']
image: '../../../assets/projects/hotel-analysis.png'
imageAlt: 'Streamlit app interface: form to predict the monthly occupancy of a hotel and the cancellation of a booking'
date: 2025-11-10
repo: 'https://github.com/FerChaparro27/AA_hotel'
demo: 'https://aa-hotel-booking-loshijosdelstackoverflow.streamlit.app'
video: '/videos/hotel-analysis.mp4'
featured: true
---

## What it is about

A team project for my Computer Engineering degree. We started from a dataset of 119,390 bookings from a City Hotel and a Resort Hotel, with 32 variables per booking. We cleaned the data and ran an exploratory analysis to answer business questions: seasonality, the impact of lead time on cancellations, sales channels, countries of origin and the evolution of the average daily rate. We then trained and compared machine learning models and integrated them into an interactive web app.

## What we did

- **Monthly occupancy prediction** with SVR: R² of 0.86, the best result among four models tested (decision tree, KNN and Bayes).
- **Booking cancellation prediction** with KNN: 80.5% accuracy, above the decision tree (74.7%).
- **Customer segmentation** with K-Means into 4 profiles, from the planning tourist to the family on vacation.
- **Streamlit app** to try the three models with the data of a booking.

## What I learned

- Comparing models with metrics and tuning hyperparameters to improve results.
- Discarding approaches that do not work: Gaussian Naive Bayes ended at 44.8% accuracy.
- Going from models trained in Jupyter notebooks to an interactive app.
