
(function () {
    const heightInput= document.getElementById("height");
    const weightInput=document.getElementById("weight");
    const output = document.getElementById("output");
    function fetchRecipe() {
      let weight=weightInput.value;
        let height = heightInput.value;
		const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ceb83316cmsh48efc33444232e2p140ac0jsn646fdfcbdfd8',
		'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
	}
};

let BMI_Url=`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`;


const result=fetch(BMI_Url,options)
.then(response => response.json())
.then(response => response)
.catch(err => console.error(err));
return result

}

    document.getElementById("BMI-form").addEventListener('submit',function (e) {
        e.preventDefault();
        fetchRecipe().then(data => {
             if(data.bmi>25){
                output.innerHTML=`
                <h3 id="bmi" class="bmi-overweight">Your BMI is ${(data.bmi).toFixed(2)} kg/m2</h3>
                `;
             }
             else if(data.bmi<18){
                output.innerHTML=`
                <h3 id="bmi" class="bmi-underweight">Your BMI is ${(data.bmi).toFixed(2)} kg/m2</h3>
                `;
             }else if(data.bmi>18 && data.bmi<25){
                output.innerHTML=`
                <h3 id="bmi" class="bmi-normal">Your BMI is ${(data.bmi).toFixed(2)} kg/m2</h3>
                `;
             }
        });
    })
})();