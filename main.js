/*------------------------------------------------------
--------Declaraciones de variables, constantes----------
------------------Desde aca---------------------------*/
const ropas=[];
let marcaAdidas=[];
let marcaReebok=[];
let marcaNew=[];
let marcaTopper=[];
let vestirDeportiva;
let tipo;
let marca;
class vestimenta{
    constructor(vestir,tipo,marca){
        this.vd=vestir;
        this.tipo=tipo;
        this.marca=marca;
    }
}
/*----------------Hasta aca-----------------------------
------------------------------------------------------*/

/*------------------------------------------------------
------------------Entrada de datos--------------------*/
while (vestirDeportiva !="N"){
    vestirDeportiva = tipoVestirDeportiva();
    if (vestirDeportiva != "N"){
        //Saque esto porque por el momento no aplica
        //tipo=tipoRopa();
        marca=marcas();
        ropas.push(new vestimenta(vestirDeportiva,tipo,marca));
    }else{
    }
}

/*------------------------------------------------------
//Para listar los elementos de marca se puede hacer asi
 ropas.forEach(
     (item) => {
         if (item.marca =="Adidas") {
            marcaAdidas.push(item);
         } else if (item.marca=="Reebok"){
            marcaReebok.push(item);
         } else if (item.marca=="Topper") {
            marcaTopper.push(item);
       } else {
            marcaNew.push(item);
        }
     }
 )

 o asi (pedido para el trabajo)
 ------------------------------------------------------*/
marcaAdidas=ropas.filter(ropita => ropita.marca === 'Adidas');
marcaTopper=ropas.filter(ropita => ropita.marca === 'Topper');
marcaNew=ropas.filter(ropita => ropita.marca === 'New Balance');
marcaReebok=ropas.filter(ropita => ropita.marca === 'Reebok');

console.log("Cantidad de ropa de marca Adidas " + marcaAdidas.length);
console.log("Cantidad de ropa de marca Reebok " + marcaReebok.length);
console.log("Cantidad de ropa de marca Topper " + marcaTopper.length);
console.log("Cantidad de ropa de marca New Balance " + marcaNew.length);

/*------------------------------------------------------
----Para ver si hay alguna de las siguientes marcas-----
------------------------------------------------------*/
const hayDeportivaAdidas = marcaAdidas.some((valor) => valor.vd === "Deportiva");
if (hayDeportivaAdidas) {
    console.log("Hay ropa deportiva de Adidas");
} else {
    console.log("No hay ropa deportiva de Adidas");
}
const hayDeportivaReebok = marcaReebok.some((valor) => valor.vd === "Deportiva");
if (hayDeportivaReebok) {
    console.log("Hay ropa deportiva de Reebok");
} else {
    console.log("No hay ropa deportiva de Reebok");
}
const hayDeportivaNew = marcaNew.some((valor) => valor.vd === "Deportiva");
if (hayDeportivaNew) {
    console.log("Hay ropa deportiva de New Balance");
} else {
    console.log("No hay ropa deportiva de New Balance");
}
const hayDeportivaTopper = marcaTopper.some((valor) => valor.vd === "Deportiva");
if (hayDeportivaTopper) {
    console.log("Hay ropa deportiva de Topper");
} else {
    console.log("No hay ropa deportiva de Topper");
}

/*------------------------------------------------------
-----------------------Funciones------------------------
------------------------------------------------------*/
function tipoVestirDeportiva(){
    let vestirDeportiva
    vestirDeportiva = prompt("Elija que ropa comprar: [Deportiva/Vestir/N:Salir]");
    while (!( vestirDeportiva =='N' || vestirDeportiva =='Deportiva' || vestirDeportiva == 'Vestir')){
        vestirDeportiva = prompt("Elija que ropa comprar: [Deportiva/Vestir/N:Salir]"); 
    }      
    return vestirDeportiva;
}

function tipoRopa(){
    let tipo
    tipo = prompt("Elija que tipo: [Buzos,Calzado,Remeras,Pantalones]");
    while (!(tipo =='Buzos' || tipo == 'Calzado' ||tipo =='Remeras' || tipo == 'Pantalones'))
    {
        tipo = prompt("Elija que tipo: [Buzos,Calzado,Remeras,Pantalones]"); 
    }      
    return tipo;
}

function marcas(){
    let tipo
    tipo = prompt("Elija que marca: [Adidas,Reebok,New Balance,Topper]");
    while (!(tipo =='Adidas' || tipo == 'Reebok' ||tipo =='New Balance' || tipo == 'Topper'))
    {
        tipo = prompt("Elija que marca: [Adidas,Reebok,New Balance,Topper]");
    }    
    return tipo;
}

