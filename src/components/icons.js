

const Icons = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon = 'icons/thunderstorms-rain.svg'
            console.log("tormenta")
            break;
        case 'Drizzle':
            icon = 'icons/drizzle.svg'
            console.log('Drizzle');
            break;
        case 'Rain':
            icon = 'icons/rain.svg'
            console.log("Rain");
            break;
        case 'Snow':
            icon = 'icons/snow.svg'
            console.log('Snow');
            break;
        case 'Clear':
            icon = 'icons/clear-day.svg'
            console.log('Clear');
            break;
        case 'Atmosphere':
            icon = 'icons/weather.svg'
            console.log('Atmosphere');
            break;
        case 'Clouds':
            icon = 'icons/cloudy.svg'
            console.log('Cloudy');
            break;
        case 'Fog':
            icon = 'icons/fog.svg'
            console.log('Fog');
            break;
        case 'Haze':
            icon = 'icons/haze.svg'
            console.log('Haze');
            break;
        case 'Smoke':
            icon = 'icons/smoke.svg'
            console.log('Smoke');
            break;
        default:
            icon = 'icon/clear-day.svg'
            console.log('Clear');
            break;
    }
    return icon
}

export default Icons
