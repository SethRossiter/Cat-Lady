
var cats = [{
    id: 1,
    name: "Whiskers",
    imgUrl: "http://thecatapi.com/api/images/get?format=src&type=gif",
    happyStatus: "meow?",
    grumpyStatus: "GRRRRRRRR",
    feralStatus: "bark",
    goneStatus: "whiskers is in prison",
    petCount: 0
},
{
    id: 247,
    name: "Mr. Fluffy",
    imgUrl: "http://24.media.tumblr.com/tumblr_m1bfxm5lOz1qlhvfoo1_400.gif",
    happyStatus: "Purrrrrrrr",
    grumpyStatus: "RWAR",
    feralStatus: "HISS",
    goneStatus: "RAN AWAY",
    petCount: 0
},
{
    id: 250,
    name: "Murder Face",
    imgUrl: "http://25.media.tumblr.com/tumblr_lsnsbysuwN1qint86o1_500.gif",
    happyStatus: "grrrrrr",
    grumpyStatus: "GRRrrrrr",
    feralStatus: "GRRRRRRRRRR",
    goneStatus: "DEAD",
    petCount: 0
},{
    id: 11,
    name: "Cat",
    imgUrl: "http://24.media.tumblr.com/YyXwbMbaOoa3u0trL7uZedmPo1_400.gif",
    happyStatus: "HI",
    grumpyStatus: "MOW",
    feralStatus: "MEWMEWMEW",
    goneStatus: "GoodBye",
    petCount: 0
},
{
    id: 17,
    name: "Mittens",
    imgUrl: "http://25.media.tumblr.com/tumblr_lv3v7tprkr1qbxi45o1_500.gif",
    happyStatus: "Ello",
    grumpyStatus: "Getting grumpy",
    feralStatus: "GRRRRRRRRRR",
    goneStatus: "See YA!",
    petCount: 0
},
{
    id: 40,
    name: "Hank",
    imgUrl: "http://24.media.tumblr.com/tumblr_m3by7sq8oW1r73wdao1_500.gif",
    happyStatus: "Hi",
    grumpyStatus: "I'm a bit hangry",
    feralStatus: "RAGE",
    goneStatus: "Ran away",
    petCount: 0
}]

function petCat(catId) {
    var petCount = document.getElementById("petCount" + catId);
    var catStatus = document.getElementById("catStatus" + catId);
    var catButton = document.getElementById("catButton" + catId);
    var catPicture = document.getElementById("catPicture" + catId);

    var targetCat = getCatById(catId);


    targetCat.petCount++
    petCount.innerHTML = targetCat.petCount;
    if (targetCat.petCount > 5) {
        catStatus.innerHTML = targetCat.grumpyStatus
    }
    if (targetCat.petCount == 9) {
        catStatus.innerHTML = targetCat.feralStatus
    }
    if (targetCat.petCount == 10) {
        catStatus.innerHTML = targetCat.goneStatus
        catButton.disabled = true
        catPicture.src = ""


    }

}
function getCatById(catId) {
    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];

        if (cat.id == catId) {
            return cat;
        }
    }

}

function reset(catId) {
    var petCount = document.getElementById("petCount" + catId);
    var catStatus = document.getElementById("catStatus" + catId);
    var catButton = document.getElementById("catButton" + catId);
    var catPicture = document.getElementById("catPicture" + catId);
    var targetCat = getCatById(catId)
    targetCat.petCount = 0;
    petCount.innerHTML = targetCat.petCount
    catButton.disabled = false
    catStatus.innerHTML = targetCat.happyStatus
    catPicture.src = targetCat.imgUrl
}

function drawCats(listOfCats) {

    var template = '';
    for (var i = 0; i < listOfCats.length; i++) {
        var cat = listOfCats[i];
        template += `
         <div>
        <img id="catPicture${cat.id}" src="${cat.imgUrl}">
        <button type="button" id="catButton${cat.id}" onclick="petCat(${cat.id})">Pet</button>
        <button type="button" onclick="reset(${cat.id})">CatNip</button>

        <h1 id="petCount${cat.id}">${cat.petCount}</h1>
        <h2 id="catStatus${cat.id}">${cat.happyStatus}</h2>

    </div>
        `
    }
    document.getElementById('cat-list').innerHTML = template
}

drawCats(cats)