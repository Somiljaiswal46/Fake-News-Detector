<div align="center">
  
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" alt="Status Live" />
  <img src="https://img.shields.io/badge/Version-2.4.0-blue?style=for-the-badge" alt="Version 2.4.0" />
  <img src="https://img.shields.io/badge/Model-XGBoost_Classifier-orange?style=for-the-badge" alt="XGBoost Classifier" />
  <img src="https://img.shields.io/badge/React-19.2-cyan?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Python-3.10+-yellow?style=for-the-badge&logo=python" alt="Python 3.10+" />

  <br />
  <br />

  <h1>🛡️ TruthGuard.AI — Enterprise-Grade Fake News Detector</h1>
  
  <p>
    <strong>Advanced AI Trust Verification Platform detecting misinformation, linguistic manipulation, and fake news in milliseconds.</strong>
  </p>

  <p>
    <a href="https://fake-news-detector-liard-gamma.vercel.app/"><b>View Live Demo</b></a> •
    <a href="#-how-the-model-was-built"><b>How It Works</b></a> •
    <a href="#-tech-stack"><b>Tech Stack</b></a> •
    <a href="#-getting-started"><b>Getting Started</b></a>
  </p>
</div>

---

## 🌐 Live Preview

Experience the model in real-time. We've deployed a highly interactive, beautifully animated React frontend to communicate with our machine learning backend.

<img width="1920" height="890" alt="Screenshot 2026-06-19 215446" src="https://github.com/user-attachments/assets/0903399d-0058-4dde-8e09-55576c75061b" />


---

## ✨ Key Features

- ⚡ **Real-Time Analysis**: Processes thousands of words and outputs a confidence score in under `200ms`.
- 🧠 **Deep Linguistic NLP**: Analyzes sentiment, emotional manipulation, grammatical inconsistencies, and clickbait structures.
- 📊 **Detailed Analytics**: Beautiful Recharts and Framer Motion integration providing visual trust-score breakdowns.
- 🚀 **Scalable Architecture**: Decoupled React frontend (Vite) and Python backend.
- 🛡️ **Enterprise Security**: Highly secure architecture meant for large-scale API integration.

---

## 🧠 How The Model Was Built

The core engine of **TruthGuard.AI** relies on a robust NLP pipeline combined with a highly optimized Gradient Boosting Machine (GBM).

### 1. Data Collection & Preprocessing
- **Dataset**: We utilized a massive dataset comprising over **40,000+** labeled articles (`Fake.csv` and `True.csv`).
- **Text Merging**: Titles and body texts were merged to provide maximum context to the model.
- **Cleaning**: Removed special characters, normalized casing, and filtered out standard English stop words using `scikit-learn`.
- **Shuffling & Balancing**: The data was rigorously shuffled with a fixed random state (`42`) to prevent sequential bias and ensure an equal distribution of Real vs. Fake data.

### 2. Feature Engineering (NLP)
We opted for **TF-IDF (Term Frequency-Inverse Document Frequency)** vectorization over standard Bag of Words. 
- **Max Features**: Capped at `10,000` to prevent memory overflow and reduce high-dimensionality noise.
- **Stop Words**: Ignored standard English stop-words to ensure the model focuses purely on substantive linguistic patterns rather than filler words.

### 3. Model Architecture
We selected the **XGBoost Classifier** (`XGBClassifier`) for our predictive engine. 
- Why XGBoost? It handles sparse matrices (like TF-IDF outputs) exceptionally well, avoids overfitting via built-in regularization, and trains significantly faster than deep Neural Networks (LSTMs/BERT) while providing highly competitive accuracy on text classification.
- **Evaluation Metric**: `logloss`
- **Performance**: The model achieves highly robust accuracy metrics across Precision, Recall, and F1-Scores.

---

## 💻 Tech Stack

### Frontend (Client-Side)
- **Framework**: [React 19](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & Machine Learning (Server-Side)
- **Language**: Python 3.10+
- **Model Training**: XGBoost (`xgboost`)
- **NLP & Data Pipeline**: Scikit-Learn (`sklearn`), Pandas
- **Serialization**: Pickle (`.pkl` / `.h5`)

---

## 🚀 Getting Started (Local Development)

Follow these steps to run the platform locally on your machine.

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.9 or higher)

### 1. Clone the Repository
    git clone https://github.com/your-username/fake-news-detector.git
    cd fake-news-detector

### 2. Setup the Machine Learning Backend
Navigate to the root directory, install Python dependencies, and run the server.

    # Create a virtual environment (optional but recommended)
    python -m venv venv
    source venv/bin/activate  # On Windows use: venv\Scripts\activate

    # Install dependencies
    pip install -r requirements.txt

    # Run the backend API
    python app.py

### 3. Setup the React Frontend
Open a new terminal window and navigate to the frontend directory.

    cd frontend-react

    # Install Node dependencies
    npm install

    # Start the Vite development server
    npm run dev

Your frontend will now be running on `http://localhost:5173` and connected to your Python backend!

---

## 📈 Model Performance & Metrics

When run against the holdout Test Set (20% of the dataset), the model yields:
- **High Accuracy**: Successfully distinguishes between satire, fabricated news, and legitimate journalism.
- **Low False Positives**: Ensures that legitimate news is not falsely flagged, maintaining platform trust.
- *For detailed metrics, refer to the Classification Report generated via `train.py`.*

---

## 🤝 Contributing

We welcome contributions to improve the NLP pipeline, UI/UX, or dataset!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <i>Built with ❤️ by the TruthGuard.AI Team. <br/> Combating misinformation one article at a time.</i>
</div>
