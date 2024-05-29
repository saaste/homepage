---
title: Paperinen päiväkirja digitaaliseksi
description: "dellisessä kirjoituksessa mainitsin ohimennen, että digitaalinen päiväkirjani toimii lähinnä paperisen päiväkirjan varmuuskopiona. En kuitenkaan avannut sitä sen enempää, joten teen sen nyt."
date: 2024-05-29T17:30:00+0300
draft: false
slug: paperinen-paivakirja-digitaaliseksi
aiheet:
    - tekniikka
resources:
    - name: cover
      src: cover.jpg
      title: "Obsidianin graafinäkymä, jossa pienet pisteet yhdistyvät toiseensa viivoilla. Jokainen piste vastaa yhtä dokumenttia."
---
[Edellisessä kirjoituksessa]({{< ref "/blogi/2024/2024-05-28-paivakirja-tayttyy" >}}) mainitsin ohimennen, että digitaalinen päiväkirjani toimii lähinnä paperisen päiväkirjan varmuuskopiona. En kuitenkaan avannut sitä sen enempää, joten käyn sen läpi tässä kirjoituksessa.

Mikäli olet lukenut vanhemmat kirjoitukseni [valokuvien varmuuskopioinnista]({{< ref "/blogi/2023/2023-12-31-valokuvien-synkronointi-ja-varmuuskopionti" >}}) tai [ajatusten dokumentoinnista]({{< ref "/blogi/2024/2024-01-14-obsidian-ja-ajatusten-dokumentointi" >}}), tässä on paljon samaa.

<!--more-->

### Digitaalinen päiväkirja

