---
title: "Tietoa"
lastmod: 2024-12-01T19:51:00+02:00
---

### Ylläpitäjä
* Ammatti: sovelluskehittäjä / konsultti
* Harrastukset: video- ja lautapelit, juokseminen, kuntosali, lukeminen, matkailu, valokuvaus, laitesukellus
* Kiinnostaa: ohjelmointi, [uusi urbanismi](https://fi.wikipedia.org/wiki/Uusi_urbanismi), yksityisyys, ympäristö
* Persoonallisuus: [ISFJ-T](https://www.16personalities.com/isfj-personality)
* Julkinen [PGP-avain](/files/pgp-public-key.txt)

### Sivut
Sivut sekä blogi on toteutettu [Hugolla](https://gohugo.io/). [Valokuvat](https://photography.saaste.net/) pyörii itse tehdyllä [Portfolio](https://github.com/saaste/portfolio)-sovelluksella. [Linkit](https://links.saaste.net/) puolestaan [Bookmark Managerilla](https://github.com/saaste/bookmark-manager), joka on myös itse tehty. Kaikki sovellukset on toteutettu [Go](https://go.dev/)-ohjelmointikielellä.

Sivuilla oleva haku on toteutettu [Pagefind](https://pagefind.app/)-kirjaston avulla.

[Nyt]({{< ref "/nyt" >}})-sivuilla oleva kuunnelluimpien artistien lista tulee [ListenBrainzista](https://listenbrainz.org). Tein scriptin, joka hakee ListenBrainzin API:sta tilastot ja kirjoittaa ne paikalliseen JSON-tiedostoon, josta Hugo lukee ne aina kun sivuja päivitetään.

Webmention ja pingback on toteutettu itse hostatulla [Go-Jammin'](https://git.brainbaking.com/wgroeneveld/go-jamming)-sovelluksella.

Sivujen HTML on generoitu {{< now >}}. Lähdekoodi löytyy [Githubista](https://github.com/saaste/homepage)