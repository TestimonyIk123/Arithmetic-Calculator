function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function remainder(number1, number2) {
  return number1 % number2;
}

$(document).ready(function(){
  $("#add").submit(function(event){
    event.preventDefault();
    let result=0;
    let firstNumber=$("#add1").val();
    let secondNumber=$("#add2").val();
    const op = $("input:radio[name=calculate]:checked").val();
    if(op==="add")
    {
      result=add(parseFloat(firstNumber),parseFloat(secondNumber));
    }
    else  if(op==="subtract")
    {
      result=subtract(parseFloat(firstNumber),parseFloat(secondNumber));
    }

    else if(op==="multiply")
    {
    result=multiply(parseFloat(firstNumber),parseFloat(secondNumber));
    }
 
    else if(op==="divide")
    {
      result=divide(parseFloat(firstNumber),parseFloat(secondNumber));
    }
    
    else if(op==="remainder")
    {
      result=remainder(parseFloat(firstNumber),parseFloat(secondNumber));
    }
    $("#output").text(result);
  })
})


