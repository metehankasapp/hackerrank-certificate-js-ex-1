

async function getCountryName(code) {

  fetch('https://cdn.jsdelivr.net/npm/world_countries_lists@latest/data/en/countries.json').then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    
    data.filter(country =>{
      if(country.alpha2.toUpperCase() === code){
        console.log(country.name,country.alpha2)
      }
    })
    console.log(data);
  }).catch(err => {
    console.log("Error Reading data " + err);
  });
}

getCountryName("TR");