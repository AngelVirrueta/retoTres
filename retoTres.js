const hoy = new Date();
let day = hoy.getDay();
let hour = hoy.getHours();


// dias laborables 1-5.
// horas laborables 9-18 hrs


function businessHours (hour) {
    let horaHabil = "";
    horaHabil = (hour >= 9 && hour < 18) ? true : false;
    return horaHabil;  
}

function businessDay (day) {
    let diaHabil = "";
    diaHabil = (day == 6 || day == 0) ? false : true;
    return diaHabil;
}

console.log("Hora hábil: " + businessHours(hour) + ".");
console.log("Día hábil: " + businessDay(day) + ".");

function horarioLaboral(){
    let msg = "";
    msg = (businessHours(hour) == true && businessDay(day) == true) ? "Estás en día y hora hábil. Órale, a desquitar el sueldo." : "No estás en día y/o hora laborables. Vete a casa.";
    return msg;
}
console.log(horarioLaboral());



