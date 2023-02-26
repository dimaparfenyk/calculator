    const carPrice=document.querySelector('.car-price').value;
    const procentSlider=document.querySelector('.start-payment-procent');
    const procentPrepaymentValue=document.querySelector('.procent-input');
    const creditMonthes=document.querySelector('.js-credit-term-input');
    const creditMonthesSlider=document.querySelector('.js-credit-term');
    const creditAmount=document.querySelector('.amount-credit');
    const creditPerMonth=document.querySelector('.calc-result');
    
    let creditRate=12.99;
    // инициализация суммы кредита и месячной суммы при первой загрузке
    calculateCreditAmount();
    calculateCreditPerMonth(creditRate);  

    // присвоение значения процентной ставки в зависимости от времени и первичного взноса 
function assignCreditRateValue(){
    const procent=Number(procentPrepaymentValue.value);
    const monthCount=Number(creditMonthesSlider.value);

    switch (procent) {
        case 30:
            if(monthCount>=12&&monthCount<24){
                creditRate=6.99;
                console.log(creditRate);
            }
            else if(monthCount===24){
                creditRate=9.99;
                console.log(creditRate);
            }
            else if(monthCount>=25&&monthCount<=60){
                creditRate=12.99;
                console.log(creditRate);
            }
            else if(monthCount>=61){
                creditRate=14.99;
                console.log(creditRate);
            }
            break;
            case 40:
                if(monthCount>=12&&monthCount<24){
                    creditRate=5.99;
                    console.log(creditRate);
                }
                else if(monthCount===24){
                    creditRate=8.99;
                    console.log(creditRate);
                }
                else if(monthCount>=25&&monthCount<=36){
                    creditRate=10.99;
                    console.log(creditRate);
                }
                else if(monthCount>=37&&monthCount<=84){
                    creditRate=12.99;
                    console.log(creditRate);
                }
            break;
            case 50:
                if(monthCount>=12&&monthCount<24){
                    creditRate=2.99;
                    console.log(creditRate);
                }
                else if(monthCount===24){
                    creditRate=5.99;
                    console.log(creditRate);
                }
                else if(monthCount>=25&&monthCount<=36){
                    creditRate=9.99;
                    console.log(creditRate);
                }
                else if(monthCount>=37&&monthCount<=60){
                    creditRate=10.99;
                    console.log(creditRate);
                }
                else if(monthCount>=61&&monthCount<=84){
                    creditRate=11.99;
                    console.log(creditRate);
                }
            break;
            case 60:
                if(monthCount>=12&&monthCount<24){
                    creditRate=0.01;
                    console.log(creditRate);
                }
                else if(monthCount===24){
                    creditRate=4.99;
                    console.log(creditRate);
                }
                else if(monthCount>=25&&monthCount<=36){
                    creditRate=6.99;
                    console.log(creditRate);
                }
                else if(monthCount>=37&&monthCount<=60){
                    creditRate=9.99;
                    console.log(creditRate);
                }
                else if(monthCount>=61&&monthCount<=84){
                    creditRate=10.99;
                    console.log(creditRate);
                }
            break;
            case 70:
                if(monthCount>=12&&monthCount<24){
                    creditRate=0.01;
                    console.log(creditRate);
                }
                else if(monthCount===24){
                    creditRate=1.99;
                    console.log(creditRate);
                }
                else if(monthCount>=25&&monthCount<=60){
                    creditRate=6.99;
                    console.log(creditRate);
                }
                else if(monthCount>=61&&monthCount<=84){
                    creditRate=7.99;
                    console.log(creditRate);
                }
            break;
        default:
            break;
    };
};

//  обработка событий при скроле ползунков-инпутов
procentSlider.addEventListener('input', onProcentSliderChange);
creditMonthesSlider.addEventListener('input', onCreditMonthesSliderChange);

// ф-ция присвоения значениия в поле авансовий внесок
function initProcentPrepaymentValue(){
   procentPrepaymentValue.value=procentSlider.value;
};

// ф-ция присвоения значениия в поле строк кредиту
function initCreditMonthesValue(){
    creditMonthes.value=creditMonthesSlider.value
};

// ф-ция рассчета остатка после оплаты первичного взноса
function calculateCreditAmount(){
    initProcentPrepaymentValue();
    creditAmount.value=carPrice-carPrice*procentPrepaymentValue.value/100; 
};

// ф-ция рассчета необходимых ежемесячных платежей по условиям кредита
function calculateCreditPerMonth(creditRate){
   creditPerMonth.textContent= Math.round(creditAmount.value/(creditMonthes.value*(1+creditRate/100)))
};

function onProcentSliderChange(){
    assignCreditRateValue();
    initProcentPrepaymentValue();
    calculateCreditAmount();
    calculateCreditPerMonth(creditRate); 
};

function onCreditMonthesSliderChange(){
    assignCreditRateValue();
    initCreditMonthesValue();
    calculateCreditPerMonth(creditRate);
};




