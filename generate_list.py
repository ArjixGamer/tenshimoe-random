import requests
import re
import json

regex = r"\<li class=\"anime-\d*\"\>\n\<a href=\"(.*?)\""

ALL_ANIME = []
page = 1

while True:
    r = requests.get(f"https://tenshi.moe/anime?page={page}").text
    page+=1
    if "No entries found." in r:
        break
    ALL_ANIME.extend(list(re.findall(regex, r)))

with open('all_anime.json', 'w') as f:
    json.dump(ALL_ANIME, f, indent=4)
