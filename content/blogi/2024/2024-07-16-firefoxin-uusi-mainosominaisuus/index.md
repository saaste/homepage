---
title: Firefoxin uusi mainosominaisuus
description: "Mozilla toi kaikessa hiljaisuudessa Firefox-selaimeensa uuden mainosseurantaominaisuuden. Hiljaisuus ei kestänyt pitkään, sillä oletuksena päällä oleva ominaisuus synnytti Mastodonin teknologia- ja yksityisyyspiireissä varsin kiivasta keskustelua puolesta ja vastaan."
date: 2024-07-15T11:45:00+0300
lastmod: 2024-07-15T11:45:00+0300
draft: false
slug: firefoxin-uusi-mainosominaisuus
aiheet:
    - tekniikka
resources:
    - name: cover
      src: cover.jpg
      title: "Kuvaruutukaappaus Firefoxin asetuksista. Kaikki muut asetukset on sumennettu, mutta Privacy & Security -kohdan alla oleva Website Advertising Preferences on selkeästi näkyvissä."
      params:
        caption: "Firefoxin uusi mainosseuranta on oletuksena päällä, eikä käyttäjiä informoitu asiasta mitenkään."
---
Mozilla toi kaikessa hiljaisuudessa Firefox-selaimeensa uuden mainosseurantaominaisuuden. Hiljaisuus ei kestänyt pitkään, sillä oletuksena päällä oleva ominaisuus synnytti Mastodonin teknologia- ja yksityisyyspiireissä varsin kiivasta keskustelua puolesta ja vastaan.

<!--more-->

### Mistä ominaisuudessa on kyse?

Mozilla käyttää ominaisuudesta nimeä [Privacy-Preserving Attribution](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) eli **PPA**. Yksinkertaistettuna attribution tarkoittaa prosessia, jossa mainoksen teho arvioidaan sillä, kuinka hyvin mainoksen näkeminen muuttaa ihmiset rahaa käyttäväksi kuluttajaksi.

Tämä on mahdollista vain, mikäli käyttäjää seurataan mainoksen näkemisestä tuotteen ostohetkeen. Seurannan tarve tekee mainoksiin pohjautuvasta bisneksestä uhkan yksityisyydelle, ja selittää osaltaan sen, miksi nykyinen web on sellainen kuin se on.

{{<cover>}}

Mozillan uusi ominaisuus toimii heidän omien sanojensa mukaan seuraavasti:
1. Sivusto pyytää Firefoxia tallentamaan esitetyn mainoksen tiedot sekä mainoksen kohdesivun.
2. Mikäli vierailet kohdesivulla tai teet jotain muuta, jonka mainosyritys kokee merkittäväksi, sivusto voi pyytää Firefoxilta raportin.
3. Firefox ei välitä raporttia suoraan sivuille, vaan salaa sen ja lähettää anonyymisti erilliseen palveluun, joka yhdistää eri ihmisten raportit.
4. Kohdesivu saa ajastetusti nämä yhdistelmäraportit. Raporttien dataan on lisätty kohinaa, joka vaikeuttaa yksittäisten käyttäjien selvittämistä, mutta ei muuta raportin lopputulosta.

Ensinäkemältä tämä näyttää hyvältä muutokselta. Siihen liittyy kuitenkin ongelmia. Ennen kuin menen niihin, haluan muistuttaa siitä, että myös Google on ajanut yksityisyyttä suojaavaa kohdennettua mainontaa.

### Googlen yksityisyyttä kunnioittava mainonta

Muutama vuosi sitten Google rummutti Chrome-selaimeen tulevaa Privacy Sandbox -ominaisuutta. Ei niin yllättäen ominaisuudella oli loppujen lopuksi hyvin vähän tekemistä yksityisyyden parantamisen kanssa.

Yksi sandboxiin kuuluvista ominaisuuksista oli Federated Learning of Cohorts eli **FLoC**. Siinä Chromen oli tarkoitus asettaa sinut selailuhistoriasi perusteella tiettyyn käyttäjäryhmään, joka määrittelee mistä olet kiinnostunut. Sen sijaan, että sivustot seuraisivat sinua, sen tekisikin selain. Mainostajat voisivat pyytää käyttäjäryhmätiedon suoraan selaimelta ja kohdistaa mainokset sen perusteella.

