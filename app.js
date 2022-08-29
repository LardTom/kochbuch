function redirekt(id){sessionStorage.setItem("rezeptID", id);}


fetch("./rezepte.json")
.then(response => {
   return response.json();
})
.then(element => {

    let container=document.querySelector(".container")

    let searchbar = document.querySelector("#tag-search")

    searchbar.addEventListener('input', (event) => {

        let list = document.querySelectorAll(".tag-list")
        
        list.forEach(element => {
            let listItems = element.getElementsByTagName("li")


            let arrayList = []
            
            Array.from(listItems).forEach(element => {
                arrayList.push(element.innerHTML)
            });


            let rezept = element.parentElement.parentElement;


            const includesValue = arrayList.some(element => {
                return element.toLowerCase() === searchbar.value.toLowerCase();
              });

            if (!includesValue && searchbar.value.length != 0) {

                rezept.classList.add("hidden")
                rezept.classList.remove("rezept")
            }else{
                rezept.classList.remove("hidden")
                rezept.classList.add("rezept")
            }
        });

    });



    element.forEach(element => {


        let button = document.createElement('a')
        button.setAttribute("href", "./rezept.html")
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
        let tags = document.createElement("ol")
        

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
        tags.classList.add("tag-list")



        button.appendChild(img)
        button.appendChild(details)

        details.appendChild(heading)
        details.appendChild(yield)
        details.appendChild(cookingTime)
        details.appendChild(kcal)
        details.appendChild(protein)
        details.appendChild(fat)

        details.appendChild(tags)

        for (let j = 0; j < element.tags.length; j++) {
            const item = element.tags[j];
            let tag = document.createElement("li")
            tag.innerHTML=item
            tags.appendChild(tag)
        }

        container.appendChild(button)
    });
}
)


