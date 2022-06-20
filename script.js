const submit = document.querySelector(".submit"); 

// Quand submit est cliqué
submit.addEventListener("click", async () => { 
    let firstCity = document.querySelector(".ville1").value;

    // On récupère la ville de départ et lance la recherche des informations
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${firstCity}&units=metric&appid=8384ea512daba904b5dfb5f71d2dc3c8`)
        .then ((response) => 
            response.json().then((data) => {
                console.log(data);
                const clouds = data.weather[0].description;
                const temp= data.main.temp;
                const wind = data.wind.speed;
                
                // lancement de la fonction pour afficher les icons
                const icon = data.weather[0].icon;
                const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                const image = document.createElement("img");
                image.src = url;
                document.querySelector("#icons").appendChild(image);
                
                // Choix des background en fonction de la description du temps
                switch (clouds) {
                    case "clear sky":
                        document.body.style.backgroundImage = "url(./src/image/sun.jpg)";
                        break;
                    case "few clouds":
                        document.body.style.backgroundImage = "url(./src/image/nuage.jpg)";
                        break;
                    case "scattered clouds":
                        document.body.style.backgroundImage = "url(./src/image/nuages_eparpilles.jpg)";
                        break;
                    case "broken clouds":
                        document.body.style.backgroundImage = "url(./src/image/broken_clouds.jpg)";
                        break;
                    case "shower rain":
                        document.body.style.backgroundImage = "url(./src/image/shower_rain.jpg)";
                        break;
                    case "rain":
                        document.body.style.backgroundImage = "url(./src/image/rain.jpg)";
                        break;
                    case "thunderstorm":
                        document.body.style.backgroundImage = "url(./src/image/rain.jpg)";
                        break;
                    case "snow":
                        document.body.style.backgroundImage = "url(./src/image/snow.jpg)";
                        break;
                    case "mist":
                        document.body.style.backgroundImage = "url(./src/image/mist.jpg)";
                        break;
                    case "drizzle":
                        document.body.style.backgroundImage = "url(./src/image/drizzle.jpg)";
                        break;
                    default:
                        document.body.style.backgroundImage = "url(./src/image/nuage.jpg)";
                        break;
                }

                // Affichage des informations demandées (température, vent et humidité)
                document.querySelector("#temps").innerHTML = "<i class='fa-solid fa-temperature-full'></i>" + Math.round(temp) + "° C ";
                document.querySelector("#humidity").innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + " % ";
                document.querySelector("#wind").innerHTML = "<i class='fa-solid fa-wind'></i>" + Math.round(wind*3.6) + " km/h ";

            // lancement de la recherche des informations pour les 5 jours à venir
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${firstCity}&units=metric&appid=8384ea512daba904b5dfb5f71d2dc3c8`)
                .then ((response) => 
                    response.json().then((data) => {
                console.log(data);
                const clouds1 = data.list[7].main.temp;
                const icon1 = data.list[7].weather[0].icon;
                const url1 = `http://openweathermap.org/img/wn/${icon1}@2x.png`;
                img1.src = url1;
                const day1 = new Date
                day1.setTime(day1.getTime() + 24 * 3600 * 1000);
                document.querySelector("#days1").innerHTML = day1.getDate() + " / " + day1.getMonth();
                const clouds2 = data.list[15].main.temp;
                const icon2 = data.list[15].weather[0].icon;
                const url2 = `http://openweathermap.org/img/wn/${icon2}@2x.png`;
                img2.src = url2;
                const day2 = new Date
                day2.setTime(day2.getTime() + 48 * 3600 * 1000);
                document.querySelector("#days2").innerHTML = day2.getDate() + " / " + day2.getMonth();
                const clouds3 = data.list[23].main.temp;
                const icon3 = data.list[23].weather[0].icon;
                const url3 = `http://openweathermap.org/img/wn/${icon3}@2x.png`;
                img3.src = url3;
                const day3 = new Date
                day3.setTime(day3.getTime() + 72 * 3600 * 1000);
                document.querySelector("#days3").innerHTML = day3.getDate() + " / " + day3.getMonth();
                const clouds4 = data.list[31].main.temp;
                const icon4 = data.list[31].weather[0].icon;
                const url4 = `http://openweathermap.org/img/wn/${icon4}@2x.png`;
                img4.src = url4;
                const day4 = new Date
                day4.setTime(day4.getTime() + 96 * 3600 * 1000);
                document.querySelector("#days4").innerHTML = day4.getDate() + " / " + day4.getMonth();
                const clouds5 = data.list[39].main.temp;
                const icon5 = data.list[39].weather[0].icon;
                const url5 = `http://openweathermap.org/img/wn/${icon5}@2x.png`;
                img5.src = url5;
                const day5 = new Date
                day5.setTime(day5.getTime() + 120 * 3600 * 1000);
                document.querySelector("#days5").innerHTML = day5.getDate() + " / " + day5.getMonth();
                
                // Affichage de la température pour les 5 jours à venir
                document.querySelector("#cloud1").innerHTML = Math.round(clouds1) + "° C ";
                document.querySelector("#cloud2").innerHTML = Math.round(clouds2) + "° C ";
                document.querySelector("#cloud3").innerHTML = Math.round(clouds3) + "° C ";
                document.querySelector("#cloud4").innerHTML = Math.round(clouds4) + "° C ";
                document.querySelector("#cloud5").innerHTML = Math.round(clouds5) + "° C ";
                
                // changement de style pour le titre et input
                document.querySelector("h1").style.color = "#000000";
                document.querySelector("input").style.backgroundColor = "#ffffff";
            }))
        })
    )
});
