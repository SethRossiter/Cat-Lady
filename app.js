
var petCount = document.getElementById("petCount");
var catStatus = document.getElementById("catStatus");
var counter = 0;
var catButton = document.getElementById("catButton");
var catPicture = document.getElementById("catPicture");

function petCat(){
counter++;
petCount.innerHTML = counter;
if(counter > 5){
catStatus.innerHTML = "RWAR";
}
if(counter >= 9){
catStatus.innerHTML = "HISS";
}
if(counter >= 10){
catStatus.innerHTML = "RAN AWAY";
catButton.disabled = true
catPicture.src= ""


}
}

function reset(){
    counter = 0;
    petCount.innerHTML = counter;
    catButton.disabled = false
    catStatus.innerHTML = "Purrrrrr";
    catPicture.src = "http://static.boredpanda.com/blog/wp-content/uploads/2016/05/surprised-cat-hydrocephalus-kevin-theadventuresofkev23.jpg";
}

