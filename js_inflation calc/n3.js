function inflationCalculator() {
    let IFR = document.querySelector('#IFR');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years').value;

    IFR = parseFloat(IFR.value);
    money = parseFloat(money.value);
    years = parseFloat(years);

    
        let calcs = money + (money * (IFR/100));
        for(let i = 1; i < years; i++){
            calcs += calcs * (IFR/100);
        }
        console.log(calcs);

        

   

}