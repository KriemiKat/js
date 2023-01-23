
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

/*Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/
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

//Išvesti teksto tipo kintamųjų ilgius
/*const spalva = 'geltona';
console.log(spalva)
const spalva1 = 'balta';
console.log(spalva1)
const  spalva2 = 'melyna';
console.log(spalva2)
const  spalva3 = 'ruda';
console.log(spalva3)
const spalva4 = 'juoda';
console.log(spalva4)*/

console.log('Spalvos ilgis:', spalva.length)
console.log('Spalvos2 ilgis:', spalva2.length)
console.log('Spalvos3 ilgis:', spalva3.length)
console.log('Spalvos4 ilgis:', spalva4.length)

console.log('-------------------');
/*Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus

const v = [1, 2, 3, 4, 5];
console.log(v);
const d = [2, 4, 6, 7, 9];
console.log(d);
const t = [3, 7, 6, 1, 7];
console.log(t);*/

console.log('V ilgis:', v.length)
console.log('D ilgis:', d.length)
console.log('T ilgis:', t.length)

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

fuction rangeSum() {
    return 0;
}
0 ...0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30 */

console.clear();

function rangeSum(from, to) {
    if (typeof from !== 'number') {
        return 'ERROR: pirmasis parametras turi buti skaicius.';
    }
    if (!isFinite(from) || from % 1 !== 0) {
        return 'ERROR: pirmasis parametras turi buti sveikasis skaicius.';
    }

    if (typeof to !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaicius.';
    }
    if (!Number.isInteger(to)) {
        return 'ERROR: antrasis parametras turi buti sveikasis skaicius.';
    }

    // let i = from;
    // for (; ;) {
    //     if (i <= to) {
    //         sum += i++;
    //     } else {
    //         break;
    //     }
    // }

    let sum = 0;

    if (from > to) {
        const x = from;
        from = to;
        to = x;
    }

    for (let i = from; i <= to; i++) {
        sum += i;
    }

    return sum;
}

console.log(rangeSum(true, 4));
console.log(rangeSum(4, false));
console.log(rangeSum('dfsd', 4));
console.log(rangeSum(4, 'ergg'));
console.log(rangeSum([], 4));
console.log(rangeSum(4, []));
console.log(rangeSum(null, 4));
console.log(rangeSum(4, null));
console.log(rangeSum(undefined, 4));
console.log(rangeSum(4, undefined));
console.log(rangeSum(4));
console.log(rangeSum());
console.log(rangeSum(0, 3.14));
console.log(rangeSum(3.14, 8));
console.log(rangeSum(3.14, 8.88));
console.log(rangeSum(0, Infinity));
console.log(rangeSum(Infinity, 8));
console.log(rangeSum(Infinity, 8.88));
console.log(rangeSum(0, -Infinity));
console.log(rangeSum(-Infinity, 8));
console.log(rangeSum(-Infinity, 8.88));
console.log(rangeSum(0, NaN));
console.log(rangeSum(NaN, 8));
console.log(rangeSum(NaN, NaN));

console.log(rangeSum(0, 4), '-->', 10);
console.log(rangeSum(0, 100), '-->', 5050);
console.log(rangeSum(-50, 50), '-->', 0);
console.log(rangeSum(0, 0), '-->', 0);
console.log(rangeSum(5, 5), '-->', 5);
console.log(rangeSum(-7, -7), '-->', -7);
console.log(rangeSum(-70, 30), '-->', -2020);
console.log(rangeSum(574, 815), '-->', 168069);

console.log(rangeSum(4, 0), '-->', 10);
console.log(rangeSum(100, 0), '-->', 5050);

console.log('------------');
console.log(rangeSum(0, 1000000000));

console.assert(rangeSum(0, 4) === 10);
console.assert(rangeSum(0, 100) === 5050, [0, 100, 5050]);


// console.log('---------------');
// for (let i = 0, j = 5, k = 99; i < j + k && i < 10 && j < 15; i++, j += 2, k -= 10) {
//     console.log(i, j, k);
// }