const btnE1 = document.getElementById("calculate");
const billE1 = document.getElementById("bill");
const tipE1 = document.getElementById("tip");
const totalspan = document.getElementById("total")


function calculateTotal(){
    const billValue = billE1.value;
    const tipvalue = tipE1.value;
    const totalvalue = billValue * (1 + tipvalue/ 100);
    totalspan.innerText = totalvalue.toFixed(2);
    
}

btnE1.addEventListener("click", calculateTotal);