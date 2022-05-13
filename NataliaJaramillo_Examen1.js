var horasEmpleado=53;
if(horasEmpleado<=40){
    var horasLaboralesNormales=horasEmpleado*265.00;
    console.log("El total a pagar por horas laborales normal (40hrs) es de: " + horasLaboralesNormales);
    console.log("El total a pagar por horas extra " + "0" + " hrs es de: " + "0");
}else{
    var horasExtra=horasEmpleado-40;
    var horasLaboralesExtra=horasExtra*350.00
    console.log("El total a pagar por horas laborales normal (40hrs) es de: " + "10600");
    console.log("El total a pagar por horas extra " + horasExtra + " hrs es de: " + horasLaboralesExtra);
}
