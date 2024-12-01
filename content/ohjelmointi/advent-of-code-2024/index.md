---
title: "Advent of Code: 2024"
---

[Advent of Code](https://adventofcode.com/) on joka vuosi järjestettävä hupsun tarinan muotoon rakennettu ohjelmointihaaste. Samalla se toimii joulukalenterina.

Kirjoittelen tänne ajatuksia, havaintoja ja ongelmia, joihin törmään haasteen aikana. Kaikkien ratkaisujen ja ratkaisuyritysten koodit löydät [GitHubista](https://github.com/saaste/advent-of-code-2024). Ohjelmointikielenä on [Go](https://go.dev). 

En usko pystyväni tänä vuonna ratkaisemaan kaikkia haasteita, koska elämä, mutta katsotaan mihin yritys riittää.

Yksi Advent of Coden parhaista puolista on se, ettei minun tarvitse välittää koodin laadusta. Otan siitä kaiken ilon irti! Jos satut katsomaan ratkaisujani GitHubista, ne eivät todennäköisesti ole hyviä esimerkkejä laadukkaasta koodista. Siistin, napakan ja helposti ylläpidettävän koodin kirjoittamisen jätän leipätöihin. Advent of Codessa koodi saa olla juuri niin räävitöntä kuin mitä sattuu tulemaan, kunhan ratkaisu on oikea!

### 1. päivä

Ensimmäisessä osassa on kaksi listaa, jotka molemmat sisältävät kokonaislukuja. Tehtävänä on ottaa kummankin listan pienin luku ja tarkastaa, kuinka kaukana ne ovat toisistaan. Tämän jälkeen on otettava toiseksi pienimmät luvut ja tarkastettava niiden etäisyys. Näin jatketaan, kunnes kaikki luvut on käyty läpi. Lopuksi etäisyydet summataan yhteen ja tämä on ratkaisu.

Ensimmäinen mieleen tullut ajatus oli se, että molemmat listat järjestetään pienimmästä suurimpaan. Näin voin käydä listat läpi indeksi kerrallaan. Etäisyys saadaan selville yksinkertaisesti:
{{< highlight go >}}
max(lukuA, lukuB) - min(lukuA, lukuB)
{{< /highlight >}}

Ratkaisu tuntui erittäin naiivilta ja helpolta, joten oletin jo valmiiksi, että se ei toimi toisessa osassa. Tämä oli kuitenkin se tapa, jolla ratkaisin ensimmäisen osan ja se toimi hienosti.

Toisessa on selvitettävä, kuinka monta kertaa ensimmäisessä listassa olevat luvut esiintyvät toisessa listassa. Ensimmäinen listan luku pitää kertoa toisen listan esiintymismäärällä. Tämän jälkeen tulot lasketaan yhteen ja tämä on vastaus.

Kumpikin lista sisältää 1000 lukua. Naiivisti ajateltuna tämä tarkoittaa, että pitäisi tarkastaa 1000 lukua 1000 luvun joukosta, mikä tarkoittaisi miljoona tarkastusta. Tämä ei ole varsinaisesti ongelma, mutta ajattelin, että ratkaisua voi optimoida.

Koska molemmat listat on järjestetty, voin aloittaa tarkastelun pienimmästä luvusta. Kun toisen listan luvut ovat suurempia kuin tarkastettu luku, voin lopettaa tarkastamisen, koska tiedän, ettei sama luku voi tulla järjestyksestä johtuen enää vastaan. Voin myös pitää muistissa kohdan, jossa tarkastaminen lopetettiin. Seuraavan luvun kohdalla voin aloittaa tarkastamisen siitä, koska tiedän, ettei suurempi luku voi olla ennen sitä.

Järjestyksestä on myös toinen hyöty. Koska ensimmäinen lista on järjestetty, toistuvat numerot tulevat peräkkäin. Tämä mahdollistaa sen, että minun tarvitsee tarkastaa luku vain ensimmäisellä kerralla. Jos sama luku löytyy listasta uudelleen, vastaus on minulla jo tiedossa ja voin lisätä sen lopputuolokseen ilman tarkasteluja. Tämän olisi voinut toteuttaa myös jonkinlaisella mapilla, johon ratkaisut kerätään, mutta tyydyin yksinkertaiseen for-looppiin ja muuttujiin.

Koska tarvitsen molemmissa tehtävissä järjestettyjä listoja, tein tästä erillisen funktion, jotta vältyn koodin kopioimiselta. Kummatkin ratkaisut toimivat hyvin ja suoritus kesti noin 0,3 millisekuntia.

Kuten aikaisempinakin vuosina, ensimmäisen päivän haaste on aina helppo ja toimii lähinnä lämmittelynä.

{{< highlight shell >}}
$ go run . -d 1 -s 1
Day 1 / Step 1 result: 1873376
Execution time 355.709µs

$ go run . -d 1 -s 2
Day 1 / Step 2 result: 18997088
Execution time 357.542µs
{{< /highlight >}}

[1. päivän ratkaisu GitHubissa](https://github.com/saaste/advent-of-code-2024/blob/main/pkg/puzzle/1.go)