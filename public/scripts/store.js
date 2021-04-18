
$(document).ready(function(){
    dailySpecial();

    buildCategories();
});

function dailySpecial(){
    var data = [];
    var dailySpecialImage = [];
    var dailySpecialName = [];
    var dailySpecialInstructions = [];

    for (let i = 0; i < 3; i++){ 
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then((json) => {
            data[i] = json.meals;
            dailySpecialImage[i] = data[i][0].strMealThumb
            dailySpecialName[i] = data[i][0].strMeal
            dailySpecialInstructions[i] = data[i][0].strInstructions
            
            if (i == 2){
                let body = document.getElementById('floatingBody');
                let dailySpecial = document.createElement('div');
                dailySpecial.setAttribute('id', 'dailySpecial');
                let header = document.createElement('div');
                header.setAttribute('id', 'special');
            
                let headerLabel = document.createElement('label');
                let headerP = document.createElement('p');
                headerLabel.innerHTML = "Daily Special:";
                headerP.innerHTML = "Welcome to Foodies! We have many recipes for your choosing. Here's 3 to start you off";
                header.appendChild(headerLabel);
                header.appendChild(headerP);
                dailySpecial.appendChild(header);

                for (let j = 0; j < 3; j++){
                    let itemOne = document.createElement('div');
                    itemOne.setAttribute('id', 'item');
                    let imageOne = document.createElement('img');
                    imageOne.setAttribute('src', dailySpecialImage[j]);
                    let labelOne = document.createElement('label');
                    labelOne.innerHTML = dailySpecialName[j];
                    let infoOne = document.createElement('p');
                    infoOne.innerHTML = dailySpecialInstructions[j];
                    itemOne.appendChild(imageOne);
                    itemOne.appendChild(labelOne);
                    itemOne.appendChild(infoOne);
                    dailySpecial.appendChild(itemOne);
                }

                body.appendChild(dailySpecial);
            }
        });
    }   
}

function buildCategories(){
    var data = [];
    
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => response.json())
        .then((json) => {
            data = json.categories;

            let dataList = document.getElementById('categories');
            for (let i = 0; i < data.length; i++){
                let option = document.createElement('p');
                option.setAttribute('onclick', 'getFoodID("' + data[i].strCategory + '")');
                option.innerHTML = data[i].strCategory;
                dataList.appendChild(option)
            }
        });
}

function getFoodID(category){
    $('#floatingBody').empty();
    var foodID = [];

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)
    .then((response) => response.json())
    .then((json) => {
        data = json.meals;
        for (let i = 0; i < data.length; i++){
            foodID[i] = data[i].idMeal;
        }
        getCategories(foodID);
    });
}

function getCategories(id){
    var foodData = [];
    var dailySpecialImage = [];
    var dailySpecialName = [];
    var dailySpecialInstructions = [];

    for (let i = 0; i < id.length; i++){
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id[i])
        .then((response) => response.json())
        .then((json) => {
            foodData = json.meals;

            console.log(foodData)
            dailySpecialImage[i] = foodData[0].strMealThumb
            dailySpecialName[i] = foodData[0].strMeal
            dailySpecialInstructions[i] = foodData[0].strInstructions

            if (i+1 == foodData.length){
                let body = document.getElementById('floatingBody');
                let dailySpecial = document.createElement('div');
                dailySpecial.setAttribute('id', 'category');
                let header = document.createElement('div');
                header.setAttribute('id', 'special');
    
                for (let j = 0; j < id.length; j++){
                    let itemOne = document.createElement('div');
                    itemOne.setAttribute('id', 'item');
                    let imageOne = document.createElement('img');
                    imageOne.setAttribute('src', dailySpecialImage[j]);
                    let labelOne = document.createElement('label');
                    labelOne.innerHTML = dailySpecialName[j];
                    let infoOne = document.createElement('p');
                    infoOne.innerHTML = dailySpecialInstructions[j];
                    itemOne.appendChild(imageOne);
                    itemOne.appendChild(labelOne);
                    itemOne.appendChild(infoOne);
                    dailySpecial.appendChild(itemOne);
                }
    
                body.appendChild(dailySpecial);
            }
        });
    }
}

