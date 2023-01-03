(function () {
  const activityInput = document.getElementById("activity");
  const hoursInput=document.getElementById("hours");
  const output = document.getElementById("output");
  function fetchCalories() {
    let act =activityInput.value;
      let hrs = hoursInput.value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2ceb83316cmsh48efc33444232e2p140ac0jsn646fdfcbdfd8',
      'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
    }
  };
  let url=`https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=${act}`
  const result=fetch(url, options)
    .then(response => response.json())
    
    .catch(err => console.error(err));
    return result

  }
  document.getElementById("recipe-check-form").addEventListener('submit',function (e) {
  let hrs = hoursInput.value;
      e.preventDefault();
      fetchCalories().then(data => {
           console.log(data);
     let cal_burned=(data[0].calories_per_hour)*hrs;
      output.innerHTML=`<h3 id="act"> You burnt 
      
    ${cal_burned} calories!!</h3>
      `;
      });
  })
})();