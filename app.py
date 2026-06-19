import streamlit as st
import numpy as np
import pickle
import os
import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Download required NLTK data if not present
try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')
try:
    nltk.data.find('corpora/wordnet')
except LookupError:
    nltk.download('wordnet')
try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords')
try:
    nltk.data.find('corpora/omw-1.4')
except LookupError:
    nltk.download('omw-1.4')


# Page Config
st.set_page_config(page_title="Fake News Detector", page_icon="📰", layout="centered")

@st.cache_resource
def load_models():
    """Load model and tokenizer only once"""
    try:
        model = load_model('fake_news_model.h5')
        with open('tokenizer.pkl', 'rb') as handle:
            tokenizer = pickle.load(handle)
        return model, tokenizer
    except Exception as e:
        return None, None

model, tokenizer = load_models()

def process_text(text):
    """Clean the text using the exact same logic as training"""
    text = re.sub(r'\s+', ' ', text, flags=re.I) # Remove extra white space
    text = re.sub(r'\W', ' ', str(text)) # Remove special characters
    text = re.sub(r'\s+[a-zA-Z]\s+', ' ', text) # Remove single characters
    text = re.sub(r'[^a-zA-Z\s]', '', text) # Remove non-alphabetical
    text = text.lower()

    words = word_tokenize(text)
    lemmatizer = WordNetLemmatizer()
    words = [lemmatizer.lemmatize(word) for word in words]

    stop_words = set(stopwords.words("english"))
    Words = [word for word in words if word not in stop_words]
    Words = [word for word in Words if len(word) > 3]

    indices = np.unique(Words, return_index=True)[1]
    cleaned_text = np.array(Words)[np.sort(indices)].tolist()
    return cleaned_text

def predict_news(news_text):
    if not model or not tokenizer:
        return None
    
    cleaned = process_text(news_text)
    seq = tokenizer.texts_to_sequences([cleaned])
    padded = pad_sequences(seq, maxlen=150)
    
    prediction = model.predict(padded)
    class_idx = np.argmax(prediction, axis=1)[0]
    
    return class_idx

# Build UI
st.title("📰 AI Fake News Detector")
st.markdown("Paste a news article below to check if it's Real or Fake.")

if model is None:
    st.error("Model files not found! Please make sure you have run the Jupyter notebook and generated `fake_news_model.h5` and `tokenizer.pkl`.")
else:
    user_input = st.text_area("News Article Text:", height=200, placeholder="Paste your news text here...")

    if st.button("Check News", type="primary"):
        if user_input.strip() == "":
            st.warning("Please enter some text to check.")
        else:
            with st.spinner("Analyzing..."):
                result = predict_news(user_input)
                
                if result == 1:
                    st.success("✅ **Prediction: REAL News**")
                    st.balloons()
                elif result == 0:
                    st.error("❌ **Prediction: FAKE News**")
                else:
                    st.warning("Could not make a prediction.")
