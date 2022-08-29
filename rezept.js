


fetch("./rezepte.json")
.then(response => {
   return response.json();
})
.then(element => {

    let rezeptID = sessionStorage.getItem("rezeptID")

  
    let name= document.querySelector("#name")
    let tags= document.querySelector("#tags")
    let author= document.querySelector("#author")
    let yield= document.querySelector("#yield")
    let prepTime= document.querySelector("#prepTime")
    let kcal= document.querySelector("#kcal")
    let protein= document.querySelector("#protein")
    let fat= document.querySelector("#fat")
    let ingredients= document.querySelector("#ingredients")
    let steps= document.querySelector("#steps")
    let heroImg = document.querySelector("#rezeptHeroimg")
    

    element.forEach(rezept => {
        
        if (rezept.id == rezeptID) {

        document.title= rezept.name

        name.innerHTML = rezept.name

        heroImg.setAttribute("src", rezept.img)

        author.innerHTML = rezept.author
        yield.innerHTML = rezept.yield
        prepTime.innerHTML = `${rezept.cookingTime}min`
        kcal.innerHTML = `${rezept.kcal}kcal`
        protein.innerHTML = `${rezept.protein}g Protein`
        fat.innerHTML = `${rezept.fat}g Fett`

        kcal.classList.add("nutrition")
        protein.classList.add("nutrition") 
        fat.classList.add("nutrition") 

        tags.classList.add("tag-list")
        for (let j = 0; j < rezept.tags.length; j++) {
            const item = rezept.tags[j];
            let tag = document.createElement("li")
            tag.innerHTML=item
            tags.appendChild(tag)
        }


        let amount = rezept.ingredientsAmount
        let type = rezept.ingredientsType

        for (let i = 0; i < amount.length; i++) {
            const element = amount[i];

            let ingredientRow = document.createElement("tr")
            let ingredient1 = document.createElement("td")
            let ingredient2 = document.createElement("td")

            ingredient1.innerHTML = element
            ingredient2.innerHTML = type[i]

            ingredientRow.appendChild(ingredient1)
            ingredientRow.appendChild(ingredient2)

            ingredients.appendChild(ingredientRow)

        }

        for (let j = 0; j < rezept.step.length; j++) {
            const StepElement = rezept.step[j];
            let stepWrapper = document.createElement('li')
            stepWrapper.innerHTML = StepElement
            console.log(StepElement);
            steps.appendChild(stepWrapper)
        }

        }
    });
    
});