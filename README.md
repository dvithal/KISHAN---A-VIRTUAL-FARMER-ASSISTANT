# KISHAN — A Virtual Farmer Assistant

*Empowering farmers with AI-driven crop disease diagnosis, real-time chat support, and expert consultations.*

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-000000?style=for-the-badge&logo=socketdotio&logoColor=white)
![Groq AI](https://img.shields.io/badge/Groq_AI-000000?style=for-the-badge)

---
## Patent

This project is associated with the published patent:

**Patent Title:** *A hybrid virtual farmer assistance system and a method for agricultural disease diagnosis and advisory support*  
**Publication Number:** IN202641032886 A1  

# About

KISHAN is an AI-powered virtual farming assistant designed to help farmers make smarter decisions, improve crop yields, and reduce losses.

It provides:

- Instant AI Chat — Ask any farming question and get immediate, context-aware responses powered by Groq (LLaMA 3.3 70B).
- Image-Based Disease Diagnosis — Upload a photo of your crop and receive a CNN-powered prediction of the disease along with detailed treatment advice.
- Live Expert Connection — Seamlessly switch from AI mode to a live human expert for personalized, in-depth consultations.

---

# Architecture

```text
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (client.html)                 │
│         Browser-based chat UI with Socket.IO            │
└────────────┬───────────────────────┬────────────────────┘
             │  WebSocket (Chat)     │  HTTP POST (Image)
             ▼                       ▼
┌─────────────────────────────────────────────────────────┐
│               NODE.JS SERVER (server.js)                │
│                                                         │
│ • Express + Socket.IO                                   │
│ • Routes messages to AI or Expert                       │
│ • Handles image uploads via Multer                      │
│ • Calls Groq API for AI responses                       │
└────────────┬────────────────────────────────────────────┘
             │ HTTP POST (Image → Prediction)
             ▼
┌─────────────────────────────────────────────────────────┐
│           PYTHON ML SERVER (predict_server.py)          │
│                                                         │
│ • Flask REST API                                        │
│ • Loads CNN model                                       │
│ • Returns disease prediction + confidence               │
└─────────────────────────────────────────────────────────┘
```

---

# Key Features

| Feature | Description |
|---------|-------------|
| AI Chatbot | Real-time conversational assistant powered by Groq (LLaMA 3.3 70B) |
| Crop Disease Detection | CNN model trained on the PlantVillage dataset to classify 15 disease categories |
| Expert Mode | Type **expert** in chat to connect with a live agricultural specialist |
| Image Upload | Upload crop photos for instant AI or expert analysis |
| Real-Time Communication | Socket.IO powered bidirectional messaging |
| Dark Mode UI | Modern web interface optimized for usability |

---

# Supported Disease Classes

The CNN model identifies **15 disease categories** across three crop types.

<details>
<summary>Click to view all supported disease classes</summary>

- Pepper Bell - Bacterial Spot
- Pepper Bell - Healthy
- Potato - Early Blight
- Potato - Late Blight
- Potato - Healthy
- Tomato - Bacterial Spot
- Tomato - Early Blight
- Tomato - Late Blight
- Tomato - Leaf Mold
- Tomato - Septoria Leaf Spot
- Tomato - Spider Mites
- Tomato - Target Spot
- Tomato - Mosaic Virus
- Tomato - Yellow Leaf Curl Virus
- Tomato - Healthy

</details>

---

# Tech Stack

## Backend

- Node.js + Express
- Socket.IO
- Multer
- Groq SDK
- python-shell

## Machine Learning Server

- Python
- Flask
- TensorFlow
- Keras
- NumPy

## Machine Learning Models

- CNN
- Random Forest
- XGBoost

## Frontend

- HTML
- CSS
- JavaScript
- Socket.IO Client

## Dataset

PlantVillage Dataset

- 54,000+ crop leaf images
- 15 disease categories
- Pepper
- Potato
- Tomato

---

# Getting Started

## Prerequisites

- Node.js v18+
- Python 3.8+
- pip
- Groq API Key

---

## Clone Repository

```bash
git clone https://github.com/mengji-dhanush/KISHAN---A-VIRTUAL-FARMER-ASSISTANT.git

cd KISHAN---A-VIRTUAL-FARMER-ASSISTANT
```

---

## Install Node.js Dependencies

```bash
npm install
```

---

## Install Python Dependencies

```bash
pip install flask tensorflow numpy
```

---

## Configure Environment Variables

Create a `.env` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

---

## Train or Download the CNN Model

The trained model (`plant_disease_cnn.h5`) is not included because of GitHub's file size limit.

### Option A

Train using `CNN.ipynb`.

### Option B

Use a pretrained model provided separately.

Place the trained model inside the project root.

---

## Start Python Prediction Server

```bash
python predict_server.py
```

Runs on

```
http://localhost:8000
```

---

## Start Node.js Server

```bash
node server.js
```

Runs on

```
http://localhost:5000
```

---

## Launch the Application

Open

```
http://localhost:5000
```

or open `client.html`.

---

# Project Structure

```text
KISHAN---A-VIRTUAL-FARMER-ASSISTANT/

├── client.html
├── server.js
├── predict_server.py
├── plant_disease_cnn.h5
├── CNN.ipynb
│
├── ML MODELS
│   ├── random_forest.ipynb
│   └── XGBoost.ipynb
│
├── PlantVillage
├── PlantVillage_split
├── uploads
├── package.json
├── .env
├── .gitignore
└── README.md
```

---

# How It Works

## AI Chat Flow

1. Farmer joins the chat.
2. Types a farming-related question.
3. Message is sent to the Node.js server.
4. Server forwards the query to Groq (LLaMA 3.3 70B).
5. AI response is streamed back in real time.

---

## Disease Diagnosis Flow

1. Farmer uploads a crop leaf image.
2. Image is sent to the Node.js server.
3. Server forwards the image to the Flask prediction server.
4. CNN predicts the disease.
5. Prediction is sent to Groq.
6. Groq generates symptoms, causes, and treatment advice.
7. Results are returned to the farmer.

---

## Expert Mode Flow

1. Farmer types **expert**.
2. System switches to Expert Mode.
3. Messages and uploaded images are routed to agricultural experts.
4. Experts reply directly through the live chat.

---

# Screenshots

## AI Chat

<p align="center">
<img width="933" height="444" alt="image" src="https://github.com/user-attachments/assets/28338fcc-7728-4256-b04f-f84da6d81cbd" />
</p>

---

## Disease Detection

<p align="center">
<img width="940" height="462" alt="image" src="https://github.com/user-attachments/assets/a317d922-d5e6-48ef-8774-14bfcdfd5e0f" />
</p>

---

## Expert Consultation

<p align="center">
<img width="940" height="615" alt="image" src="https://github.com/user-attachments/assets/07c02748-f334-458f-bc96-6c81ef03d93a" />
<img width="728" height="543" alt="image" src="https://github.com/user-attachments/assets/f950118d-32d8-4fb2-9f5d-f7604c6ddc69" />
</p>

---

## Multilingual Support

<p align="center">
<img width="828" height="337" alt="image" src="https://github.com/user-attachments/assets/98359c00-90b2-4211-81f1-7d6cc49f3be3" />
<img width="828" height="374" alt="image" src="https://github.com/user-attachments/assets/0b6e5405-b412-4742-af71-b6480054c804" />

</p>

---

# Contributing

Contributions are welcome.

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes.

```bash
git commit -m "Add amazing feature"
```

4. Push to the branch.

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request.

---

# License

This project is licensed under the ISC License.

---

# Acknowledgements

- PlantVillage Dataset
- Groq
- TensorFlow
- Socket.IO
- Flask
- Express.js
- Node.js

---

*"Empowering farmers with smart AI solutions."*
