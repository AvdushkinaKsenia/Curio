import faiss
import numpy as np

class FaissIndex:
    def __init__(self, dim: int):
        self.index = faiss.IndexFlatL2(dim)

    def add(self, embeddings: np.ndarray):
        self.index.add(embeddings.astype("float32"))

    def search(self, vector, top_k: int):
        vector = vector.reshape(1, -1).astype("float32")
        distances, indices = self.index.search(vector, top_k)
        return indices[0], distances[0]

    def save(self, path: str):
        faiss.write_index(self.index, path)

    @staticmethod
    def load(path: str):
        index = faiss.read_index(path)
        obj = FaissIndex(index.d)
        obj.index = index
        return obj