
function calcularTotal(){
    var cant = frmDatos.cantidad.value;
    var totl = cant*20000;
    document.getElementById("total").innerHTML = totl; 

}
function procesar(){
    
    var idBebida = frmDatos.id.value;
    var cant = frmDatos.cantidad.value;
    var totl = frmDatos.total.value;

    const cliente = {
        id : idBebida,
        cantidad : cant,
        total : totl,
    }

    localStorage.setItem(idBebida, JSON.stringify(cliente));
    frmDatos.submit();
}
function mostrarDatos(){
    let respuesta = "";
    let keys = Object.keys(localStorage);
    console.log(typeof localStorage.getItem(keys[0]))
    for(let i=0; i< keys.length; i++){ 
        let txt = JSON.parse(localStorage.getItem(keys[i]))
        console.log(txt)
        respuesta +=  "<tr>" + "<td>" + txt.id+ "</td>" +
                     "<td>" + txt.total+ "</td>" +
                     "</tr>";
    }

    document.getElementById("carrito").innerHTML = respuesta;

}
