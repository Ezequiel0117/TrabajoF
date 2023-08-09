class Arreglos{

  regresar(){
    window.history.back()
  }

  //<------------RETURNS-------------->



  ObtenerSumaD(num){
    let sumaDivisores=0
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sumaDivisores = sumaDivisores + i
      }
    }
    return sumaDivisores;
  }


  ObtenerP(num1){
    let c = 0;
    for (let i = 1; i <= num1; i++){
      if (num1 % i === 0){
        c++;
      }
    }
    return c;
  }


  //<----SACAR EL NUMERO MAYOR DE UN ARREGLO ------->
  mayorARR(){
    //24;2;60;5;200
    let datos = document.getElementById("datos").value
    let numeros = datos.split(";")
    let resp = document.getElementById("resp");
    let may = parseInt(numeros[0])

    for (let i = 1 ; i < numeros.length ; i++ ){
        if (may < parseInt(numeros[i])){
            may = parseInt(numeros[i])
        }

    }
    resp.innerHTML = `El numero mayor del arreglo [${numeros}] es: ${may}`
  }



  //<!-- Presenta el elemento menor de un arreglo de numeros -->

  numeroMenor(){
    let num = document.getElementById("num").value;
  
    // Convertir el valor ingresado a un arreglo de números
    let arreglo = num.toString().split('').map(Number);
  
    // Inicializar la variable "menor" con el primer elemento del arreglo
    let menor = arreglo[0];
  
    // Iterar por el arreglo para encontrar el número menor
    for (let i = 1; i < arreglo.length; i++) {
      if (menor > arreglo[i]) {
        menor = arreglo[i];
      }
    }
  
    // Mostrar la respuesta
    document.getElementById("resp").textContent = `El número menor es: ${menor}`;
  }



  //<-------SUMA DIVISORES DE U  ARREGLO----------->
  SumadARR(){
    let datos = document.getElementById("datos").value
    let numeros = datos.split(";")
    let resp = document.getElementById("resp");

    let acu, num=0,resultado=""

    for (let i = 0; i < numeros.length; i++){
        num = parseInt(numeros[i])
        acu = this.ObtenerSumaD(num)

        resultado = resultado + acu + "|"
    }
    resp.innerHTML = `La suma de los divisores del arreglo [${numeros}] es : ${resultado}`
  }


  
  //<--------- SACAR LOS NUMEROS PRIMOS DE UN ARREGLO -------->
  primoARR(){
    let datos = document.getElementById("num").value
    let numeros = datos.split(";")
    let resp = document.getElementById("resp");

    let acu, num=0,resultado=""

    for (let i = 0; i < numeros.length; i++){

        num = parseInt(numeros[i])
        acu = this.ObtenerP(num)


        if(acu === 2){
          resultado = resultado + num + "|"
        } 
    }
    resp.textContent = `Los números primos del arreglo [${numeros}] son: ${resultado}`;
  }



  //<------------ PRESENTAR LOS NUMEROS PERFECTOS DE UN ARREGLO ----------------->
  perfectoARR(){
      let datos = document.getElementById("datos").value
      let numeros = datos.split(";")
      let resp = document.getElementById("resp");

      let acu, num=0,resultado=""

      for (let i = 0; i < numeros.length; i++){

          num = parseInt(numeros[i])
          acu = this.ObtenerSumaD(num)

          if (acu == num){
          resultado = resultado + num + "|"
          }
          
      }
      resp.textContent = `Los números perfectos del arreglo [${numeros}] son: ${resultado}`;
  }



  // <!-- Se ingresa un numero en base 2 y se retorna el numero a base 10
  // ejemplo= numBase10="5"   respBase2="101" -->

  base10_2() {
    const valor = parseInt(document.getElementById("datos").value);
    const resp = document.getElementById("resp");
    let base2 = "";

    if (valor === 0) {
        resp.textContent = "La representación en base 2 es: 0";
    } else {
        let num = Math.abs(valor);

        for (num; num > 0; num = Math.floor(num / 2)) {
            let res = num % 2;
            base2 = res.toString() + base2;
        }

        if (valor < 0) {
            base2 = "-" + base2;
        }

        resp.textContent = `La representación en base 2 es: ${base2}`;
      }
  }




  // <!-- Se ingresa un numero en base 2 y se retorna el numero a base 10
  // ejemplo= numBase2="101"   respBase10="5" -->
  base2_10() {
    const valor = document.getElementById("datos").value;
    const resp = document.getElementById("resp");

    let base10 = 0;

    // Convertir el número en base 2 a base 10
    for (let i = valor.length - 1; i >= 0; i--) {
        if (valor[i] === "1") {
            base10 += 2 ** (valor.length - 1 - i);
        }
    }

    resp.textContent = `La representación en base 10 es: ${base10}`;
  }



  //<!-- Dada un arreglo y un dato a eliminar en un arreglo.
  //Se pide eliminiar el dato en el arreglo a partir de la posicion encontrada
  //Ejemplo: arreglo = [20,40,60]  datoEliminar=40  
  //respuesta=[20,60] -->

  eliminar() {
    const valor = document.getElementById("datos").value
    let numeros = valor.split(";")
    const eliminar = parseInt(document.getElementById("eliminar").value);
    const resp = document.getElementById("resp");

    let nuevoArreglo = [];

    for (let i = 0; i < numeros.length; i++) {
        let num = parseInt(numeros[i]);

            // Verificar si es un número válido
            if (eliminar !== num) {
                nuevoArreglo.push(num);

        }
    }

    resp.textContent = `El nuevo arreglo es: [${nuevoArreglo.join(", ")}]`;
  }



  // <!-- Dada un arreglo y un dato a insertar en una posicion del arreglo.
  // Se pide insertar el dato en el arreglo a partir de la posicion de indicada
  // Ejemplo: arreglo = [20,40,60]  datoInsertar=50 posicionInidicada=2 
  // respuesta=[20,40,50,60] -->

  insertar() {
    const valor = document.getElementById("datos").value;
    let numeros = valor.split(";");
    const insertar = parseInt(document.getElementById("insertar").value);
    const posicion = parseInt(document.getElementById("posicion").value);
    const resp = document.getElementById("resp");

    let nuevoArreglo = [];

    
    for (let i = 0; i < numeros.length; i++) {
        if (!isNaN(numeros[i])) { // Verificar si es un número válido
          nuevoArreglo.push(parseInt(numeros[i]));
        }
    }

    // Verificamos si la posición es válida
    if (posicion < 0 || posicion > nuevoArreglo.length) {
      resp.textContent = "La posición especificada no es válida.";
      return;
    }

    // Insertamos el valor en la posición especificada
    let arregloFinal = [];

    for (let i = 0; i < nuevoArreglo.length; i++) {

      if (i === posicion) {
        arregloFinal.push(insertar);
      }
      
      arregloFinal.push(nuevoArreglo[i]);
    }

    resp.textContent = `El nuevo arreglo es: [${arregloFinal.join(", ")}]`;
  }




  // <!-- Dado un arreglo y elemento a buscar. Se pide presentar la posicion
  // del elemento buscado en el arreglo
  // Ejemplo: arreglo=[20,40,60,80] buscado=60 respuesta=2 -->

  buscarPosicion() {
    const valor = document.getElementById("datos").value;
    const buscarNumero = parseInt(document.getElementById("buscar").value);
    const resp = document.getElementById("resp");

    let numeros = valor.split(";").map((num) => parseInt(num));

    let posicion = -1;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === buscarNumero) {
            posicion = i;
            break;
        }
    }

    if (posicion !== -1) {
        resp.textContent = `El número ${buscarNumero} se encuentra en la posición ${posicion}.`;
    } else {
        resp.textContent = `El número ${buscarNumero} no se encuentra en el arreglo.`;
    }
  }



  // <!-- Generar con random un arreglo de 100 numeros enteros. Se pide presentar la posicion
  // ingresar un numero a adivinar si lo encuentra presenta un mensaje
  // de adivinaste caso contrario error no adivinaste -->


  adivinarNumero(){
    let numero = parseInt(document.getElementById("num1").value);
    let resp= document.getElementById("resp");
    let arr=[];
      for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 1000) + 1);
      }

      let encontrado = false;
      let pos = -1;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numero) {
          encontrado = true;
          pos = i; // Actualizamos pos con la posición en la que se encontró el número.
          break;
        }
      }
      let arregloTexto = "Arreglo: [ " + arr.join(", ") + " ]";
      if (encontrado) {
        resp.innerHTML = `${arregloTexto} <br> ¡Adivinaste! El número ${numero} se encuentra en la posición ${pos}.`;
      } else {
        resp.innerHTML = `Error, no adivinaste. El número ${numero} no está en el arreglo.<br>${arregloTexto}`;
      }
        
  }



  // <!-- Dado un arreglo de nombres presentar cada nombre al revez -->
  nombresAl() {
    const valor = document.getElementById("datos").value;
    let nombres = valor.split(";");
    const resp = document.getElementById("resp");
    let arregloInv = [];

    for (let i = 0; i < nombres.length; i++) {
      let nombreAlReves = "";

      // Recorrer cada nombre al revés y construir el nombre invertido
      for (let j = nombres[i].length - 1; j >= 0; j--) {
        nombreAlReves += nombres[i][j];
      }

      arregloInv.push(nombreAlReves);
    }

    // Mostrar los nombres invertidos separados por ;
    resp.textContent = arregloInv.join(";");
  }




  //<!-- se ingresa varios numeros en un arreglo y se pide el promedio de todos ellos -->
  //<!-- Dado un arreglo de numeros presenta el promedio de los elementos -->
  promedio() {
    let datos = document.getElementById("datos").value;
    let numeros = datos.split(";");
    let suma = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      // Convertir cada elemento del arreglo a número usando parseFloat
      let numero = parseFloat(numeros[i]);
      suma += numero;
    }
  
    let promedio = suma / numeros.length;
    let resp = document.getElementById("resp");
    resp.textContent = `El promedio del arreglo [${numeros}] es: ${promedio.toFixed(2)}`;
  }




  //<!-- dado un arreglo de empleados se pide el promedio de los sueldos
  //donde el sueldo=valorHora*numeroHoras.
  //empleados=[
  //   {nombre:"ana",vh:5,nh:40},
  //   {nombre:"ana",vh:10,nh:40},
  //   {nombre:"ana",vh:2,nh:40}
  // ]
  // respuesta=(5*40+10*40+2*40)/3 -->
  calcularPromedio(){
    let empleadosStr = document.getElementById("empleados").value;
    let empleadosArray = empleadosStr.split(';');

    //ejemplo
    //{"nombre": "ana", "vh": 2, "nh": 40};{"nombre": "ana", "vh": 10, "nh": 40};{"nombre": "ana", "vh": 5, "nh": 40}

    let empleados = [];
    
    for (let empleadoStr of empleadosArray) {
        let empleado = JSON.parse(empleadoStr.trim());
        empleados.push(empleado);
    }

    let totalSueldos = 0;

    for (let empleado of empleados) {
        let sueldo = empleado.vh * empleado.nh;
        totalSueldos += sueldo;
    }

    let promedioSueldos = totalSueldos / empleados.length;

    promedioSueldos = promedioSueldos.toFixed(2)

    let respuesta = document.getElementById("resp");
    respuesta.textContent = `El promedio de sueldos es: ${promedioSueldos}`;
  }



  //<!-- dado un arreglo y un nnumero indicar cuantas veces se repite el numero
  //Ejemplo: arreglo=[40,20,30,20,20,10]  numero=20   resp=3 -->

  repetidoARR() {
  const valores = document.getElementById("num").value;
  const numero = document.getElementById("num2").value;
  const numeros = valores.split(";");

  // ejemplo: 1;2;4;3;3;2;3  resp = 3 veces el numero 3
  let c = 0;

  for (let i = 0; i < numeros.length; i++) {

    if (numero === numeros[i]) { 
      c++;
    }
  }

  let resp = document.getElementById("resp");
  resp.textContent = `El numero ${numero} esta repetido dentro del arreglo ${c} veces`;
  }



  // <!-- Dado un costo y su pago presentar el vuelto en la minima cantidad de billetes
  //  billetes: 1,5,10,20,50 hasta 99
  //    Ejemplo:70.50  respuesta="1 billete de 50, 1 billete de 20 y 50 centavos" -->
  vuelto() {
  const costo = parseFloat(document.getElementById("costo").value);
  const pago = parseFloat(document.getElementById("pago").value);
  let vuelto = pago - costo;
  let vuetltoB = [50, 20, 10, 5, 1]; // Ordenados de mayor a menor denominación
  let cambio = [];

  for (let i = 0; i < vuetltoB.length; i++) {
    let denominacion = vuetltoB[i];
    let cantidadB = Math.floor(vuelto / denominacion);

    if (cantidadB > 0) {
      cambio.push(`${cantidadB} billete ${cantidadB > 1 ? 's' : ''} de ${denominacion}`);
      vuelto -= cantidadB * denominacion;
    }
  }

  // Agregar los centavos restantes si es necesario
  if (vuelto > 0) {
    cambio.push(`${vuelto.toFixed(2)} centavos`);
  }

  let resp = document.getElementById("resp");
  resp.innerHTML = `El vuelto es: ${cambio.join(", ")}`;
  }

}
const arr = new Arreglos()
//arr.arreglos()
