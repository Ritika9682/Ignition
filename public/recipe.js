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
    const recipeInput = document.getElementById("recipe");
    const quantityInput=document.getElementById("quantity");
    const output = document.getElementById("output");
    function fetchRecipe() {
      let quan=quantityInput.value;
        let ingr = recipeInput.value;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2ceb83316cmsh48efc33444232e2p140ac0jsn646fdfcbdfd8',
                'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
            }
        };
        let nutritionURL = `https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=${quan} ${ingr}`;

        const result = fetch(nutritionURL, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
        return result

    }
    document.getElementById("recipe-check-form").addEventListener('submit',function (e) {
        e.preventDefault();
        fetchRecipe().then(data => {
             console.log(data);
        output.innerHTML=`
        <table id="act" style="border:1px solid #8bbccc;">
        <tr>
        <td>Calories</td>
        <td>${data.calories}</td>
        </tr>
        <tr>
        <td>Calcium</td>
        <td> ${data.totalNutrients.CA.quantity}
        ${data.totalNutrients.CA.unit}</td>
        </tr>
        <tr>
        <td>Carbohydrates</td>
        <td> ${data.totalNutrients.CHOCDF.quantity}
        ${data.totalNutrients.CHOCDF.unit}</td>
        </tr>
        <tr>
        <td>Fats</td>
        <td> ${data.totalNutrients.FAT.quantity}
        ${data.totalNutrients.FAT.unit}</td>
        </tr>
        <tr>
        <td>Iron</td>
        <td> ${data.totalNutrients.FE.quantity}
        ${data.totalNutrients.FE.unit}</td>
        </tr>
        <tr>
        <td>Fiber</td>
        <td> ${data.totalNutrients.FIBTG.quantity}
        ${data.totalNutrients.FIBTG.unit}</td>
        </tr>
        <tr>
        <td>Potassium</td>
        <td> ${data.totalNutrients.K.quantity}
        ${data.totalNutrients.K.unit}</td>
        </tr>
        <tr>
        <td>Magnesium</td>
        <td> ${data.totalNutrients.MG.quantity}
        ${data.totalNutrients.MG.unit}</td>
        </tr>
        <tr>
        <td>Sodium</td>
        <td> ${data.totalNutrients.NA.quantity}
        ${data.totalNutrients.NA.unit}</td>
        </tr>
        <tr>
        <td>Phosphorous</td>
        <td> ${data.totalNutrients.P.quantity}
        ${data.totalNutrients.P.unit}</td>
        </tr>
        <tr>
        <td>Protein</td>
        <td> ${data.totalNutrients.PROCNT.quantity}
        ${data.totalNutrients.PROCNT.unit}</td>
        </tr>
        <tr>
        <td>Cholestrol</td>
        <td> ${data.totalNutrients.CHOLE.quantity}
        ${data.totalNutrients.CHOLE.unit}</td>
        </tr>
        <tr>
        <td>Sugar</td>
        <td> ${data.totalNutrients.SUGAR.quantity}
        ${data.totalNutrients.SUGAR.unit}</td>
        </tr>
        <tr>
        <td>Water</td>
        <td> ${data.totalNutrients.WATER.quantity}
        ${data.totalNutrients.WATER.unit}</td>
        </tr>
        <tr>
        <td>Zinc</td>
        <td> ${data.totalNutrients.ZN.quantity}
        ${data.totalNutrients.ZN.unit}</td>
        </tr>
        <tr>
        <td>Vitamin A</td>
        <td> ${data.totalNutrients.VITA_RAE.quantity}
        ${data.totalNutrients.VITA_RAE.unit}</td>
        </tr>
        <tr>
        <td>Vitamin E</td>
        <td> ${data.totalNutrients.TOCPHA.quantity}
        ${data.totalNutrients.TOCPHA.unit}</td>
        </tr>
        <tr>
        <td>Vitamin C</td>
        <td> ${data.totalNutrients.VITC.quantity}
        ${data.totalNutrients.VITC.unit}</td>
        </tr>
        <tr>
        <td>Vitamin D</td>
        <td> ${data.totalNutrients.VITD.quantity}
        ${data.totalNutrients.VITD.unit}</td>
        </tr>
        <tr>
        <td>Vitamin K</td>
        <td> ${data.totalNutrients.VITK1.quantity}
        ${data.totalNutrients.VITK1.unit}</td>
        </tr>
        <tr>
        <td>Energy</td>
        <td> ${data.totalNutrients.ENERC_KCAL.quantity}
        ${data.totalNutrients.ENERC_KCAL.unit}</td>
        </tr>
        <tr>
        <td>Diet Labels</td>
        <td>${data.dietLabels} </td>
        </tr>
        <tr>
        <td>Total Weight</td>
        <td>${data.totalWeight} </td>
        </tr>
        
        
        
        


        </table>
        
        
        
        `;
        });
    })
})();