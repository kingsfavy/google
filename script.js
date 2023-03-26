  
  function turn(){
    document.getElementById("demo"). innerHTML = "X";
    document.getElementById("demo"). style .fontSize = "22px";
   
    document.getElementById("demo"). style .marginRight= "2.5%";
    document.getElementById("demo"). style .textAlign = "center"
  }
  
  
  
    /* function changeColor(element) {
         var currentColor = element.style.backgroundColor;
  if(currentColor == "white") {
           
            element.style.backgroundColor = "black";
       
         } else {
            element.style.backgroundColor = "white"; 
            
         }
      } */

  
  function slideUp() {
         var elem = document.getElementById("demo");
      
         elem.style.maxHeight = "-0px";
      }
      
      
  function changeColor(element) {
         var currentColor = element.style.color;
         if(currentColor == "black") {
            element.style.color = "white";
         } else {
            element.style.color = "black"; 
            
         }
      } 
      
      
      function greetUser() {
         var time = new Date().getHours();
         if (time < 11) {
            return "Good morning 🌞";
         } else if (time < 18) {
            return "Good day 🙂";
         } else {
            return "Good evening 🙂";
         }
      }
      
      document.getElementById("greet").innerHTML = greetUser();
      
  var date = new Date();
     
      document.getElementById("date").innerHTML = date ;
      
      
      const { countries, zones } = require("moment-timezone/data/meta/latest.json");
const timeZoneCityToCountry = {};

Object.keys(zones).forEach(z => {
  const cityArr = z.split("/");
  const city = cityArr[cityArr.length-1];
  timeZoneCityToCountry[city] = countries[zones[z].countries[0]].name;
});

console.log(timeZoneToCountry)
      
     function changeText() {
  var x = document.getElementById("elem");
  if (x.style.backgroundColor  === "black") {
    x.style.backgroundColor = "white";
  } else {
    x.style.backgroundColor = "black";
    
  }
}

      function text(){
      var x = document.getElementById("switch"); 
            if (x.innerHTML === "OFF") { 
                x.innerHTML = "ON"; 
            } else { 
                x.innerHTML = "OFF"; 
            } 
        } 
        
        function text(){
      var x = document.getElementById("switcch"); 
            if (x.innerHTML === "OFF") { 
                x.innerHTML = "ON"; 
            } else { 
                x.innerHTML = "OFF"; 
            } 
        } 
        
        function texxt(){
      var x = document.getElementById("swich"); 
            if (x.innerHTML === "OFF") { 
                x.innerHTML = "ON"; 
            } else { 
                x.innerHTML = "OFF"; 
            } 
        } 
        
        
        
             var el_up = document.getElementById('GFG_UP'); 

    var rgbValue = [255, 0, 0]; 

    el_up.innerHTML = 

    "Click on the button to select effective pattern."; 

      

    function setColor() { 

        rgbValue[0] = Math.round(Math.random() * 255); 

        rgbValue[1] = Math.round(Math.random() * 255); 

        rgbValue[2] = Math.round(Math.random() * 255); 

        var color = Math.round(((parseInt(rgbValue[0]) * 299) + 

            (parseInt(rgbValue[1]) * 587) + 

            (parseInt(rgbValue[2]) * 114)) / 1000); 

        var textColor = (color > 125) ? 'black' : 'white'; 

        var backColor = 

            'rgb(' + rgbValue[0] + ', ' + rgbValue[1] + ', ' 

        + rgbValue[2] + ')'; 

          

        $('#elem').css('color', textColor); 

        $('#elem').css('background-color', backColor); 

    } 

      

    function GFG_Fun() { 

        setColor(); 

    } 






