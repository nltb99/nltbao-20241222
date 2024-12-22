
# Cryptocurrency Price Chart

## Overview
This app allows users to search for cryptocurrency coins and view their price charts and related statistics over a specified time range. It provides a clear separation between the Front-End and Back-End, ensuring a modular architecture. It’s built with TypeScript and uses modern technologies like Next.js, React Query, and Tailwind CSS.

## Requirements :
- [x] The user can search coins but not necessarily give us the correct exact coin name
- [x] The search box should show trending coins to suggest users at first when the box has the focus
- [x] User can see their given coin price chart in a specific time range, But we should set the default range at first.
- [x] The user can choose other ranges, But we should not allow options too much
- [ ] User can see their given coin price statistic as well (ohlc)
- [x] Dockerise
- [x] Clear separation of Front-End and Back-End.
- [x] Typescript Only

## Tech Stack:
- Next.js
- React Query
- Tailwind CSS
- TypeScript
- Ant Design
- CoinGecko API

## Running the App Locally:

### Option 1: Using Docker (Recommended)

   ```bash
    # Build
    $ docker-compose build
    
    # Run the application
    $ docker-compose up
    
    # To stop and remove the containers
    $ docker-compose down
   ```

### Option 2: Without Docker
For local development without Docker, follow these steps:

   ```bash
   # Install Dependencies
   $ yarn

   # To start the app locally
   $ yarn dev
   ```
The app will be available at `http://localhost:3000` by default.

## Environment Variables

To configure the CoinGecko API, set the following environment variables in your `.env` file:

```bash
NEXT_PUBLIC_COIN_GEKKO_API_URL=<your_coin_gecko_api_url>
NEXT_PUBLIC_COIN_GEKKO_API_KEY=<your_coin_gecko_api_key>
```

## Notes

- **API Throttling**: As the CoinGecko API key provided is on a free tier, the application may experience slowdowns or limited access during peak usage times. I have implemented a caching mechanism to help reduce the impact of this throttling, ensuring that users have a smoother experience.

## Enjoy the App!

nltb99
