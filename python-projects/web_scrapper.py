import requests
from bs4 import BeautifulSoup

url = 'https://www.tabulaturi.ro/acorduri/diana-matei/am-atins-cerul-cu-mana-12669'
r = requests.get(url)
print(r)

soup = BeautifulSoup(r.content, 'lxml')
song = soup.find_all('pre', {'class': 'tab-text'})

# title1 = title[0].getText()
print(song)
