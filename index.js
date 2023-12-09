const directors = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
];



directors.forEach(item => {
const directorContainer  = document.querySelector('.director')
const dName = document.createElement('DIV');
const directorProfession = document.createElement('DIV')
const aboutDitector = document.createElement('DIV');
const wordForLink = document.createElement('DIV')
const linkToMovie = document.createElement('a');
const oberni = document.createElement('DIV');


dName.classList.add('d-name')
directorProfession.classList.add('d-prof')



dName.textContent = `Имя режиссёра: ${item.name}`;
directorProfession.textContent = `Профессия режиссёра: ${item.career}`
linkToMovie.href = item.films;
wordForLink.textContent = `Фильмография`

oberni.classList.add("directorbox"); 
aboutDitector.classList.add("box");


aboutDitector.append(dName);
aboutDitector.append(directorProfession);
wordForLink.append(linkToMovie);

oberni.append(aboutDitector);
oberni.append(wordForLink);

directorContainer.append(oberni);
})



const title = document.createElement('h2');
const containerForTopFilms = document.createElement('DIV');

title.classList.add('best-films__title');
containerForTopFilms.classList.add('best-films')

title.textContent = 'Лучшие фильмы этих режиссёров';

let sum = '';
const topFilmsList = directors.map((a) => {

  sum += a.top_rated_film + ', ';
  containerForTopFilms.textContent = sum;

document.body.appendChild(title);
document.body.appendChild(containerForTopFilms);
})

console.log(directors)