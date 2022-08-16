function redirekt(id){window.location.href = `kochbuch/rezept.html?id=${id}`;}


fetch("./rezepte.json")
.then(response => {
   return response.json();
})
.then(element => {

    let container=document.querySelector(".container")

    element.forEach(element => {
        let button = document.createElement('div')
        button.setAttribute("onclick", `redirekt(${element.id})`)
        button.classList.add("rezept")

        let img = document.createElement("img")
        let details = document.createElement("div")
        let heading = document.createElement("span")
        let yield = document.createElement("span")
        let cookingTime = document.createElement("span")
        let kcal = document.createElement("span")
        let protein = document.createElement("span")
        let fat = document.createElement("span")

        img.setAttribute("src", element.img)
        heading.innerHTML = element.name
        yield.innerHTML = `Für ${element.yield} Personen`
        cookingTime.innerHTML = `${element.cookingTime}min`
        kcal.innerHTML = `${element.kcal}g`
        protein.innerHTML = `${element.protein}g`
        fat.innerHTML = `${element.fat}g`

        img.classList.add("rezeptImg")
        heading.classList.add("rezeptHeading")
        yield.classList.add("rezeptYield")
        cookingTime.classList.add("rezeptCookingTime")
        kcal.classList.add("rezeptKcal")
        protein.classList.add("rezeptProtein")
        fat.classList.add("rezeptFat")
        details.classList.add("details")



        button.appendChild(img)
        button.appendChild(details)

        details.appendChild(heading)
        details.appendChild(yield)
        details.appendChild(cookingTime)
        details.appendChild(kcal)
        details.appendChild(protein)
        details.appendChild(fat)


        container.appendChild(button)
    });
}
)


