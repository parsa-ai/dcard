# DCard

![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwind-css)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-green?logo=leaflet)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

**DCard** is a modern web application built with **Next.js 16** (using the App Router), **React 19**, and **TypeScript**. It features an interactive map integration using **Leaflet** and **React-Leaflet**, along with UI components from **Lucide React** icons. The project is styled with **Tailwind CSS** and includes geosearch functionality.

This appears to be a dashboard-based application (likely an admin panel or personal dashboard), as the root route redirects to `/dashboard`. It supports map-based features such as location searching and display.

### Live Demo
View the deployed version: [https://dcard-five.vercel.app](https://dcard-five.vercel.app)

## Features
- **Next.js App Router** for modern routing and server-side capabilities
- Full **TypeScript** support for type safety
- Interactive maps with **Leaflet** and **React-Leaflet**
- Geolocation search powered by **leaflet-geosearch**
- Beautiful, responsive UI with **Tailwind CSS** and **Lucide React** icons
- Custom font support (via local fonts in `lib/fonts`)
- Ready for production deployment on Vercel

## Prerequisites
- Node.js 18 or higher

## Installation and Setup
1. Clone the repository:

```bash
git clone https://github.com/parsa-ai/dcard.git
cd dcard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will automatically redirect to the dashboard.

## Build for Production

```bash
npm run build
npm run start
```

## Deployment
The easiest way to deploy this project is on **Vercel**:

[Deploy to Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Leaflet Documentation](https://leafletjs.com/)
- [React-Leaflet](https://react-leaflet.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or issue on GitHub. 🚀