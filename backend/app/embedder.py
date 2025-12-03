from sentence_transformers import SentenceTransformer
from .preprocessing import clean_text

class TextEmbedder:
    def __init__(self):
        # Новая модель, скачивается автоматически
        self.model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

    def encode(self, text: str):
        """Эмбеддинг одной строки"""
        clean = clean_text(text)
        emb = self.model.encode(
            [clean],
            show_progress_bar=False,
            convert_to_numpy=True,
            device="cpu",
            batch_size=1,
        )
        return emb[0]

    def encode_batch(self, texts):
        """Эмбеддинг списка строк"""
        cleaned = [clean_text(t) for t in texts]
        embeddings = self.model.encode(
            cleaned,
            show_progress_bar=True,
            convert_to_numpy=True,
            device="cpu",
            batch_size=16,
        )
        return embeddings