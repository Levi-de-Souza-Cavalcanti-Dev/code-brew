import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

# Configurar a API do Google Gemini
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

def generate_simple_summary(title, description):
    """
    Gera um resumo simples em português quando a Gemini não está disponível
    """
    # Palavras-chave para identificar o tipo de notícia
    keywords = {
        'android': 'Android',
        'iphone': 'iPhone', 
        'google': 'Google',
        'apple': 'Apple',
        'samsung': 'Samsung',
        'ai': 'Inteligência Artificial',
        'artificial intelligence': 'Inteligência Artificial',
        'app': 'Aplicativo',
        'software': 'Software',
        'update': 'Atualização',
        'new': 'Novo',
        'release': 'Lançamento'
    }
    
    # Converter para minúsculas para comparação
    text = (title + ' ' + description).lower()
    
    # Identificar palavras-chave
    found_keywords = []
    for eng, pt in keywords.items():
        if eng in text:
            found_keywords.append(pt)
    
    # Gerar resumo simples
    if found_keywords:
        main_topic = found_keywords[0]
        return f"Novidades sobre {main_topic} que podem interessar aos usuários."
    else:
        return "Nova tecnologia promete melhorar a experiência dos usuários."

def generate_news_summary(title, description, content=""):
    """
    Gera um resumo curto em português de uma notícia usando a Google Gemini API
    """
    try:
        # Configurar o modelo
        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        
        # Preparar o prompt para resumos curtos
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
        
        # Gerar o resumo
        response = model.generate_content(prompt)
        
        # Extrair o texto da resposta
        summary = response.text.strip()
        
        # Limpar o texto se necessário
        if summary.startswith('Sinopse:'):
            summary = summary[8:].strip()
        
        # Garantir que não seja muito longo
        if len(summary) > 120:
            summary = summary[:117] + "..."
        
        return summary
        
    except Exception as e:
        print(f"Erro ao gerar resumo com Gemini: {e}")
        # Usar resumo simples como fallback
        return generate_simple_summary(title, description) 