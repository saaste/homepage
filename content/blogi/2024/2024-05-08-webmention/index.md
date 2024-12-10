---
title: "Webmention: keskustelevat sivustot"
description: "Lisäsin blogiin tuen webmentioneille. Lisäys ei todennäköisesti näy blogissa juuri mitenkään, sillä webmentionit eivät ole saavuttaneet erityisen suurta suosiota."
date: 2024-05-08T13:00:00+03:00
lastmod: 2024-05-08T13:00:00+03:00
draft: false
slug: webmention
aiheet:
    - tekniikka
resources:
    - name: cover
      src: cover.jpg
      title: "Kirjoituksen otsikko ja taustalla kuva työpöydästä, jossa on muistivihko, kännykkä sekä viherkasvi. Taustakuva: tr_chel"
---

Lisäsin blogiin tuen webmentioneille. Lisäys ei todennäköisesti näy blogissa juuri mitenkään, sillä webmentionit eivät ole saavuttaneet erityisen suurta suosiota. Kyseessä ei ole kuitenkaan uusi tekniikka. Ensimmäiset askeleet se otti 2000-luvun alussa, mutta myös modernin Internetin syövereissä kytee tarve, johon webmentionit saattavat olla ratkaisu.

<!--more-->

### Mikä on webmention?
[Webmention](https://www.w3.org/TR/webmention/) on tekniikka, jonka avulla sivu A voi ilmoittaa sivulle B, että A:n sisällöstä löytyy linkki sivulle B. Sen edeltäjä [pingback](https://en.wikipedia.org/wiki/Pingback) julkaistiin jo vuonna 2002. Se saavutti yllättävän suuren suosion, sillä monet blogit pyörivät [Wordpressillä](https://wordpress.org/), joka tuki tekniikkaa.

Hyvä ajatus kaatui kuitenkin huonoon toteutukseen. Pingbackissa olevien puutteiden takia sitä päädyttiin hyödyntämään [palvelunestohyökkäysten](https://fi.wikipedia.org/wiki/Palvelunestohy%C3%B6kk%C3%A4ys) tekemisessä. Lisäksi se johti hirvittävään spämmitulvaan. Vuonna 2017 julkaistu webmention pyrkii korjaamaan näitä puuteita, vaikkei siinä täysin onnistukaan.

### Mitä sillä tehdään?

Perinteinen esimerkki: Henkilö A kirjoittaa blogiinsa. Henkilö B lukee kirjoituksen ja päättää kirjoittaa samasta aiheesta omaan blogiinsa. Hänen kirjoituksensa voi olla eri näkemys samasta aiheesta, mutta se voi olla myös suora vastaus A:lle. Tärkeintä on, että kirjoituksessa viitataan A:n blogikirjoitukseen.

Kun B julkaisee kirjoituksen, hän lähettää webmentionin A:lle. Tämän jälkeen A voi esittää B:n kirjoituksen oman kirjoituksensa alla linkkinä, kokonaisena kommenttina tai juuri niin kuin itse haluaa. Näin sivustot ikään kuin keskustelevat keskenään.

Webmention taipuu paljon muuhunkin. A voi esimerkiksi julkaista kirjoituksensa Mastodonissa. Tämän jälkeen julkaisun boostit, favoritet sekä siihen tulleet kommentit voivat lähettää webmentionin, jolloin A voi esittää kaikki Mastodonin interaktiot omassa blogissaan. Toisen osapuolen ei tarvitse olla ulkopuolisen henkilön sivusto, vaan se voi olla toinen palvelu, jota A itse käyttää.

### Kuinka tämä kaikki tapahtuu?

Webmentionien suosiota on rajoittanut se, ettei sen lisääminen osaksi sivua ole erityisen yksinkertaista ja vaatii jonkin verran teknistä osaamista. Käytännössä webmention vaatii aina erillisen palvelun, joka osaa lähettää ja vastaanottaa webmention-pyyntöjä. Perinteinen web-sivu ei siihen pysty.

Tällä hetkellä kaikista suosituin tapa lienee [webmention.io](https://webmention.io/). Se on palvelu, jonka avulla webmentionien vastaanottaminen on varsin vaivatonta eikä vaadi omien palveluiden pyörittämistä. Se ei kuitenkaan ratkaise webmentionien lähettämistä enkä tiedä onko siihen mitään valmista palvelua edes olemassa.

Käytännössä Webmention.io käsittelee ja tallentaa sinne lähetetyt webmention-pyynnöt. Sen jälkeen sivuston omistaja voi hakea kerääntyneet pyynnöt rajapinnan kautta ja esittää ne osana omia sivujaan. Webmention.io ei siis rajoita sitä miten tai missä webmentioneita voi käyttää ja esittää. Se jää sivuston omistajan päätettäväksi.

Itse päädyin käyttämään avoimen lähdekoodin [Go-Jammin'](https://git.brainbaking.com/wgroeneveld/go-jamming) -työkalua, joka tekee saman kuin webmention.io, mutta hoitaa myös lähettämisen. Se osaa lukea blogin RSS-syötteen, etsiä sieltä kaikki linkit ja lähettää webmentionit osoitteisiin, jotka sitä tukevat.

Ratkaisu toimii ja minun oli se helppo toteuttaa, mutta se ei ole sitä suurimmalle osalle.

### Mutta miksi?
Koska webmention on niin vähän käytetty, sen tukeminen voi tuntua turhalta - mitä se kieltämättä etenkin suomenkielisen blogin osalta onkin. Itselleni kysymys on kuitenkin enemmän periaatteesta.

Haluan tukea sellaisia tekniikoita, jotka mahdollistavat avoimen Internetin. 90-luvun lopulla ja 2000-luvun alussa alkusysäyksen saaneet tekniikat, kuten *RSS*, *pingback* ja *webmention*, ovat syntyneet avoimuutta arvostavan ajattelumaailman seurauksena.

Tekniikat voivat tuntua vierailta suljettuihin alustoihin tottuneille, mutta silloin ne olivat oikeasti käytössä ja toivat paljon hyvää. Ne ylläpitivät Internetin avoimuutta ja tekivät sivustoista itsenäisiä sekä riippumattomia. Silti nämä itsenäiset sivustot olivat osa suurempaa verkostoa.

Olen itse pyrkinyt pidemmän aikaa pääsemään eroon suuryritysten vartioimista tietosiiloista. Webmention on tähän hyvä työkalu, sillä se mahdollistaa sivujen ja palvelinten välisen tiedonsiirron sekä keskustelun ilman kaupallisten tahojen portinvartijoita.

Arvostan kovasti Webmention.io:n kaltaista palvelua, koska se tekee tekniikan käyttöönotosta helpompaa. Se on kuitenkin ongelma, ettei vaihtoehtoja ole tarjolla. Jos iso osa blogeista, sivuista ja palveluista nojaa yhteen palveluun, koko pakka romahtaa, mikäli palvelu menee nurin, muuttuu pahantahtoiseksi tai myydään suurelle paskayritykselle. Tästä syystä valitsin Go-Jammin' -työkalun, koska hallitsen itse kaikkea ja vältän nämä ongelmat.

Etenkin [IndieWeb]({{< ref "/blogi/2024/2024-04-17-indie-web" >}})-piireissä riippumattomuus keskitetyistä palveluista ja suuriyritysten alustoista on kovassa nosteessa. Avoimet standardit ja protokollat tarjoavat ratkaisuja tähän tarpeeseen.

Se voi tällä hetkellä olla tekniikasta ymmärtävien nörttien puuhastelua, mutta toiveeni on, että enemmin tai myöhemmin joku onnistuu tekemään toteutuksen, joka saa suuret massa mukaan ja pois kaupallisten toimijoiden suljetuista siiloista.

Mikäli kotisivusi tai blogisi on toteutettu [Hugolla](https://gohugo.io/) ja haluat niihin webmention-tuen, suosittelen lukemaan Go-Jammin' -sovelluksen tekijän *Wouter Groeneveldin* kirjoittaman oppaan [Host your own webmention receiver](https://brainbaking.com/post/2021/05/beyond-webmention-io/).  Jos taas kiinnostaa lukea ajatuksiani vanhasta ja modernista Internetistä, suosittelen lukemaan aikaisemman kirjoitukseni [Kaksi Internetiä]({{< ref "/blogi/2024/2024-04-24-kaksi-internetia" >}}).


