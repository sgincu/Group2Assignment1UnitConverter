/**
 * Name: Rajat sharma, apurva patel, nguyen minh hieu pham, sergiu gincu
 * Date: june 4,2024
 * Program Description: This script handles unit conversions between metric and imperial units.
 * It includes functions for converting weight, distance, and temperature values.
 * Users can input single values or arrays of values to get the converted results.
 */
 
// Functions for converting units

function convertKmToMi(kilometers) {
    return kilometers * 0.621371;
}

function convertMiToKm(miles) {
    return miles / 0.621371;
}

function convertLbsToKg(pounds) {
    return pounds * 0.453592;
}

function convertKgToLbs(kilograms) {
    return kilograms / 0.453592;
}

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function convertUnits(startingUnit, endingUnit, value) {
    const conversionKey = `${startingUnit}-${endingUnit}`;
    const conversions = {
        'km-mi': convertKmToMi,
        'mi-km': convertMiToKm,
        'lbs-kg': convertLbsToKg,
        'kg-lbs': convertKgToLbs,
        'celsius-fahrenheit': convertCelsiusToFahrenheit,
        'fahrenheit-celsius': convertFahrenheitToCelsius
    };

    return conversions[conversionKey] ? conversions[conversionKey](value) : 'Invalid units';
}
// handle tab switching
document.getElementById('weight-tab').addEventListener('click', () => {
    document.getElementById('weight-form').classList.remove('hidden');
    document.getElementById('distance-form').classList.add('hidden');
    document.getElementById('temperature-form').classList.add('hidden');
});

document.getElementById('distance-tab').addEventListener('click', () => {
    document.getElementById('weight-form').classList.add('hidden');
    document.getElementById('distance-form').classList.remove('hidden');
    document.getElementById('temperature-form').classList.add('hidden');
});

document.getElementById('temperature-tab').addEventListener('click', () => {
    document.getElementById('weight-form').classList.add('hidden');
    document.getElementById('distance-form').classList.add('hidden');
    document.getElementById('temperature-form').classList.remove('hidden');
});
//handle weight conversion
document.getElementById('convert-weight').addEventListener('click', () => {
    const input = document.getElementById('weight-input').value.split(',').map(Number);
    const conversionType = document.getElementById('weight-conversion-type').value;
    const results = input.map(value => {
        if (conversionType === 'lbToKg') {
            return `${value} lbs is equal to ${convertUnits('lbs', 'kg', value).toFixed(2)} kg`;
        } else {
            return `${value} kg is equal to ${convertUnits('kg', 'lbs', value).toFixed(2)} lbs`;
        }
    });
    document.getElementById('weight-result').textContent = results.join('\n');
});
//handle distance conversion
document.getElementById('convert-distance').addEventListener('click', () => {
    const input = document.getElementById('distance-input').value.split(',').map(Number);
    const conversionType = document.getElementById('distance-conversion-type').value;
    const results = input.map(value => {
        if (conversionType === 'milesToKm') {
            return `${value} miles is equal to ${convertUnits('mi', 'km', value).toFixed(2)} km`;
        } else {
            return `${value} km is equal to ${convertUnits('km', 'mi', value).toFixed(2)} miles`;
        }
    });
    document.getElementById('distance-result').textContent = results.join('\n');
});
//handle temperature convertion
document.getElementById('convert-temperature').addEventListener('click', () => {
    const input = document.getElementById('temperature-input').value.split(',').map(Number);
    const conversionType = document.getElementById('temperature-conversion-type').value;
    const results = input.map(value => {
        if (conversionType === 'cToF') {
            return `${value} °C is equal to ${convertUnits('celsius', 'fahrenheit', value).toFixed(0)} °F`;
        } else {
            return `${value} °F is equal to ${convertUnits('fahrenheit', 'celsius', value).toFixed(0)} °C`;
        }
    });
    document.getElementById('temperature-result').textContent = results.join('\n');
});
