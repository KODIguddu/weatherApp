import displayWeather  from "./lingoch.js"


const form = document.querySelector('form')
const searchInput = document.querySelector('#search')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    displayNewLocation(searchInput.value)
})

function apiCall(search){
    return `http://api.weatherapi.com/v1/current.json?key=dc7e71b26a4e408eb7064658240210&q=${search}&aqi=no`
}

function displayNewLocation(search){
    const searchQuery = apiCall(search)
    fetch(searchQuery).then((response)=> response.json()).then((data)=>{

        if(document.querySelector('.weatherClass') != null){
        document.querySelector('.weatherClass').remove()
        }

        console.log(data)
        const newWeather = displayWeather(data.location.name, data.location.country, data.location.localtime, data.current.temp_c, data.current.condition.text,data.current.feelslike_c)
        document.body.appendChild(newWeather)

    })

}
