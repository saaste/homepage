---
title: "Kotisivut Hugolla: Asetustiedosto ja päävalikko"
description: "Kolmas osa käy läpi Hugon asetustiedoston sekä päävalikoiden tekemisen."
date: 2024-12-29T18:52:00+0200
lastmod: 2024-12-29T18:52:00+0200
draft: false
slug: hugo-osa-3
aiheet:
    - tekniikka
sarjat:
    - "Kotisivut Hugolla"
params:
  serie_toc_title: "Asetustiedosto ja päävalikko"
---
Kolmas osa käy läpi Hugon asetustiedoston sekä päävalikoiden tekemisen.

<!--more-->

### Asetustiedosto

Kun loit kotisivuprojektisi, Hugo lisäsi sen juureen *hugo.toml* tiedoston. Avaa tiedosto. Se näyttää todennäköisesti tältä:


{{< highlight toml >}}
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
theme = 'minun-teema'
{{< /highlight >}}

Tässä tiedostossa määritellään koko sivustoa koskevia asetuksia. Oletuksena asetustiedostossa on vain kolme kohtaa (sekä lisäämäsi *theme*-asetus), mutta Hugossa on [läjäpäin asetuksia](https://gohugo.io/getting-started/configuration/#all-configuration-settings), joihin voit vaikuttaa. Oletuksena ovat:

- *baseUrl*, joka määrittää sivujesi osoitteen
- *languageCode*, joka määrittää sivujesi kielen
- *title*, joka määrittää sivujesi nimen/otsikon

Esikatselussa *baseURL* -asetuksella ei ole merkitystä, mutta se kannattaa asettaa oikeaksi, ennen kuin julkaiset sivut. Mikäli julkaiset sivut suomeksi, voit asettaa *languageCode* asetukseen arvoksi *fi*. *Title* määrittää sivun nimen, joka näkyy selaimen otsikkopalkissa. Huomasitkin varmaan, että tämä teksti näkyi myös esikatselussa. Voit muuttaa sen nyt haluamaksi, esimerkiksi:

{{< highlight toml >}}
baseURL = 'https://example.org/'
languageCode = 'fi'
title = 'Minun kotisivut'
theme = 'minun-teema'
{{< /highlight >}}

### Päävalikko

Aikaisemmassa osassa mainitsin, että teema voi määrittää sivujen sisältöjä (vaikka en sitä suosittelekaan). Tämä pätee myös asetuksiin. Teeman asetukset on määritetty *themes/minun-teema/hugo.toml* tiedostossa. Avaa se ja sen pitäisi näyttää tältä:

{{< highlight toml >}}
baseURL = 'https://example.org/'
languageCode = 'en-US'
title = 'My New Hugo Site'

[[menus.main]]
name = 'Home'
pageRef = '/'
weight = 10

[[menus.main]]
name = 'Posts'
pageRef = '/posts'
weight = 20

[[menus.main]]
name = 'Tags'
pageRef = '/tags'
weight = 30

[module]
  [module.hugoVersion]
    extended = false
    min = "0.116.0"
{{< /highlight >}}

Tästä asetustiedostosta löytyy samat kolme asetusta, jotka ovat projektin juuresta. Mikäli samat asetukset löytyvät molemmista, juuressa oleva on se, jota käytetään. Voit siis poistaa kaikki kolme huoletta.

Seuraavaksi on kolme *menus.main* asetusryhmää. Saatoitkin ehkä tässä kohtaa tajuta, että tämä on se paikka, josta esikatselussa näkyvä päävalikko tuli.

Osa asetuksista sisältää läjän muita asetuksia. *Menus* on juuri sellainen. Käytännössä *[[menus.main]]* määrittelee valikon, jonka nimi on *main*. Sinulla voisi olla myös toinen valikko, esimerkiksi *[[menus.sivupalkki]]*.

Tämän alle määritellään, mitä kyseisessä valikossa näkyy. Jokaisella valikon elementillä on kolme asetusta:

- *name*, joka määrittää valikossa näkyvän tekstin
- *pageRef*, joka määrittää, mihin valikon linkki viittaa
- *weight*, joka määrittää, missä järjestyksessä valikon elementit esitetään

Esimerkissä on vain yksi valikko, jonka nimi on *main*. Tähän valikkoon kuuluu kolme elementtiä: Home, Posts ja Tags.

Asetustiedoston lopussa on lisäksi *module*-ryhmä, jonka alla on *hugoVersion*-asetus. Mikäli teema käyttää jotain ominaisuutta, joka on käytössä ainoastaan tietyissä Hugon versiossa, tällä asetuksella voi kertoa sen. Sinun ei tarvitse tässä kohtaa välittää siitä.

### Asetusten yksinkertaistaminen
Ajattelen itse, että päävalikko on sisällön tapaan asia, joka ei yleensä ole riippuvainen teemasta. Tästä syystä valikon määritteleminen teeman asetustiedostossa ei tunnu mielekkäältä.

Voit helpottaa elämääsi poistamalla teeman asetustiedostosta kaiken muun, paitsi *module* asetuksen. Valikkoon liittyvät asetukset voit siirtää projektin juuressa olevaan asetustiedostoon. Et kuitenkaan tarvitse esimerkin Posts ja Tags linkkejä, joten ne voi poistaa. Lisäksi Home-linkin voit muuttaa suomeksi.

Muutosten jälkeen teeman alla oleva asetustiedosto *themes/minun-teema/hugo.toml* näyttää tältä:

{{< highlight toml >}}
[module]
  [module.hugoVersion]
    extended = false
    min = "0.116.0"
{{< /highlight >}}

Juuressa oleva asetustiedosto *hugo.toml* näyttää puolestaan tältä:

{{< highlight toml >}}
baseURL = 'https://example.org/'
languageCode = 'fi'
title = 'Minun kotisivut'
theme = 'minun-teema'

[[menus.main]]
name = 'Koti'
pageRef = '/'
weight = 10
{{< /highlight >}}

Saatat miettiä, miksi asioita voi määritellä eri paikoissa ja miksi Hugo tarjoaa useita eri tapoja tehdä samoja asioita. Syynä tähän on se, että Hugo pyrkii palvelemaan kaikenlaisia tarpeita. Muutaman sivun kotisivulla voi olla hyvin erilaiset tarpeet verrattuna tuhansien alasivujen kokoiseen yrityssivuun.

Tähän mennessä olemme käyneet läpi sisältöjä sekä asetustiedostoja, mutta emme ole juurikaan pureutunut siihen, kuinka sivun ulkonäköön voi vaikuttaa. Se on seuraavan osan aiheena.