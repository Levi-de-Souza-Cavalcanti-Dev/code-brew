import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

def generate_news_summary(title, description, content=""):
    """
    Gera um resumo curto em português de uma notícia usando a Google Gemini API
    """
    try:
        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        
        prompt = f"""
        Analise esta notícia de tecnologia e crie uma sinopse curta em português brasileiro.
        
        Título: {title}
        Descrição: {description}
        
        Instruções:
        - Escreva apenas 2-4 frases curtas (máximo 100 caracteres)
        - Foque no ponto principal da notícia
        - Use linguagem simples e direta
        - Deve ser como uma sinopse de filme - apenas para despertar interesse
        - Não inclua detalhes técnicos complexos
        
        Sinopse:
        """
        
        response = model.generate_content(prompt)
        summary = response.text.strip()
        
        # Limpar e truncar se necessário
        if summary.startswith('Sinopse:'):
            summary = summary[8:].strip()
        
        return summary[:120] + "..." if len(summary) > 120 else summary
        
    except Exception as e:
        print(f"Erro ao gerar resumo com Gemini: {e}")
        return _generate_fallback_summary(title, description)

def _generate_fallback_summary(title, description):
    """
    Gera um resumo simples quando a Gemini não está disponível
    """
    keywords = {
        'android': 'Android', 'iphone': 'iPhone', 'google': 'Google',
        'apple': 'Apple', 'samsung': 'Samsung', 'ai': 'Inteligência Artificial',
        'app': 'Aplicativo', 'software': 'Software', 'update': 'Atualização',
        'new': 'Novo', 'release': 'Lançamento', 'phone': 'Smartphone'
    }
    
    text = (title + ' ' + description).lower()
    found_keywords = [pt for eng, pt in keywords.items() if eng in text]
    
    main_topic = found_keywords[0] if found_keywords else "tecnologia"
    return f"Novidades sobre {main_topic} que podem interessar aos usuários." 