# TUTOR

# 🤖 AI Personal Tutor - Your Adaptive Learning Companion

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/MongoDB-6.x-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/OpenAI-GPT--4-412991?style=for-the-badge&logo=openai" alt="OpenAI">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License">
</p>

<p align="center">
  A full-stack, AI-powered personal tutor application that generates hyper-personalized learning modules. It acts as a dedicated AI teacher, creating custom notes, diagrams, and interactive voice lessons to adapt to each user's unique learning style and goals.
</p>

<!-- Optional: Add a GIF or screenshot of your app here -->
<!-- <p align="center">
  <img src="link-to-your-demo-gif.gif" width="800" alt="App Demo">
</p> -->

## ✨ Core Features

- **Dynamic Batch Creation**: Users can create unlimited, personalized learning "batches" by specifying their subject, difficulty level, board (CBSE/State), competitive exam focus, and learning pace.
- **AI-Powered Content Generation**:
  - **Curriculum & Notes**: Leverages **GPT-4** to research and structure a relevant syllabus, then generates detailed, easy-to-understand notes for each chapter.
  - **Smart Diagrams**: Intelligently identifies concepts that require visual explanation and uses **DALL-E 3** to automatically generate clear, custom diagrams and illustrations.
  - **Engaging Voice Lessons**: Utilizes **OpenAI TTS** to create high-quality, human-like voice-guided lessons that explain the notes and diagrams with natural pacing and pauses.
- **Interactive Tutoring Sessions**:
  - **Real-time Interaction**: Uses **Socket.IO** to create a live session where the AI teacher delivers content module by module.
  - **Understanding Checks**: The AI periodically pauses the lesson to ask "Samajh aa raha hai ya nahi?" to ensure the user is keeping up.
  - **Handwritten Solution Analysis**: The AI assigns practice problems, and users can submit their handwritten solutions as images. **GPT-4 Vision** analyzes the solution, provides instant feedback, and gives the correct answer if needed.
- **Structured Learning & Discipline**:
  - **Daily Study Limits**: Enforces a focused learning habit with a daily session limit (e.g., 2 hours).
  - **Daily Homework**: Assigns a mix of easy, medium, and hard practice problems at the end of each session to reinforce learning.

## 🚀 Technology Stack

A MERN-based stack supercharged with AI.

- **Frontend**: React.js, Socket.IO Client
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Real-time Communication**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT), bcrypt.js
- **AI & APIs**:
  - **OpenAI API**:
    - **GPT-4**: For curriculum design, note generation, and interactive chat.
    - **GPT-4 Vision**: For analyzing handwritten solutions.
    - **DALL-E 3**: For diagram generation.
    - **TTS (Text-to-Speech)**: For voice-guided lessons.
- **File Handling**: Multer for handling image uploads.
- **Cloud Storage**: Designed for integration with AWS S3, Cloudinary, or similar services for storing generated images and audio.
- **Scheduling**: `node-schedule` for managing daily tasks and reminders.

## ⚙️ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (local instance or a cloud Atlas URI)
- `npm` or `yarn`

### 1. Backend Setup
