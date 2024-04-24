const forms = document.querySelector("form");
forms.addEventListener("submit" , function(e){
 e.preventDefault();
 const Hvalue = parseInt(document.querySelector("#height").value);
 const Wvalue = parseInt(document.querySelector("#weight").value);
 const results = document.querySelector("#results");
 if(Hvalue === '' || Hvalue <0 || isNaN(Hvalue)){
    results.innerHTML ="Please give a Valid Height !"
 }
 else if(Wvalue === '' || Wvalue <0 || isNaN(Wvalue)){
    results.innerHTML ="Please give a valid Weight"
 }
 else{
    const bmi = (Wvalue/((Hvalue*Hvalue)/10000)).toFixed(2);
    if(bmi <18.6){
      results.innerHTML =`<span>your BMI  is : ${bmi}(Under Weight)</span>`  
    }
    else if(bmi >= 18.6 && bmi <=24.9){
      results.innerHTML =`<span>your BMI  is : ${bmi}(Normal Weight)</span>`  
    }else if(bmi >24.9 ){
        results.innerHTML =`<span>your BMI  is : ${bmi}(Over Weight)</span>` 
    }
 }

})