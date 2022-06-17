function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
/*
function main() {
    
    fetch(`https://api.ipify.org?format=json`) // 
        .then(resultat => resultat.json()) // 
        .then(json => {
            const ip = json.ip; //
            
            fetch(`https://ip-api.com/#` + ip)
                
        })
}
*/
const submit = document.querySelector(".submit");

submit.addEventListener("click", async () => {
    console.log("coucou")
    let firstCity = document.querySelector(".ville1").value;
    console.log(firstCity);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${firstCity}&units=metric&appid=8384ea512daba904b5dfb5f71d2dc3c8`)
        .then ((response) => 
            response.json().then((data) => {
                console.log(data);
                const clouds = data.weather[0].description;
                const temp= data.main.temp;
                document.querySelector("#humidity").innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + " %";
                const wind = data.wind.speed;                
           
                
                switch (clouds) {
                    case "clear sky":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-sun'></i>" + clouds;
                        document.body.style.backgroundImage = "url(./src/image/sun.jpg)";
                        break;
                    case "few clouds":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-cloud'></i>" + clouds;
                        document.body.style.backgroundImage = "url(./src/image/nuage.jpg)";
                        break;
                    case "scattered clouds":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-cloud'></i>" + clouds;
                        break;
                    case "broken clouds":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-cloud-showers-heavy'></i>" + clouds;
                        break;
                    case "shower rain":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-cloud-showers-heavy'></i>" + clouds;
                        break;
                    case "rain":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-cloud-rain'></i>" + clouds;
                        break;
                    case "thunderstorm":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-cloud-bolt'></i>" + clouds;
                        break;
                    case "snow":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-snowflake></i>" + clouds;
                        break;
                    case "mist":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-smog'></i>" + clouds;
                        break;
                    case "drizzle":
                        document.querySelector("#clouds").innerHTML = "<i class='fa-solid fa-cloud-showers-heavy'></i>" + clouds;
                        break;
                    default:
                        document.querySelector("#clouds").innerHTML = clouds;
                        break;
                }
                document.querySelector("#temps").innerHTML = "<i class='fa-solid fa-temperature-full'></i>" + Math.round(temp) + " °C";
                document.querySelector("#wind").innerHTML = "<i class='fa-solid fa-wind'></i>" + Math.round(wind*3.6) + " km/h";
            })
            );
    
    

    /*
    
    
    let response1 = await askCity1.json();
    console.log(response1);
    let temperate = response1.main.temp;
    console.log(temperate);
    let weather = response1.weather[0].main;
    console.log(weather);

    // création de la zone température
    let sectionTemp = document.createElement("section");
    console.log("1");
    let main = document.querySelector("main");
    console.log("2");
    main.appendChild(sectionTemp);
    console.log("3");
    let pTemp = document.createElement("p");
    console.log("4");
    sectionTemp.appendChild(ptemp);
    console.log("6");
    pTemp.innerText = temperate; //souci à ce niveau
    console.log("5");
     

    /* récupération de données
    
        const cityName = data.name;
        console.log(cityName);
        const temperate = data.main.temp;
        console.log(temperate);
        const condition = data.wheather[o].main
        console.log(condition);
    }

    console.log(recup);
    console.log(cityName);
    console.log(temperate);
    console.log(condition);
*/
/*
    // création de la zone température
    let sectionTemp = document.createElement("section");
    console.log("1");
    let main = document.querySelector("main");
    console.log("2");
    main.appendChild(sectionTemp);
    console.log("3");
    let pTemp = document.createElement("p");
    console.log("4");
    pTemp.innerText = response1.name; //souci à ce niveau
    console.log("5");
    sectionTemp.appendChild(ptemp);
    console.log("6");   
    */
}
)