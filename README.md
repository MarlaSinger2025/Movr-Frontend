# MOVR

A sports & activity community app for a English-speaking audience. Create a profile, browse, create, and join local sports activities in your area.

- live deployed app on render: 

## About this project

Movr started as the final project for my Web Development bootcamp at WBS Coding School, built in two weeks by a two-person team. The original repo lives under https://github.com/Movr-Sportsapp . This repo is my own copy, which I've continued refining and updating independently after the bootcamp ended.

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS + Daisyui 
- React Router
- Leaflet + OpenStreetMap for maps
- lucide-react (icons)
- Backend: Node/Express + MongoDB, 

## Features

- Fast access as demo user via demo login button for recruiters. No credentials needed - one click logs you in as a seedes demo user
- Create user profile, including gender options and profile image
- Browse & filter events (sport, city, date, address+radius)
- Create events with geocoded meeting points
- Join/leave events
- User profiles with created/joined events
- Edit own user profile

## Team & Contribution:
- Antonia Albrecht (github: MarlaSinger2025) : Main owner and contributor of frontend, additional help in Backend
- Riya Alex (github: riya1997) : Main owner and contributor of backend, additional help in Frontend

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file:
VITE_API_BASE_URL=(localhost or render url)

e.g. VITE_API_BASE_URL=http://localhost:5000

> ⚠️ Never commit your `.env` file. Make sure it's listed in `.gitignore`.
