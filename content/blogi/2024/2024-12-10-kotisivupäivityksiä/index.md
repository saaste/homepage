---
title: "Kotisivupäivityksiä"
description: "Tein pieniä muutoksia näiden sivujen ulkoasuun ja toiminnallisuuteen."
date: 2024-12-10T19:00:00+0200
lastmod: 2024-12-10T19:00:00+0200
draft: false
slug: kotisivupäivityksiä
aiheet:
    - tekniikka
---
Tein pieniä muutoksia näiden sivujen ulkoasuun ja toiminnallisuuteen.

<!--more-->

Tästä on nyt reilu vuosi, kun vaihdoin kotisivut [Hugon](https://gohugo.io) päälle. Minulla ei ollut sovelluksesta aikaisempaa kokemusta, joten jouduin opettelemaan kaiken alusta.

Vaikka sainkin sivut tehtyä, uuden tekniikan käyttäminen näkyi lopputuloksessa. En ymmärtänyt täysin kuinka Hugon eri komponentit toimivat tai miten sivupohjia kannattaa käyttää. Tuloksena oli aikamoinen sekasotku, jota oli konstikas ylläpitää. Kun muutin yhtä kohtaa, jokin toinen kohta hajosi.

Vuoden aikana olen oppinut Hugosta kaikenlaista, mutta sekavien sivupohjien takia opittujen juttujen käyttäminen on hankalaa ja ärsyttävää. Kyllästyin lopulta vanhoihin pohjiin ja kirjoitin kaiken uusiksi. Siinä sivussa askartelin myös CSS-tyylitiedoston uusiksi. Oikeat web designerit itkevät varmasti verisiä kyyneliä tuotokseni nähdessään, mutta ainakin se on minulle selkeämpi.

Sivupohjia ja tyylitiedostoja säätäessä päätin muuttaa myös sivuston ulkoasua. En lähtenyt keksimään pyörää uudelleen, mutta tein joitakin pieniä muutoksia.

- Leivänmurunavigointi on nyt selkeästi sisällöstä erillään
- Poistin yläpalkista tylsän logon[^1] ja lisäsin tekstiosiin pieniä tehosteita
- [Blogi]({{< ref "/blogi" >}}) listaa nyt vain muutaman uusimman kirjoituksen ja linkit vuosiarkistoihin
- Blogikirjoitusten aihelista on toistaiseksi poistettu (tästä kohta lisää)
- Blogikirjoitusten Mastodon-integraatio on toistaiseksi poistettu (tästäkin kohta lisää)
- Sivuilla näkyy tieto siitä milloin sen sisältöä on viimeksi muutettu
- Alaotsikoiden tyyliä on muutettu
- Sivut käyttävät [JetBrains Mono](https://www.jetbrains.com/lp/mono/) -fonttia
- Läjäpäin pieniä hienosäätöjä ja tyylimuutoksia

### Hugon hierarkiat eivät toimi
Sivujen rakenne tuntui aikaisemmin jotenkin kaoottiselta. Selkiytin sitä hieman ja samalla lisäsin leivänmurunavigoinnin, jotta vierailijalle on selvää, missä hän on menossa.

Leivänmurunavigointi paljasti kuitenkin Hugosta yhden tylsän piirteen.

Hugo mahdollistaa kaikkien sivujen lajittelun eri hierarkioihin. Vakiona sivut vai lajitella tageilla tai kategorioilla, mutta näiden lisäksi hierarkioita voi luoda itse lisää. Käytin aikaisemmin hierarkioita siihen, että lajittelin blogikirjoitukset eri aihealueisiin.

Hierarkioiden ongelmana on se, että ne ovat täysin irrallaan sivuston muusta rakenteesta. Esimerkiksi tällä hetkellä blogikirjoitukset on lajiteltu vuoden mukaan, jolloin niiden polku on `/blogi/2024/blogikirjoitus`. Jos kirjoitus kuuluu `hyvinvointi` aihealueeseen, siitä syntyy linkki, jonka polku on `/aiheet/hyvinvointi` - sillä ei siis ole enää mitään tekemistä blogin kanssa. Ongelma korostuu leivänmurunavigoinnin myötä, sillä sama rakenne näkyy myös siellä.

Ymmärrän kyllä, mistä tämä johtuu. Hugossa on ajateltu, että minkä tahansa sivun voi asettaa mihin tahansa hierarkiaan.

Koetin selvittää, että tukeeko Hugo sivurakenteeseen sidottuja hierarkioita, mutta en ainakaan itse onnistunut tällaista löytämään. Tästä syystä otin aihealueet kokonaan pois. En ole muutenkaan varma, että ovatko ne erityisen hyödyllisiä henkilökohtaisessa blogissa.

### Mastodon-integraatio mietintämyssyyn
Aikaisemmin blogikirjoituksessa näkyi Mastodonista tulleet favoritet. Myös tämä ominaisuus sai luvan lähteä. Se tuntui täysin irralliselta ja toteutin sen lähinnä siksi, että halusin tutustua Mastodonin rajapintaan.

Ominaisuus tuntui päälle liimatulta senkin takia, ettei blogikirjoituksessa ollut linkkiä tööttiin, josta favoritet käytiin noukkimassa. Kaiken lisäksi minulla on Mastodon-tililläni päällä ominaisuus, joka poistaa kolme kuukautta vanhat töötit automaattisesti. Yhteys blogikirjoituksiin siis katkeaa joka tapauksessa.

En ole yhtään varma mikä minun Mastodon/Fediverse -tulevaisuus on, mutta kaikesta huolimatta minulla on joitakin ideoita siitä, miten voisin integroida Mastodonin paremmin osaksi kotisivuja. Aika näyttää milloin jaksan ne toteuttaa.

[^1]: Uusi on työn alla. Minulla on ajatus, mutta taidot puuttuvat