Jotta kaikki käy järkeen, kerron ensin miten olen toteuttanut digitaalisen päiväkirjani. Käytän tähän tarkoitukseen [Obisidiania](https://obsidian.md/). Se on ilmainen, avoimen lähdekoodin dokumentointityökalu, joka nojaa vahvasti dokumenttien välisiin linkkeihin. Kaikki dokumentit ovat yksinkertaisia tekstitiedostoja, joka käyttävät [Markdown-syntaksia](https://en.wikipedia.org/wiki/Markdown).

Pidän Obsidianista, koska se pohjautuu täysin levyllä sijaitseviin tiedostoihin. Dokumentteja tai niihin liitettyjä tiedostoja ei siis tallenneta mystiseen tietokantaan, vaan niihin pääsee tarvittaessa käsiksi käyttöjärjestelmän tiedostoselaimella ja ne ovat luettavissa millä tahansa tekstieditorilla.

Tämä tekee dokumenttien varmuuskopioinnista sekä synkronoinnista eri laitteiden välillä helppoa. Lisäksi tiedostot ovat käytettävissä, vaikka Obsidian lakkaisi joskus olemasta.

Digitaalisessa päiväkirjassa jokaiselle päivälle on oma dokumentti, joka nimetty päivämäärän mukaan, esimerkiksi `2024-05-29.md`. Jos kirjoitan monta kertaa päivässä, päivitän tätä dokumenttia ja lisään sinne vain väliotsikoita kellonaikojen mukaan.

Tämän lisäksi minulla on oma dokumentti jokaiselle kuukaudelle, esimerkiksi `2024-05.md`. Nämä ovat yksinkertaisia koostedokumentteja, josta löytyy linkki kyseisen kuun päivädokumentteihin.

Lopuksi minulla on päädokumentti `päiväkirja.md`. Myös tämä on koostedokumentti, mutta se kerää yhteen kaikki kuukausidokumentit. Näin minulla on kätevä päiväkirjasivu, josta pääsen nopeasti porautumaan vuositasolla aina yksittäiseen kuukauteen ja päivään asti.[^1]

![Kolme kuvaruutukaappausta vierekkäin. Kuvat esittelevät tekstissä kaksi koontisivua sekä päiväsivun.](paivakirja.jpg "Päiväkirjan kolme osaa: 1) päiväkirjasivu, joka kokoaa kaikki kuukaudet yhteen 2) kuukausisivu, joka kokoaa kuukauden päivät yhteen 3) päiväsivu, joka sisältää kaikki päivän kirjoitukset")

### Synkronointi
Haluan päästä päiväkirjaan käsiksi mistä tahansa, joten kaikki edellä mainittu ei voi sijaita yksittäisen koneen levyllä. Tähän oma ratkaisuni on [SyncThing](https://syncthing.net/). Myös se on ilmainen, avoimen lähdekoodin sovellus. SyncThing mahdollistaa tiedostojen synkronoinnin usean laitteen välillä ja tämä kattaa myös mobiililaitteet.

Jokaisella koneellani sekä puhelimessani pyörii SyncThing. Kun teen muutoksen johonkin dokumenttiin, muutos välittyy välittömästi kaikille laitteille.

Tästä on kolme etua: pystyn kirjoittamaan päiväkirjaani miltä tahansa laitteelta, päiväkirjani on tallessa usean eri laitteen levyllä ja pystyn muokkaamaan kirjoituksia ilman nettiyhteyksiä. Muutokset välittyvät muille laitteille sitten kun nettiyhteys on käytettävissä.

Tämä kaikki toimii hienosti, mutta kuinka paperinen päiväkirja istuu tähän kuvioon?

### Paperipäiväkirja osaksi digitaalista
Obsidian-kansion lisäksi minulle on toinen synkronoitava kansio: `päiväkirjakuvat`. Tämä kansio on synkronoitu ainoastaan puhelimen sekä oman palvelimeni välillä - muut laitteet eivät näitä tiedostoja näe.

Kun saan paperisen päiväkirjasivun kirjoitettua, otan siitä puhelimella kuvan, nimeän sen päivämäärän mukaan (`2024-05-29.jpg`) ja siirrän päiväkirjakuvat-kansioon. SyncThing kopioi tämän kuvan automaattisesti palvelimelle.

Palvelimella minulla pyörii itse tehty scripti, joka haistelee siellä olevaa päiväkirjakuvat-kansiota. Kun se näkee uuden päivämäärän mukaan nimetyn kuvatiedoston, se alkaa hommiin.

Ensimmäisenä scripti katsoo, löytyykö Obsidianin kansiosta samalla päivämäärällä olevaa päiväkirjadokumenttia. Mikäli sitä ei löydy, scripti luo sen ja lisää sinne tarvittavat otsikot.

Tämän jälkeen luodun (tai olemassa olevan) dokumentin loppuun lisätään kuvalinkki, joka osoittaa luurilla otettuun valokuvaan.

Mikäli kaikki tämä onnistuu ilman virheitä, scripti *siirtää* päiväkirjakuvat-kansiossa olleen kuvatiedoston Obsidianin omaan kuvakansioon. Koska kuva ei ole enää päiväkirjakuvat-kansiossa, SyncThing pitää huolen siitä, että se poistuu automaattisesti myös kännykästä eikä vielä siellä turhaan tilaa.

Lopputuloksena Obsidianista löytyy yksittäisen päivän dokumentti, jonka lopussa näkyy paperipäiväkirjasta otettu valokuva. Koska Obsidian on synkronoitu kaikille laitteille, myös kaikki nämä muutokset kuvineen näkyvät kaikilla laitteilla.

### Varmuuskopiointi

Vaikka päiväkirjatiedostot sijaitsevat useammalla laitteella, se ei ole varsinainen varmuuskopio. Jos poistan kaikki tiedostot vahingossa yhdeltä laitteelta, SyncThing pitää huolen siitä, että ne katoavat myös kaikilta muiltakin laitteilta. Se voi suojata yksittäisen laitteen levyn hajoamista, mutta se ei suojaa inhimilliseltä virheeltä. Tämän takia palvelimelta tehdään kahdenlaiset varmuuskopiot kerran tunnissa.

Paikalliset kopiot sijaitsevat samalla koneella, mutta fyysisesti eri levyllä. Nämä varmuuskopiot hyödyntävät levyjärjestelmän snapshot-ominaisuutta, joten pystyn tarvittaessa palaamaan ajassa taaksepäin ja palauttamaan tiedostojen vanhoja versioita. Koska sekä koneen käyttölevy, että varmuuskopiolevy on kahdennettu, päiväkirjatiedostot ovat tallessa yhteensä neljällä eri levyllä. Näistä kolme voi hajota ja silti tiedostot ovat tallessa vielä yhdellä.

Lisäksi palvelimesta tehdään kerran tunnissa varmuuskopio kodin ulkopuolelle. Tähän käytän [rsync.net](https://www.rsync.net/) -palvelua. Myös rsync.net tarjoaa samanlaisen snapshot-ominaisuuden, joten vaikka koko oma palvelin ja kaikki sen levyt tuhoutuisivat, minulla olisi silti kaikki tiedostot sekä pitkä historia tallella.

[^1]: Obsidianiin saa erillisen kalenterilisäosan, joka tekee tämän kaiken jossain määrin tarpeettomaksi. Luon kaikesta huolimatta koostedokumentit, koska haluan, että järjestelmä toimii vaikka kalenterilisäosa hajoaisi tai lakkaisi olemasta.