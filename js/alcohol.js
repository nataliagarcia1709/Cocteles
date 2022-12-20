const URL_API =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

// Datos de bebidas con alcohol
const getDrinks = async () => {
  try {
    const response = await fetch(URL_API);

    if (response.status === 200) {
      const data = await response.json();
      let bebidas = ''
      let precio = 20000
      data.drinks.forEach((drink) => {
        bebidas += `
        <div class='card-deck mb-3 text-center'>
                <div class="card mb-4" style="width: 18rem;">
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" class="card-img-top" heigth="300" width="300"/>
                </div>
                <div class='card-body'>
                    <h5 class='card-title'>${drink.strDrink}</h5>
                    <p>${precio}</p>
                    <button class="btn btn-outline-dark" id='${drink.idDrink}' onclick= "agregarCoctel()" >Agregar</button>
                </div>
                </br>
        </div>
        `
      });
      document.getElementById('listadoAlcohol').innerHTML = bebidas
    } else if (response.status === 404) {
      console.log("No se encontró la url");
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }
};
function agregarCoctel(){
    
        if(drink.idDrink)
        var idPersona = frmDatos.id.value;
        var nom = frmDatos.nombre.value;
        var tel = frmDatos.telefono.value;
        var ema = frmDatos.email.value;
    
        const persona = {
            id : idPersona,
            nombre : nom,
            telefono : tel,
            email : ema
        }
    
        localStorage.setItem(idPersona, JSON.stringify(persona));
        frmDatos.submit();
}
getDrinks();