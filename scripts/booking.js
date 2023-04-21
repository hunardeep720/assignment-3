/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var nb_day = 0;
var days = document.querySelectorAll("#weekday");




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
for (let day of days){
    day.addEventListener("click",function clickedDay(){
        nb_day += 1;
        day.className = "clicked";
        cost_calculater();
    }); 
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clear = document.getElementById("clear-button");
var cost = document.getElementById("calculated-cost");
clear.addEventListener("click",clicked);
function clicked(){
    let day_refresh = document.querySelectorAll("#weekday");
    nb_day = 0;
    day_refresh.className = "blue-hover";
    cost.innerHTML = 0;
    location.reload();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var half_day = document.getElementById("half");
var daily_rate = 35;
half_day.addEventListener("click",day);
function day(){
    daily_rate = 20;
    half_day.className = "clicked small-button";
    full_day.className = "small-button";
    cost_calculater();
}




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var full_day = document.getElementById("full");
full_day.addEventListener("click",full);
function full(){
    daily_rate = 35;
    full_day.className = "clicked small-button";
    half_day.className = "small-button";
    cost_calculater();
}





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
var total_cost = 0;
function cost_calculater(){
    total_cost = daily_rate * nb_day;
    cost.innerHTML = total_cost;
}






