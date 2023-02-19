// Your code goes here
function profit(){

    // initial amount
    let a = parseInt(prompt('Enter the initial amount'))
    // no. of years
    let b = parseInt(prompt('Enter no. of years'))
    //percentage
    let per = parseInt(prompt('Enter the percentage'))
    if(isNaN(a) || isNaN(b) || isNaN(per) || a < 1000 || b < 1 || per > 100) {
        alert('Invalid input data');
    } else{
        //formula to print the required things
        let amount = a*Math.pow(1+per/100, b)
        let ans1 = amount.toFixed(2)
        let ans2 = (Number(ans1)-a).toFixed(2)
        alert(`             
            Initial amount: ${a}
            Number of years: ${b}
            Percentage of year: ${per}
            
            Total profit: ${ans2} 
            Total amount: ${ans1}`
            )
    }
}