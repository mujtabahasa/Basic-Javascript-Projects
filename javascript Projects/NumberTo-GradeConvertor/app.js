var percent = +prompt("Enter the percent","Type Here");
if(percent >= 80 && percent <= 100){
    alert("A+");
}
else if(percent >= 70 && percent <= 80){
    alert("A");
}
else if(percent >= 60 && percent <= 70){
    alert("B");
}
else if(percent >= 50 && percent <= 60){
    alert("C");
}
else if(percent >= 40 && percent <= 50){
    alert("D");
}
else if(percent >= 33 && percent <= 40){
    alert("E");
}
else if(percent >= 1 && percent <= 33){
    alert("F");
}
else{
    alert("invalid input");
}
