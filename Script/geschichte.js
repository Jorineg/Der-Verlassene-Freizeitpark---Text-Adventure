var geschichte = {
	speicherGroesse:6,
	situationen:[
		{
			id: 1,
			auswahlText: "Nochmal",
			text: "Es ist später Nachmittag eines heißen Sommertages. Du bist mit deinem Freund Chan im Urlaub. Er hat dich überredet in einen verlassenen Freizeitpark ein paar Kilometer außerhalb, eures Ferienortes zu gehen um ein bisschen was \“richtiges\“ zu erleben. Als ihr ankommt dämmert es schon. Das große Tor am Haupteingang des Parks ist mit einem Schloss gesichert, doch ihr entdeckt eine unverschlossene Seitentür, durch die ihr in den Park gelangt. Ihr kommt an einem Karussell vorbei und Chan hat die Idee dort oben ein Selfie zu machen. Doch es gibt auch noch eine Riesenrutsche von der man bestimmt auch einen guten Ausblick hätte.",
			hintergrundSound: "atmosphere.mp3",
			soundVerzoegerung: 14500,
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [2,3]
		},{
			id: 2,
			auswahlText: "Ihr nehmt die Riesenrutsche",
			text: "Ihr beschließt gemeinsam auf die Riesenrutsche zu klettern, doch das ist gar nicht so einfach denn die Treppe die einmal hinauf führte sieht ziemlich instabil aus. Schließlich bleibt euch nach kurzem Überlegen nur noch die Feuerleiter für den Notfall. Oben angekommen habt ihr einen schönen Ausblick über einen großen Teil des Parks und könnt eine Geisterbahn ein paar hundert Meter entfernt ausmachen.",
			soundVerzoegerung: 9000,
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [4]
		},{
			id: 3,
			auswahlText: "Ihr nehmt das Karussell",
			text: "Ihr wollt aufs Karussell klettern, doch ohne Leiter scheint das kaum möglich. Eine Räuberleiter, wäre leider auch noch zu niedrig, also sucht ihr nach etwas zum daraufstellen. Nach ein paar Minuten findet ihr einen langen Ast mit mehreren Gabeln dran. Chan lehnt ihn an das Karussell und klettert gleich als erster hoch. Er ruft:\“Ihhh das ist mega eklig, erst die hier und dann das…!\“. Du kletterst schnell hinter her, um herauszufinden was denn so eklig ist. Als du oben bist verstehst du. Da liegen einige alte Brezeln, Brötchen und zerplatzte Luftballons, hinzu kommt noch die ganze Vogelkacke, einfach widerlich. Doch in der Ferne seht ihr eine kleine Bahn, Chan tippt auf eine Geisterbahn.",
			soundVerzoegerung: 8000,
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [4]
		},{
			id: 4,
			auswahlText: "Das Foto",
			text: "Chan kommt auf einmal von hinten angeschlichen und klaut dir dein Handy aus der Hosentasche. Zuerst willst du ihm hinterherrennen, und es ihm wieder entreißen, doch Chan meint er wolle nur ein Selfie mit dir machen. Weil er ja dein bester Freund ist willigst du ein. Das wird ein schönes Bild, mit dem Park im Hintergrund.",
			soundVerzoegerung: 11000,
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [5,6]
		},{
			id: 5,
			auswahlText: "Hochladen auf Istagram",
			text: "Da das Foto wirklich schön ist beschließt ihr es auf Instagram zu teilen und zu zeigen was ihr im Team so drauf habt. Schon nach drei Sekunden kommen die ersten likes, einer ist von deinem Klassenkameraden.",
			speichern:[0],
			loeschen:[],
			bedingteZiele:[],
			ziele: [6]
		},{
			id: 6,
			auswahlText: "Zur kleinen Bahn gehen",
			text: "Jetzt wollt ihr aber unbedingt zur kleinen seltsamen Bahn ein bisschen weiter entfernt gehen. Als ihr näher kommt entdeckt Chan ein halb verfallenes Schild, auf dem in schnörkeliger, kaum erkennbarer Schrift \“Geisterbahn\“ steht.",
			soundVerzoegerung: 2000,
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [7,8]
		},{
			id: 7,
			auswahlText: "Geisterbahn fahren",
			text: "Obwohl die Bahn einen nicht sehr vertrauenserweckenden Eindruck macht, beschließt ihr, mit ihr zu fahren. Das ist möglich, weil sie am Anfang einen Gang hinab führt. Chan steigt schon mal ein. Du schiebst kurz den Wagen an, und schwingst dich dann zu ihm in den einzigen Wagen. Der Wagen beschleunigt und wird immer schneller, ein ganzes Stück lang. Dann kommt eine steile Linkskurve und vor euch ist plötzlich ein weißes Gespenst zu sehen. Du erschreckst dich so sehr, dass dir während der Fahrt dein Handy aus der Tasche und neben die Gleise fällt. Doch du vergisst das Handy schnell wieder, als ihr durch einen etwas federnden Geist, der von der Decke gefallen sein muss, plötzlich gebremst werdet, da es jetzt bergauf geht könntet ihr sowieso nicht weiterfahren. Der Strom für die Bahnen ist ja schon lange abgeschaltet. Ihr steigt schnell aus dem Wagen, da der Geist auf den Schienen mit viel Blut, ziemlich gruselig aussieht und ihr euch nicht länger in seiner Nähe aufhalten wollt.",
			hintergrundSound: "gruselSound.mp3",
			soundVerzoegerung: 8000,
			speichern:[1],
			loeschen:[],
			bedingteZiele:[],
			ziele: [9,10]
		},{
			id: 8,
			auswahlText: "Geisterbahn entlang gehen",
			text: "Da die Bahn doch ziemlich kaputt wirkt, geht ihr sie schweigend entlang. Zwar ist das nicht ganz so spannend, aber viel weniger gefährlich. Mit der Zeit wird es dir immer lieber, dass ihr gelaufen seid, denn es geht schon seit zwei Minuten unaufhaltsam abwärts.",
			soundVerzoegerung: 2000,
			hintergrundSound: "gruselSound.mp3",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [11]
		},{
			id: 9,
			auswahlText: "Ihr geht weiter",
			text: "Du lässt dich von Chan überreden weiterzugehen und den Rest der gruseligen Geisterbahn auch noch zu erkunden. Doch schon nach kurzer Zeit langweilt euch das bloße langgehen und ihr brecht ein Brett der morschen Holzwand, die die ganze Bahn abdunkelt, heraus. Ungefähr fünfzig Meter von euch entfernt, steht ein altes Spaceshuttle, auch wenn es dafür ziemlich klein aussieht. Ob man da reinkommen würde? Chan spricht dich in diesem Moment an und meint, dass es in der anderen Richtung eine ziemlich cool aussehende Achterbahn gibt. Ihr seht, dass auf einer hohen Stelle ein einzelner Wagen steht und man damit vielleicht fahren könnte.",
			soundVerzoegerung: 0,
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [12]
		},{
			id: 10,
			auswahlText: "Ihr geht zurück",
			text: "Du kannst Chan überreden zusammen zurück zu gehen um noch mehr Begegnungen mit Blutverschmierten Gespenstern zu vermeiden. Chan rennt ein Stück voraus und versteckt sich hinter einer Ecke, vermutlich um dich zu erschrecken, doch du schleichst dich von der anderen Seite ebenfalls an die Ecke heran und rufst ganz laut: \“HA!\“, als du um die Ecke kommst. Doch wo ist Chan?  Dann umfassen dich blitzschnell zwei Arme von hinten. Du erschreckst dich so sehr, dass du für ein paar Sekunden kaum klar denken kannst. Chan meint, dass er es dir heimzahlen wollte, dass du ihn erschrecken wolltest. Du willst ihn fragen wie er das meint, aber er geht schon weiter.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [11]
		},{
			id: 11,
			auswahlText: "Auf einmal hört Ihr ein knacken, genau unter euch.",
			text: "Du willst wegspringen, aber ihr seid schon durch drei morsche Bretter in irgendeinen Raum gefallen. Nachdem ihr euch vom ersten Schreck erholt habt und eure Augen sich ansatzweise an die Dunkelheit im Raum gewöhnt haben, müsst ihr feststellen, dass das Licht nicht geht. Doch durch eine Lichtquelle in einem anderen Teil des Raumes, könnt ihr den Umriss einer Tür erkennen. Chan geht als erster hin, meint aber nach kurzem betrachten, dass die Tür abgeschlossen ist. Du willst dich auch erst noch einmal vergewissern, doch nach kurzem rütteln an der Tür, musst du Chan leider zu stimmen. Doch dann gehst du um eine Ecke in den anderen Teil des kleinen Raumes. Über einer weiteren Tür hängt dort eine grüne Notausgangsleuchte, die leicht flackert. Ansonsten könnt ihr in diesem Teil einen großen Tisch mit zwei Computern und jeder Menge anderem typischen Schreibtischkram erkennen.",
			soundVerzoegerung: 200,
			hintergrundSound: "",
			speichern:[2],
			loeschen:[],
			bedingteZiele:[],
			ziele: [13,14]
		},{
			id: 12,
			auswahlText: "Die Achterbahn",
			text: "Die Achterbahn ist rot und so hoch, dass euch vom bloßen Anblick  schon schwindelig wird. Ihr geht aber doch hin.",
			soundVerzoegerung: 0,
			hintergrundSound: "atmosphere.mp3",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{	
					bedingung: 1,
					ziele: [55],
					sonst: []
				}
			],
			ziele: [15,16]
		},{
			id: 13,
			auswahlText: "Ihr geht durch den Notausgang",
			text: "Chan wollte eigentlich gerne einen der beiden Computer versuchen anzuschalten, doch du versicherst ihm, dass es außer dem Strom zur Not-Beleuchtung, wahrscheinlich keinen Strom gibt. Er stimmt dir zu, und ihr geht gemeinsam durch den Notausgang hinaus. Draußen seht ihr eine Achterbahn und etwas weiter weg ein altes Spaceshuttle, so sieht es jedenfalls aus.",
			soundVerzoegerung: 8000,
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [12]
		},{
			id: 14,
			auswahlText: "Computer starten",
			text: "Du drängst ihn hier schleunigst rauszugehen, weil in so einem komischen Raum ja vieles passieren könnte, doch er winkt ab: \“sei doch kein Angsthase!\“, ruft er dir zu und hämmert schon mit den Händen auf eine der beiden Tastaturen ein. Der Computer geht tatsächlich an, doch schon nach wenigen Sekunden ist seine gute Laune weg: \“Passwort geschützt.\“, sagt er ein wenig enttäuscht. Doch dann muss ihm wohl eingefallen sein, dass er nicht umsonst den \“Junior-Hacker-Award\“ U14 vor zwei Jahren gewonnen hat. Und schon ist er wieder voll in seinem Element. Er zeigt dir stolz wie er mit nur ein paar Klicks, aber dafür mit scheinbar unendlich vielen komplizierten Tastenkombinationen, das Passwort geschickt umgeht und dabei sogar noch auf \“Chan_war_hier_haha\“ stellt. \“Jetzt kann sich kein normaler Typ mehr hier einloggen, ist das nicht verrückt?\“ Du nickst nur schweigend. Doch als er plötzlich eine Seite öffnet auf der viele Überwachungsbildschirme abgebildet sind erstarrt ihr beide kurz, denn ihr seht euch, wie ihr am Computer sitzt, von hinten. Chan flüstert dir zu: \“Shit!!! Shit! Shit!!!!! vielleicht werden wir gerade überwacht. Das muss eine Infrarot Kamera sein.\“ Plötzlich hört ihr Schritte. Ihr habt beide nur einen Gedanken, flüchten! Ihr stürmt durch die Notausgangstür und seid heilfroh, dass sie nicht auch abgeschlossen ist. Als ihr nach draußen tretet seht ihr in der Ferne eine Achterbahn und rechts von euch seht ihr eine Art Spaceshuttle. Ihr geht erst einmal zur Achterbahn.",
			soundVerzoegerung: 6000,
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [12]
		},{
			id: 15,
			auswahlText: "Die Achterbahn",
			text: "Chan will unbedingt mit der Achterbahn fahren und klettert einfach los, dir bleibt schließlich nichts anderes übrig als hinterher zu klettern, wenn du in der Dunkelheit nicht allein sein willst. Oben auf der Bahn sind tatsächlich zwei einzelne Wagen mit jeweils vier Sitzplätzen stehen geblieben. Du setzt dich zuerst in den einen braun rot karierten Wagen. Chan gibt dir einen Stoß und du fährst die Bahn entlang. Du wirst so sehr in den Sitz gedrückt, dass du dich kaum umdrehen kannst um nach Chan zu schauen. Doch auch als dein Wagen nach fast 30 Sekunden zum Stehen kommt siehst du Chan noch nicht. Du steigst schnell aus, und rennst zurück. Dann siehst du Chan. Er muss auf der anderen Seite den Berg hinab gefahren sein, sodass er in die Station der Achterbahn gebrettert ist. Du rennst schnell hin um Chan zu helfen, der unter zwei Holzbalken eingeklemmt ist. Du schaffst es mühevoll erst den einen und dann den anderen Balken wegzuheben, während Chan sich vor Schmerzen krümmt und laut jault.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [21]
		},{
			id: 16,
			auswahlText: "Zum Spaceshuttle",
			text: "Nachdem ihr beschlossen habt, dass die Achterbahn zu gefährlich aussieht, geht ihr gemeinsam zum Spaceshuttle. Doch wie ihr dem Gebilde so näher kommt, sieht es immer weniger nach einem Spaceshuttle und immer mehr nach einem gewöhnlichen Flugsimulator aus. Chan springt lässig übers Geländer. Du nimmst Anlauf, springst rauf und mit einem Vorwärtssalto elegant wieder runter. Chan ist beeindruckt, denn den kann er nicht, obwohl er seit einem Jahr die Sportart Parkour macht und du gar keinen Sport machst. Doch du hast den Salto heimlich geübt, und auf eine Gelegenheit gehofft ihn Chan endlich zeigen zu können. Auf dem Weg hierher, habt ihr eigentlich beschlossen auf den Flugsimulator rauf zu klettern, aber Chan hielt es für zu gefährlich, falls er sich doch bewegen sollte. Das tat er natürlich nicht, aber woher hätte man das wissen können?",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [17]
		},{
			id: 17,
			auswahlText: "Das Versteck",
			text: "Ihr habt euch inzwischen drinnen umgeschaut, und festgestellt, dass der Simulator nun wirklich nicht sehr spannend ist. Doch dann findest du eine Klappe an der hinteren Wand, wo noch eine Art Stauraum sein könnte. Das Fach ist so tief, dass du ganz hinein kriechen kannst und die Klappe hinter dir sogar wieder schließen könntest. Du drehst dich im Fach um und wunderst dich noch dabei, dass die Ablage \“So\“ groß ist. Du ziehst die Klappe so ran, dass man sie von außen kaum sieht. Dann rufst du nach Chan. Er kommt angerannt, und schaut sich im hinteren Teil des Flugsimulators kurz um. Dann lehnt er sich an die hintere Wand, die Hände hat er hinter dem Rücken. \“Perfekt\“ denkst du dir und packst seine Hände von hinten. Er zuckt zusammen, und kann sich ja nicht mal umdrehen, weil du ja seine Hände festhältst. Du zwingst ihn mit verstellter Stimme in die Knie zu gehen und den Kopf in den Nacken zu legen. Du sagst: \“deinen Kumpel hab ich schon\“ und er scheint es dir zu glauben, denn er gehorcht ohne zu wiedersprechen. Du ziehst ihn jetzt an den Händen ins Fach. Er liegt auf dem Rücken und erkennt dich deshalb zum Glück nicht. Du lachst hämisch, immer noch mit verstellter Stimme. Jetzt fragt er wer du bist. Du antwortest aber nur: \“der Drache von Entenhausen\“, mit extrem gehässiger Stimme. Jetzt geht ihm endlich ein Licht auf, und er gibt dir eine Ohrfeige. Du haust zurück und so wird aus der Geiselnahme ein lustiger Kampf. Nach ein paar Minuten aber, liegt ihr beide lachend im Fach und habt ungefähr zwei dutzend Kratzer mehr als zuvor. Dann seht ihr euch im Fach, das eigentlich ein Raum mit zu niedrig geratener Decke ist, um. Durch ein paar Ritzen im Rumpf des Spaceshuttles fallen die letzten Sonnenstrahlen. Ihr krabbelt noch tiefer hinein und Chan stößt plötzlich mit dem Kopf an einen Pappkarton der gefüllt zu sein scheint. Chan rückt den schweren Karton zwischen euch und öffnet ihn. Er kramt mehrere große Plastiktüten heraus, die mit lauter kleinen Geräten gefüllt sind: \“das sind…\“, flüstert Chan leise, und dann ihr beide im Chor: \“Handys!\“, Chan sagt dass sie sogar nagelneu aussähen. Du kannst es schwer glauben, aber Chan kennt sich mit Handys ebenso gut aus wie mit dem Hacken, deshalb wagst du es nicht ihm zu wiedersprechen. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [18,19,20]
		},{
			id: 18,
			auswahlText: "Schnell verschwinden",
			text: "Ihr beschließt die Handys da zu lassen, weil ihr vielleicht ärger von der Polizei bekommen könntet wenn ihr sie mitnehmt und wenn ihr die Polizei jetzt rufen würdet, dass sie euch ausschimpfen, weil ihr verbotener Weise im Park wart. Also macht ihr euch auf den Rückweg. Ihr findet den Parkeingang gut und rennt nach Hause. Doch leider ärgert ihr euch zu Hause dann doch, dass ihr die Handys dagelassen habt. Und ihr fürchtet, dass eure Eltern euch auf gar keinen Fall noch mal abends losziehen lassen würden ohne zu wissen wo ihr hingeht. So hat euer Abenteuer für viel Action gesorgt, und aus euch sind noch bessere Freunde geworden. Und irgendwie seid ihr auch ganz froh, nicht noch länger im Park geblieben zu sein da es doch ziemlich gruselig war. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 19,
			auswahlText: "Gehen und Handys mitnehmen",
			text: "Ihr robbt wieder zurück zum Ausgang und zieht den Karton hinter euch her. Ihr beschließt gemeinsam, die Handys mitzunehmen und irgendwo heimlich zu verkaufen. Da ihr ja auch keinen Einkaufspreis hattet könnt ihr sie zu Spott-Preisen an alle eure Freunde verkaufen. Natürlich müssen alle erst eine Vereinbarung unterschreiben, in der steht, dass sie nicht sagen dürfen, woher sie die Handys haben. So habt ihr ein tolles Abenteuer erlebt und obendrein auch noch schön viel Gewinn mit dem Verkauf der Handys gemacht. Doch leider verrät euch am Ende doch noch einer eurer Käufer und ihr kriegt viel Ärger. Eure Eltern müssen sogar noch eine Geldstrafe von über 1.000€ zahlen, weil sie Eltern von Kriminellen sind, einfach so aus Prinzip.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 20,
			auswahlText: "Polizei rufen",
			text: "Ihr entscheidet euch dafür mit einem der Handys die Polizei zu rufen und kommt schnell aus dem Versteck damit der Empfang nicht plötzlich abreißt. Du wählst die 110 und beschreibst der Polizei genau wo ihr seid. Als er die Frage stellt, warum ihr überhaupt im Park seid und dass das verboten wäre, weichst du schnell  mit der Frage aus, ob sie wohl was zu trinken für euch zwei mitbringen könnten, der Beamte seufzt und stimmt zu. Er meint er würde gleich drei Streifenwagen losschicken. Als die Polizei dann ungefähr 15 Minuten später Im Simulator ankommt und die Beute sicherstellt, fragt einer der Beamten euch ob ihr da hinten noch mehr gesehen hättet, als ihr nur den Kopf schüttelt, schickt er zwei Polizisten nochmal in die seltsame Klappe um nach noch mehr Handys oder anderem auffälligem Material zu schauen. Sie kehren mit  noch zwei Kartons wieder und meinen zum Beamten der sie geschickt hat, dass da noch sechs weitere Kartons währen die sie noch nicht rausbekommen hätten. Ihr könnt es kaum glauben, als schließlich alle neun Kartons ins Dämmerlicht nach draußen geschleppt wurden. Ihr werdet von der Polizei in euren Ferienort gefahren. Nach ein paar Tagen werdet ihr nochmal auf die örtliche Zentrale gebeten. Die Polizei bedankt sich sehr bei euch und gibt jedem von euch 1000€ Belohnung, da die Kartons die Beute von vielen Überfällen auf Läden in der Nähe waren. Das war ein schönes Abenteuer und ihr schmiedet, obwohl eure Eltern euch das streng verboten haben, neue Pläne für einen weiteren Besuch im Freizeitpark.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 21,
			auswahlText: "Entscheidung",
			text: "Da Chan schwer verletzt ist, könnt ihr nicht einfach weitergehen und du muss dich entscheiden was du tun willst.",
			hintergrundSound: "verletzt.mp3",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 1,
					ziele: [66,67],
					sonst: [23]
				}
			],
			ziele: [26,35]
		},{
			id: 23,
			auswahlText: "Notarzt rufen",
			text: "Du rufst mit deinem Handy schnell den Notarzt und schon nach wenigen Minuten, kommt ein Rettungshubschrauber. Während Chan erst versorgt wird, wird für dich ein Streifenwagen gerufen, der dich nach Hause bringen soll. Da du das schon am Telefon gesagt hast ist auch schon gleich ein Polizei Beamter mit hierher geflogen um bei dir zu bleiben, da du ja verbotener Weise hier bist. Kurz nachdem der ADAC-Hubschrauber abgeflogen ist, kommt auch schon der Streifenwagen der Polizei und holt dich ab. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 0,
					ziele: [24],
					sonst: [25]
				}
			],
			ziele: []
		},{
			id: 24,
			auswahlText: "Wieder zu Hause",
			text: "Da eure Eltern euer Selfie auf Instagram gesehen haben, sind sie entsetzt was ihr gefährliches gemacht habt und meckern fast ohne Pause mit euch. Das Abenteuer war trotzdem cool, aber ihr seid einig, dass ihr sowas nie wieder machen wollt.",
			hintergrundSound: "",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 25,
			auswahlText: "Im Krankenhaus",
			text: "Nachdem ihr zwei Tage später zusammen im Krankenhaus seid (Chan als Patient, du als Besucher), werdet ihr euch einig dass es doch ein cooles Abenteuer war.",
			hintergrundSound: "",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 26,
			auswahlText: "Chan versuchen nach Hause zu tragen",
			text: "Irgendwie schaffst du es (im nachhinein wirst du auch nicht mehr wissen wie) Chan bis zum Parkeingang zu tragen. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 1,
					ziele: [28],
					sonst: [27]
				}
			],
			ziele: []
		},{
			id: 27,
			auswahlText: "Notarzt rufen",
			text: "Dann rufst du den Notarzt und ihr werdet nach einer Wartezeit von lediglich drei Minuten, ins Krankenhaus gefahren, wo schon eure Eltern warten. Sie sind heilfroh, dass euch nicht noch mehr passiert ist. Doch trotzdem sehen sie nicht ganz ein warum ihr eine solch gefährliche Aktion gemacht habt. Euer Abenteuer war ziemlich spannend und ihr seid dadurch ein unschlagbares Team geworden.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 28,
			auswahlText: "Ihr seid verzweifelt",
			text: "Ihr seid verzweifelt und du kannst ohne dein Handy nicht mal den Notarzt rufen. Also wartet ihr völlig erschöpft an der Straße. Ihr hofft, dass Jemand vorbeikommt, und Chan diese Abenteuer überlebt.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 0,
					ziele: [30],
					sonst: [29]
				}
			],
			ziele: []
		},{
			id: 29,
			auswahlText: "Ihr könnt nur noch warten",
			text: "Schon bald kommt ein Mann  vorbei, der auch sofort anhält als er die beiden sieht. Er fordert euch auf einzusteigen. Du stehst vor einer schwierigen Entscheidung, wird der Mann euch ins Krankenhaus bringen oder euch gefangen nehmen? ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [31, 32]
		},{
			id: 30,
			auswahlText: "Die Rettung",
			text: "Nach einer gefühlten Ewigkeit seht ihr zwei Hubschrauber am Himmel, die sich langsam nähern. Als sie fast über euch sind stehst du mit letzter Kraft auf und schreist und winkst den Hubschraubern zu. Beide kreisen erst ein bisschen in der Luft, dann kommt der eine langsam runter und der andere dreht sich auf der Stelle und fliegt dann wieder in die Richtung zurück, aus der beide gekommen waren. Der andere Hubschrauber landet nach zwei Minuten etwas unsanft auf der Straße etwas entfernt von ihnen fünf schwer bewaffnete und komplett verhüllte Männer springen heraus: \“ist einer von euch Chan?\“, will der eine Mann wissen. Du schreist gegen die lauten Rotoren des Helikoptern an: \“Ja, mein verletzter Freund hier ist Chan!\“, dabei zeigst du auf Chan der immer noch fast reglos am Boden liegt. Die Männer rennen auf euch zu und einer hebt Chan hoch. Sie sagen dir, dass du mitkommen sollst und deuten auf den Hubschrauber ihr geht schnellen Schrittes zum HubschrauberChan wird getragen. Schon bald fliegt ihr in Richtung eures Ferienortes. Ein Arzt der mit im Hubschrauber ist kümmert sich derweil um Chan. Dieser scheint bewusstlos geworden zu sein denn der Arzt rüttelt ihn vorsichtig an den Schultern. Da eure Eltern euer Selfie auf Instagram gesehen haben, sind sie entsetzt was ihr gefährliches gemacht habt und meckern fast ohne Pause mit euch. Das Abenteuer war trotzdem cool, aber ihr seid einig, dass ihr sowas nie wieder machen wollt: \“Das war einfach zu gefährlich!\“, meint Chan später im Krankenhaus zu dir.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 31,
			auswahlText: "Einsteigen",
			text: "Du entscheidest dich dafür einzusteigen. Als erstes trägst du Chan zum Auto und legst ihn vorsichtig auf die Rückbank. Schließlich steigst du selbst ein und der Mann fährt los.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 0.5,
					ziele: [33],
					sonst: [34]
				}
			],
			ziele: []
		},{
			id: 32,
			auswahlText: "Nicht einsteigen",
			text: "Du beschließt lieber nicht einzusteigen, weil der Mann ja komisch sein könnte und man aus Prinzip nicht bei fremden einsteigt, zumindest nicht bei Männern, zum Glück kommt aber bald eine Frau vorbei (natürlich in einem roten Käfer), die darauf besteht euch ins Krankenhaus zu fahren. Euch bleibt schließlich nichts anderes übrig als mit zufahren. Eure Eltern sind schließlich heilfroh, dass euch nicht noch mehr passiert ist. Euer Abenteuer war ziemlich spannend und ihr seid dadurch ein unschlagbares Team geworden.",
			hintergrundSound: "",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 33,
			auswahlText: "Gerade noch mal gut gegangen",
			text: "Zum Glück ist der Mann nett und bringt euch zu euren Eltern. Von eurem Ferienhaus aus ruft ihr schnell einen Krankenwagen und der bringt euch ins Krankenhaus. Eure Eltern sind schließlich heilfroh, dass euch nicht noch mehr passiert ist. Euer Abenteuer war ziemlich spannend und ihr seid dadurch noch bessere Freunde geworden.",
			hintergrundSound: "",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 34,
			auswahlText: "Die Täuschung",
			text: "Leider ist der Mann böse und zwingt euch zu seiner Hütte irgendwo im Wald mit zu fahren. Er bietet Euch Wasser an, als du ablehnst, lässt der Mann das Glas einfach stehen und geht. Du hast schrecklichen Durst und hältst es bald nicht mehr aus, und trinkst. Noch während du Chan auch etwas Wasser einflößt, fällst du in Ohnmacht. Irgendwann Morgens, wachst du wieder auf. Nach ein paar Minuten kommt der Mann rein. Er schneidet Chan die Kehle durch und kommt dann auf dich zu: \“Für dich hab ich was anderes besonderes!\“, Er hält dir eine Laugenbrezel hin, und obwohl du weißt, dass sie dich umbringen wird, beißt du ab, da der Drang nach Essen immer größer wird. Die Brezel schmeckt gut. Und du beißt immer wieder ab. Als du sie komplett verspeist hast, geht der Mann kurz aus dem Raum und kommt mit drei weiteren Brezeln wieder. Er legt sie vor dich hin. Du nimmst eine beißt einmal ab und……………………………es passiert etwas schreckliches, und zwar……………….NICHTS! einfach nur nichts. Du bist erschöpft und willst sterben. Also nimmt der Mann kurzerhand den Dolch und…!",
			hintergrundSound: "desolation.mp3",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 35,
			auswahlText: "Um Hilfe rufen",
			text: "Du entscheidest dich dafür laut um Hilfe zu rufen, um Chan nicht allein zu lassen, da das nicht gut für Chan ausgehen könnte. Doch schon nach ein paar Minuten, wird dir das dauerhafte rufen zu anstrengend, auch weil du ziemlich großen Durst hast. Du beschließt im Minutentakt drei mal zu rufen. Das geht besser, und nach einigen Minuten, so rufen, fängt Chan auch an leise mit zu rufen. Er setzt zwar immer erst, beim zweiten mal an, da er keine Uhr hat, und selbst wenn er eine hätte sie ihm wenig gebracht hätte, da du die Sekunden im Kopf zählst. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 0,
					ziele: [37],
					sonst: [36]
				}
			],
			ziele: []
		},{
			id: 36,
			auswahlText: "Ein Hoffnungsschimmer?",
			text: "Nach wahrscheinlich gar nicht so langer Zeit, die sich für dich aber wie eine Ewigkeit angefühlt hat, kommt ein Mann, der ziemlich unfreundlich aussieht, auf auch zu gelaufen. Er trägt ein etwas zerissenes altes weißes Hemd und eine hellgraue Jogginghose. Dazu seltsamerweise eine Krawatte. Du denkst, dass er vielleicht mal hier im Park Aufseher war und seinen Park halt nicht verlassen wollte.",
			speichern:[3],
			loeschen:[],
			bedingteZiele:[],
			ziele: [38,39]
		},{
			id: 37,
			auswahlText: "Die Rettung",
			text: "Nach ca. einer Stunde, hörst du plötzlich Hundegebell, du schreist wieder lauter und öfter und das Gebell kommt näher und näher. Trotzdem siehst du noch keinen Hund. Nach  zwei Minuten, mit vollen Kräften rufen, siehst du endlich einen…, nein zwei………., nein drei………., fünf---------zehn. Da stürmen tatsächlich fünfzehn Männer auf dich und Chan zu. Zwei der Männer führen je einen Hund an der Leine. Als sie bei dir sind fragen sie dich ob ihr die zwei Kinder seid, die abgehauen sind. Du nickst leicht mit dem Kopf, weil das ja nicht ganz zu trifft, aber doch irgendwie was Wahres dran ist. Der eine Mann mit Hund fragt: \“Also bist du Achmed, und das da ist Ida?????\“, Du: \“Ähh……nein, das ist Chan und ich bin..\“, \“Mist!!!! Mist!!!! Mist!!!!, wo stecken die nur. Na egal. Braucht ihr Hilfe?\“, Du: \“Ja, mein Freund Chan ist schwer verletzt und…\“, \“…jaja, schon gut, wir rufen einen Notarzt.\“ Der  Notarzt ist schon nach wenigen Minuten da und ihr werdet ins Krankenhaus gefahren. . Eure Eltern sind schließlich heilfroh, dass euch nicht noch mehr passiert ist. Euer Abenteuer war ziemlich spannend und ihr seid dadurch noch bessere Freunde geworden.",
			hintergrundSound: "",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 38,
			auswahlText: "Bei Chan bleiben",
			text: "Du willst deinen verletzten Freund auf gar keinen Fall im Stich lassen, und im helfen, egal was das für ein komischer Mann ist.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 0.5,
					ziele: [40],
					sonst: [41]
				}
			],
			ziele: []
		},{
			id: 39,
			auswahlText: "Schnell verstecken",
			text: "Es fällt dir zwar ziemlich schwer, aber du musst Chan zurück lassen um selbst vor dem gruseligen Mann in Sicherheit zu kommen. Als du dich hundert Meter weiter hinter einem großen Holzpiraten versteckst, hasst du dich schon selbst dafür, dass du Chan im Stich gelassen hast, aber du hast Angst und willst auf gar keinen Fall zurück zu Chan. Der Mann sagt etwas zu Chan, das klingt wie: \“los aufstehen…………man man ma………..ey!\“, dann hebt der Mann Chan hoch und legt ihn über seine Schulter. Dabei läuft dir ein Schauer über den Rücken. Er schaut sich hastig um. Du ziehst den Kopf ein, und schaust durch ein Holzloch durch den holzigen Bauch des Piraten. Der Mann scheint niemanden entdeckt zu haben und geht schnellen Schrittes in die entgegen gesetzte Richtung als ihr gekommen wart. Du atmest auf.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 1,
					ziele: [47,48],
					sonst: [51]
				}
			],
			ziele: []
		},{
			id: 40,
			auswahlText: "Die Rettung",
			text: "Als der Mann vor euch steht, schaut er erstmal zu Chan herunter und wendet sich dann an dich: \“Braucht ihr Hilfe?\“. Du nickst heftig mit dem Kopf, bringst aber kein Wort heraus, weil du aufgeregt und zugleich erleichtert bist, dass der Mann euch nicht kidnappt und irgendwo hinschleppt. Du stammelst: \“Ja,…..mein Freund….., er ist verletzt!\“. Der Mann meint, dass er am besten gleich einen Notarzt ruft und nimmt das Handy ans Ohr. Nach einem kurzen Telefonat, meint er, dass er uns mit seinem Auto zum Parkeingang fahren will. Als er weggeht, versichert er uns, dass er das Auto holen würde. Du nickst und der sympathische Mann rennt weg. Als du nach höchstens einer Minute ein Auto gebrumm hörst schaust du erstaunt auf. Da fährt ein strahlend Himmelblauer Landrover mit auf lackierten Wolken auf euch zu. Er bleibt kurz vor euch stehen und der Mann von eben steigt aus. Er fasst ihn mit einem Arm unter den Rücken mit dem anderen unter die Beine. Er fragt kurz ob das Okay sei, aber du zuckst nur die Schultern. Er bittet dich die Beifahrer Tür zu öffnen und du eilst natürlich sofort um dem Mann zu helfen. Er setzt Chan auf den Beifahrer sitz und fragt Ob es für dich Okay ist auf der Rückbank zu sitzen. Du nickst wieder mit dem Kopf und steigst dann etwas zögernd ein. Im stillen denkst du, dass so viel Nettigkeit schon seltsam ist, und wie als könnte der Mann deine Gedanken lesen, antwortet er: \“Ich war hier früher mal Aufpasser, hab aber auch oft Kinder bespaßt. Seit die Besitzer den Park geschlossen haben, weil zu wenig Leute kamen, hab ich gefragt ob ich hierbleiben dürfte, und sie haben mir den Park für sehr wenig Geld verkauft. Si meinten sie könnten mich gut verstehen und Ich würde bestimmt gut darauf aufpassen!\“. Du erstaunt: \“Das ist also ihr Park?\“, \“Ja, und ich kann sehr gut nachvollziehen, dass ihr hier eingedrungen seid, sowas hab ich früher nämlich selber mit meinen Freunden gemacht. Und, keine Sorge Ich werd den Sanitätern sagen, dass ihr auf der anderen Straßenseite im Wald wart.",
			hintergrundSound: "",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 41,
			auswahlText: "Die Rettung?",
			text: "Der Mann kommt näher und fragt dich, ob ihr Hilfe bräuchtet. Du nickst mit dem Kopf und bist dir nicht ganz sicher ob der Ton des Mannes freundlich oder gemein ist. Doch dir bleibt keine Zeit um gründlich zu überlegen, denn er fordert euch auf mit ihm zu seinem Haus, etwas weiter im Park, zu kommen. Auch jetzt bleibt dir keine Zeit zum überlegen, geschweige denn um zu antworten, denn der Mann legt sich schon Chan über seine Schulter und meint zu dir: \“Hey, willst du nen heißen Kakao? Dann komm ma mit!\“ , du gehst schweigend mit und beobachtest den Mann dabei sehr misstrauisch. Chan, der mit dem Kopf nach hinten über der Schulter des Mannes liegt, schaut gleichgültig zu mir nach hinten. Obwohl dir eigentlich gar nicht nach lachen zu mute ist, musst du doch ein wenig kichern, weil Chan, wie er da so liegt, wie ein großer Fisch mit Schmollmund aussieht, der sich sehr ärgert gefangen worden zu sein. Der Mann bringt euch in eine kleine, etwas zerfallene, Hütte. Er zeigt euch einen Raum, und sagt: \“Dahinten auf die Kisten könnt ihr euch setzen.\“,Dir fällt auf, dass die Fenster vergittert sind und du denkst sofort an eine Falle. Der Mann der eben noch halbwegs freundlich war, lacht böse, rennt, bevor du etwas tun oder sagen kannst aus dem Raum, und schleudert die Tür zu, die so laut knallt als wäre sie aus massiven Stahl. Dann hört ihr nur noch einen Schlüssel im Schloss der Tür hören und seht im Türspalt zwischen Rahmen und Tür sechs, Bleistift dicke, Stahlbolzen, sich in den Türrahmen bohren. Du wartest lediglich ein paar Sekunden, bis du die Wände und Fenster nach porösen stellen absuchst, denn du willst hier so schnell wie möglich raus. Doch nach einigen Minuten vergeblichen Suchens gibst du auf. \“Außer uns gibt es hier nichts was man kaputt machen kann glaube ich!\“, flüstert Chan.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [42,43]
		},{
			id: 42,
			auswahlText: "Um Hilfe rufen",
			text: "Du meinst, dass ihr nach Hilfe rufen könntet. Davon ist Chan nicht so überzeugt, stimmt aber schließlich doch zu, da ihm momentan auch nichts besseres einfällt. Ihr beginnt nach Leibeskräften zu rufen und zu schreien. Obwohl Chan verletzt ist, oder vielleicht auch gerade deswegen, schreit er noch lauter als du. Zum Glück seid ihr inzwischen wenigstens durch den Stimmbruch durch, sodass man euch wesentlich weiter hört. Doch dann passiert es nämlich……. Nichts! Ihr müsst verzweifelt feststellen, dass euch niemand hört!",
			hintergrundSound: "desolation.mp3",
			speichern:[5],
			loeschen:[],
			bedingteZiele:[],
			ziele: [44]
		},{
			id: 43,
			auswahlText: "Erstmal abwarten",
			text: "Du sagst zu Chan, dass wenn ihr hier um Hilfe rufen würdet, euch sowieso niemand hören könnte und Chan ergänzt: \“Womöglich hört uns dieser grässliche Typ noch und bringt uns sogar um.\“. Du stimmst zu und denkst, ohne es auszusprechen, dass das wirklich die richtige Bezeichnung war, für so einen miesen fiesen Mann. Also wartet ihr einfach ab.",
			hintergrundSound: "desolation.mp3",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [44]
		},{
			id: 44,
			auswahlText: "Der Einfall",
			text: "Nachdem ihr eine kurze Weile einfach nur so dagesessen habt kommt dir der rettende Einfall, und du flüsterst Chan, nur zur Sicherheit, ins Ohr: \“Der Boden ist doch aus Sand…\“,sofort sieht Chan zu Boden und nickt. Er hat offensichtlich verstanden worauf du hinaus willst und lässt dich gar nicht erst ausreden. Sofort krabbelt er zu der Wand, die man von der Tür aus am wenigsten gut sieht, und beginnt zu graben. Du eilst ihm natürlich gleich zu Hilfe und gräbst mit ihm.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 5,
					ziele: [45],
					sonst: [46]
				}
			],
			ziele: []
		},{
			id: 45,
			auswahlText: "Ertappt",
			text: "Leider hört ihr gerade, als ihr beide gut voran kommt, den Schlüssel im Schloss der Tür zu eurem Raum. Sofort habt ihr nur einen gemeinsamen Gedanken: alle Spuren unsichtbar machen. Ihr schaufelt blitzschnell allen Sand in eure kleine Grube, und haut es leise mit den Fingern schichtenweise platt. Doch obwohl ihr versucht so schnell wie irgendwie möglich zu buddeln, kommt der Mann noch während ihr am zu graben des Lochs seid, herein. Der Mann lacht wieder so gehässig wie vorhin, und meint dann, dass es wohl nicht so schlau von euch war erst nach Hilfe zu rufen. Nachdem er euch noch ein bisschen mehr ausgelacht hat, nimmt der Mann ein Handys aus seiner Hosentasche und telefoniert mit irgendjemandem den Er: \“X3\“ nennt, er meint zu ihm: \“Hi, X3………..jaja……sie sind da und abholbereit……..ja haha….<i>wie viel????</i>......Nein, für die will ich mehr……………………..hmmm…………na gut, aber nur weil die echt schwer zu betreuen sind…okay danke…………….ja tschüssssi!\“, dann steckt er das Handy wieder weg, zieht eine kleine Pistole aus seiner Tasche, und zielt damit auf euch: \“So, dann warten wir mal ein paar Minuten auf euer Luxustaxi!\“, Noch konntest du diesen Worten keinen Glauben schenken, doch schon ein paar Minute später solltest du wissen, was es mit dem Luxustaxi auf sich hatte. Ihr wartet also noch ein bisschen, wie es der Mann gesagt hatte. Dann hört ihr lautes Motoren rumoren, der Mann nickt jetzt ein bisschen mit dem Kopf. Nach einer Minute, in der der Motoren Lärm immer lauter geworden ist und schließlich verstummte erscheint ein zweiter Mann  hinter dem Mann von eben. Der zweite hat eine Sturmmaske übers Gesicht gezogen und trägt eine stark verspiegelte Skibrille. Er gibt dem ersten Mann ein Bündel Geldscheine und dieser gibt ihm seine Pistole. Der zweite fordert euch schließlich auf aufzustehen und ihm zu folgen. Euch bleibt nichts anderes übrig als zu gehorchen, da er die Pistole auf euch richtet. Ihr steht vorsichtig auf und geht hinter dem ersten Mann her der inzwischen nach draußen, zu einem kleinen Kabrio geht. Er macht die linke hintere Tür auf und ein kleiner Schwall Wasser kommt heraus. Er bedeutet euch einzusteigen. Als ihr wiederwillig eingestiegen seid und ihr neben einander auf zwei leicht feuchten sitzen sitzt, schlägt der erste Mann die Tür zu. Du schaust dich um. Es ist kein gewöhnliches Kabrio, denn die Rückbank ist durch eine Stahlwand vom Fahrer und Beifahrersitz getrennt. Zum durchschauen vom Vorderen Autobereich nach hinten gibt es ein kleines Gitter. Nach einer Minute in der man nur die beiden Männer draußen reden gehört, aber selber nur geschwiegen habt steigt der Mann scheinbar vorne ein. Die Fenster sind übrigens auch nur Stahlwände mit ganz kleinen Guck-Gittern darin. Der Mann (welcher weißt du nicht) fährt los. Aus dem Geholpere, das du am Anfang spürst, schließt du, dass ihr durch den Wald fahren müsst. Durch die kleinen Gitter in den Stahl Fenstern siehst du natürlich nichts, da es draußen inzwischen komplett dunkel geworden ist. Nach ein paar endlosen Minuten haltet ihr. Der Fahrer steigt aus und klopft an irgendwas aus Holz draußen im Wald. Knarrend öffnet sich eine Tür und ihr vernehmt Mädchen Gekreische. Dann macht jemand die rechte hintere Tür auf und schiebt ein ungefähr 10 Jahre altes Mädchen zu euch auf die Rückbank. Dann wird die Fahrer Tür wieder zu geworfen und  ihr fahrt wieder los. Das Mädchen, flüstert: \“Wer seid ihr? und wo bin ich?\“, du flüsterst zurück: \“Wir sind zwei Freunde, die gefangen genommen wurden und auch nicht wissen wo wir sind!\“, das Mädchen: \“Ähh oke! Ich war mit meinem kleinen Bruder im Wald, plötzlich kam so ein Mann von hinten und hat uns in eine Hütte getragen. Dann hat er telefoniert und wir haben abgewartet. durch ein Fenster konnten wir sehen, dass es Schon Nacht war als die Tür endlich wieder geöffnet wurde. Und dann ist ein Mann gekommen und hat mich hier hinein gesetzt. Wo mein Bruder ist weiß ich nicht!\“ In diesem Moment hört ihr ein lautes platschen, und durch die Fenster spritzt ein wenig Wasser. Dann fahrt ihr offensichtlich mit dem Auto im Wasser, denn es spritzt immer wieder Wasser herein und es hört sich so an als würdet ihr auf einem Schnellboot übers Wasser rasen. Nach einer Weile schlaft ihr ein, und Wacht erst wieder auf als ihr in einem großen harten Bett, unter freiem Himmel liegt. Es ist Morgen, und das Mädchen Chan und du sind angekettet. Nach einer Weile kommt ein abgemagerter Mann mit einem großen Eimer Wasser in der Hand auf euch zu. Er trägt Lumpen und bindet euch los. Ihr werdet auf ein großes Feld gebracht und müsst den ganzen Tag hart arbeiten. Auch die nächsten Tage. Ihr müsst verzweifelt feststellen, dass ihr Sklaven geworden seid und nun ohne Lohn nur noch ärmer werdet! ---------------An dieser Stelle endet eure Geschichte, ohne ein Happy end.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id: 46,
			auswahlText: "Die Flucht",
			text: "Ihr kommt gut voran, und schon nach ca. 20 Minuten spürt ihr keine Wand mehr neben euch. Ihr grabt noch ein bisschen tiefer, dann aber Richtung Wand und wieder nach oben. Es dauert ganz schön lange aber schließlich durchbrecht ihr die Erdoberfläche, und krabbelt schnell aus eurem Tunnel, der hinter euch schon wieder ein bisschen einstürzt. Du hilft Chan schnell aus dem Tunnel, und schüttest Schnell Erde hinein. Dann nimmst du Chan huckepack und rennst los.",
			hintergrundSound: "verletzt.mp3",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [26]
		},{
			id:47,
			auswahlText: "Zurück gehen und Handy suchen",
			text: "Du willst dein Handy suchen, und nicht hinter dem Mann herlaufen, denn wer weiß, vielleicht ist er ja wirklich böse und würde mit euch irgendwas schlimmes machen. Du kehrst also zur Geisterbahn zurück und suchst, doch vom Handy fehlt jede Spur. Du bist dir ganz sicher, dass du es an dieser Stelle verloren hast doch…..was ist das……du hast dich geirrt, es ist nur eine kleine Schraube die da geglänzt hat. Du musst leider die Suche abbrechen, da sie zu viel kostbare Zeit beansprucht, in der der Mann Chan schon hätte dreimal umbringen können.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{ 
					bedingung: 2, 
					ziele: [50],
					sonst: []
				
				}
			],
			ziele: [49]
		},{
			id:48,
			auswahlText: "Dem seltsamen Mann und Chan folgen",
			text: "Du entscheidet dich dafür, dem Mann möglichst unauffällig zu folgen. Doch das ist schwieriger als am Anfang gedacht, denn schon nach kurzer Zeit gibt es auf dem einen Hauptweg auf dem der Mann mit Chan unterwegs ist kaum Deckung mehr und du musst immer länger warten bis du wieder zu einem neuen versteck hinter dem Mann huschen kannst. Irgendwann stehst du hinter einem einzelnen Baum und der Mann verschwindet hinter einem kleinen Hügel, auf dem keinerlei Bäume oder andere Szenerie Objekte stehen sodass dich der Mann bald abgehängt hat, natürlich ohne es überhaupt zu bemerken, dass ihn jemand verfolgt. Nach dem du den Mann nirgendwo mehr entdecken kannst, gehst du einfach so ziellos durch den Park, immer noch auf der Suche nach Chan und dem Mann. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [52]
		},{
			id:49,
			auswahlText: "Du suchst Chan",
			text: "Also beginnst du die wahrscheinlich hoffnungsloseste Suche deines Lebens und versuchst verzweifelt deinen Freund Chan zu suchen. Doch dieser bleibt auch nach etwa einer halben Stunde unauffindbar. Dennoch streifst du weiter durch den Park und hoffst irgendetwas zu entdecken was auf Chan hinweist.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [52]
		},{
			id:50,
			auswahlText: "Nochmal in den Computerraum schleichen, zum telefonieren",
			text: "Du beschließt noch einmal in den geheimnisvollen Raum von vorhin zu schleichen, denn dort hast du ein Telefon gesehen, mit dem du Polizei und Notarzt verständigen könntest. Du gehst also zum Notausgang, und findest zum Glück, die Tür immer noch offenstehend vor. Das bedeutet, dass vermutlich niemand hier war. Du gehst vorsichtig hinein und dann schnellen aber leisen Schrittes zum eigenartigen Computerraum. Er ist so wie als ihr ihn vorhin verlassen habt. Du stürzt sofort zum Telefon und nimmst den Hörer ab. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [51]
		},{
			id:51,
			auswahlText: "Polizei und Notrzt rufen",
			text: "Du tippst schnell die Telefonnummer der Polizei ein und drückst auf grün. Du schilderst der Polizei die Situation und erklärst, dass Chan unbedingt einen Arzt braucht. Der Polizeibeamte meint, dass das möglich wäre, und du musst ihm nochmal versichern, dass das kein dummer und auch kein dämlicher Scherz sei. Als das Telefonat beendet ist läufst du zügig zum Haupteingang um die Polizei in Empfang zu nehmen und sie zum Ort des Geschehens zu führen. Als die Polizei, mit zehn Personen und zwei Hunden, und du ebenfalls wenig später am Haupteingang zur Lagebesprechung bist, entschuldigt sich der eine Polizist dafür, dass sein Chef geglaubt habe es handle sich um einen Scherz. Du bist ziemlich aufgeregt und meinst, dass das völlig okay gewesen wäre und dass das ja wirklich ziemlich verrückt ist. Als du alles erklärt hast, meint ein Polizist zu dir, dass er sich mit dir in einen der Streifenwagen setzten wird, damit du nicht weiterhin verbotener Weise im Park bist. Nach fünf Minuten kommt der Rettungswagen, mit Blaulicht, aber ohne Martinshorn angebraust. Die Sanitäter bereiten alles vor, und hören sich genau an was passiert ist. Als sie fertig sind, meinen sie, dass wir ja alle gemeinsam warten könnten. Der Polizist der mit dir warten sollte, stimmt zu und fordert dich auf auszusteigen. Er schließt das Auto zu und einen Mannschaftswagen auf. Hier wartet ihr zu fünft nochmal ca. zwei Minuten, dann wird es euch langweilig und der Polizist holt ein Quiz aus seiner Jacke. Eine viertelstunde lang beantwortet ihr zu viert Polizei Fragen und haltet dabei immer wieder ausschau nach Lebensspuren im Park. Bis ihr lautes Hundegebell aus dem Park hört. Die Sanitäter springen auf und stürmen zu ihrem Wagen um bereit zu sein wenn der verletzte Chan von der Polizei gebracht wird. Ihr wartet nochmal so drei Minuten, dann seht ihr die Polizisten zurück kommen. Es sind zehn Männer. Du denkst nach. Waren es am Anfang nicht auch zehn? Aber einer sitzt neben mir! Und Chan wird vom ganz rechten Beamten getragen. Das muss auch dem Polizisten neben dir aufgefallen sein, denn er zählt mithilfe der Finger nach. Dir fällt ein, dass es der seltsame Mann sein muss, den die Polizisten abführen und machst den Beamten neben dir darauf aufmerksam. Er nickt und meint, dass er daran nicht gedacht habe. Schließlich ist die Polizei mit Chan wieder am Eingang des Parks und übergibt Chan schnell den drei Sanitätern. Du darfst, auf der Fahrt ins Ferien Örtchen, neben den beiden Hunden sitzen und sie kraulen: \“Polizei Hunde sind so weich und süß aber dennoch so trainiert und schlau!\“, sagst du zum einen Polizisten neben dir. Dieser nickt und sagt: \“Lia und Felix haben schon viele Einsätze perfekt und ihn absoluter Teamarbeit zusammen gemeistert. Das sind unsere beiden besten Hunde, haha sie mögen dich. Als ihr im kleinen Krankenhaus des Ortes ankommt, begleitet noch einer der Polizisten dich und Chan, während ihr von einer Krankenschwester ins Gebäude geführt werdet. Als ihr zu dritt in einem Krankenzimmer seid, meint der Beamte, dass er Chan und dir noch ein paar Fragen stellen wolle. Du fragst ihn, ob das vielleicht später noch möglich wäre, da Chan und du noch sehr aufgeregt sind der Polizist meint, dass das natürlich kein Problem sei, und verlässt das Zimmer. Bald kommt ein Arzt, der Chan versorgt und Dann kommen deine und Chans Eltern. Zwei Tage später sitzt ihr auf einer Bank im kleinen Park des Ortes. Chan hat einen dicken Gips um sein Bein und kann nicht wirklich gut damit laufen. Trotzdem seid ihr euch einig, dass das ein super Abenteuer war. Zum Glück habt ihr auch nicht so viel Ärger bekommen wie erwartet und ihr wollt sowas unbedingt mal wieder machen.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id:52,
			auswahlText: "Weiter Chan suchen",
			text: "Nach ein paar Minuten erneuten Suchens, hörst du ein Geräusch. Da geht jemand durch den Wald, und er kommt auf dich zu. Du versteckst dich schnell hinter einem unförmigen Stein. Dann ein tiefer Seufzer. Zum Glück ist es nicht der komische Mann, auf den du  jetzt lieber nicht treffen wolltest. Nein, es ist ein sympathisch aussehender junger Fotograf. Er hat eine große Canon Kamera in der Hand und hat sich eine Riesige Fototasche und ein Stativ umgehängt. Du kommst schnell aus deinem Versteck und begrüßt den Mann mit: \“Puh gut das Sie da sind, hätten sie ein Handy…?\“, der Mann ist sehr erschrocken wo du denn auf einmal herkommen würdest fragt er dich und du erzählst im kurz eure Story: mit dem Urlaub, und dem Park, und der Achterbahn und das Chan sich verletzt hat, und dass du dein Handy verloren hast.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung:3,
					ziele:[53],
					sonst:[54]
				}			
			],
			ziele: []
		},{
			id:53,
			auswahlText: "Die Rettung...",
			text: "Der Mann kann deiner Geschichte, die du mit Chan ja ganz sicher erlebt hast nur sehr schwer Glauben schenken, doch du versicherst ihm, dass wirklich alles exakt so war und er holt sein Handy raus und telefoniert kurz. Dann steckt er das Handy wieder ein und ihr geht zusammen zum Haupteingang, wo die Polizei und der Notarzt laut ihm eintreffen will. Bald seid ihr am Haupteingang und werdet beide gründlich befragt. Derweil ist schon ein Sondereinsatzkommando in den Park vorgedrungen und versucht Chan und den komischen Mann zu finden. Nachdem der Fotograf, der inzwischen auch etwas erschöpft ist, seine Personalien an die Polizei gegeben hat, fährt er, nachdem er sich von der Polizei und von mir verabschiedet hat nach Hause. Bald kommt die Polizei wieder und bringt Chan und den komischen Mann mit. Schon wenige Minuten später seid ihr in einem Krankenhaus in der der Nähe eures Ferienortes, und unterhaltet euch über euren kleinen Ausflug. Chan ist mit dir gleicher Meinung: \“Ein tolles Abenteuer, doch in Zukunft vielleicht nicht mehr so draufgängerisch sein.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id:54,
			auswahlText: "Die Rettung...?",
			text: "Der Mann kann deiner Geschichte, die du mit Chan ja ganz sicher erlebt hast nur sehr schwer Glauben schenken, doch du versicherst ihm, dass wirklich alles exakt so war und er holt sein Handy raus und telefoniert kurz. Dann steckt er das Handy wieder ein und ihr geht zusammen zum Haupteingang, wo der Notarzt laut ihm eintreffen will. Bald seid ihr am Haupteingang und du wirst befragt, ob man mit dem Krankenwagen gut in den Park fahren könne. Nachdem der Fotograf, der inzwischen auch etwas erschöpft ist, fährt er nach Hause. Als ihr alles wichtige geklärt habt, fährt der Krankenwagen, mit dir und zwei Sanitätern in den Freizeitpark. Bald habt ihr Chan gefunden. Schon wenige Minuten später seid ihr in einem Krankenhaus in der der Nähe eures Ferienortes, und unterhaltet euch über euren kleinen Ausflug. Chan ist mit dir gleicher Meinung: \“Ein tolles Abenteuer, doch in Zukunft vielleicht nicht mehr so draufgängerisch sein.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id:55,
			auswahlText: "Zurück gehen und Handy suchen",
			text: "Doch dir fällt dein Handy wieder ein und ihr beschließt es lieber zu suchen, bevor ihr irgendetwas anderes macht. Ihr geht also wieder in den Tunnel der Geisterbahn und findet di Stelle an der dir das Handy aus der Tasche gefallen ist sehr schnell, doch so gründlich ihr auch sucht, das Handy bleibt unauffindbar. Doch auf einmal sagt Chan: \“Hey, schau mal hier!\“, und zeigt dir eine Fußspur die von der Stelle, an der du das Handy verloren hast, wegführt.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [56,57]
		},{
			id:56,
			auswahlText: "Am besten schnell wegrennen",
			text: "Ihr wollt auf gar keinen Fall jemandem begegnen, und beschließt deswegen so schnell wie möglich weg zu rennen. Ihr rennt aus dem Tunnel heraus und zur Achterbahn. Doch die sieht jetzt doch sehr hoch aus. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [16]
		},{
			id:57,
			auswahlText: "Den Spuren folgen",
			text: "Ihr folgt den Fußspuren weiter, erst durch den Tunnel, dann durch eine kleine Tür in der Wand nach draußen. Ihr geht weiter, obwohl ihr langsam ein bisschen Sorge habt, ob das wohl so schlau ist. Am Ende ist es ein böser Mann, der euch für ihn schuften lässt. Doch schließlich siegt doch eure Neugierde und Abenteuerlust. Nach einem zwei Minütigen Fußmarsch, immer hinter den Turnschuh-Spuren her, entdeckt ihr hinter einem Hügel, ein kleines Haus. Ihr geht vorsichtig näher heran, und könnt durch ein Offenes Fenster nach drinnen spähen. In der Hütte seht ihr einen Tisch mit einem Laptop und…… deinem Handy. Du kannst kaum glauben, dass es da wirklich liegt, denn Wer interessiert sich bitte für dein Handy, das dir nur mal aus der Tasche gefallen ist.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [58,59]
		},{
			id:58,
			auswahlText: "Durchs Fenster rein klettern",
			text: "Ihr checkt kurz die Lage und klettert dann vorsichtig und mit so wenig Lärm wie möglich durchs Fenster. Jetzt steht ihr genau vor dem Tisch auf dem Der Laptop steht und das Handy liegt und Oh…auch noch zwei Bananen liegen. Die Tür des kleinen schmalen Raumes steht offen, und ihr könnt einen kleinen Flur mit mindestens noch einer weiteren Tür hindurch sehen. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [62,61,60]
		},{
			id:59,
			auswahlText: "Schnell abhauen, ohne das Handy mitzunehmen",
			text: "Da ja durchaus irgendwo noch Jemand sein könnte, haut ihr lieber schnell ab und rennt zum Parkausgang. Ihr checkt kurz noch, ob es Anzeichen darauf gibt, dass ihr hier wart und lauft dann schnell zurück in euren Ferienort. Am nächsten Tag kommt ihr zehn Minuten zu spät zum Frühstück. Ihr gähnt andauern und ihr seid noch so richtig müde. Doch eure Eltern erlauben euch nicht euch noch mal hinzulegen, und noch ein bisschen zu schlafen, denn sie haben vor mit euch in einen Freizeitpark ganz in der Nähe des Ortes zu gehen. Ihr habt keine Lust, kommt aber doch mit. Als ihr dort seid, erkennt ihr den Park wieder, es war der in dem ihr letzte Nacht wart. Jetzt ist allerdings alles so schick, und aufgeräumt, wie als wäre der Park nie zu gewesen. Beide habt ihr nur einen Gedanken und der ist: \“Hähh, wie jetzt? Wie geht das?\“, und die Wahrheit ist.....",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [68]
		},{
			id:60,
			auswahlText: "Ihr nehmt Handy und Laptop und esst die Bananen",
			text: "Ihr zieht kurzerhand die Schale der zwei Bananen ab, und schiebt sie euch in den Mund. Sie schmeckt so gut, dass ihr glatt noch ein verdrücken könntet, doch ihr wollt das Zimmer nicht auf nach noch mehr Bananen untersuchen, weil das eventuell dauern könnte. Also nehmt ihr schnell den Laptop und dein Handy und steigt wieder aus dem Fenster, wobei ein Stuhl, der im Zimmer stand umfällt, und laut krachend am Boden ankommt. Ihr rennt jetzt so schnell ihr könnt davon.",
			speichern:[4],
			loeschen:[],
			bedingteZiele:[],
			ziele: [63]
		},{
			id:61,
			auswahlText: "Ihr nehmt das Handy und den Laptop",
			text: "Ihr greift nach dem Handy und dem Laptop, lasst die Bananen einfach liegen, und steigt aus dem Fenster, wobei eine Jacke die rechts an der Wand an einem Kleiderhaken hing zu Boden stürzt und ein lautes Rascheln von sich gibt. Ihr rennt jetzt so schnell euch eure Beine tragen weg.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [63]
		},{
			id:62,
			auswahlText: "Ihr nehmt nur das Handy",
			text: "Ihr nehmt schnell das Handy und klettert wieder durchs Fenster, ihr seid nicht in Eile und schlendert bis zu Ausgang des Parks gemütlich vor euch hin. Dann macht ihr ein Wettrennen bis zum Ferienort, und legt euch dann im Hotel müde und erschöpft in eure Betten.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id:63,
			auswahlText: "Plötzlich...",
			text: "...hört ihr hinter euch Schritte, um genau zu sein, rennt euch Jemand hinter her. Ihr dreht euch beim Rennen kurz um und lauft dann noch schneller, weil euch ein verärgert aussehenden Mann, auf den Fersen ist.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[
				{
					bedingung: 4,
					ziele: [64],
					sonst: [65]
				}
			],
			ziele: []
		},{
			id:64,
			auswahlText: "Flucht",
			text: "Doch dank der Bananen die ihr eben gegessen habt und dessen Schale ihr noch in der Hand habt, habt ihr genug Energie um den Abstand nicht noch kleiner werden zu lassen, zwischen euch und dem Mann. Dann fällt dir ein Trick ein, wie man den Mann zu Fall bringen könnte, und du spricht sofort mit Chan darüber: \“Wir könnten,……die Bananenschalen….hinwerfen\“, zum Glück versteht Chan dich sofort, da er eben so viele Comics wie du gelesen hat, ihr werft also genau zwischen eure Füße die beiden Bananenschalen, und seht zu wie euer Verfolger darauf zu rennt, während ihr natürlich weiterrennt. Tatsächlich rutscht der Mann auf einer der Bananenschalen aus,  und fällt unsanft auf den Weg. Ihr rennt aus dem Park und in euren Ferienort. Müde lasst ihr euch dann in eure Betten fallen und schlaft, nahezu sofort, ein.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: []
		},{
			id:65,
			auswahlText: "Flucht",
			text: "Schon nach kurzer Flucht, holt euch der Mann, da ihr einfach keine Energie mehr hattet, ein. Er hält euch an den Armen Fest und bringt euch zu seiner Hütte zurück. Dort bringt er euch in einen komplett lehren Raum mit vergitterten Fenstern und einer dicken Tür, die mit Stahl verstärkt ist. Der Mann schließt euch im Raum ein, nachdem er euch das Handy und den Laptop abgenommen hat.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [42]
		},{
			id:66,
			auswahlText: "Zum Parkeingang gehen und versuchen Hilfe zu holen",
			text: "Du willst versuchen Hilfe zu holen. Doch irgendwie weißt du nicht mehr, wo es zum Parkeingang zurück geht. Also suchst du Im Park, nach irgendjemandem, der dir vielleicht, helfen könnte. Du hoffst, dabei nicht auf irgendeinen seltsamen Mann zu treffen, der dir nicht hilft, sondern dich gefangen nimmt.",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [52]
		},{
			id:67,
			auswahlText: "Zurück gehen und das Handy suchen",
			text: "Du gehst los, um dein verloren gegangenes Handy zu suchen. Als du bei der Stelle in der Geisterbahn angelangt bist, beginnst du zu suchen. Dein Handy findest du jedoch nicht. Du kehrst zu also zu Chan zurück. ",
			speichern:[],
			loeschen:[],
			bedingteZiele:[],
			ziele: [21]
		}
	]
};