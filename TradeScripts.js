/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
      
    const xLabel2 =[];
    const yTemp2 =[];
    const cont =[];
    linechart2();
    const selectedcountry ="";    
    const country = [];        
    
      
    
    async function linechart2(){    
    await getData2();  
    
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: xLabel2,
        datasets: [{
            label: 'The Value of Global Exports',
            data: yTemp2,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            opacity:1
        }]
    } 
});
}
   
    async function getData2(){
    const response2 = await fetch('merchandise-exports-gdp-cepii.csv');
    const data2 = await response2.text();
    const table2 = data2.split('\n').slice(1);
    table2.forEach(row2=>
    {
      const columns2 = row2.split(',');    
      const year2 = columns2[2];
      xLabel2.push(year2);
      const value2 = columns2[3];
      yTemp2.push(value2);
      const place = columns2[0];
      country.push(place);
    });    
}

const elmts = (value, index, self)=>{
    return self.indexOf(value)===index;
}
function nsfn() { 
    const discountry = country.filter(elmts);
    
    console.log(discountry);
     for (var i = 0; i < discountry.length; i++) { 
             var optn = discountry[i]; 
            var el = document.createElement("option"); 
            el.textContent = optn; 
            el.value = optn; 
            document.getElementById("arr").appendChild(el); 
    } 
 } 
 

function nsfn2() { 
         const distinctcountry = country.filter(elmts)
     for (var i = 0; i < distinctcountry.length; i++) { 
             var optn2 = distinctcountry[i]; 
            var e2 = document.createElement("option"); 
            e2.textContent = optn2; 
            e2.value = optn2; 
            document.getElementById("arr2").appendChild(e2);  
    } 
 } 

const xLabel =[];
    const yTemp =[];
    linechart();
    
    
    async function linechart(){    
    await getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xLabel,
        datasets: [{
            label: 'The Value of Global Exports',
            data: yTemp,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            opacity:1
        }]
    } 
});
}
   
    async function getData(){
    const response = await fetch('world-trade-exports-constant-prices.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row=>
    {
      const columns = row.split(',');    
      const year = columns[2];
      xLabel.push(year);
      const value = columns[3];
      yTemp.push(value);
      yTemp;
    });
    }
    


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


