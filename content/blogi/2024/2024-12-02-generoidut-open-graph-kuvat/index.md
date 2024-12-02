---
title: "Generoidut Open Graph -kuvat"
description: "Jatkoin kotisivujen viilailua korjaamalla yhden toistuvista ärsytyksistä: Open Graph -kuvat."
date: 2024-12-02T19:00:00+0200
draft: false
slug: generoidut-open-graph-kuvat
aiheet:
    - tekniikka
resources:
    - name: cover
      src: cover.jpg
      title: ""
      params:
        caption: ""
---
Jatkoin kotisivujen viilailua korjaamalla yhden toistuvista ärsytyksistä: Open Graph -kuvat.

<!--more-->

Itselleni [Open Graph -protokollan](https://ogp.me) tärkein ominaisuus on kuva, joka tulee näkyviin kun linkkejä jaetaan sosiaalisessa mediassa. Näillä sivuilla toteutus toimi aika vaihtelevasti.

Ensimmäinen ongelma oli se, että Open Graph -kuvaa tuli näkyviin ainoastaan blogikirjoituksiin. Toinen ongelma oli se, että blogikirjoitustenkin kohdalla kuva tuli näkyviin vain, jos sellainen oli kirjoitukseen liitetty.

Läheskään kaikki kirjoitukset eivät tarvitse erillistä kuvaa. Olenkin lisännyt moniin kirjoituksiin kuvan ihan vain siksi, että saisin sen näkymään linkeissä. Jos en halua kuvaa näkyviin osaksi kirjoitusta, olen joutunut lisäämään kuvan Hugon [front matterin](https://gohugo.io/content-management/front-matter/) kautta. Olipa kuva mukana kummalla tavalla tahansa, minun on se kuva jostain kaivettava tai tehtävä itse.

Tällainen säätäminen on vain ylimääräistä vaivaa, jota en kaipaa. Usein sitä haluaisi vaan keskittyä kirjoittamiseen, eikä miettiä kuvia. Olen jo monta kuukautta miettinyt, että Open Graph -kuvien luonti pitäisi automatisoida. Ongelmana oli, etten oikein tiennyt miten se olisi järkevintä tehdä.

### Ensimmäiset kötöstykset

Joitakin kuukausia sitten yritin toteuttaa [Go:lla](https://go.dev) softaa, joka loisi kuvat lennosta. Touhu oli sen verran elämänhaluja syövää, että aloin jo etsiä köyttä ja sopivan huteraa jakkaraa. Päätin haudata ajatuksen Go:lla tehtävästä kuvageneraattorista.

Kun palasin muutama päivä sitten ongelman äärelle, tutustuin muiden tekemiin ratkaisuihin. Erityisesti monet [Eleventyn](https://www.11ty.dev) käyttäjät olivat ratkaisseet ongelman jonkinlaisella [Node.js](https://nodejs.org)-virityksellä. Siinä Open Graph -kuva luodaan ensin nettisivuksi. Sen jälkeen käynnistetään headeless-selain[^1], joka avaa kyseisen nettisivun ja ottaa siitä kuvaruutukaappauksen.

Hieno idea, mutta en halua sotkea omaan teknologiapakkaan enää yhtään uutta teknologiaa, joten Node.js saa luvan pysyä poissa. Pidin kuitenkin perusajatuksesta, koska kuvapohjan tekeminen HTML:llä ja CSS:llä on huomattavasti helpompaa kuin Go-kirjastojen kanssa ähiseminen. Kysymys kuului, että onko se mahdollista pelkästään Go:lla? Onpa hyvinkin!

### Oma ratkaisu Go:lla

Löysin [chromedp](https://github.com/chromedp/chromedp)-kirjaston, joka tekee tismalleen sen mitä pitää. Pientä harjoittelua se vaati, mutta sain ratkaisun toimimaan. Mikä parasta, kirjaston avulla HTML-sivulta voi valita tietyn elementin ja kuvaruutukaappaus otetaan pelkästään siitä. Näin kuvaruutukaappauksesta tulee juuri sen kokoinen, mitä CSS:llä on määritelty.

Chromedp:stä ei ole mitään iloa, ellei minulla ole sitä Open Graph -kuvaa esittävää nettisivua. Askartelin puhtaalta pöydältä pienen web-sovelluksen, joka tekee kaiken tarvittavan. Se ottaa URL-parametreinä kuvassa esiintyvän tekstin ja luo niiden pohjalta sivun, jossa on 1200 x 630 kokoinen elementti, joka esittää tulevaa Open Graph -kuvaa. Hienoa!

Lopuksi päätin yhdistää nämä kaksi asiaa yhdeksi sovellukseksi. Sovellus siis generoi sivun, avaa sen selaimeen, ottaa kuvaruutukaappauksen ja tarjoilee syntyneen PNG-kuvan normaalin nettisivun tapaan. Seuraavaksi piti puukottaa Hugoa, jotta saisin kuvan näkyviin sivuille.

Tämä oli varsin helppoa, sillä Hugo osaa hakea kuvia ulkopuolisista osoitteista. Minun piti vain hakea kuvan Hugon [resources.GetRemote](https://gohugo.io/functions/resources/getremote/) funktiolla. Hugossa on sisäänrakennettu välimuisti, joten riittää, että kuva haetaan kerran. Sen jälkeen se löytyy paikallisesta välimuistista.

Jäljellä oli enää kotisivujen template-tiedostojen muokkaaminen. Sen lisäksi, että halusin Open Graph -kuva sosiaalisen median postauksiin, halusin sen myös blogin kirjoituslistaan sekä hakutuloksiin. Tätä kuvaa käytetään vain silloin, kun kirjoitus itsessään ei sisällä kuvaa, joten muutamia ehtoja jouduin template-tiedostoihin lisäämään. Lopputulos oli juuri sitä mitä halusinkin.

Yritän sipistellä Open Graph -kuvan generoivan sovelluksen sellaiseen kuosiin, että voin hyvillä mielin julkaista sen myös muiden käyttöön. Tuttuun tapaan se pyörii Dockerissa, joten jos sn käyttäminen on hallussa, mitään erillistä asentamista ei vaadita. Mutta siitä lisää joku toinen päivä!

Kostoksi en laita tähän kirjoitukseen minkäänlaista kuvaa. Saanpahan samalla hyvän testin.

[^1]: Headless-selain on nettiselain, jossa ei ole näkyvää käyttöliittymää. Alla pyörii silti sama selainmoottori. Erona on vaan se, että sitä voi ohjata koodilla. Headless-selaimia käytetään usein testauksessa.