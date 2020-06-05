//1
const n = window. prompt('1. Įveskite pirmo pirkėjo prekių skaičių: ');
const m = window. prompt('1. Įveskite antro pirkėjo prekių skaičių: '); 

if (n > m) {
    console.log('Ilgiau aptarnaujamas pirmas pirkėjas');
} else {
    console.log('Ilgiau aptarnaujamas antras pirkėjas');
};

//2
const jonas = window. prompt('2. Kiek taškų surinko Jonas?');
const povilas = window. prompt('2. Kiek taškų surinko Povilas?'); 

if (jonas > povilas) {
    console.log('Turnyrą laimėjo Jonas');
} else {
    console.log('Turnyrą laimėjo Povilas');
};

//3
const martynas = window. prompt('3. Kiek gramų saldainių pirko Martynas?');
const karolis = window. prompt('3. Kiek gramų saldainių pirko Karolis?'); 

if (martynas > karolis) {
    console.log('Daugiau saldainių pirko Martynas');
} else {
    console.log('Daugiau saldainių pirko Karolis');
};

//4
const metai = window.prompt('4. Įveskite metus');

if (metai >= 1896 && metai % 4 == 0) {
    const kelintos = (metai - 1896) / 4 + 1;
    console.log('Olimpinių žaidynių numeris: ' + kelintos);
} else console.log('Metai neolimpiniai');

//5
const laikas = window.prompt('5. Įveskite, kiek laiko liko iki pamokos pabaigos');

if (laikas > 30) 
    console.log('Liko dar labai daug laiko');
    else if (laikas > 15)
        console.log('Liko dar nemažai laiko');
    else if (laikas > 7)
        console.log('Liko nedaug laiko');
    else
        console.log('Pamoka baigiasi');

//6
const metai2 = window.prompt('6. Įveskite metus');

if (metai2 % 400 == 0 || metai2 % 100 != 0 && metai2 % 4 ==0)
    console.log('Metai keliamieji');
    else
        console.log('Metai paprastieji');

//7
const bilietas = window.prompt('7. Įveskite šešiaženklį bilieto numerį');
const sestas = bilietas % 10;
const penktas = Math.floor(bilietas / 10) % 10;
const ketvirtas = Math.floor(bilietas / 100) % 10;
const trecias = Math.floor(bilietas / 1000) % 10;
const antras = Math.floor(bilietas / 10000) % 10;
const pirmas = Math.floor(bilietas / 100000) % 10;
const suma = pirmas + antras + trecias + ketvirtas + penktas + sestas;

if (suma % 4 == 0)
    console.log('Bilietas laimingas');
    else
        console.log('Bilietas nelaimingas');

//8
const knygos = window.prompt('8. Kiek knygų yra sąraše?');
const puslapiai = window.prompt('8. Kiek vidutiniškai puslapių yra knygoje?');
const pirm = window.prompt('8. Kiek puslapių perskaitydavo pirmadieniais?');
const pirm1 = Number.parseInt(pirm);
const antr = window.prompt('8. Kiek puslapių perskaitydavo antradieniais?');
const antr1 = Number.parseInt(antr);
const trec = window.prompt('8. Kiek puslapių perskaitydavo trečiadieniais?');
const trec1 = Number.parseInt(trec);
const ketv = window.prompt('8. Kiek puslapių perskaitydavo ketvirtadieniais?');
const ketv1 = Number.parseInt(ketv);
const penkt = window.prompt('8. Kiek puslapių perskaitydavo penktadieniais?');
const penkt1 = Number.parseInt(penkt);
const savaites = window.prompt('8. Kiek savaičių skaitė?');

const visoPuslapiu = knygos * puslapiai;
const perskaitePuslapiu = (pirm1 + antr1 + trec1 + ketv1 + penkt1) * savaites;

if (perskaitePuslapiu >= visoPuslapiu)
    console.log('Jonas knygas perskaityti spės')
    else    
        console.log('Jonas knygų perskaityti nespės');

//9
const n1 = window.prompt('9. Ar mokinys sąžiningai sprendė namų darbus? (1 jei taip, 0 jei ne)');
const n2 = window.prompt('9. Ar mokinio užrašai tvarkingi ir pilni? (1 jei taip, 0 jei ne)');
const n3 = window.prompt('9. Ar mokinys be pateisinamos priežasties nepraleido nė vienos pamokos? (1 jei taip, 0 jei ne)');

if (n1 == 1 && n2 == 1 && n3 == 1) 
    console.log('Mokinys dešimtuką gaus');
    else
        console.log('Mokinys dešimtuko negaus');

//10
const pinigai = window.prompt('10. Kiek pinigų kelionei gali skirti Jolanta?');

if (pinigai >= 4000)
    console.log('Jolantai geriausiai tiktų pirmos grupės kelionė');
    else if (pinigai >= 3000)
        console.log('Jolantai geriausiai tiktų antros grupės kelionė');
    else if (pinigai >= 1000)
        console.log('Jolantai geriausiai tiktų trečios grupės kelionė');
    else
        console.log('Jolantai geriausiai tiktų ketvirtos grupės kelionė');







