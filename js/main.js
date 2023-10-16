// Дан масив
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Масив', arr);
console.log(' ');

// 1. Знайти суму та кількість позитивних елементів.
let arr1Sum = arr.reduce(function (prev, elem) {
    if (elem >= 0) {
        return prev + elem;
    }
    else {
        return prev;
    }
}, 0);
console.log('Сума позитивних елементів =', arr1Sum);

let arr1Count = arr.reduce(function (prev, elem) {
    if (elem >= 0) {
        return prev + 1;
    }
    else {
        return prev;
    }
}, 0);
console.log('Кількість позитивних елементів =', arr1Count);
console.log(' ');

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
let arr2 = arr.reduce(function (prev, elem) {
    if (elem < prev) {
        return elem;
    }
    else {
        return prev;
    }
}, 0);
console.log('Мінімальний елемент =', arr2);
console.log('Порядковий номер =', arr.indexOf(arr2));
console.log(' ');

// 3. Знайти максимальний елемент масиву та його порядковий номер.
let arr3 = arr.reduce(function (prev, elem) {
    if (elem > prev) {
        return elem;
    }
    else {
        return prev;
    }
}, 0);
console.log('Максимальний елемент =', arr3);
console.log('Порядковий номер =', arr.indexOf(arr3));
console.log(' ');

// 4. Визначити кількість негативних елементів.
let arr4 = arr.reduce(function (prev, elem) {
    if (elem < 0) {
        return prev + 1;
    }
    else {
        return prev;
    }
}, 0);
console.log('Кількість негативних елементів =', arr4);
console.log(' ');

// 5. Знайти кількість непарних позитивних елементів.
let arr5 = arr.reduce(function (prev, elem) {
    if (elem >= 0 && elem % 2 !== 0) {
        return prev + 1;
    }
    else {
        return prev;
    }
}, 0);
console.log('Кількість непарних позитивних елементів =', arr5);
console.log(' ');

// 6. Знайти кількість парних позитивних елементів.
let arr6 = arr.reduce(function (prev, elem) {
    if (elem >= 0 && elem % 2 === 0) {
        return prev + 1;
    }
    else {
        return prev;
    }
}, 0);
console.log('Кількість парних позитивних елементів =', arr6);
console.log(' ');

// 7. Знайти суму парних позитивних елементів.
let arr7 = arr.reduce(function (prev, elem) {
    if (elem >= 0 && elem % 2 === 0) {
        return prev + elem;
    }
    else {
        return prev;
    }
}, 0);
console.log('Сума парних позитивних елементів =', arr7);
console.log(' ');

// 8. Знайти суму непарних позитивних елементів.
let arr8 = arr.reduce(function (prev, elem) {
    if (elem >= 0 && elem % 2 !== 0) {
        return prev + elem;
    }
    else {
        return prev;
    }
}, 0);
console.log('Сума непарних позитивних елементів =', arr8);
console.log(' ');

// 9. Знайти добуток позитивних елементів.
let arr9 = arr.reduce(function (prev, elem) {
    if (elem >= 0) {
        return prev * elem;
    }
    else {
        return prev;
    }
}, 1);
console.log('Добуток позитивних елементів =', arr9);
console.log(' ');

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
let arr10 = arr.map(function (elem) {
    if (elem === Math.max(...arr)) {
        return elem;
    }
    else {
        return 0;
    }
}, 0);
console.log('Найбільший серед елементів масиву, інші обнулені', arr10);