---
title: "Tekoälybottien estäminen Nginx Proxy Managerissa"
description: "Olen läpensä kyllästynyt tekoälysekoiluun ja halusin varmistaa, etteivät omat sisältöni eivät päädy tekoälybottien ja -crawlereiden materiaaliksi."
date: 2024-04-13T00:45:00+03:00
lastmod: 2024-04-13T00:45:00+03:00
draft: false
slug: tekoalybottien-estaminen
aiheet:
    - tekniikka
resources:
    - name: cover
      src: cover.jpg
      title: 3D-mallinnettu robotti
---
Olen läpensä kyllästynyt tekoälysekoiluun ja halusin varmistaa, etteivät omat sisältöni eivät päädy tekoälybottien ja -crawlereiden materiaaliksi.

<!--more-->

Pyöritän omia sivujani [Nginx Proxy Managerilla](https://nginxproxymanager.com/). Loppujen lopuksi se on vain Nginx, mutta sen päälle on rakenneltu nätti käyttöliittymä ja sitä on helppo ajaa Dockerissa. Koska AI-botit eivät välttämättä noudata `robots.txt` tiedostoa, estäminen on hyvä tehdä suoraan serverin puolella.

Luo Nginx Proxy Managerin alla olevaan alihakemistoon seuraava tiedosto: `data/nginx/custom/server_proxy.conf`. Tiedoston sisältö lisätään Nginxin server-konfiguraation loppuun. Voit lukea lisää asetustiedostoista [Custom Nginx Configurations -dokumentaatiosta](https://nginxproxymanager.com/advanced-config/#custom-nginx-configurations).

Lisää tiedostoon alla oleva sisältö:
{{< highlight nginx >}}
if ($http_user_agent ~* (anthropic-ai|bytespider|ccbot)) {
    return 444;
}
{{< /highlight >}}

Tämä katsoo pyyntöjen `User-Agent` -headerin ja palauttaa 444-koodin, mikäli header sisältää jonkin listatuista termeistä. 444 on [Nginx:n oma HTTP-koodi](https://http.dev/444), joka tarkoittaa käytännössä yhteyden katkaisua ilman minkäänlaista vastausta.

Lopuksi sinun on käynnistettävä Nginx Proxy Manager uudelleen.

Yllä olevassa esimerkissä botteja on listattu vain kolme: `anthropic-ai`, `bytespider` sekä `ccbot`. Alla olevista linkeistä löydät pidempiä listoja ja sivuilla on myös lisää ohjeita AI-roskan estämiseen:
- [Dark Visitors](https://darkvisitors.com/)
- [Block the Bots that Feed "AI" Models by Scraping Your Site](https://neil-clarke.com/block-the-bots-that-feed-ai-models-by-scraping-your-website/) (Neil Clarke)
- [Go Ahead and Block AI Web Crawlers](https://coryd.dev/posts/2024/go-ahead-and-block-ai-web-crawlers/) (Cory Dransfeldt)
- [A list of AI agents and robots to block](https://github.com/ai-robots-txt/ai.robots.txt) (Cory Dransfeldt)

Linuxissa suodatinlistan toimivuutta on helppo testata esimerkiksi cURL-työkalulla:
{{< highlight shell >}}
curl -A "bytespider" https://example.com
{{< /highlight >}}

Sama onnistuu myös selaimella esimerkiksi *User Agent Switcher and Manager* -lisäosalla, joka löytyy sekä [Firefoxille](https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher/) että [Chromelle](https://chromewebstore.google.com/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg). Useimmissa selaimissa se onnistuu myös ilman lisäosia, mutta kuinka se tehdään, jää sinun selviteltäväksi.
