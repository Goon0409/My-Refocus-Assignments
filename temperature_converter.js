//celsius to kelvin = Celsuis + 273.15
// fahrenheit to kelvim = ((F -32)*5/9)+273.15

function celsiusToKelvin(tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

function fahrenheitToKelvin(tempFahrenheit){

    let tempKelvin = (((tempFahrenheit - 32) * 5) / 9) + 273.15;
    return tempKelvin;
}

console.log(celsiusToKelvin(34));
console.log(fahrenheitToKelvin(26));