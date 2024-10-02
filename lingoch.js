function displayWeather(loc, country, time, temp, cond, condImg, feelslike){
    const weatherDisplay = document.createElement("div")
    weatherDisplay.className = "weatherClass"
    const dataDiv = document.createElement("div")
    dataDiv.innerText = `Location: ${loc}\nCountry: ${country}\nTime: ${time}\n`
    const tempDiv = document.createElement("div")
    tempDiv.innerText = "Temperature: "+temp+" C\nFeels like: "+feelslike
    const conditionDiv = document.createElement("div")

    conditionDiv.className = "conditon"
    const textDiv = document.createElement("div")
    textDiv.innerText = cond
    conditionDiv.append(textDiv)

    weatherDisplay.append(dataDiv, tempDiv, conditionDiv)
    return weatherDisplay
}

export default displayWeather