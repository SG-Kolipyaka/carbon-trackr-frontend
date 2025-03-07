# CarbonTrackr - Carbon Footprint Tracker

## Overview
CarbonTrackr is a minimal proof-of-concept web application that helps users track and offset their carbon footprint based on their travel data. The application calculates the carbon footprint and provides AI-generated recommendations to reduce emissions.

## Technologies Used
- **Frontend**: React.js, TypeScript, Vite
- **State Management**: Zustand
- **UI Library**: Shadcn
- **Deployment**: Vercel

## Features
- **Carbon Footprint Calculator**: Users can input their travel details (mode, distance, fuel type, passengers) to calculate their carbon footprint.
- **AI Recommendations**: The system generates recommendations to help users reduce their carbon emissions.
- **Local Storage**: All calculations and recommendations are stored using Zustand for persistence.
- **Minimal UI**: The focus is on functionality rather than aesthetics.

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CarbonTrackr.git
   cd CarbonTrackr
   ```
2. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev  # or yarn dev
   ```
4. Open your browser and navigate to `http://localhost:5173` (or the port Vite provides).

## Deployment
The application is deployed on Vercel. You can access it here:
[CarbonTrackr Live](https://carbon-kh75k9q98-sgkolipyakas-projects.vercel.app/)

## Folder Structure
```
CarbonTrackr/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── store/            # Zustand store for state management
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
├── public/               # Static assets
├── package.json          # Dependencies & scripts
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Future Improvements
- Improve UI/UX with better design elements.
- Integrate more detailed carbon tracking data.
- Provide real-time API-based AI recommendations.
- Add authentication for personalized tracking.

## Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

## License
MIT License

---
🚀 **Happy Tracking!**

