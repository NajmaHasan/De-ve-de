// här har jag hämtat all med data och fire-base att göra plus hur man söker, hämtar,
// visar och kan ta bort om man inte vill ha film man har sökt som ligger i sin movieList. 



import { db, collection, addDoc, getDocs, query, 
   where, doc, deleteDoc } from './firebase-config.js';

   let InputSearch=document.querySelector(`#search`)
   let footerElem=document.querySelector(`.movieList`)

   async function saveToDate(movie){
    console.log(movie);
    try{
      await addDoc(collection(db, `movies`), movie);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMovies() {
    try{
      let movieList= await getDocs(collection(db, `movies`))
      showMovieList(movieList); 
    }catch(error){
      console.log(error);
    }
   }

   function showMovieList(movieList) {
    footerElem.innerHTML = '';
    movieList.forEach((item) => {
        let elem = `
    
            <article>
                <p>TITLE: ${item.data().title}</p>
                <p>GENRE: ${item.data().genre}</p>
                <p>Date: ${item.data().date}</p>  
                <button id="remove" data-id =${item.id} > Delete the movie</button>                        
            </article>
        `;
        footerElem.insertAdjacentHTML('beforeend', elem);
    }) 
    buttonDelet()
  }
   
  function buttonDelet(){
    let btnDelete=document.querySelectorAll(`#remove`)
    console.log(btnDelete);
    btnDelete.forEach((btnD) =>{
      btnD.addEventListener(`click`, async (e)=>{
        console.log(e.target);
        let idBtn = e.target.getAttribute(`data-id`)
        await deleteFromList(idBtn)
        await getMovies()
      
      })
    })
  }
  
   async function deleteFromList(idBtn){
    console.log(idBtn);
    try{
      await deleteDoc(doc(db, `movies`, idBtn))
    } catch(error){
      console.log(error);
    }
   }

async function checkIfTheMovieExists() {
  let search= InputSearch.value;
  try {
      let movieNameQuery = query(collection(db, 'movies'), where('title', '==', search));
      const result = await getDocs(movieNameQuery);
      let titleName = {};
      result.forEach((search) => {
          titleName = search;
      });
      return titleName;
  } catch (error) {
      console.log(error);
  }
}

let serchButton=document.querySelector(`.searchMovie`)
serchButton.addEventListener(`click`, async()=>{
  footerElem.classList.toggle(`hide`);
  const movieResult = await checkIfTheMovieExists()
  const movieExist=movieResult.id
  if(movieExist){
    showMovie(movieResult)
  } else{
    alert(`We could not found the movie`)
  }
  console.log(movieResult);  
  InputSearch.value=``;
} ) 

function showMovie(movieResult) {
  footerElem.innerHTML = '';
      let elem = `
          <article>
          <h1> Your movie </h1>
              <p>TITLE: ${movieResult.data().title}</p>
              <p>GENRE: ${movieResult.data().genre}</p>
              <p>Date: ${movieResult.data().date}</p>  
              <button id="remove" data-id =${movieResult.id} > Delete the movie</button>                        
          </article>
      `;
      footerElem.insertAdjacentHTML('beforeend', elem);
  buttonDelet()
}




   export{ getMovies, saveToDate}