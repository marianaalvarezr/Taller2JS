//1.	Pide al usuario un número y determina si es par o impar y si es positivo o negativo.
//anidada
/*var numero = parseInt(prompt("Digite un numero"));
if(numero >0){
    if(numero % 2 == 0){
        document.write("el " + numero +  " es positivo par");
     }else{
        document.write("el " + numero +  " es positivo impar");
     }
}else if(numero < 0){
    if(numero % 2 == 0){
        document.write("el " + numero +  " es negativo par");
     }else{
        document.write("el " + numero +  " es negativo impar");
     }
}else{
    document.write("El " + numero + " es neutro");
}
//compuesta
if(numero >0 && numero % 2 == 0 ){
    document.write("el " + numero +  " es positivo par");
}else if (numero >0 && numero % 2 != 0){
    document.write("el " + numero +  " es positivo impar");
}else if (numero < 0 && numero % 2 == 0){
    document.write("el " + numero +  " es negativo par");
}else if (numero < 0 && numero % 2 != 0){
    document.write("el " + numero +  " es negativo impar");
}else{
    document.write("El " + numero + " es neutro");
}*/
//2.	Pide al usuario dos números y determina cual es el número mayor y cual es el menor.
/*var numero1 = parseInt(prompt("Digite un numero 1"));
var numero2 = parseInt(prompt("Digite un numero 2"));

if (numero1>numero2){
    document.write("El numero " + numero1 + " es mayor que el numero " + numero2);
}else if (numero1<numero2){
    document.write("El numero " + numero2 + " es mayor que el numero " + numero1);
}*/
/*3.	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente para saber cuál es el dia de la semana correspondiente al número digitado*/

/*var numero = parseInt(prompt("Ingrese un número del 1 al 7:"));


var diaSemana;

switch (numero) {
  case 1:
    diaSemana = "Lunes";
    break;
  case 2:
    diaSemana = "Martes";
    break;
  case 3:
    diaSemana = "Miércoles";
    break;
  case 4:
    diaSemana = "Jueves";
    break;
  case 5:
    diaSemana = "Viernes";
    break;
  case 6:
    diaSemana = "Sábado";
    break;
  case 7:
    diaSemana = "Domingo";
    break;
  default:
    diaSemana = "Número inválido";
    break;
}

// Mostrar el resultado
console.log("El número " + numero + " corresponde al día de la semana: " + diaSemana);*/

/*Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. (Si la edad es menor de 18 es adolente), (si la edad está en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor). 
Mostrar en pantalla la etapa de la persona.*/
/*var edad = parseInt(prompt("Digite su edad"));
if (edad<18){
    document.write ("Usted es adolescente");
}else if (edad>=18 && edad<=28){
    document.write ("Usted es adulto adolescente");
}else if (edad>=29 && edad<=49){
    document.write ("Usted es adulto");
}else{
    document.write ("Usted es adulto mayor")
}*/
/*Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total.*/
/*var producto1 = parseInt(prompt("Digite el valor del producto 1"));
var producto2 = parseInt(prompt("Digite el valor del producto 2"));
var producto3 = parseInt(prompt("Digite el valor del producto 3"));
var total = producto1 + producto2 + producto3;
var mediodepago = parseInt(prompt("Digite el medio de pago: 1 para efectivo, 2 para cupon, 3 para credito"));

if(mediodepago==1){
    var totalapagar= total
    document.write ("El valor a pagar es: $" + totalapagar);
}else if(mediodepago==2){
    var totalapagar= total -(total * 0.03) 
    document.write ("El valor a pagar es: $" + totalapagar);
}else if(mediodepago==3){
    var totalapagar= (total * 0.05) + total
    document.write ("El valor a pagar es: $" + totalapagar);
}else{
    document.write ("la opción no es válida");
}*/
/*Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumnos según su promedio: 
*  menos 2,0 = Malo
*  menos 2,9 = Debe recuperar
* entre 3 – 3,9 = Regular.
* entre 4 – 4,4 = Bueno.
* entre 4,5 – 5 = Muy bueno.
*/
/*var nota1 = parseFloat(prompt("Digite el valor de la nota 1"));
var nota2 = parseFloat(prompt("Digite el valor de la nota 2"));
var nota3 = parseFloat(prompt("Digite el valor de la nota 3"));
var promedio = (nota1+nota2+nota3)/3;
if (promedio<2.0){
    document.write("Malo");
}else if (promedio>=2.0 && promedio<=2.9){
    document.write("Debe recuperar");
}else if (promedio>=3.0 && promedio<=3.9){
    document.write("Regular");
}else if (promedio>=4.0 && promedio<=4.4){
    document.write("Bueno");
}else{
    document.write("Muy bueno");
}*/
/*Calcula la edad actual de una persona a partir de su fecha de nacimiento.
Los datos a pedir son: día, mes y año de nacimiento.
*/
/*var nombre= prompt("Ingrese su nombre")
var diaNacimiento = parseInt(prompt("Ingrese el día de nacimiento:"));
var mesNacimiento = parseInt(prompt("Ingrese el mes de nacimiento (en numero):"));
var añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

var mesActual= parseInt(prompt("Ingrese el mes de actual:"));
var dia=parseInt(prompt("Ingrese el mes de nacimiento:"));
var añoActual = parseInt(prompt("Ingrese el año de actual:"));


var cumpleanos = (añoActual - añoNacimiento);
if (mesActual<mesNacimiento || (mesActual==mesNacimiento && dia<diaNacimiento)){
    document.write ("Su edad es : " +(edad-1));
}
else {
    document.write("Su edad es : " +edad);
}*/

