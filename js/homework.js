
/*1* Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/
const amzius = 20;
console.log(amzius);

const metai = 1986;
console.log(metai);

const diena = 17;
console.log(diena);

/*Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console*/

const suma = amzius + metai +diena
console.log(suma)

/*2*/
const spalva = 'geltona';
console.log(spalva)
const spalva1 = 'balta';
console.log(spalva1)
const  spalva2 = 'melyna';
console.log(spalva2)
const  spalva3 = 'ruda';
console.log(spalva3)
const spalva4 = 'juoda';
console.log(spalva4)

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */
const v = [1, 2, 3, 4, 5];
console.log(v);
const d = [2, 4, 6, 7, 9];
console.log(d);
const t = [3, 7, 6, 1, 7];
console.log(t);

console.log('v','d','t');

/*Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5. Rezultatą išvesti į console*/
const bendras = v - d + t
console.log(bendras)

/*Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console*/

const visi = spalva + ' ' + spalva1 + ' ' + spalva2 + ' ' + spalva3 + ' ' + spalva4;
console.log(visi);

/*Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/
const visi2 = spalva4 + ', ' + spalva3 + ', ' + spalva2 + ', ' + spalva1 + ', ' + spalva;
console.log(visi2);

/*Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.*/
console.log('-------------------');

const a = 7;
const b = 9;
const c = 1;

if (a > b) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (a === b) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (a !== b) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (a <= b) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (a >= b) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

console.log('-------------------');

if (v.length > d.length) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (t.length < d.length) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (d.length === v.length) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (v.length !== d.length) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (d.length <= t.length) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

if (v.length >= d.length) {
    console.log('pomidoras');
} else {
    console.log('bandykite dar karta');
}

/*
Ciklo for panaudojimas
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 ...0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30 */

/*a = 0;
for (let index = 0; a < 4; index++) {
    const element = array[index];
    } */


    
/*panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”*/
//let zodis = 'abcdef';
//let tekstas = "";

let word = "abcdefg";
function reverseString(word) {
    let reverse = "";
for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}
return reverse;
}
console.log(reverseString('abcdef'));

/*Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

/*
Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false*/

/*const car = ()
switch (car) {
    case 1:
        console.log("car");
        break;
default:
        console.log(false)
        break;
}

for (let i = 0; i <= 5; i++){
    console.log(i);
}

for (let i = 100; i >= 95; i--){
    console.log(i)
}

const mar = [3, 6, 8, 9, 4];
let sum = 0;

console.log('--------------');

const word = 'a, b, c, d, e, f';


*/