Muutos aiheutti sen verran suurta vastustusta, että Google muutti toteutusta hiukan ja kutsuu sitä nyt **Topics API**:ksi. Läpinäkyvyyttä parannettiin hieman ja mahdolliset kiinnostuksen kohteet ovat tarkemmin rajattuja, mutta isolta osin idea on edelleen sama.

Yksi keskeinen ero Googlen ja Firefoxin toteutuksessa on se, että Chromen Topics API toimii täysin selaimessa. Tietoja ei lähetetä (ainakaan tätä kirjoittaessa) mihinkään. Firefoxin PPA sen sijaan lähettää tiedot koontipalvelimelle [DAP](https://datatracker.ietf.org/doc/draft-ietf-ppm-dap/)-protokollaa käyttäen.

### Eikö yksityisyyttä suojaava mainonta ole parempi?

Ominaisuuksien puolustajat argumentoivat, että nämä ovat askelia parempaan suuntaan. Tietyssä mielessä ne sitä ovatkin. On helppo ajatella, että pienikin yksityisyyttä parantava ominaisuus on tyhjää parempi. Ongelmana on kuitenkin se, että tämä parannus ei välttämättä ole parannus alkuunkaan.

Yksi ilmeisistä ongelmista on se, että muutosten myötä mainosseuranta päätyy usealta eri toimijalta Googlen ja Mozillan kaltaisten yritysten yksinoikeudeksi. Kumpikin yrityksistä pyörii käytännössä täysin mainosten varassa. Kyllä, myös Mozilla, jonka tulos on seurausta Googlen kanssa tehdystä sopimuksesta.

Vaikka tällä hetkellä kumpikin yritys markkinoi muutoksiaan yksityisyydellä ja "ajattelemme käyttäjiä" -kortilla, meillä on ihan riittävästi kokemusta [enshittification](https://fi.wikipedia.org/wiki/Verkkoalustojen_huonontuminen) -ilmiöstä, jotta voimme kuvitella miten tällaisia yksinoikeuksia käytetään tulevaisuudessa. Kumpikaan yrityksistä ei lopulta ajattele käyttäjien parasta, vaan mainostajien parasta, sillä sieltä heidän rahat tulevat. Muutokset tarjoavat yrityksille monopolin ihmisten seurantaan ja luokitteluun.

Näitä ominaisuuksia markkinoidaan sillä, että ne poistavat mainostajilta tarpeen käyttäjien seuraamiseen. Maailmassa on läjäpäin yrityksiä, jotka ovat erikoistuneet nimenomaan mainosten toimivuuden analysointiin ja käyttäjien seurantaan. Käyttäjädataa keräävät data brokerit ovat jättimäinen bisnes. Miksi ihmeessä he lakkaisivat toimimasta, koska Google tai Mozilla sanovat niin?

Vaikka Mozilla ja Google poistaisivatkin selaimistaan seurantaan yleisesti käytetyt kolmannen osapuolen [keksit](https://fi.wikipedia.org/wiki/Keksi), se on vain yksi monista tavoista seurata käyttäjiä. Ei seurantaan erikoistuneilla yrityksillä ole mitään syytä lopettaa toimintaansa. Mainostajat puolestaan haluavat edelleen optimoida markkinointibudjettiaan, joten he käyttävät siihen kaikkia mahdollisia keinoja. Uudet selainominaisuudet päätyvät käytännössä olemaan vain yksi uusi tapa kerätä käyttäjistä tietoja.

Uusien ominaisuuksien kolmas, ja ehkä pahin, ongelma on se, että ne toimivat savuverhona todelliselta ongelmalta: kohdistetusta mainonnasta on tullut jonkinlainen universaali totuus, jonka olemassaoloa ei tarvitse perustella eikä sitä saa kyseenalaistaa. Sen edessä voi uhrata lähes kaiken, myös käyttäjien yksityisyyden. Tässä ajattelutavassa Internet on ensisijaisesti kaupallinen ja palvelee kaupallisia toimijoita sekä heidän taloudellista tuottavuuttaan.

Ominaisuuksien puolustajilta näkee myös sellaisia argumentteja, että yritykset kuolevat pois, mikäli he eivät voi kytätä käyttäjiä ja harrastaa kohdennettua markkinointia. Minusta tämä on erikoinen väite, johon tekisi mieli kylmästi vastata: mitä sitten? Jos yrityksen olemassaolo perustuu täysin ihmisten kyttäämiseen ja yksityisen tiedon keräämiseen, se joutaakin kuolla pois.

Monien yritysten kohdalla näin ei kuitenkaan ole. Olen itsekin työskennellyt useassa isossa yrityksessä, jotka tahkoavat miljoonavoittoja. Eivät nämä yritykset kieltäydy kohdennetusta markkinoinnista, koska ne tekevät voittoa. Ne menevät siihen mukaan, koska he haluavat vielä suurempia voittoa. Muistattehan, jatkuva kasvu ja silleen?

Itselleni suurin ongelma ei ole niinkään Firefoxiin lisätty yksittäinen ominaisuus, vaan suunta, johon selaimet Firefox mukaan luettuna ovat menossa.

### Mitä tilalle?

Oikea ratkaisu olisi puuttua todelliseen ongelmaan: kohdennettuun markkinointiin.

Koko markkinointia koskettava lainsäädäntö pitäisi pistää uusiksi. Käyttäjien seurantaan ja yksityisiin tietoihin pohjautuvan markkinoinnin ei pitäisi olla normaalia. Olen itsekin elänyt aikakautta, jolloin kohdistettu markkinointi ei ollut edes mahdollista. Yritykset mainostivat tuotteitaan kaikille yhteisesti ja pärjäsivät oikein mainiosti. On hullua, että nyt kohdistettu markkinointi nähdään jonkinlaisena elinehtona liiketoiminnalle.

Tämä kaikki on yksittäisten käyttäjien suoran vaikutusmahdollisuuksien ulkopuolella. Me voimme vain äänestää oikeita ihmisiä päättäviin rooleihin, ja koettaa parhaamme mukaan käyttää sellaisia selaimia, jotka palvelevat ensisijaisesti käyttäjiä eivätkä markkinakoneistoa.

Ikävä kyllä selainmarkkinoilla ei ole juurikaan todellisia vaihtoehtoja. Käytännössä kaikki selaimet pohjautuvat joko Googlen Chromiumiin tai Mozillan Firefoxiin. Ainut poikkeus tästä ovat Apple-käyttäjät, jotka voivat käyttää Safari-selainta.

Yksi suosituimmista Firefoxin päälle rakennetuista selaimista on [LibreWolf](https://librewolf.net/). Se on erityisesti yksityisyyttä silmällä pitäen rakennettu selain, mutta harmillisesti sitä on vaikea suositella peruskäyttäjille. Sen asetukset on oletuksena viritetty niin tiukaksi, että monet nettisivut lakkaavat toimimasta. Toinen Firefoxin päälle rakennettu selain on [Waterfox](https://www.waterfox.net/), mutta itselläni ei ole siitä kokemusta.

Moni tuntuu suosivan Chromiumin päälle rakennettua [Vivaldi](https://vivaldi.com/)-selainta, joka sekin on itselleni vieras. Toiset taas suosivat saman moottorin päälle rakennettua [Bravea](https://brave.com/), mutta siihenkin liittyy kryptovaluutat ja kaikenlaista muuta ei-teknistä kädenvääntöä.

Markkinoille on tulossa joitakin uusia tulokkaita, mutta ne ovat vielä niin alkutekijöissä, ettei niitä voi arkikäyttöön juuri suositella. Tällaisia ovat esimerkiksi [LadyBird](https://ladybird.org/), [Servo](https://servo.org/), [Flow](https://www.ekioh.com/flow-browser/).

Tässä tilanteessa pitää siis valita huonoista vaihtoehdoista vähiten huonoin. Firefox on edelleen tässä mielessä ihan kelvollinen vaihtoehto, mutta en tiedä kuinka pitkään. Aika näyttää mihin suuntaan selaimet kehittyvät.
