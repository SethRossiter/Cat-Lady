var petCount = document.getElementById("petCount");
var catStatus = document.getElementById("catStatus");
var catButton = document.getElementById("catButton");
var catPicture = document.getElementById("catPicture");

var mrFluffy ={
    name: "Mr. Fluffy",
    imgUrl: "http://static.boredpanda.com/blog/wp-content/uploads/2016/05/surprised-cat-hydrocephalus-kevin-theadventuresofkev23.jpg",
    happyStatus: "Purrrrrrrr",
    grumpyStatus: "RWAR",
    feralStatus: "HISS",
    goneStatus: "RAN AWAY",
    petCount: 0
}


function petCat(){
mrFluffy.petCount++
petCount.innerHTML = mrFluffy.petCount;
if(mrFluffy.petCount > 5){
catStatus.innerHTML = mrFluffy.grumpyStatus
}
if(mrFluffy.petCount >= 9){
catStatus.innerHTML = mrFluffy.feralStatus
}
if(mrFluffy.petCount >= 10){
catStatus.innerHTML = mrFluffy.goneStatus
catButton.disabled = true
catPicture.src= ""


}
}

function reset(){
    mrFluffy.petCount;
    petCount.innerHTML = counter;
    catButton.disabled = false
    catStatus.innerHTML = mrFluffy.happyStatus
    mrFluffy.imgUrl = "http://static.boredpanda.com/blog/wp-content/uploads/2016/05/surprised-cat-hydrocephalus-kevin-theadventuresofkev23.jpg";
}

