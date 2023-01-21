/*
For ciklas
for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}  */

// Isspaudinti nuo 0 iki 5.

for (let i=1000; i >=995; i--) {
    console.log(i);
}

const pazymiai = [2, 4, 6, 8, 10]

for (let i = 0; i <6; i++) {
    console.log(i)
}

/*Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0*/
console.log('------------------');

const mes = ['as', 'tu', 'mes', 'jus'];

for (let i = 1; i < mes.length; i++) {
    const name = mes[i];
    const sms = `sveikas ${name}`;
    console.log(sms);
}