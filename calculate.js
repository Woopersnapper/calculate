function add(char){
    var display = document.querySelector(".display");
    display.value = display.value + char;
}
function calculate(){
    var display = document.querySelector(".display");
    var result = document.querySelector(".result");
    result.value = eval(display.value);
}
function reset(){
    document.querySelector(".display").value = "";
    document.querySelector(".result").value = "";
}