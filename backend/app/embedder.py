from sentence_transformers import SentenceTransformer
from .preprocessing import clean_text

class TextEmbedder:
    def __init__(self):
        # Более мощная модель для embeddings
        self.model = SentenceTransformer("sentence-transformers/all-mpnet-base-v2")

    def encode(self, text: str):
        clean = clean_text(text)
        return self.model.encode([clean])[0]

    def encode_batch(self, texts):
        cleaned = [clean_text(t) for t in texts]
        return self.model.encode(cleaned)