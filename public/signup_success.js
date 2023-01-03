// const { urlencoded } = require("body-parser");

const navbar = document.getElementById("header")
// const randomApiResponse=document.getElementById("gifs")
//console.log(apiResponseSection)
let height = 0;

function dummyFunction() {
  height = window.scrollY;
  if (height > 634) {
    $("header").addClass("header-scrolled");
    $(".navbar-collapse").addClass("nav-toggle-color-change")
  }
  if (height < 718) {
    $("header").removeClass("header-scrolled");
    $(".navbar-collapse").removeClass("nav-toggle-color-change")

  }
}

document.addEventListener("scroll", dummyFunction)



async function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}



(function () {
  const searchBar = document.getElementById("search_bar");
  
let apiResponseSection = document.getElementById("api-response");

  function fetchRecipe() {
      let searchBarValue = searchBar.value;
      var searchBarValueLower = searchBarValue.toLowerCase();
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8e6c760ac4mshd4211b82516164dp16e6cdjsnd9839d506e87',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
  
      var exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + searchBarValueLower;

      const result = fetch(exerciseURL, options)
          .then(response => response.json())
          .then(data => data)
          .catch(err => console.error(err));
      return result

  }
  document.getElementById("exercise-form").addEventListener('submit',function (e) {
      e.preventDefault();
      apiResponseSection.innerHTML = "";
      fetchRecipe().then(data => {
          console.log(data);

          for (i = 1; i <= 10; ++i) {
            apiResponseSection.innerHTML += `
            <div style="display:inline; 
              justify-content:center;
            border:1px solid black; margin:20px;">
              <h3>${data[i]?.name.toUpperCase()}</h3>
              <img src="${data[i]?.gifUrl}" />
              <p>Equipment-used:${data[i]?.equipment}</p> 
            </div>
            `;
          }
      });
  })
})();


(function () {
 
let apiResponseSection = document.getElementById("api-response");

  function fetchRecipeFromImage(bodyPartLower) {
     const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8e6c760ac4mshd4211b82516164dp16e6cdjsnd9839d506e87',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
  
      var exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + bodyPartLower;

      const result = fetch(exerciseURL, options)
          .then(response => response.json())
          .then(data => data)
          .catch(err => console.error(err));
      return result
}
const collection = document.getElementsByClassName("img-styling");
for (let i = 0; i < collection.length; i++) {
  collection[i].addEventListener('click',function () {
    const bodyPartLower=this.innerText.toLowerCase();
    apiResponseSection.innerHTML = "";
fetchRecipeFromImage(bodyPartLower).then(dataFromImage => {
          console.log(dataFromImage);
          for (i = 1; i <= 10; ++i) {
                  apiResponseSection.innerHTML += `
                  <div style="display:inline; 
                    justify-content:center;
                  border:1px solid black; margin:20px;">
                    <h3>${dataFromImage[i]?.name.toUpperCase()}</h3>
                    <img src="${dataFromImage[i]?.gifUrl}" />
                    <p>Equipment-used:${dataFromImage[i]?.equipment}</p> 
                  </div>
                  `;
          }
      });
  })
}
})();


// MODAL
const tiparray = [
  {content:"Include a fruit or a vegetable every time you eat, meals and snacks included.Have a cup of green or matcha tea ever day"},
  {content:"Don't forget to hydrate yourself. Refresh your body by drinking atleast eight glasses of water a day."},
{content:"Workout promotes the generation and release of endorphins,which helps you relax and enhance your feelings of optimism and satisfaction. Doing workouts regularly, you can have a better state of mind and a better quality of life"},
{content:"Have a cup of green or matcha tea ever day"},
{content:"Finding a workout partner can help keep you on track and motivate you to get out the door."},
{content:"Hit the gym or go for a 20-minute walk with coworkers, and have lunch afterward."},
{content:"Cutting back on screen time is a great way to curb your “sit time.” Move around instead, by visiting the gym or even cleaning the house."},
{content:"Set short-term goals—and reward yourself for achieving them. Try targeting a specific event, such as a road race or a walk-for-charity, to participate in—this can help keep you motivated."},
{content:"Hit the gym or go for a 20-minute walk with coworkers, and have lunch afterward."},
{content:"Cut calories in your morning cup of coffee by skipping the cream and sugar. Instead, try drinking it black or reducing your amount of each."},
{content:"Keep in mind that striving for perfection usually leads to disaster. Set small goals and stair-step your way to success by developing daily healthy habits. Celebrate those wins, regardless of perfection."},
{content:"One of the most powerful yet simple tips to try is to eat slowly. Put your fork down in between bites to keep from over-eating. When you eat more slowly, you allow your mind some time to recognize when your body is full."},


]

const mBody=document.getElementById('modalBody')
function Modalbody(){
mBody.innerHTML = `<div style="padding:30px; background:#def5e5; font-size:20px ;border-radius:12px; color:#666666">${tiparray[Math.floor(Math.random() * tiparray.length)].content}</div>`;
}

    

  
 