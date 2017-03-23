var arreglo=[];
//var guardarNumeros =[];

// var x=mostrarNumero;
function mostrarNumero(id){
  var numero = document.getElementById(id).value;
  console.log(numero);
  var caja = document.getElementById("caja").value+=numero;
  //caja.value+=numero;
  return caja;
}

function suma(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('caja').value;
    var suma = 0;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        suma = parseInt(arreglo[0]) + parseInt(arreglo[1]);
        arreglo[0] = suma;
        console.log(suma);
        // arreglo=[];

    }
    document.getElementById('caja').value = '';
    document.getElementById("caja").value = suma;

}


function producto(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('caja').value;
    var producto = 1;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        producto = parseInt(arreglo[0]) * parseInt(arreglo[1]);
        arreglo[0] = producto;
        console.log(producto);
        // arreglo=[];


    }
    document.getElementById('caja').value = '';
    document.getElementById('caja').value = producto;

}

function division(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('caja').value;
    var div = 0;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        div = parseInt(arreglo[0]) / parseInt(arreglo[1]);
        arreglo[0] = div;
        console.log(div);
        // arreglo=[];


    }
    document.getElementById('caja').value = '';
    document.getElementById('caja').value = div;

}

function restar(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('caja').value;
    var resta= 0;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        resta = parseInt(arreglo[0]) - parseInt(arreglo[1]);
        arreglo[0] = resta;
        console.log(resta);
        // arreglo=[];


    }
    document.getElementById('caja').value = '';
    document.getElementById('caja').value = resta;

}
