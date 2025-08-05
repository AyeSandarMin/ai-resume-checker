# Resume Analyzer with AI

An AI-powered resume analysis tool that provides detailed feedback to help job seekers optimize their resumes for specific positions and ATS systems.

## Features

- 📄 PDF resume upload and processing
- 🤖 AI-powered resume analysis using Puter AI
- 📊 Comprehensive scoring across multiple categories
- 🎯 Job-specific feedback based on company and role
- 📋 ATS compatibility assessment
- 💡 Detailed improvement suggestions
- 🔒 Secure file storage with Puter cloud services

## How It Works

1. **Upload Resume**: Users upload their PDF resume along with job details (company name, job title, job description)
2. **AI Analysis**: The system uses Puter AI to analyze the resume against the specific job requirements
3. **Detailed Feedback**: Provides scores and suggestions across 5 categories:
   - **ATS Compatibility**: How well the resume passes automated screening
   - **Content Quality**: Relevance and effectiveness of resume content
   - **Structure & Format**: Organization and visual presentation
   - **Tone & Style**: Professional language and communication style
   - **Skills Alignment**: Match between candidate skills and job requirements

## Getting Started

### Prerequisites
- Node.js 18+ 
- Puter account for AI and storage services

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to use the application.

### Build

```bash
npm run build
```

## Tech Stack

- **Frontend**: React 19, React Router 7, TypeScript
- **Styling**: TailwindCSS
- **File Processing**: PDF.js for PDF to image conversion
- **AI Services**: Puter AI for resume analysis
- **Storage**: Puter cloud storage and key-value store
- **State Management**: Zustand

## Configuration

The application requires Puter services for AI analysis and file storage. Ensure you have:
- Puter AI service configured
- Puter file system access
- Puter key-value store access

## Project Structure

```
app/
├── components/     # Reusable UI components
├── routes/         # Application pages
├── lib/           # Utilities and services
├── constants/     # Configuration and sample data
└── types/         # TypeScript type definitions
```

## Deployment

Deploy using Docker or any platform supporting Node.js applications:

```bash
docker build -t resume-analyzer .
docker run -p 3000:3000 resume-analyzer
```
