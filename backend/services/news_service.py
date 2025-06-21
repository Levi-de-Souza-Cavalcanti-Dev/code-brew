import requests
from .ai_service import generate_news_summary

def get_tech_news(api_key):
    url = f'https://newsapi.org/v2/top-headlines?category=technology&apiKey={api_key}'
    response = requests.get(url)
    data = response.json()
    artigos = data.get('articles', [])
    palavras_jogos = ['game', 'jogo', 'xbox', 'playstation', 'nintendo', 'ps5', 'ps4']
    def nao_e_jogo(artigo):
        title = artigo.get('title') or ''
        description = artigo.get('description') or ''
        texto = (title + ' ' + description).lower()
        return not any(p in texto for p in palavras_jogos)
    filtrados = list(filter(nao_e_jogo, artigos))
    
    # Pegar os primeiros 6 artigos e adicionar resumos
    artigos_finais = []
    for artigo in filtrados[:6]:
        # Gerar resumo em português
        resumo = generate_news_summary(
            title=artigo.get('title', ''),
            description=artigo.get('description', ''),
            content=artigo.get('content', '')
        )
        
        # Adicionar o resumo ao artigo
        artigo['resumoGPT'] = resumo
        artigos_finais.append(artigo)
    
    return artigos_finais 