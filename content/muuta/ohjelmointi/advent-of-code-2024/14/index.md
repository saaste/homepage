---
title: "Advent of Code 2024: 14. päivä"
linkTitle: "14. päivä"
lastmod: 2024-12-14T13:47:44+0200
summary: "Robottien väistelyä ja joulukuusen etsimistä."
---
### Ensimmäinen osa
Edessämme on kenttä, jota vartioi 500 turvallisuusrobottia. Jotta yksi seikkailuryhmästämme pääsisi kentän takana olevaan vessaan, meidän on pystyttävä väistämään kaikki robotit. Tämä vaatii sitä, että tiedämme, missä robotit sijaitsevat tulevaisuudessa.

Jos katselemme kenttää ylhäältä päin ja ajattelemme sitä ruudukkona, se on `101` ruutua korkea ja `103` ruutua leveä. Robotit puolestaan liikkuvat koko ajan vain yhteen suuntaan.

Jokaisen robotin tämän hetkinen sijainti sekä suuntavektori on annettu syötteessä näin:
{{< highlight shell >}}
p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3
{{< /highlight >}}

`p` tarkoittaa robotin aloitusruutua, joka on ilmoitettu muodossa `p=x,y`. Ensimmäinen robotti lähtee liikkeelle sijainnista `0,4`, joka tarkoittaa `0` ruutua vasemmasta seinästä ja `4` ruutua yläseinästä

`v` kertoo robotin suunnan ja nopeuden. Se on ilmoitettu muodossa `v=x,y`. Positiivinen `x` tarkoittaa, että robotti liikkuu oikealle ja positiivinen `y` sitä, että robotti liikkuu alaspäin. `x` ja `y` kertoo sen, kuinka monta ruutua robotti kulkee joka sekunti.

Esimerkin ensimmäinen robotti `p=0,4 v=3,-3` lähtee sijainnista, joka on `0` ruudun päässä vasemmasta seinästä ja `4` ruudun päässä yläseinästä. Se liikkuu joka sekunti `3` ruutua oikealle ja `3` ruutua ylös päin.

Roboteista löytyy viimeistä huutoa olevaa tekniikkaa. Tästä syystä ne pystyvät sujuvasti välttämään törmäilyä, vaikka olisivat samassa ruudussa. Lisäksi ne pystyvät teleporttaamaan!

Kenttä, jota robotit vartioivat, on `101` ruutua leveä ja `103` ruutua korkea (katsomme sitä edelleen ylhäältä päin). Mikäli robotti päätyisi kentän ulkopuolelle, se teleporttaa sujuvasti kentän toiselle laidalle, kuin [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man), ja jatkaa matkaansa.

Lopuksi on selvitettävä, missä jokainen robotti on `100` sekunnin kuluttua. Tämän jälkeen kenttä on jaettava neljään yhtä suureen osaan. Pystyyn ja vaakaan jää kentän keskelle yhden ruudun kaistaleet, jotka eivät kuulu mihinkään osaan. Tehtävänä laskea, montako robottia on jokaisessa neljänneksessä ja kertoa robottien määrät keskenään.

Tilanne 100 sekunnin päästä voisi näyttää esimerkiksi tältä:

{{< highlight shell >}}
..... 2..1.
..... .....
1.... .....
           
..... .....
...12 .....
.1... 1....
{{< /highlight >}}

Esimerkissä neljänneksissä on `1`, `3`, `4` ja `1` robottia, joten tulokseksi tulisi `12`.

Tämä on jälleen näitä tehtäviä, jotka on helpointa ratkaista yksinkertaisesti simuloimalla robottien liikkeitä. Sen voisi tehdä joko loopissa, joka liikuttaa robotteja 100 kertaa, tai koodilla, joka yksinkertaisesti laskee robottien lopullisen sijainnin jonkinlaisella kaavalla. Jälleen kerraan oma matemaattinen työkalupakki on niin vajavainen, etten osaa suoraan sanoa, kuinka jälkimmäinen ratkaisu tehdään. Perstuntumalta se tuntuu kuitenkin verrattain simppeliltä trigonometriselta tehtävältä.

Koska tehtävä tuntui varsin helpolta, aloin heti miettiä, kuinka tehtävän toinen osa voisi vaikeuttaa ratkaisuja. Vaihtoehtoja on useita. 100 sekunnin sijaan meidän pitääkin selvittää, missä robotit ovat 1000 vuoden päästä. Vaihtoehtoisesti robottien vauhti voisi muuttua jollain logiikalla. Robotit voisivat myös törmäillä toisiinsa, jolloin ne eivät enää voisikaan kulkea toistensa läpi. Ehkä niiden suunta muuttuu, mikäli ne päätyvät samaan ruutuun.

