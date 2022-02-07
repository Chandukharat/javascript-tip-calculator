function calculate(){
    let amount =document.getElementById('first').value 
    let percentage =document.getElementById('sevice').value
    let tip = amount *(percentage/100)
    let people = document.getElementById('thir').value
    let totalTip= (tip/people)
    document.getElementById('simple').value= totalTip
}