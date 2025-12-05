# KISHAN – A Virtual Farmer Assistant  
A multilingual, AI-powered agricultural assistant that helps farmers diagnose plant diseases, get farming advice, and connect with real agricultural experts in real time.

---

## Project Overview  
KISHAN is a hybrid AI system designed to support farmers with quick, accurate, and accessible agricultural guidance.  
It integrates:

- Multilingual AI Chatbot (14 Indian languages).
- Image-based plant disease detection (Hybrid ResNet + CNN – 98% accuracy).
- Direct Farmer - Expert Live Chat.
- Simple web interface built for low-tech users.

The system provides instant automated help while also enabling escalation to human experts for complex issues.

---

## Key Features

###  1. Multilingual AI Chatbot  
- Understands and replies in 14 Indian languages (Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Punjabi, Gujarati, etc.)  
- Handles general farming queries: crop care, irrigation, fertilisers, pest control, etc.  
- Provides fast, conversational, easy-to-understand answers.

###  2. Image-Based Disease Detection  
When a farmer uploads a leaf image, the system processes it using multiple models:

| Model | Accuracy |
|-------|----------|
| ResNet50 | 69% |
| CNN | 89.27% |
| SVM | 70% |
| Random Forest | 71% |
| XGBoost + PCA | 75% |
| Hybrid (ResNet + CNN) | 98% |

- Hybrid model selected for deployment
- Trained on the PlantVillage dataset  
- Provides disease name, severity, treatment & prevention steps

###  3. Real-Time Expert Consultation  
If AI is unsure or the farmer wants human help:  
- The system connects them to a certified agricultural expert  
- Live chat window for real-time conversation  
- Experts can see the image & AI analysis before replying

###  4. Complete Agricultural Ecosystem  
A unified platform that brings together:  
- Disease detection  
- Multilingual chatbot  
- Expert chat  
- Future integrations: weather, soil health, market prices, government schemes  

---

## System Architecture (High-Level)

1. **Farmer Input**
   - Text query → processed by NLP chatbot  
   - Image → processed by ML/DL pipeline  

2. **AI Processing**
   - Preprocessing → normalization, augmentation  
   - Model predictions → Hybrid ResNet+CNN final output  
   - Structured recommendations generated  

3. **Expert Escalation (Optional)**
   - Farmer requests expert  
   - System forwards image + AI output to expert  
   - Expert chats directly with farmer  

4. **Output**
   - Disease diagnosis  
   - Treatment recommendations  
   - Expert advice  
   - Multilingual responses  

---

##  Tech Stack

### **Frontend / Interface**
- HTML, CSS, JavaScript  
- Flask or Node.js backend serving the interface  
- Mobile-friendly UI for rural accessibility  

### **Backend**
- Python-based ML pipeline  
- NLP chatbot (LLM / GenAI)  
- REST API endpoints  

### **Machine Learning Models**
- CNN  
- ResNet50  
- Hybrid ResNet + CNN  
- SVM, Random Forest  
- XGBoost + PCA  

### **Dataset**
- PlantVillage dataset (standard plant disease images)

---

##  Experimental Results

The hybrid ResNet + CNN model achieved 98% accuracy, significantly outperforming all single-model baselines.  
This ensures high reliability in real farm environments.

---

## Novelty & Uniqueness  
- Real-time AI + human expert hybrid decision system  
- Multilingual conversational interface  
- High-accuracy hybrid disease classifier  
- Escalation mechanism for complex agricultural issues  

These unique features differentiate KISHAN from existing agricultural AI tools.

---

## Screenshots 
1. Chatbot responses
<img width="933" height="444" alt="image" src="https://github.com/user-attachments/assets/2a1f97a1-0132-417e-8f3e-8da000873bff" />
 
<img width="940" height="462" alt="image" src="https://github.com/user-attachments/assets/5fec9344-71fc-4ec4-afb3-f1cf2462b3a3" />

The above images demonstrates the system’s capability to handle image-based disease queries submitted by farmers. In this example, the farmer reports an unusual pattern appearing on the leaves of a plant. The proposed method accurately identifies the underlying disease and provides clear, practical recommendations to prevent further spread. This showcases the system’s reliability in real farm conditions and its ability to deliver actionable guidance when farmers need it most.

2. Farmer- Expert chat
<img width="940" height="615" alt="image" src="https://github.com/user-attachments/assets/cbb1f2d1-c7be-4013-98bf-cad6857d6e9e" />

<img width="928" height="611" alt="image" src="https://github.com/user-attachments/assets/7932cb07-01e1-43b6-9e39-fb3cb915bd78" />

The above images illustrate an example of the farmer–expert interaction feature within the proposed system. In this scenario, the farmer requests to speak with an agricultural expert, and the system successfully establishes the connection. The farmer is then able to present his query directly to the expert, who provides informed guidance and helps identify the issue affecting the plant’s leaves. 
This sequence demonstrates the system’s ability to deliver real-time human expertise alongside AI assistance, ensuring farmers receive reliable and personalized support.

- Language examples (Hindi/Tamil)
<img width="828" height="337" alt="image" src="https://github.com/user-attachments/assets/e9381642-a9b5-4438-bf54-d9c0c44ad157" />

<img width="828" height="374" alt="image" src="https://github.com/user-attachments/assets/1fa15f8b-55e7-4b74-be4e-72dfa994549d" />

The above images illustrate the proposed system’s ability to interact with farmers in multiple regional languages. As shown in the examples, the assistant seamlessly communicates in Hindi and Tamil, with support for many other languages as well. This multilingual capability ensures that farmers can receive guidance in the language they are most comfortable with, making the system more accessible and practical for real-world use.


---

## License
This project is for academic and research purposes.

---

