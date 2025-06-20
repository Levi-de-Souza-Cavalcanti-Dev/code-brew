import requests

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
    return filtrados[:6] 