/*You want a program that is a simple prototype calculator that gets two numbers from the user, adds or multiplies them 
depending on which the user wants to do, displays the answer, and then clears the display so the user can calculate again. 
All output to the user is prefaced with the users' name:  Bob, the answer is 42.
*/


function  add(n1,n2){
  answer=n1+n2
  return answer
}

Button2Copy.onclick=function(){
  let num1 = Number(input1.value)
  let num2 = Number(input2.value)
  Alert1.value = add(num1,num2)
}
console.log('calculator')
Button2.onclick=function(){
  Alert1.value = " "
  input1.value
  input2.value
}

