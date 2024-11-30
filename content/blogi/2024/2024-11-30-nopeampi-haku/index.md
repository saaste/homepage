---
title: "Pieniä parannuksia sivuille"
description: "Minua on alusta asti vaivannut se, ettei näiden kotisivujen pikkukuvat ole oikeasti pieniä. Päätin vihdoin tehdä asialle jotain."
date: 2024-11-30T17:30:00+0200
draft: false
slug: pienia-parannuksia-sivuille
aiheet:
    - tekniikka
resources:
    - name: cover
      src: cover.jpg
      title: "Kuvaruutukaappaus hakusivusta, joka näyttää käytännössä samalta kuin ennen muutosta."
      params:
        caption: "Haku näyttää käytännössä samalta kuin ennenkin, mutta sen pitäisi toimia nopeammin, eikä asettelu sekoile kun kuvia ladataan."
---
Minua on alusta asti vaivannut se, ettei näiden kotisivujen pikkukuvat ole oikeasti pieniä. Päätin vihdoin tehdä asialle jotain.

<!--more-->

Blogikirjoitusten lista sekä hakusivu on näyttänyt kirjoitusten kansikuvista 250 pikseliä leveän version. Käytännössä se on kuitenkin ollut sama tiedosto, joka ladataan varsinaisessa blogikirjoituksessa täydessä koossa. Mitään järkeähän tässä ei ole ollut, koska suuret kuvat vievät helposti 100 kilotavua. Se voi olla kymmenen kertaa enemmän kuin on tarpeen. Kun kirjoituslista sisältää linkin kymmeneen kirjoitukseen, pelkät kuvat voivat vielä yli megatavun. Itse asiassa olin unohtanut pienentää osan kuvista, joten ne olivat yli 3000 pikseliä leveitä ja veivät useamman sata kilotavua. Hups!

Aluksi harkitsin tekeväni scriptin, joka generoisi yhdellä komennolla pikkukuvat käyttäen [Imagemagick](https://imagemagick.org) komentorivityökalua. Itse asiassa ennätin toteuttaakin sen, mutta sitten muistin, että Hugossahan on [sisäänrakennettu kuvien pyörittely](https://gohugo.io/content-management/image-processing/). Pienillä muutoksilla sain toteutettua homman niin, että Hugo generoi listasivulle ja hakutuloksiin 250 pikseliä leveät pikkukuvat, eikä minun tarvitse tehdä asian eteen mitään.

Jouduin muuttamaan hieman tapaa, jolla viittaan kuvatiedostoihin, mutta sen myötä sain myös toisen kivan parannuksen. Kun kuvia pyöritellään resursseina eikä suorina tiedostoviittauksina, Hugo tietää myös kuvien koon. Tämän ansiosta pystyin lisäämään HTML-koodiin IMG-tageille `width` ja `height` attribuutit. Tämä auttaa ainakin siihen, että ulkoasu ei sinkoile joka suuntaan siinä kohtaa, kun kuvia ladataan.

Sivujen haku perustuu [Pagefind](https://pagefind.app) -kirjastoon. Kirjasto on muuten näppärä, mutta jos hyödyntää siinä mukana tulevaa käyttöliittymää, ulkoasun muokkaaminen on melko konstikasta. Olisin halunnut lisätä nuo kokoattribuutit myös sinne. Lopulta päätin hylätä valmiin käyttöliittymän ja askartelin sen itse. Näin pystyn täysin vapaasti päättämään, että kuinka hakutulokset esitetään. Se vaati jonkin verran JavaScript-koodia, mutta ei se lopulta vaikeaa ollut. Nyt hakukin toimii hieman nopeammin kun tuloksiin ei tarvitse ladata suurikokoisia kuvia.

{{<cover>}}

Tuon muutoksen lisäksi lisäsin myös toisen pienen parannuksen. Tai luulen ainakin, että se on parannus.

Itseäni ärsytti se, että kun hakutuloksista siirtyi jollekin sivulle ja palasi takaisin, hakusivu oli nollautunut. Nyt sivu muistaa hakusanan jota käytit viimeksi, ja näyttää sen hakutulokset automaattisesti. Tieto muistetaan vain session ajan, joten jos suljet selaimen ja palaat takaisin, hakusivu aloittaa puhtaalta pöydältä.

Päätin poistaa blogikirjoituksista ympäristö-tagin, koska koin sen harhaanjohtavaksi. Korvata sen urbanismi-tagilla. Alun perin ajattelin, että ympäristö voisi sisältää muutakin ympäristöön liittyviä kirjoituksia, mutta käytännössä minun höpinät liittyvät aina enemmän tai vähemmän kaupunkisuunnitteluun ja asutun ympäristön kehittämiseen. En juurikaan kirjoittele metsistä, vesistöistä ja senkaltaisesta ympäristöstä.