import re
import pymorphy2

morph = pymorphy2.MorphAnalyzer()

def clean_text(text: str) -> str:
    """Очистка + лемматизация текста."""
    text = text.lower()
    text = re.sub(r"[^a-zа-яё0-9 ]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()

    words = text.split()
    lemmas = [
        morph.parse(word)[0].normal_form
        for word in words
        if len(word) > 2
    ]

    return " ".join(lemmas)