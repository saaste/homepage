---
title: Kuvien piilotus kaistaa säästäen
description: "Opin viikonlopun aikana tavan piilottaa kuvia HTML/CSS -yhdistelmällä niin, ettei piilotettuja kuvia turhaan ladata, jolloin sivu latautuu kokonaisuudessaan paljon nopeammin."
date: 2024-05-27T08:00:00+0300
lastmod: 2024-05-27T08:00:00+0300
draft: false
slug: kuvien-piilotus-kaistaa-saastaen
aiheet:
    - tekniikka
resources:
    - name: cover
      src: cover.jpg
      title: "Kuvan päällä lukee '27.5.2024 - Kuvien piilotus kaistaa säästäen - saaste.net'. Taustalla on pöytä, jossa on viherkasvi, muistivihko ja kännykkä."
---
Opin viikonlopun aikana tavan piilottaa kuvia HTML/CSS -yhdistelmällä niin, ettei piilotettuja kuvia turhaan ladata, jolloin sivu latautuu kokonaisuudessaan paljon nopeammin.

<!--more-->

Helppo tapa, jota olen käyttänyt aikaisemmin, on piilottaa kuvat CSS:llä käyttäen media queryjä. Esimerkiksi:

{{< highlight css >}}
@media only screen and (max-width: 600px) {
    .result .cover-image {
        display: none;
    }
}
{{< /highlight >}}

Tämä kyllä piilottaa kuvat, mutta tästä huolimatta selain lataa ne. Tämä on tietenkin turhaa, koska miksi ladata kuvia, joita ei koskaan näytetä. Se vain hidastaa sivun latautumista.

Tälle on kuitenkin vaihtoehto: `picture` elementti. Sen avulla eri kokoisille ruuduille voi tarjota sopivan kokoisen kuvan, mutta pienen tempun avulla sillä voi myös säästää kaistaa.

{{< highlight html >}}
<picture>
    <source srcset="data:image/webp;base64,UklGRhYAAABXRUJQVlA4TAoAAAAvAAAAAEX/I/of"
            media="(max-width: 600px)" />
    <img src="kuva.jpg" alt="Alt-teksti" width="250" height="100" />
</picture>
{{< /highlight >}}

Esimerkissä alle 600px levyisille näytöille ladataan vain **30 tavun** kokoinen base64-enkoodattu tyhjä kuva ja sitä suuremmille näytöillä alkuperäinen kuva. Vanhemmat selaimet, jotka eivät tue `picture` elementtiä, näyttävät aina alkuperäisen kuvan. Tämä yhdessä CSS:n kanssa mahdollistaa sen, että kuva piilotetaan mobiililaitteilta ja samalla sivu latautuu nopeammin, koska täysikokoisia kuvia ei tarvitse ladata.

Löysin tämän ratkaisun Internetin syövereistä, mutta kun julkaisin löytöni Mastodonissa, [Vesa Piittinen](https://vesa.piittinen.name/) huomautti, ettei se toiminut Safarissa. Sen lisäksi, että hän löysi kaikilla selaimilla toimivan ratkaisun, hän käytti aikaansa kevyimmän vaihtoehdon etsimiseen!

Nyt jakamani koodi on Vesan löytämä kevyin ratkaisu, joka toimii kolmella yleisimmällä selainmoottorilla. Voit tutustua Vesan testeihin [Codepenissä](https://codepen.io/Merri/pen/eYadLoW). Muista laittaa [hänet](https://mastodon.social/@MerriNet) seurantaan myös Mastodonissa!