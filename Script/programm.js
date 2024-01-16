var speicher;

var textSound;
var hintergrundSound;
var situationSound;

var testMode = false;


var buchstabenZeit = 10;
var textZeit = 1000;

if(testMode){
	buchstabenZeit=0;
	textZeit=0;
}


function programmStart(){
	speicher  = new Array(geschichte.speicherGroesse);
	
	for(var i=0; i<speicher.length; i++){
		speicher[i] = false;
	}
	zeigeSituation(1);
}


function getSituation(id){
	var laenge = geschichte.situationen.length;
	for(var i=0; i<laenge; i++){
		if(geschichte.situationen[i].id == id){
			return geschichte.situationen[i];
		}
	}
}

function zeigeSituation(id){
	var Situation = getSituation(id);
	
	for(var i=0; i<Situation.speichern.length; i++){
		speicher[Situation.speichern[i]] = true;
	}
	
	for(var i=0; i<Situation.loeschen.length; i++){
		speicher[Situation.loeschen[i]] = false;
	}
	
	startSounds(id);
	anzeige.innerHTML = "> ";
	setTimeout(erscheineText, textZeit, Situation);
}

function startSounds(id){
	var neuerHintergrundSound = getSituation(id).hintergrundSound;
	if(neuerHintergrundSound != undefined){
		console.log("anderer Hintergrundsoud");
		if(hintergrundSound != undefined)hintergrundSound.pause();
		if(neuerHintergrundSound != ""){
			hintergrundSound = new Audio("sounds/Hintergrund/" + neuerHintergrundSound);
			hintergrundSound.loop = true;
			startHintergrundSound();
		}
	}
	situationSound = new Audio("sounds/Situationen/sit" + id + ".mp3");
	textSound  = new Audio("sounds/TextSound.mp3");
	
	var soundVerzoegerung = getSituation(id).soundVerzoegerung;
	if(soundVerzoegerung == undefined)soundVerzoegerung = 4000;
	
	setTimeout(startSituationSound, soundVerzoegerung);
	setTimeout(startTextSound, textZeit - 100);
}

function startHintergrundSound(){
	hintergrundSound.play();
}

function startSituationSound(){
	situationSound.play();
}

function startTextSound(){
	if(textSound.paused)textSound.play();
}

function stopTextSound(){
	textSound.pause();
}



function erscheineText(Situation, stelle){
	var text = Situation.text;
	if(stelle==undefined)stelle=-1;
	stelle++;
	
	if(stelle >= text.length){
		anzeige.innerHTML += "<br><br><br>";
		stopTextSound();
		setTimeout(erscheineAlleZiele, textZeit, Situation);
		return;
	}
	
	var buchstabe = text.charAt(stelle);
	anzeige.innerHTML += buchstabe;
	
	if(testMode){
		erscheineText(Situation, stelle);
	}else{
		setTimeout(erscheineText, buchstabenZeit, Situation, stelle);
	}
}


function getZiele(Situation){
	var ziele = Situation.ziele.slice();
	
	for(var i=0; i<Situation.bedingteZiele.length; i++){
		
		var zahl = parseFloat(Situation.bedingteZiele[i].bedingung);
		var bedingung;
		
		if(Number.isInteger(zahl)){
			bedingung = speicher[zahl];
		}else{
			bedingung = Math.random() < zahl;
		}
		

		if(bedingung){
			ziele.push.apply(ziele, Situation.bedingteZiele[i].ziele);
		}else{
			ziele.push.apply(ziele, Situation.bedingteZiele[i].sonst);
		}
	}
	return ziele;
}


function erscheineAlleZiele(Situation, nummerDesZiels){
	if(nummerDesZiels==undefined)nummerDesZiels=0;
	var ziele = getZiele(Situation);
	
	if(nummerDesZiels >= ziele.length)return;
	var davor = anzeige.innerHTML + "<div onclick=\"zeigeSituation(" + ziele[nummerDesZiels] + ")\">" + "> ";
	anzeige.innerHTML = davor + "<br><br></div>";
	setTimeout(startTextSound, textZeit);
	setTimeout(erscheineZiel, textZeit, davor, Situation, 0, nummerDesZiels, ziele);
}


function erscheineZiel(vorher, Situation, stelle, nummerDesZiels, ziele){
	var text = getSituation(ziele[nummerDesZiels]).auswahlText;
	stelle++;
	
	if(stelle > text.length){
		stopTextSound();
		setTimeout(erscheineAlleZiele, textZeit, Situation, nummerDesZiels+1);
		return;
	}
	
	var bisJetztText = text.substring(0, stelle);
	var danach = "<br><br>" + "</div>";
	anzeige.innerHTML = vorher + bisJetztText + danach;
	setTimeout(erscheineZiel, buchstabenZeit, vorher, Situation, stelle, nummerDesZiels, ziele);
}


