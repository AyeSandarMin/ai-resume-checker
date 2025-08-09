# Resumax

AI-powered resume analyzer that helps job seekers optimize their resumes for specific positions and ATS systems.

## Features

- 📄 Upload PDF resumes with drag & drop
- 🤖 AI-powered analysis using Puter AI
- 📊 Score across 5 key categories (ATS, Content, Format, Tone, Skills)
- 💡 Get specific improvement suggestions
- 📱 Modern, responsive design
- 🗂️ Manage all your analyzed resumes

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173)

## How It Works

1. **Upload** - Drop your PDF resume and add job details
2. **Analyze** - AI reviews your resume against job requirements  
3. **Improve** - Get detailed feedback and suggestions
4. **Track** - View all your resumes in one dashboard

## Tech Stack

- React 19 + TypeScript
- TailwindCSS + Framer Motion
- Puter AI for analysis
- PDF.js for file processing

## Scripts

- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Deployment

```bash
docker build -t resumax .
docker run -p 3000:3000 resumax
```