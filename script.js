// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas (string)
//  1.2. population - miesto populiacija (number)
//  1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
//  1.4. touristAttractions - lankytinos vietos (array)
//  1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

let citiesArr = [
  {
    name: "Klaipėda",
    population: 162292,
    location: {
      continent: "Europe",
      country: "Lithuania",
    },
    touristAttractions: ["The Magic Mouse sculpture", "Theatre Square"],
    isCapital: false,
  },
  {
    name: "Vilnius",
    population: 593436,
    location: {
      continent: "Europe",
      country: "Lithuania",
    },
    touristAttractions: [
      "Gediminas Castle Tower",
      "The Cathedral Basilica of St. Stanislaus and St. Ladislaus",
      "The Hill of Three Crosses",
      "MO Museum",
    ],
    isCapital: true,
  },
  {
    name: "Valencia",
    population: 792492,
    location: {
      continent: "Europe",
      country: "Spain",
    },
    touristAttractions: ["City of Arts and Sciences", "Cathedral of Valencia"],
    isCapital: false,
  },
  {
    name: "Barcelona",
    population: 1620343,
    location: {
      continent: "Europe",
      country: "Spain",
    },
    touristAttractions: [
      "Sagrada Familia",
      "Arc de Triomf",
      "Park Güell",
      "Parc de la Ciutadella",
    ],
    isCapital: false,
  },
  {
    name: "Kanbera",
    population: 456692,
    location: {
      continent: "Australia and Oceania",
      country: "Australia",
    },
    touristAttractions: [],
    isCapital: true,
  },
  {
    name: "Sydney",
    population: 5297089,
    location: {
      continent: "Australia and Oceania",
      country: "Australia",
    },
    touristAttractions: ["Sydney Opera House"],
    isCapital: false,
  },
  {
    name: "Berlin",
    population: 3850809,
    location: {
      continent: "Europe",
      country: "Germany",
    },
    touristAttractions: ["The Brandenburg Gate"],
    isCapital: true,
  },
  // {
  //   name: "Dallas",
  //   population: 1304379,
  //   location: {
  //     continent: "North America",
  //     country: "United States",
  //   },
  //   touristAttractions: [],
  //   isCapital: false,
  // },
  {
    name: "San Francisco",
    population: 815201,
    location: {
      continent: "North America",
      country: "United States",
    },
    touristAttractions: [
      "The Palace of Fine Arts",
      "Golden Gate Bridge",
      "Golden Gate Park",
    ],
    isCapital: false,
  },
  {
    name: "Tokyo",
    population: 14094034,
    location: {
      continent: "Asia",
      country: "Japan",
    },
    touristAttractions: ["Shinjuku Gyoen National Garden"],
    isCapital: true,
  },
];

// 1.6. Visus miestų masyvų narius išvesti į konsolę.
// 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
// 1.6.2. Visų miestų populiaciją išvesti į konsolę.
// 1.6.3. Visų miestų žemyną išvesti į konsolę.
// 1.6.4. Visų miestų šalį išvesti į konsolę.
// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.

citiesArr.forEach((city) => {
  console.log(city);
  console.log(city.name);
  console.log(city.population);
  console.log(city.location.continent);
  console.log(city.location.country);
  console.log(city.isCapital);
  console.log(city.touristAttractions);
});

// 2. HTML faile sukurti tuščią div elementą, kuriame bus atvaizduoti visi miestai.
//  2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.

// 3.1. Jeigu miestas yra sostinė, tai:
//  3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
//  3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
//  3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".

// 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
//  4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
//  4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
//  4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.

let citiesMainContainer = document.querySelector("#container");

function getCitiesList() {
  citiesArr.forEach((city) => {
    let name = city.name;
    let population = city.population;
    let continent = city.location.continent;
    let country = city.location.country;
    let isCapital = city.isCapital;
    let touristAttractions = city.touristAttractions;

    let cityCard = document.createElement("div");
    cityCard.classList.add("city-card");
    citiesMainContainer.append(cityCard);

    let capitalText = "";
    let additionalCapitalText = "";
    if (isCapital) {
      cityCard.classList.add("capital");
      capitalText = ` (capital)`;
      additionalCapitalText = `${name} is the capital of ${country}`;
    }

    let cityName = document.createElement("h2");
    cityName.textContent = name + capitalText;

    let cityDescription = document.createElement("p");
    cityDescription.textContent = `${name} city is located in ${continent}, ${country} and has population of ${population} people. ${additionalCapitalText}`;

    let attractionsTitle = document.createElement("h3");
    let attractionsList = document.createElement("ul");
    if (touristAttractions.length > 1) {
      attractionsTitle.textContent = `Main Tourist attractions of ${name} are:`;
    } else if (touristAttractions.length === 1) {
      attractionsTitle.textContent = `Main Tourist attraction of ${name} is:`;
    }

    touristAttractions.forEach((atraction) => {
      let attractionsListItem = document.createElement("li");
      attractionsListItem.textContent = atraction;
      attractionsList.append(attractionsListItem);
    });
    cityCard.append(cityName, cityDescription);

    if (touristAttractions.length > 0) {
      cityCard.append(attractionsTitle, attractionsList);
    }
  });
}

getCitiesList();

// 5. Naudojant tik JavaScript:
//  5.1. Pakeisti visų sostinių teksto spalvą.
//  5.2. Pakeisti kas antro miesto fono spalvą.
//  5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
//  5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

function colorChange() {
  let capitalTitles = document.querySelectorAll(".capital h2");

  capitalTitles.forEach((capitalTitle) => {
    capitalTitle.style.color = "green";
  });

  let allCityCards = document.querySelectorAll(".city-card");
  for (let i = 0; i < allCityCards.length; i += 2) {
    let city = allCityCards[i];
    city.style.backgroundColor = "#E1E1E1";
  }

  let allAtractionsList = document.querySelectorAll(".city-card, ul");
  allAtractionsList.forEach((list) => {
    let atractionItems = list.querySelectorAll("li");

    atractionItems.forEach((item, i) => {
      if (i === 0) {
        item.style.color = "green";
      } else if (i >= 3) {
        item.style.color = "red";
      }
    });
  });
}

colorChange();

// 6. Miestų plotis turi būti 50%.
// 6.1. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%.

function cityWidth() {
  let bodyElement = document.querySelector("body");
  bodyElement.style.margin = "0";

  let allCityCards = document.querySelectorAll(".city-card");

  citiesMainContainer.style.display = "flex";
  citiesMainContainer.style.gap = "30px";
  citiesMainContainer.style.flexWrap = "wrap";
  citiesMainContainer.style.boxSizing = "border-box";

  allCityCards.forEach((card, i) => {
    card.style.padding = "25px 20px";
    card.style.width = "calc(50% - 15px)";
    card.style.boxSizing = "border-box";

    if (i === allCityCards.length - 1 && i % 2 === 0) {
      card.style.width = "100%";
    }
  });
}

cityWidth();
