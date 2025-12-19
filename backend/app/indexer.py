import faiss
import numpy as np
from pathlib import Path

class FaissIndex:
    def __init__(self, dim: int):
        self.index = faiss.IndexFlatIP(dim) # Inner Product = cosine similarity

    def add(self, embeddings: np.ndarray):
        self.index.add(embeddings.astype("float32"))

    def search(self, vector, top_k: int):
        vector = vector.reshape(1, -1).astype("float32")
        scores, indices = self.index.search(vector, top_k)
        return indices[0], scores[0]

    def save(self, path):
        # Приводим Path к строке, если нужно
        if isinstance(path, Path):
            path = str(path)
        faiss.write_index(self.index, path)

    @staticmethod
    def load(path):
        if isinstance(path, Path):
            path = str(path)
        index = faiss.read_index(path)
        obj = FaissIndex(index.d)
        obj.index = index
        return obj