/*Calcula cuánto se debe pagar por costos de hospitalización en la clínica Me Muero según los siguientes datos:
* Mostrar en pantalla días de hospitalización del paciente
*Valor dia según su edad
*Valor del recargo y total a pagar
*/


var diashospitalización = parseInt(prompt("Ingrese cuantos dias estuvo hospitalizado el paciente"));
var edad=parseInt(prompt("Ingrese su edad"));
if (edad <=10){
    if(diashospitalización<=1){
        var costodia=20000
        var totalapagar= costodia*diashospitalización;
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>");
        document.write("El valor total a pagar es de: " + totalapagar);
    }else if(diashospitalización>2 &&  diashospitalización<=4){
        var costodia=30000
        var totalapagar= costodia*diashospitalización;
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>");
        document.write("El valor total a pagar es de: " + totalapagar);
    }else if(diashospitalización>=5 &&  diashospitalización<=7){
        var costodia=25000
        var totalsincargo= costodia*diashospitalización;
        var sobrecargo=0.05;
        var valorSobrecargo= totalsincargo*sobrecargo;
        var totalapagar= totalsincargo + valorSobrecargo;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + valorSobrecargo +"<br>");
        document.write("El valor total a pagar es de: " + totalapagar);
    }else{
        var costodia=15000
        var totalsincargo= costodia*diashospitalización;
        var sobrecargo=0.10;
        var valorSobrecargo= totalsincargo*sobrecargo;
        var totalapagar= totalsincargo + valorSobrecargo;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + valorSobrecargo +"<br>");
        document.write("El valor total a pagar es de: " + totalapagar);
    }
}else if (edad >= 11 && edad <= 17){
    if(diashospitalización<=1){
        var costodia=20000
        var totalapagar= costodia*diashospitalización;
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>");
        document.write("El valor total a pagar es de: " + totalapagar);
    }else if(diashospitalización>2 &&  diashospitalización<=4){
        var costodia=30000
        var totalapagar= costodia*diashospitalizacion;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>");
        document.write("El valor total a pagar es de: " + totalapagar);
    }else if(diashospitalización>=5 &&  diashospitalización<=7){
        var costodia=25000
        var totalapagar= costodia*diashospitalización;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>");
        document.write("El valor total a pagar es de: " + totalapagar);
    }else{
        var costodia=15000
        var totalsincargo= costodia*diashospitalización;
        var sobrecargo=0.10;
        var valorSobrecargo= totalsincargo*sobrecargo;
        var totalapagar= totalsincargo + valorSobrecargo;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + valorSobrecargo +"<br>");
        document.write("El valor total a pagar es de: " + totalapagar);
    }
}else if (edad >= 18 && edad <= 49){
    if(diashospitalización<=1){
        var costodia=20000
        var totalapagar= costodia*diashospitalización;
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>")
        document.write("El valor total a pagar es de: " + totalapagar)
    }else if(diashospitalización>=2 &&  diashospitalización<=4){
        var costodia=30000
        var totalapagar= costodia*diashospitalización;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>")
        document.write("El valor total a pagar es de: " + totalapagar)
    }else if(diashospitalización>=5 &&  diashospitalización<=7){
        var costodia=25000
        var totalapagar= costodia*diashospitalización;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>")
        document.write("El valor total a pagar es de: " + totalapagar)
    }else{
        var costodia=15000
        var totalsincargo= costodia*diashospitalización;
        var sobrecargo=0.15;
        var valorSobrecargo= totalsincargo*sobrecargo;
        var totalapagar= totalsincargo + valorSobrecargo
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + valorSobrecargo +"<br>")
        document.write("El valor total a pagar es de: " + totalapagar)
    }
}else{
    if(diashospitalización<=1){
        var costodia=20000
        var totalapagar= costodia*diashospitalización;
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>")
        document.write("El valor total a pagar es de: " + totalapagar)
    }else if(diashospitalización>2 &&  diashospitalización<=4){
        var costodia=30000
        var totalapagar= costodia*diashospitalización;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        var sobrecargo=0;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + sobrecargo +"<br>")
        document.write("El valor total a pagar es de: " + totalapagar)
    }else if(diashospitalización>=5 &&  diashospitalización<=7){
        var costodia=25000
        var totalsincargo= costodia*diashospitalización;
        var sobrecargo=0.15;
        var valorSobrecargo= totalsincargo*sobrecargo;
        var totalapagar= totalsincargo + valorSobrecargo;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + valorSobrecargo +"<br>")
        document.write("El valor total a pagar es de: " + totalapagar)
    }else{
        var costodia=15000
        var totalsincargo= costodia*diashospitalización;
        var sobrecargo=0.20;
        var valorSobrecargo= totalsincargo*sobrecargo;
        var totalapagar= totalsincargo + valorSobrecargo;
        document.write("Los días que estuvo hospitalizado el paciente fueron: " + diashospitalización +"<br>");
        document.write("El valor de su sobrecargo es de: " + valorSobrecargo +"<br>")
        document.write("El valor total a pagar es de: " + totalapagar)
    }
}

