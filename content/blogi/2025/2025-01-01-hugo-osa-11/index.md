---
title: "Kotisivut Hugolla: Sivuston julkaisu"
description: "Oppaan viimeisessä osassa käydään läpi sitä, kuinka Hugo generoi HTML-tiedostot ja mitä sivuston julkaiseminen vaatii yleisellä tasolla."
date: 2025-01-01T13:30:00+0200
lastmod: 2025-01-01T13:30:00+0200
draft: false
slug: hugo-osa-11
aiheet:
    - tekniikka
sarjat:
    - "Kotisivut Hugolla"
params:
    serie_toc_title: "Sivuston julkaisu"
---
Oppaan viimeisessä osassa käydään läpi sitä, kuinka Hugo generoi HTML-tiedostot ja mitä sivuston julkaiseminen vaatii yleisellä tasolla.

<!--more-->

### HTML-tiedostojen generointi

HTML-tiedostojen generointi ei lopulta vaadi mitään erikoista. Olet generoinut niitä koko tämän oppaan ajan. Itse asiassa kävimme kaiken oleellisen läpi jo oppaan [7. osassa]({{< ref "blogi/2024/2024-12-28-hugo-osa-7" >}}), jossa kerroin *public* hakemistosta. Pureudutaan siihen vähän syvemmin.

Kun käynnistät Hugon esikatselun *hugo serve* komennolla, Hugo generoi sivustostasi HTML-tiedostot ja tallentaa ne *public* hakemistoon.

