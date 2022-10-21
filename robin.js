let vector = [];
var vectorident = []
var vectornom1 = []
var vectornom2 = []
var vectorape1 = []
var vectorape2 = []
function agregarinicio(txtidi, txtnombre1, txtnombre2, txtape1, txtape2) {

    vectorident.push(txtidi);
    vectornom1.push(txtnombre1);
    vectornom2.push(txtnombre2);
    vectorape1.push(txtape1);
    vectorape2.push(txtape2);
    alert(vectorident + vectornom1 + vectornom2 + vectorape1 + vectorape2)
}

function agregarfin(txtidi, txtnombre1, txtnombre2, txtape1, txtape2) {

    vectorident.unshift(txtidi);
    vectornom1.unshift(txtnombre1);
    vectornom2.unshift(txtnombre2);
    vectorape1.unshift(txtape1);
    vectorape2.unshift(txtape2);

    alert(vectorident + vectornom1 + vectornom2 + vectorape1 + vectorape2)

}



function mostrartodo() {
    for (i = 0; i < vectorident.length; i++) {
        var datoscliente = "los datos del cliente" + i + vectorident[i] + vectornom1[i] + vectornom2[i] + vectorape1[i] + vectorape2[i]
        alert(datoscliente);

    }
}
function buscar(datoscliente) {

    for (i = 0; i < vectorident; i++)
        if (vectorident[i] + vectornom1[i] + vectornom2[i] + vectorape1[i] + vectorape2[i] == datoscliente);
    alert(datoscliente);
}
function eliminar() {
    var n = (prompt("ingrese una posicion"));
    var mostrartodos = [vectorident];
    mostrartodos.splice(0, n)
    console.log(mostrartodos);
    alert(mostrartodo)
}
function agregar() {
    var m = parseInt(prompt("ingrese un n"));
    var p = parseInt(prompt("ingrese una palabra"));

    const mostrartodos = ['45', 'robin', 'son', 'truque', 'velencia']
    mostrartodos.splice(m, m, p)
    console.log(mostrartodos);

}
function agregar2(datoscliente, mostrartodo) {
    var m = parseInt(prompt("ingrese un posicion"));
    var r = parseInt(prompt("ingrese un numero para agregar "));
    for (i = 0; i < vectorident; i++)
        if (vectorident[i] + vectornom1[i] + vectornom2[i] + vectorape1[i] + vectorape2[i] == datoscliente);
    const mostrartodos = [vectorident, vectornom1, vectornom2, vectorape1, vectorape2]
    mostrartodos.splice(m, m, r)
    console.log(mostrartodos);
    alert(datoscliente);

}

function eliminar() {
    var m = h(prompt("ingrese un posicion para eliminar "));
    for (i = 0; i < vectorident; i++)
        if (vectorident[i] + vectornom1[i] + vectornom2[i] + vectorape1[i] + vectorape2[i] == datoscliente);
    const mostrartodos = [vectorident, vectornom1, vectornom2, vectorape1, vectorape2]
    mostrartodos.splice(m, m,)
    console.log(mostrartodos);

}
// // // // matrices// // // 

// function actualizar(){
// for (i = 0; i < vectorid.length; i++) {
//     var datosclientes = "los datos del cliente" + i + vectorid[i] + vectorno1[i] + vectorno2[i] + vectora1[i] + vectora2[i]
//     alert(datosclientes);
// }}
// function a2() {
//     m1 = [[15, 'geobani'], ['rider']]
//     m2 = [[18, 'robinson'], ['son']]
//     m3 = [[0, ''], [''], [''], ['']]
// for( var i=0; i<=3; i++)
// m3=[i]

// }

function pago(pago, pago2) {
    alert(pago + pago2)
    const resivir=suma(pago, pago2);
    document.getElementById('Ptotal').innerHTML=resivir

    const resivir1=multiplicacion(pago, pago2);    
    document.getElementById('Ptotal1').innerHTML=resivir1
}
let suma=(pago2, pago)=>
    // var suma=parseInt(pago)+parseInt(pago2);
    // return suma
suma1=parseInt(pago)+parseInt(pago2);

function multiplicacion(pago, pago2){
    var multiplicacion=parseInt(pago)*parseInt(pago2);
    return multiplicacion
}

function tabla(tabla){
    const reci=tab(tabla)
    var num1 =parseInt(tabla);
    
    // for ( var i=1; i<= 10; i++){
    // multi=num1*i;
    // document.write(num1+ "x"+i+"="+multi);
    }
    // }
 
function tab(tabla){
   var num2 =parseInt(tabla)
    for ( var i=1; i<= 10; i++){
     multi=num2*i;
     document.write(num2+ "x"+i+"="+multi+ "<br>")

    // var datoscliente = "los datos del cliente" + i + vectorident[i] + vectornom1[i] + vectornom2[i] + vectorape1[i] + vectorape2[i]
    // alert(datoscliente);


     var reci=multi=num2*i;
   
    // document.getElementById('Ptabla').innerHTML=reci
   console.log(reci)
    }
    return i

}