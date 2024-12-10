---
title: "Valokuvien synkronointi ja varmuuskopionti"
date: 2023-12-31T09:38:00+02:00
lastmod: 2023-12-31T09:38:00+02:00
draft: false
slug: valokuvien-synkronointi-ja-varmuuskopiointi
aiheet:
    - tekniikka
    - valokuvaus
resources:
    - name: cover
      src: cover.jpg
      title: Kuvaruutukaappaus Syncthinging web-käyttöliittymästä
      params:
        caption: "SyncThingin web-käyttöliittymä ei ole kaunein eikä helppokäyttöisin, mutta siitä löytyy kaikki oleellinen"
---

Yksi viime vuosien parhaista päätöksistä on ollut irroittautuminen suurten toimijoiden pilvipalveluista. Hommasin itselleni [Synologyn](https://www.synology.com/) NASin ja siitä
lähtien se on toiminut oman digitaalisen olemassaoloni pohjana.

<!--more-->

Itselleni yksi tärkeimmistä korvattavista palveluista oli **Google Photos**. Olin valmis luopumaan sen "älykkäistä" ominaisuuksista ja tärkeintä oli saada yhtä näppärä valokuvien synkronointi eri laitteiden välille. Ratkaisu oli ilmainen, avoimen lähdekoodin [SyncThing](https://syncthing.net/).

### SyncThing synkronointiin

SyncThingin ajatus on varsin yksinkertainen. Sovellus asennetaan laitteille, jotka halutaan synkronoinnin piiriin. Tämän jälkeen mikä tahansa hakemisto voidaan synkronoida muiden laitteiden välillä.

SyncThing sallii synkronoinnin säätämisen varsin monipuolisesti, mutta yksinkertaisimmillaan se tarkoittaa vain sitä, että jokaisella laitteella on hakemistosta identtinen kopio. Kun lisäät hakemistoon uuden tiedoston, se kopioituu lähes välittömästi kaikille laitteille. Kun poistat tiedoston, se poistuu kaikilta laitteilla. Jos muutat jotain tiedostoa, muutos näkyy kaikilla laitteilla. Yksinkertaista!

{{<cover>}}

Tämä on ollut aivan uskomattoman kätevää nimenomaan valokuvien kanssa. Vaikka puhelin on näppärä kamera, en ikinä jaksa muokata tai jakaa kuvia sen kautta. Synkronointi mahdollistaa sen, että voin tehdä nämä asiat tietokoneella.

Jotkut ajattelevat, että synkronointi toimii samalla varmuuskopiona - ovathan kuvat kopioituna monella eri laitteella. Itse en sitä sellaisena kuitenkaan pidä, koska synkronointi ei suojaa inhimillisiltä virheitä tai tiedostojen korruptoitumiselta. Jos poistan vahingossa väärän kuvan, se katoaa kaikista laitteista ja on sen jälkeen mennyttä. Varmuuskopio suojaa myös omilta mokailuilta.

### Rsync varmuuskopiointiin

Oma varmuuskopiosuunnitelmani on monitasoinen. 

Ensimmäinen taso on se, että NAS:lla levyt on kahdennettu. Yhden kiintolevyn hajoaminen ei siis tarkoita valokuvien katoamista.

Tämän päälle tiedostot kopioidaan tunnin välein [rsync](https://rsync.samba.org/)-sovelluksella toiseen kansioon, joka sijaitsee eri levyllä, joka on myös kahdennettu. Paikallisesti minulla on siis tiedostoista useita kopioita, joka suojaa hyvin laitevioilta. Tämä ei kuitenkaan suojaa omilta virheitä.

Tätä varten on kolmas taso, joka on *Btrfs*-tiedostojärjestelmän tarjoama *snapshot*-toiminnallisuus. Käytännössä se pitää muutetuista ja poistetuista tiedostoista eri versioita, jolloin pystyn palaamaan ajassa taaksepäin ja peruuttamaan vahingossa tehtyjä muutoksia tai poistoja. Voisi kuvitella, että tämä veisi paljon tilaa, mutta näin ei ole. Snapshot pitää kirjaa ainoastaan muutoksista, joten sen vaatima tila on vähäinen.

Entäs jos koko NAS-tuhoutuu vaikkapa tulipalossa? Neljäs ja viimeinen taso on sitä varten. NAS:lla oleva varmuuskopiohakemisto kopioidaan säännöllisesti [rsync.net](https://rsync.net/)-palveluun. Bonuksena rsync.net tarjoaa asiakkaileen oman snapshot-toiminnallisuuden, joten myös sieltä tiedostoja voi palauttaa seitsemän päivän ajan.

### Ei vain valokuville

SyncThing pystyy synkronoimaan mitä tahansa tiedostoja tai hakemistoja, joten sen käyttö ei rajoitu valokuviin. Itselläni siitä on tullut myös digitaalisen dokumenttiarkiston, päiväkirjan sekä muistiinpanojen keskuspiste.

Se toimii loistavasti sisäverkossa ja oikein konfiguroituna myös netin yli. Asentaminen vaatii jonkin verran teknistä ymmärtämistä, mutta verkkopalveluita säätäneille sen pitäisi olla mitenkään vaikeaa. 

SyncThing on saatavalla Windowsille, Macille, Linuxille sekä Android-puhelimille. iOS-laitteille virallista tukea ei ole enkä tiedä, että onko sitä mahdollista saada jonkinlaisella virityksellä toimimaan.