Sen lisäksi se käynnistää oman pienen [WWW-palvelimen](https://fi.wikipedia.org/wiki/WWW-palvelin), joka tarjoaa nämä HTML-tiedostot niin, että voit katsella niitä selaimessa. Oletuksena sivut löytyvät osoitteesta *http://localhost:1313*. Mikäli jokin toinen palvelinohjelmista on käyttää porttia 1313, Hugo arpoo tilalle jonkin vapaan portin.

*hugo serve* komennossa on myös se kiva puoli, että aina kun muutat jotakin tiedostoa, Hugo osaa generoida HTML-tiedostot uudelleen, ja näet muutokset heti. Sinun ei tarvitse käynnistellä Hugoa koko ajan uudelleen.

Hugossa on kaksi tilaa, jossa se generoi tiedostoja.

Kun pidät esikatselua käynnissä *hugo serve* komennolla, Hugo on kehitystilassa (**development**). Se on tarkoitettu nimensä mukaisesti siihen, että voit kehittää ja testailla sivujasi. Hugo generoi HTML-tiedostot ja käsittelee [assetit]({{< ref "blogi/2024/2024-12-28-hugo-osa-7" >}}) tavalla, joka sopii kehittämiseen ja ongelmien etsimiseen.

HTML-tiedostojen generoinnin ja assettien pyörittelyn voi tehdä myös tuotantotilassa (**production**). Tämä onnistuu *hugo build* komennolla. Tällöin Hugo ei käynnistä sen omaa WWW-palvelinta. Se generoi HTML-tiedostot lopullista julkaisua varten, mutta ei tee muuta.

Riippumatta siitä kumpaako tapaa käytät, tiedostot päätyvät *public* hakemistoon.

### Sivuston julkaisu
Kun käynnistät Hugon *hugo serve* komennolla, se käynnistää WWW-palvelimen, mutta tämä palvelin ei ole yhteydessä ulkomaailmaan. Se on tarkoitettu vain siihen, että testailet sivustoasi omalla koneellasi.

Jotta muut ihmiset voisivat nähdä sivustosi, sinun on kopioitava *public* hakemiston sisältö sellaiselle WWW-palvelimelle, joka on yhteydessä ulkomaailmaan. Tällaisesta palvelusta käytetään yleensä nimitystä web-hosting. Näitä palveluita on Internet pullollaan.

Kotisivujen julkaiseminen ei käytännössä vaadi kuin kaksi asiaa:
1. Generoi HTML-tiedostot *hugo build* komennolla
2. Kopioi *public* hakemiston sisältö web-hosting palveluun

Oppaan kirjoittamisen kannalta ongelmana on se, että jokaisella hosting-palvelulla voi olla hieman erilaiset vaatimukset sille, miten ja minne tiedostot on kopioitava. Asiaa vaikeuttaa myös se, että kopioinnin voi tehdä monella eri ohjelmalla, eikä minulla ole tietoa siitäkään, käytätkö Windowsia, Macia vai Linuxia.  Sinun on siis selvitettävä itse valitsemasi web-hosting -palvelun ohjeista, kuinka kopiointi tapahtuu ja minne tiedostot on kopioitava.

Mainitsen kuitenkin sen verran, että todennäköisesti yleisin tapa on käyttää jotain ohjelmaa, joka osaa siirtää tiedostot SFTP-protokollan yli. Yksi tunnetuimmista tällaisista sovelluksista on ilmainen [FileZilla](https://filezilla-project.org), joka löytyy kaikille kolmelle käyttöjärjestelmälle. En kuitenkaan pureudu siihen sen enempää tässä oppaassa.

### Mitä seuraavaksi?

Tämä opas on vain pintaraapaisu Hugon maailmaan. Toivottavasti sait kuitenkin perusymmärryksen siitä, kuinka se toimii. Kävimme läpi perusteet, kuten sisällön sekä oman teeman luonti, sekä sivupohjien muokkaamisen. Lopputulos oli ruma, mutta niin oli tarkoituskin. Tämä ei yrittänyt olla opas web-suunnitteluun.

Suosittelen tutustumaan lähemmin [Markdown](https://www.markdownguide.org/cheat-sheet/)-formaattiin, jolla sisältöjä tuotetaan. Kannattaa myös penkoa Hugon dokumentaatiota, josta löytyy muuassa [kaikki front matter -kentät](https://gohugo.io/content-management/front-matter/#fields).

Oppaassa neuvotaan myös monia muita Hugon konsepteja, joita en käynyt tässä läpi. Tällaisia ovat esimerkiksi [shortcodet](https://gohugo.io/content-management/shortcodes/), joiden avulla voit hyödyntää pieniä sivupohjia suoraan sisältötiedostoissa. Mikäli haluat kategorisoida tai tägäillä sisältöjä, kannattaa tutustua [taksonomioihin](https://gohugo.io/content-management/taxonomies/). En käynyt myöskään läpi sitä, kuinka sivut voivat [linkittää toisiinsa](https://gohugo.io/content-management/cross-references/). Enkä [monikielisyyden tukea](https://gohugo.io/content-management/multilingual/).

Itselleni yksi vaikeimpia asioita oli sivupohjien toiminnan ymmärtäminen. Tässä auttoi, että tutkin [muiden tekemiä teemoja](https://themes.gohugo.io). Voit myös tutustua [tekemääni teemaan](https://github.com/saaste/simple-hugo-theme), joka on vieläkin yksinkertaisempi kuin Hugon luoma oletusteema. Lisäsin teeman sivupohjiin suomenkielisiä kommentteja, jotka toivon mukaan auttavat ymmärtämään, mitä mikäkin rivi tekee.

Mikäli haluat kokeelliset nettisivusi julkisesti näkyviin, mutta et halua maksaa palvelintilasta eikä sinulla ole omaa domainia, suosittelen [Neocities](https://neocities.org) palvelua, joka tarjoaa ilmaista kotisivutilaa muinaisen [GeoCitiesin](https://fi.wikipedia.org/wiki/GeoCities) hengessä. Ikävä kyllä sinne tiedostoja ei voi lähettää aikaisemmin mainitulla FileZilla-ohjelmalla, mutta heillä on oma komentorivityökalu, jolla siirtäminen onnistuu. Hyvin yksinkertaisten sivujen kohdalla siirtämisen voi tehdä suoraan selaimella.

Kaikista eniten suosittelen kuitenkin sitä, että alat vaan tehdä ja kokeilla kaikkea. Hugon käyttäminen ei maksa mitään ja voit pyörittää sitä omalla koneellasi. Voit koska tahansa luoda uuden harjoitusprojektin ja testata uusia asioita, eikä sinun tarvitse pelätä, että rikot jotain. Tekeminen on paras tapa oppia!

Mikäli bongaat tästä oppaasta selkeitä virheitä tai koet, että jokin asia on epäselvästi selitetty, voit olla minuun yhteydessä [Fediversen kautta](https://mementomori.social/@saaste). Koetan päivittää opasta parhaani mukaan ja lisätä sinne myös uusia osia. Olen käyttänyt Hugoa itse vasta noin vuoden, joten en ole sen asiantuntija, mutta pyrin parhaani mukaan vastailemaan kysymyksiin ja auttamaan ongelmissa.