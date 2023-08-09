class Cadena{
    
  regresar(){
    window.history.back()
  }
    

  //<--------- VOCALES Y CONSONANTES ------>
  vocales() {
    let frase = document.getElementById("datos").value;
    let cv = 0;
    let cc = 0;
    let resp = document.getElementById("resp");

    for (let i = 0; i < frase.length; i++) {
      let char = frase[i].toLowerCase(); // Convertimos el carácter a minúsculas para contar correctamente

      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        cv++;
      }
      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        cc++;
      }
    }

    resp.textContent = `La cantidad de vocales son: ${cv} y de consonantes son: ${cc}`;
  }




  //<!-- Presenta cuantas, "," "." ";" ":" hay en una frase -->
  signos(){

    //<!-- Presenta cuantas, "," "." ";" ":" hay en una frase -->
    let frase = document.getElementById("datos").value;
    let resp = document.getElementById("resp");
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;


    for (let i = 0; i < frase.length; i++) {
      let char = frase[i]; 

      if (char === ",") {
        c1++;
      }
      if (char === "." ) {
        c2++;
      }
      if (char === ";") {
        c3++;
      }
      if (char === ":" ) {
        c4++;
      }
    }

    resp.innerHTML = `La cantidad de (,) son: ${c1} <br> La cantidad de (.) son: ${c2} <br> La cantidad de (;) son: ${c3} <br> La cantidad de (:) son: ${c4}`;

  }



 //<!-- Dada una frase y una subacadena a eliminar en la frase.
 // Se pide eliminar la subcadena en la frase a partir de la posicion encontrada de la subcadena
 //Ejemplo: frase = "hola que tal"  subCadenaEliminar="que" 
 // respuesta="hola tal" -->


  eliminarFrase(){
    let frase = document.getElementById("datos").value
    let eliminar = document.getElementById("eliminar").value
    let resp = document.getElementById('resp')
    let aux = ""

    //recorre cadena
    for (let i = 0; i < frase.length; i++) {

     let coincide = true;

     //recorre subcadena
     for (let j = 0; j < eliminar.length; j++) {
       if (frase[i + j] !== eliminar[j]) {
         coincide = false;
         break;
        }
      }

      if (coincide) {
        i += eliminar.length - 1;
      } else {
      aux += frase[i];
      }
    }

    resp.innerHTML=`La nueva frase es: ${aux}`
  }



  //<!-- Dada una frase y una subacadena a insertar en una posicion de la frase.
  //Se pide insertar la subcadena en la frase a partir de la posicion de indicada
  //Ejemplo: frase = "hola  tal"  subCadenaBuscar="que" posicionInidicada=5 
  //respuesta="hola que tal" -->

  insertar() {
    // "hola que tal"
    let cadena = document.getElementById("frase").value
    let subcadena = document.getElementById("subcadena").value
    let posicion = parseInt(document.getElementById("posicion").value)
    let aux=""

    if (posicion >= 0 && posicion <= cadena.length){ 
      for (let i = 0; i < posicion; i++) {
        aux=aux+cadena[i]
      }

      aux = aux + subcadena;
      
      for (let i = posicion; i < cadena.length; i++) {
        aux = aux + cadena[i]
      }
      cadena = aux 
      let resp = document.getElementById("resp")
      resp.textContent = `La cadena nueva es =  ${cadena}`
    }
    else{
      alert("la posicion no es valida")
    }

  }

  

  //<!-- Dada una frase y una subacadena a buscar. Se pide presentar
  //la posicion de la subcadena en la frase
  //Ejemplo: frase = "hola que tal"  subCadenBuscar="que" respuesta=5 -->

  buscarSubcadena() {
    let frase = document.getElementById("frase").value;
    let subcadenaBuscar = document.getElementById("subcadena").value;
    let resp = document.getElementById("resp");

    let posicion = -1;

    for (let i = 0; i <= frase.length - subcadenaBuscar.length; i++) {
      let encontrado = true;

      for (let j = 0; j < subcadenaBuscar.length; j++) {
        if (frase[i + j] !== subcadenaBuscar[j]) {
          encontrado = false;
          break;
        }
      }

      if (encontrado) {
        posicion = i;
      }
    }

    if (posicion !== -1) {
      resp.textContent = `La subcadena se encuentra en la posición: ${posicion}`;
    } else {
      resp.textContent = "La subcadena no se encontró en la frase.";
    }

  }



  //<!-- Dada una frase y un caracter a buscar. Se pide presentar
  //la posicion de caracter en la frase
  //Ejemplo: frase = "hola que tal"  carBuscar="q" respuesta=5 -->
  buscarCaracter() {
    let frase = document.getElementById("dato1").value;
    let buscado = document.getElementById("dato2").value;
    let resp = document.getElementById('resp');
    let encontrado = false;

    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === buscado) {
        encontrado = true;
        resp.textContent = `El caracter "${buscado}" se encuentra en la posición: ${i}`;
        break;
      }
    }

    if (!encontrado) {
      resp.textContent = `El caracter "${buscado}" no se encuentra en la frase.`;
    }

  }



  //<!-- Dada una cantidad ingresada en una frase.
  //Se pide presentar la suma de los digitos que tiene la frase 
  //Ejemplo: frase = "123"  Respuesta=6  -->

  sumaFrase(){

   let frase = document.getElementById("datos").value;
   let resp = document.getElementById("resp");
   let suma = 0

   for (let i = 0; i < frase.length; i++) {
     let char = parseInt(frase[i]);

     if (!isNaN (char)){
       suma = suma + char
      }
  
    } 
    resp.textContent = `La suma de la frase es : ${suma}`;
  }



  //<!-- Presenta cuantas palabras hay en una frase considere un espacio por palabra -->
  palabras() {
    let frase = document.getElementById("datos").value.trim(); // Usamos trim() para eliminar espacios al inicio y al final
    let resp = document.getElementById("resp");
    let c1 = 0; // Inicializamos el contador en 0
  
    // Iteramos por cada caracter de la frase
    for (let i = 0; i < frase.length; i++) {
      let char = frase[i];
  
      // Si encontramos un espacio en blanco, comprobamos si el siguiente caracter no es otro espacio en blanco
      // Si no es otro espacio en blanco, entonces incrementamos el contador de palabras
      if (char === " " && frase[i + 1] !== " ") {
        c1++;
      }
    }
  
    // Añadimos 1 al contador para incluir la última palabra, ya que puede que no haya un espacio después de ella
    c1++;
  
    resp.textContent = `La cantidad de palabras son: ${c1}`;
  }
  


  //<!-- Indicar si una frase se lee igual de inicio a fin o de fin a inicio
  //ejemplo: frase="ana" -->
  igual() {
    let frase = document.getElementById("datos").value;
    let resp = document.getElementById("resp");
    let char2 = "";
  
    // Recorremos la frase al reves y construimos char2
    for (let i = frase.length - 1; i >= 0; i--) {
      char2 += frase[i];
    }
  
    // Eliminamos los espacios en blanco de ambas frases antes de comparar
    frase = frase.replace(/\s/g, "");
    char2 = char2.replace(/\s/g, "");
  
    let esIgual = frase === char2; // Comparamos frase con char2 para ver si son iguales
  
    if (esIgual) {
      resp.textContent = `Las frases son iguales de inicio a fin y de fin a inicio.`;
    } else {
      resp.textContent = `Las frases no son iguales de inicio a fin y de fin a inicio.`;
    }
  }



  //<!-- Presenta la copia de una frase invertida en otra variable
  //ejemplo: frase="hola"   salida="aloh"-->
  
  fraseInvertida() {
    let frase = document.getElementById("datos").value;
    let resp = document.getElementById("resp");
    let char1 = "";
  
    for (let i = frase.length - 1; i >= 0; i--) {
      char1 += frase[i];
    }

    resp.textContent = `La frase invertida es : ${char1}`;
  }



  //<!-- Dada dos frases se crea una tercera en base de las dos
  //ejemplo: frase="Hola "  frase2="que tal"  salida="Hola que tal" -->


  concadenar(){

   let frase1 = document.getElementById("datos").value;
   let frase2 = document.getElementById("datos2").value;
   let resp = document.getElementById("resp");

   let frase3 = "";
   let frase4 = "";

   for (let i = 0; i < frase1.length; i++) {
     frase3 += frase1[i];
    }

   for (let i = 0; i < frase2.length; i++) {
     frase4 += frase2[i];
    }

    let fraseFinal = frase3 + " " + frase4

    resp.textContent = `La frase completa es : ${fraseFinal}`;

  }



  //<!-- Dada una frase y un caracter separador. Se pide pasar esa frase a un arreglo tal como s eindica en el ejemplo 
  //Ejemplo: frase = "20;40;50;60"  caracterSeparador=";" Respuesta=["20","40","50","60"]  -->

  separador(){
    let frase1 = document.getElementById("datos").value;
    let separador = document.getElementById("separador").value;
    let numeros = frase1.split(separador)

    let arreglo = [];

    for (let i = 0; i < numeros.length; i++) {
      arreglo.push(numeros[i]);
    }

    resp.textContent = ` [${arreglo}] `;
  }



}
let cad = new Cadena()
//cad.vocales()
