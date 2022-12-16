// här har jag lagt all med hide/show function och vilken sida ska visas och inte. 
// plus så har jag backToFirstPage fuctionen här och alla index.HTML elememt.

import{saveToDate, getMovies } from './modules/movies.js'

  let titleName=document.querySelector(`#title`)
  let genreType=document.querySelector(`#genre`)
  let dateMovie= document.querySelector(`#moviedate`)
  let footerElem=document.querySelector(`.movieList`)
  let mainElem=document.querySelector(`#addMovie`)
  let buttonElem=document.querySelector(`.back`)
  let h1=document.querySelector(`h1`)
  let sectionElem1=document.querySelector(`#theTitle`)

  let movie= {
    title: ``,
    genre:``,
    date: ``
  }

 function addMovie () {
  let btnAdd=document.querySelector(`.addlist`)
  btnAdd.addEventListener(`click`, async () =>{
    console.log(`click`);
    console.log(dateMovie);
    movie.title=titleName.value
    movie.genre= genreType.value
    movie.date=dateMovie.value
    await saveToDate(movie)
    titleName.value=``;
    genreType.value=``;
    dateMovie.value=``;
  })
 }

 function getMovieList(){
  let btnShow=document.querySelector(`.show`)
  btnShow.addEventListener(`click`, async ()=>{
    footerElem.classList.toggle(`hide`);
    mainElem.classList.toggle('hide');
    h1.classList.toggle(`hide`)
    sectionElem1.classList.toggle(`hide`)
    buttonElem.classList.toggle(`hide`)
   await getMovies();
    backToFirst ();
  })
 }

function backToFirst (){
  buttonElem.addEventListener(`click`,()=> {
    console.log(`click`);
    footerElem.classList.toggle(`hide`);
      mainElem.classList.toggle('hide');
      h1.classList.toggle(`hide`)
      sectionElem1.classList.toggle(`hide`)
      buttonElem.classList.toggle(`hide`)  
  })
}

addMovie()
getMovieList()
 