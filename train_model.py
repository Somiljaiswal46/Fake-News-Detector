import pandas as pd
import numpy as np
import pickle
import re
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' # Hide TF warnings

from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense, Bidirectional
from tensorflow.keras.callbacks import EarlyStopping

print("[1/5] Loading datasets...")
try:
    Fake = pd.read_csv("dataset/Fake.csv")
    True_news = pd.read_csv("dataset/True.csv")
except Exception as e:
    print("Error loading CSVs. Make sure 'dataset/Fake.csv' and 'dataset/True.csv' exist.")
    exit(1)

Fake['label'] = 0
True_news['label'] = 1

News = pd.concat([Fake, True_news], ignore_index=True)
News.drop_duplicates(inplace=True)

def fast_clean(text):
    text = str(text)
    text = re.sub(r'^.*?(?:Reuters|reuters).*?-\s*', '', text) # Remove Reuters tag
    text = re.sub(r'https?://\S+|www\.\S+', '', text) # remove URLs
    text = re.sub(r'<.*?>', '', text) # remove HTML
    return text

print("[2/5] Cleaning and shuffling text data...")
News['text'] = News['text'].apply(fast_clean)
News = News.sample(frac=1, random_state=42).reset_index(drop=True)

X = News['text'].values
y = News['label'].values

print("[3/5] Tokenizing text sequences...")
vocab_size = 10000
maxlen = 150

tokenizer = Tokenizer(num_words=vocab_size, oov_token='<OOV>')
tokenizer.fit_on_texts(X)

X_seq = tokenizer.texts_to_sequences(X)
X_pad = pad_sequences(X_seq, maxlen=maxlen, padding='post', truncating='post')

print("[4/5] Building the Neural Network (LSTM)...")
model = Sequential([
    Embedding(vocab_size, 64, input_length=maxlen),
    Bidirectional(LSTM(64, return_sequences=True)),
    Bidirectional(LSTM(32)),
    Dense(64, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

print("[5/5] Training the Model... This will take a few minutes. Go grab a coffee!")
callback = EarlyStopping(monitor='val_loss', patience=1, restore_best_weights=True)

model.fit(
    X_pad, y, 
    epochs=3, 
    batch_size=128, 
    validation_split=0.2, 
    callbacks=[callback]
)

print("\nSaving Model and Tokenizer to disk...")
model.save('fake_news_model.h5')

with open('tokenizer.pkl', 'wb') as handle:
    pickle.dump(tokenizer, handle, protocol=pickle.HIGHEST_PROTOCOL)

print("DONE! The real ML Model is now ready for deployment.")
