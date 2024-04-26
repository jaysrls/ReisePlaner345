# ReisePlaner345
Linke Seite | Rechte Seite
Linke seite: Form mit allen Auswahlmöglichkeiten
Rechte seite: Packliste

Attribute:
    Geschlecht: Männlich | Weiblich
    Anzahl Ferientage: number 1-x
    Hygiene Level: slider number 1-5
    Transportmittel: Auto | Zug | Flugzeug
    Unterkunftsart: Ferienwohnung | Hotel | Zelt/Camper
    Eigene spezifische Artikel: Freitext CSV

Algorithmus:
    unterhosen = anzahl tage
    socken anzahl : if (hygiene == 1) sockenanzahl = anzahl tage / 2. (if hygiene == 2) anzahl socken = anzahl tage. else anzahl socken = anzahl tage + (hygiene level - 2)
    tshirts = hygienelevel/5 * anzahl tage
    hosen = anzahl tshirts / 3 (if summer divide by 2 and add removed pants with shorts)
    pullis = anzahl tshirts / 2 (if summer divide by 2)
    schuhe : jenach jahreszeit(sommer: 2 turnschuhe, winter zwei festere schuhe, herbst/frühling ein paar turnschuhe ein paar festere schuhe) sondernschuhe (wanderschuhe/flipflops/ski oder snowboardschuhe)
    hut: (winter: mütze, sommer: kappe)

    transportmittel (zug: koffer + rucksack, flugzeug: kleine tasche + koffer, auto: beliebig)
    unterfkunft spezifisch (camper/zelt: besteck + kochutensilien + gaskocher + schlafsack)
    spezifisch gesechlecht (weiblich: bhs anzahl tage / 7(if sommer or wanderferien * 2))

    if summer bugspray

    hygiene artikel.
        1:
            zahnbürste + zahnpasta
        2:
            1 + seife + handtuch
        3: 
            2 + deo + rasierer + rasierschaum +  + schampoo
        4:
            3 + handcreme + lippenpomade + parfum + nagelschere + wattenstäbchen
        5:
            4 + cleanser + moisturizer + gesichtscreme



