
const colores = {
    frio: "#98FFE4",
    ambiente: "#99FF26",
    calor: "#FF6969"
}

const buscar = ()=>{
    let city = document.getElementById("input_city");
    obtenerClima(city.value);
}


const obtenerClima = (city)=>{
    let m_error = document.getElementById("mes_error");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7807a77ffa1215ccad16e3372bcea1de`)
        .then(data => data.json())
        .then(response =>{
            if(response.cod == '404'){
                m_error.innerHTML = "Ciudad no encontrada";
            }else{
                m_error.innerHTML = "";
                defIcon(response);
                defWeather(response);
            }
        })
}

const defWeather = (data) => {
    let city = document.getElementById("main_weather");
    city.innerHTML = data.weather[0].main;
    let description = document.getElementById("description");
    description.innerHTML = data.weather[0].description;
    defTemp(data);
}

const defTemp = (data) => {
    let temp = document.getElementById("temp");
    let t = Number(data.main.temp-273.15).toFixed(2);
    temp.innerHTML = `Temperatura: ${t} C°`;
    if(t<5)
        temp.style.backgroundColor = colores.frio;
    else if(t>5 && t<30)
        temp.style.backgroundColor = colores.ambiente;
    else
        temp.style.backgroundColor = colores.calor;
}

const defIcon = (data) =>{
    let icon = document.getElementById("icon");
    switch(data.weather[0].main){
        case "Thunderstorm":
            icon.setAttribute("src","animated/thunder.svg");
            break;
        case "Clouds":
            icon.setAttribute("src","animated/cloudy.svg");
            break;
        case "Drizzle":
            icon.setAttribute("src","animated/rainy-4.svg");
            break;
        case "Rain":
            icon.setAttribute("src","animated/rainy-6.svg");
            break;
        case "Snow":
            icon.setAttribute("src","animated/snowy-6.svg");
            break;
        case "Clear":
            icon.setAttribute("src","animated/day.svg");
            break;
        case "Atmosphere":
            icon.setAttribute("src","animated/weather.svg");
            break;
        default:
            icon.setAttribute("src","animated/cloudy-day-1.svg");
            break;
    }
}