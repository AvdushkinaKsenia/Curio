import re

def clean_text(text: str) -> str:
    """Очистка текста без лемматизации."""
    text = text.lower()
    text = re.sub(r"[^a-zа-яё0-9.,!? ]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text