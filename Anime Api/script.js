const url = "https://api.jikan.moe/v3/search/anime?q=anime";
let jdata;
//GEt Data
async function getData() {
    try {
      let data = await fetch(url,{
        method: "GET",
      });
      jdata = await data.json();
     // console.log(jdata);
     displayData(jdata.results);

    } catch (e) {
      console.log("err in getData func", e);
    }

  }
  getData();

  //Displaying the Data

  async function displayData(jdata){
      var card=document.getElementById("card");
      card.innerHTML="";
     
       jdata.forEach(element => {
        card.innerHTML += `
       
        <div class="card1" style=" margin 2px; padding-bottom:140px;width:250px;height:250px; font-size:15px;display:inline-block;margin:10px;border: 1px solid black;">
        <img src="${element.image_url} alt="image not available" width="250" height="250"/>
        <h3 class="title">${element.title}</h3>
        <p class="p"><span>Start Date: </span>${element.start_date}</p>
        <p class="p"><span>End Date: </span>${element.end_date}</p>
        <p class="p"><span>Type: </span>${element.type}</p>
        <p class="p"><span>Rating: </span>${element.rated}</p>     
    </div>`;

       });
  }



  
  //search for anime
async function Function(){
  event.preventDefault();
  try{
  var value=document.getElementById("search1").value;
 // console.log(value);
  if (value.length > 0) {
    let arr = [];
    let len = jdata.results.length;
    for (var i = 0; i < len; i++) {
      if (jdata.results[i].title == value) {
        arr.push(jdata.results[i]);
        
      }
    }
    if (arr.length > 0) {
      displayData(arr);
     
      console.log("good");
    } else {
      document.getElementById("search1").value="";
      alert("This  Anime is not Found here");
     
    }
  } 
} catch (e) {
  console.log(e);
}


}

  


