AoC:ssa brute-force loopit kostautuvat varsin usein, joten päätin lähteä eilisen tapaan liikkeelle sillä, että yritin selvittää, kuinka helposti voisin tehdä funktion, joka yksinkertaisesti laskee robotin sijainnin tietyn sijaintimäärän jälkeen.

Eipä sitä tarvinnut pitkään miettiä kun tajusin, että tällainen teleporttaus kentän toiseen laitaan onnistuu [modulo](https://en.wikipedia.org/wiki/Modulo)-operaatiolla. Modulo jakaa ensimmäisen luvun jälkimmäisellä ja palauttaa jakojäännöksen. Esimerkiksi `5 mod 3 = 2`. Kuinka tämä auttaa teleporttailussa?

Ajatellaan pieni 3 x 3 kokoinen ruudukko ja robotti, joka lähtee ruudusta `0,1` ja joka liikkuu joka sekunti `5` askelta oikealle. Lähtötilanne on tämä:

{{< highlight shell >}}
...
1..
...
{{< /highlight >}}

Jos robotti jatkaisi liikettä suoraan ilman teleporttailua, se päätyisin kentän ulkopuolelle ruutuun `5,1`:
{{< highlight shell >}}
...
.....1
...
{{< /highlight >}}

Mutta koska robotti osaa teleportata, se päätyykin ruutuun `2,1`:
{{< highlight shell >}}
...
..1
...
{{< /highlight >}}

Ehkä huomasitkin, että ilman teleporttailua jatkavan robotin sijainti `5` on sama kuin moduloesimerkissä. Samassa esimerkissä oleva `3` vastaa ruudukon kokoa. Esimerkin vastaus `2` puolestaan on ruutu, johon robotti päätyi teleportatessaan. Toisin sanoen `[robotin sijainti ilman teleporttailua] mod [ruudukon koko] = [robotin uusi sijainti]`.

Tämä toimii myös useammalla liikkeellä. Mikäli haluaisimme tietää, missä robotti on kahden sekunnin jälkeen, saamme sen selville `5*2 mod 3 = 1`. Kahden sekunnin päästä robotti olisi siis ruudussa `1`.

Koska robotit liikkuvat myös pystysuuntaan, meidän on laskettava niiden uudet sijainnit sekä X- että Y-akselille. Tämä ei ole kuitenkaan mikään ongelma ja moduloa käyttämällä vältämme loopit. Ei muuta kuin koodia kirjoittamaan!

Tehdessä muistin, että vasemmasta ja yläreunasta ohi menevät, eli miinusmerkkiset sijainnit pitää käsitellä hieman eri tavalla. Siinäkin hyödynnetään moduloa, mutta nyt tulos pitää vähentää ruudukon korkeudesta ja leveydestä. Paitsi jos modulon tulos on 0. Silloin robotti päätyy nollakohtaan. Kai tätä logiikkaa voisi yksinkertaistaakin, mutta nääääh...

Ajoin koodin testisyötteillä ja huomasin, että olin tehnyt parissa kohtaa pieniä virheitä. Korjasin ne pois ja sain oikean lopputuloksen. Sitten varsinainen syöte sisään ja homma rokkasi. Pelonsekaisin tuntein siirryin toiseen osaan.

### Toinen osa
Arvailuni toisen osan haasteesta menivät metsään. Totta puhuen en muista, että tällaista kierrepalloa olisi ollut aikaisempina vuosina. Jos on, minä olen onnistunut sen skippaamaan.

Tehtävä kertoo, että robotit ovat samoja, joita käytetään pohjoisnavalla (jossa Joulupukki AoC-tarinan mukaan *virheellisesti* asuu). Robotteihin on piilotettu [eastern egg](https://fi.wikipedia.org/wiki/P%C3%A4%C3%A4si%C3%A4ismuna_(media)), jonka ansiosta suurin osa niistä järjestäytyy satunnaisesti joulukuusen muotoon. Tehtävänä on selvittää, montako sekuntia menee, ennen kuin robotit ensimmäisen kerran järjestyvät tähän muotoon.

Mutta...mikä on joulukuusen muoto?!

Lähdin siitä oletuksesta, että sillä tarkoitetaan muotoa, jossa yksi robotti toimii joulukuusen kärkenä ja kaksi seuraavaa robottia on sen alapuolella kulmittaisissa ruuduissa. Niiden alapuolella taas on kaksi uutta robottia. Näin ne jatkavat, kunnes ne tietyssä kohtaa muodostavat kuusen oksan ja jatkavat sitten taas alaspäin. Jotain tällaista.

{{< highlight shell >}}
.....#.....
....#.#....
...#...#...
..###.###..
...#...#...
..#.....#..
{{< /highlight >}}

Vaihtoehtoisesti kuusi voisi olla myös täytetty:
{{< highlight shell >}}
.....#.....
....###....
...#####...
..#######..
...#####...
..#######..
{{< /highlight >}}


Tämä on toki vain arvaus, mutta tällä ajattelin lähteä kokeilemaan. Tutkisin siis käytännössä ylärivin keskimmäisen ruudun ja katsoisin onko siinä robotti. Samalla tarkastaisin sen kulmittaiset ruudut. Ajattelin laittaa koneen ruksuttamaan sekunti kerrallaan, ja tulostaisin ruudulle jotain aina, kun nämä kolme ehtoa täyttyy. Näin näkisin, että kuinka usein tämä yksinkertainen ehto toteutuu. Jos niitä tulee todella usein, lisäisin seuraavankin rivin. Tämä on tietenkin puhdas brute force -menetelmä, joten jos joulukuusi ilmestyy vasta 10 000 000 sekunnin kohdalla, ratkaisu ei toimi. Testaan silti!

Eipä toiminut, tai jos joulukuusi löytyisi, se löytyisi paljon myöhemmin kuin mitä minä jaksoin odotella.

Hetken aikaa mietin, että voisinko kääntää ongelman toisinpäin. Loisin muutaman robotin, jotka olisivat puumuodostelmassa ja sitten tarkastaisin, että monenko sekunnin päästä ne ovat aloitussijainnissa. Ongelmana oli, etten tiedä mihin kohtaa puuta jokainen robotti päätyisi, joten en tiennyt alkuarvoja, jotka voisin kääntää ympäri. Kaikesta huolimatta se olisi brute force -ratkaisu, vaikka olisikin pienemmällä tietomäärällä. Vaikka miten mietin, en keksinyt tapaa päästä brute force -ratkaisusta eroon. Minua vaivasi myös se, etten tiennyt minkälaista muotoa tässä ollaan hakemassa.

Päätin jatkaa alkuperäisellä suunnitelmalla ja keksin, kuinka voisin nopeuttaa sitä. Voisin laittaa robottien sijainnit map-tietorakenteeseen ja päivittää sitä aina kun robotit liikkuvat. Näin voisin ainakin nopeasti tarkastaa, onko joulukuusen kärki olemassa. Ei se kovin hyvältä idealta tuntunut, mutta päätin koettaa sitä.

Ratkaisu ei tuottanut tulosta. Luin tehtävän vielä uudelleen jos olisin missannut jotain. Kiinnitin huomiota siihen, että tehtävässä mainitaan, että *iso osa* muodostaa kuvion. Ei siis välttämättä kaikki. Se ei silti kerro, että miltä kuusen pitäisi näyttää.

Seuraava ajatukseni oli se, että ehkä joulukuusi muodostuukin keskellä ruudukkoa, joten tutkin ruudukon keskimmäisen ruudun ja sen ympärillä olevat naapurit. Sekään ei tuottanut tulosta. Mitä hittoa minä olen oikein etsimässä?!

Sitten lähdin oletuksesta, että ehkä kuusi on täytetty, joten voisin etsiä dronea, jonka ympärillä on riittävästi droneja. Toinen oletus oli, ettei tällaista isoa dronerypästä tulisi sattumalta. Paljon oletuksia, mutta minkäs teet!

Oletukset toimivat, sillä reilun sekunnin päästä sain oikean tuloksen! Halusin vielä nähdä, miltä kuusi näytti, joten käytin aikaisemmin oppimaani [termbox-go](https://github.com/nsf/termbox-go)-kirjastoa ja piirsin tuon kyseisen hetken terminaaliin. Siellähän se kuusi törötti kehystettynä!

![Terminaaliin piirretty kuusi, joka näyttää tehtävän ratkaisun](kuusi.png)

{{< highlight shell >}}
$ go run . -d 14 -s 1
Day 14 / Step 1 result: 224969976
Execution time 4.460875ms

$ go run . -d 14 -s 2
Day 14 / Step 2 result: 7892
Execution time 1.04478975s
{{< /highlight >}}

- [Haastesivu](https://adventofcode.com/2024/day/14)
- [Ratkaisun koodi](https://github.com/saaste/advent-of-code-2024/blob/main/pkg/puzzle/14.go)