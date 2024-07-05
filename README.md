# Random User App

This React app fetches and displays random user information using the Random User API. It includes a button to fetch a new user, a header with a menu, and a card component for displaying user details.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework that provides pre-designed components.
- **Next.js**: A React framework for building server-rendered applications.

## Components

### 1. FetchRandomUserButton

This component fetches a random user from the Random User API and displays their information in a Material-UI Card.
- **File**: `FetchRandomUserButton.tsx`

### 2. Fetch Male and Female Users

Now, you can fetch random male and female users separately. We've added two new buttons for more customization.

- **File**: `FetchFemalUserButton.tsx`
- **File**: `FetchMalelUserButton.tsx`
- **Dependencies**:
  - `@mui/material`: Material-UI components for styling.
  - `@mui/icons-material`: Material-UI icons for additional visual elements.
  - `react`: React library for building UI components.

  _ Dark and light mode is on the project 

### 2. Header

This component represents the app's header, featuring a Material-UI AppBar with a title and a menu.

- **File**: `Header.tsx`
- **Dependencies**:
  - `@mui/material`: Material-UI components for styling.
  - `react`: React library for building UI components.
  - `next/navigation`: Navigation utility for Next.js applications.

### 3. Home Page

This is the main page that combines the Header and RandomUserButton components.

- **File**: `page.tsx`
- **Dependencies**:
  - `react`: React library for building UI components.
  - `../app/components/RandomUserButton`: The RandomUserButton component.
  - `../app/components/Header`: The Header component.

## Branches

- **Main**: The main branch contains the stable and production-ready version of the app.
- **Dev**: The dev branch is used for development and may include the latest features or updates.

## How to Run

1. Install dependencies:

   ```bash
   npm install

## How to Run
    npm run dev

## Push it to netlify