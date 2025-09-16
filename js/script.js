const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("Насколько вы его оцените?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("Насколько вы его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log((!1 && 2) || !3);
console.log(25 || (null && !3));
console.log(NaN || null || !3 || undefined || 5);
console.log((5 === 5 && 3 > 1) || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//     console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log("Done!");
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if ((hamburger && cola) || (fries === 3 && nuggets)) {
    console.log("Done!");
} else {
    console.log("Fail!");
}
