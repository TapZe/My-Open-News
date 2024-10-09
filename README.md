# Open News

### Final Project: News Web App API on Program Web Development + React Bootcamp IBM X Hacktiv8

**Open News** is a web application that displays the latest news on various topics, including international news, Indonesian news, and a monthly programming section. It also allows users to search for news based on their own queries. The application uses data from the [NYTimes](https://developer.nytimes.com) to fetch real-time, daily updated news.. **The demo website is deployed at [my-open-news.vercel.app](https://my-open-news.vercel.app)**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Features

- Latest News Display: Shows the latest news across various categories, including International, Indonesian, and Programming.
- Search Functionality: Users can search for news based on their custom queries, making it easier to find relevant articles.
- Save Favorite News: Users can save articles they want to keep for later reading, and these preferences are persisted across sessions using Redux and Redux Persist.
- Real-Time News Updates: Fetches daily news updates in real-time using the New York Times API, ensuring users receive the latest headlines and stories.
- Organized Sections: Users can open category pages for easy category navigation, allowing them to explore content quickly and efficiently across different news sections.
- Responsive Design: The application is optimized for both mobile and desktop devices, providing a seamless experience across various screen sizes.
- User-Friendly Interface: Intuitive UI with clear navigation and minimalistic design for a pleasant browsing experience.
- Custom Icons: Uses custom-designed SVG icons to enhance the visual appeal of the site.
- Loading States & Error Handling: Visual indicators and error handling ensure smooth API requests, keeping users informed about loading or network issues.
- Fast Performance: Optimized performance through lazy loading and minimized API calls for a fast and smooth user experience.

## Technologies Used

- **Frontend**: React, TailwindCSS, daisyUI.
- **State Management**: `Redux` for global state management and `Redux Persist` to persist the saved news across browser sessions.
- **API Fetching**: JavaScript (using `axios`).
- **Styling**: TailwindCSS and daisyUI for responsive and customizable UI components, providing a clean and modern look.
- **Icons**: Custom SVG icons for the web icon.
- **React Hooks**: Utilized hooks like `useState` and `useEffect` to manage local state and lifecycle methods.
- **Routing**: React Router for smooth client-side navigation and route management.
- **Build Tools**: Vite for fast bundling and hot-reload during development.
- **Deployment**: Deployed on Vercel for seamless cloud hosting with fast global CDN and easy integration.

## Installation
Follow these steps to set up this project locally:

1. **Clone this repository:**

   ```
   git clone https://github.com/TapZe/My-Open-News.git
   ```

2. **Navigate to the project directory:**

   ```
   cd My-Open-News
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Set up your environment variables:**
   Create an `.env` file by renaming or copying `.env.example` in the root directory and add your API key and URL:

   ```
   VITE_NYT_API_KEY_1=
   VITE_NYT_API_KEY_2=
   VITE_NYT_API_KEY_3=
   VITE_NYT_API_BASE_URI=
   ```
   Add your actual API key and base URI from the New York Times API (you can add just the first key).

5. **Install dependencies:**

   ```
   npm run dev
   ```
   This will start the development server, and you can view the project by navigating to http://localhost:5173.
