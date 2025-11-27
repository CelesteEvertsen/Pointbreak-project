I dette prosjektet har hovet fokuset gått til å lære seg Payload. Jeg synes ikke at prosjektet er perfekt. Å ser tydelig at jeg har masse å lære. Det grunnnleggende oppsette til Payload har kommet litt mer frem i lyset.


Renderbloks var utfordrene, med tanke på det vi har lært i minGA. Jeg valge kun å bruke 1 blokk, etter min forstålese så, så jeg ikke grunn til å bruke to i dette projektet.
Mulig jeg har missforstått, men håper for all del at dere da tar dere tid til å kommentere og forklare hvorfor jeg har missforstått og hvorfor deres forslag eventuelt hadde hvert bedre. Slik at jeg kan Lære
Målet i koden er å kunne løse det som er krav i oppgaven, slik jeg har forstått det. 

Føler at jeg har klart å Løse det dere ber om. Utdyp gjerne det som bør forbedres til eksamen.

Lagde to collections, en som het Main som fokusere på selve hjemmesiden. Det er her jeg kalle på blocks. Samt at det ga mening for meg å ha kurs sammen med header.

Valgte å bruke POSTs for reise kortene, da jeg forsto dettes som en typeblogg. Å tenkte at det kanskje var bedre å ikke ha de sammen med main. Da det ga mer mening i admin panelet å ha det separat.
Forklar gjerne om jeg ikke forsto det riktig slik at jeg kan gjøre en god jobb til Eksamen.

Største utfordringen i Oppgaven var å finne løsning på at Typescript klager over at Image er number. Så her måtte jeg bruke type guards får å hjelpe typescript å skjønne at dette er ett object.

Andre ting som er krevende er å lage mapper og filer med navn som gir mening for dere. Spesielt fordi under en læringsfase så bruker jeg navn som hjelper meg å ikke gå meg vill i min egenkode. Spesilet nå det blir så mange filer/mapper.
Vær gjerne tydlige på hva som kan gjøre bedre her, og hvorfor.

Dato for Tavel/Blogg ble laget i ett eget komponent som Heter DateAndTme, der jeg bruker props for å kunne gjennbruke det flere steder.

as React.CSSProperties: ble brukt her fordi Typescript klage på textColor " does not exist in type "properties <string | number, string>"
kilde: https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript


header.tsx --> data-position, kilder som hjalp meg her:
https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes

data(mappe) her har jeg laget props på post og main slik at jeg kan gjenbruke det andre steder.
Så at jeg hadde bruk samme kode flere steder, å prøvde meg på props



Valte å beholde linken til Admin, usikker på om dere ønsket den.
usikker på  om dere må ha innloggingen jeg lagde
bruker navn: email@email.com
passord:  email@email.com

### Begrunnelse (sensor Vegar)
Vegar Norman (Internal assessor)
Besvarelsen din er godkjent siden den oppfyller kravene i oppgaven og vel så det, og jeg synes du har fått til mye bra med Payload selv om du reflekterer over at du ikke helt har forståelsen på plass riktig ennå.

Jeg strevde litt med å finne ut av hvordan du har lagt til kurs på siden, helt til jeg fant ut at kursene var kodet som blokker og lagt til i hovedside-innholdet. Her kunne du nok med fordel ha laget en egen innholdssamling for kurs; dersom en redaktør for denne siden skulle legge til et nytt kurs eller endre på et eksisterende, er det stor sjanse for at denne redaktøren ville blitt forvirret. Jeg tenker at dette hører til i en innholdssamling; en grei måte å skille de to fra hverandre på er at blokker brukes hovedsaklig til presentasjon, mens innholdssamlinger er for faktisk innhold som skal lagres i databasen. Jeg synes du løste dette på en interessant måte allikevel med tanke på routing der du henter ut innholdet og deretter filtrerer på blokkene; det har jeg ikke sett før og jeg synes det viser at du tenker over hvordan ting er strukturert i koden din.

Jeg liker godt måten du henter ut data på, med funksjoner som ligger i en data-mappe; jeg har ikke sett dette gjort akkurat sånn før og synes det var en smart måte å modularisere på. Jeg vet ikke om du har sett dette gjort på denne måten et annet sted, men jeg stjeler den til senere for det var smart strukturert.

Jeg vil gi deg ros for hvordan du har laget hero-banneret og linket det opp mot Payload; muligheten for å flytte på tekst på denne måten er akkurat sånn funksjonalitet de som er webredaktører setter pris på.

Du sliter litt med mappestrukturen din og at ting ligger litt her og der. Komponenter bør alltid ligge i en mappe som heter “components” og bare der; nå ligger komponentene litt strødd rundt omkring i prosjektet. For eksempel burde renderBlocks ha vært lagt sammen med de andre komponentene. Om du er usikker på hvor noe egentlig skal ligge, er det lurt å bestemme seg for én mappe og legge ting der frem til du vet at du må flytte på dem. Det fører til mindre rot på sikt.

Et tips er å se på eksempelprosjektene til Payload og Next, ettersom disse kan gi deg noen gode tips om hvordan andre strukturerer koden sin. Det er ikke alltid det er én universell regel som gjelder, og en del har å gjøre med smak og behag, men når du har noen konkrete eksempler du kan gå ut fra kan det hende at det gir litt mer mening for deg å se hvordan andre har gjort det.

Jeg synes innholdssamlingene dine og hvordan de presenteres i Payload er godt strukturert, med unntak av det som gjelder kurs som jeg allerede har nevnt. Fin bruk av labels og hjelpetekster som gjør det lettere å forstå hva feltene gjør.

Utseendemessig synes jeg nettsiden er fin å se på. Jeg vet at jeg har sett den navigasjonen du har brukt før i eksamensoppgaven din. Her er det viktig at du kildehenviser og refererer til deg selv, for gjenbruk av kode fra andre oppgaver kan regnes som plagiat dersom du ikke kildehenviser. I dette tilfellet lar jeg den gå og gjør deg oppmerksom på det sånn at du vet det til senere; i en eksamenssituasjon hadde dette vært strengere. Jeg synes ellers at du har gjort en god jobb med å dele opp i gjenbrukbare komponenter og bruke modulær styling.

Som en helhet er det litt puss og pirk, men jeg synes du har levert et godt resultat. Jeg forstår at temaet rundt Payload er litt vanskelig ennå, for det bærer refleksjonen din preg av; samtidig må jeg si at jeg synes det virker som om du forstår og håndterer teknologien veldig bra. Jeg anbefaler deg å fortsette å jobbe med temaet og fortsette å lage ting, for jo mer mengdetrening du får, jo bedre sitter det.

Bra jobbet!