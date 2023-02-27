const data={
   30: [6.99, 9.99, 12.99, 12.99, 14.99],
   40:[5.99,6.99,10.99,12.99,12.99],
   50: [2.99,5.99,9.99,10.99,11.99],
   60:[0.01,4.99,6.99,9.99, 10.99],
   70:[0.01,1.99,6.99,6.99,7.99],
};

    const carPriceValue=document.querySelector('.car-price');
    const procentSlider=document.querySelector('.start-payment-procent');
    const procentPrepaymentValue=document.querySelector('.js-procent-input');
    const creditMonthes=document.querySelector('.js-credit-term-input');
    const creditMonthesSlider=document.querySelector('.js-credit-term');
    const creditAmount=document.querySelector('.amount-credit');
    const creditPerMonth=document.querySelector('.calc-result');
    
    let creditRate=0;
    let carPrice=700000;
    
    // инициализация суммы кредита и месячной суммы при первой загрузке
    initCarPriceUI();
    // assignCreditRateValue();
    calculateCreditAmount();
    calculateCreditPerMonth(creditRate);  
    assignCreditRate()

     // присвоение значения процентной ставки в зависимости от времени и первичного взноса 
    function assignCreditRate(){
        const procent=Number(procentSlider.value);
        const monthCount=Number(creditMonthesSlider.value);
        const percentageValue=Object.keys(data).map(item=>Number(item));

            switch (procent) {
            case percentageValue[0]:
                if(monthCount<=12){
                    creditRate=data[30][0];
                }
                else if(monthCount>=13 && monthCount<=24){
                    creditRate=data[30][1];
                }
                else if(monthCount>=25&&monthCount<=60){
                    creditRate=data[30][2];
                }
                else if(monthCount>=61){
                    creditRate=data[30][4];
                }
                break;
                case percentageValue[1]:
                    if(monthCount<=12){
                        creditRate=data[40][0];
                    }
                    else if(monthCount>=13 && monthCount<=24){
                        creditRate=data[40][1];
                    }
                    else if(monthCount>=25&&monthCount<=36){
                        creditRate=data[40][2];
                    }
                    else if(monthCount>=37&&monthCount<=84){
                        creditRate=data[40][3];
                    }
                break;
                case percentageValue[2]:
                    if(monthCount<=12){
                        creditRate=data[50][0];
                    }
                    else if(monthCount>=13 && monthCount<=24){
                        creditRate=data[50][1];
                    }
                    else if(monthCount>=25&&monthCount<=36){
                        creditRate=data[50][2];
                    }
                    else if(monthCount>=37&&monthCount<=60){
                        creditRate=data[50][3];
                    }
                    else if(monthCount>=61&&monthCount<=84){
                        creditRate=data[50][4];
                    }
                break;
                case data[60]:
                    if(monthCount<=12){
                        creditRate=data[60][0];
                    }
                    else if(monthCount>=13 && monthCount<=24){
                        creditRate=data[60][1];
                    }
                    else if(monthCount>=25&&monthCount<=36){
                        creditRate=data[60][2];
                    }
                    else if(monthCount>=37&&monthCount<=60){
                        creditRate=data[60][3];
                    }
                    else if(monthCount>=61&&monthCount<=84){
                        creditRate=data[60][4];
                    }
                break;
                case data[70]:
                    if(monthCount<=12){
                        creditRate=data[70][0];
                    }
                    else if(monthCount>=13 && monthCount<=24){
                        creditRate=data[70][1];
                    }
                    else if(monthCount>=25&&monthCount<=60){
                        creditRate=data[70][2];
                    }
                    else if(monthCount>=61&&monthCount<=84){
                        creditRate=data[70][4];
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
   procentPrepaymentValue.textContent=`${procentSlider.value} %`;
};

function initCarPriceUI(){
    carPriceValue.textContent=carPrice.toLocaleString();
}

// // ф-ция присвоения значениия в поле строк кредиту
function initCreditMonthesValue(){
    creditMonthes.textContent=creditMonthesSlider.value;
};

// ф-ция рассчета остатка после оплаты первичного взноса
function calculateCreditAmount(){
    const percent=procentSlider.value;
    const creditAfterFirstPayment=carPrice-carPrice*percent/100

    initProcentPrepaymentValue();
    
    creditAmount.textContent=creditAfterFirstPayment.toLocaleString();
    
    return creditAfterFirstPayment
};

// ф-ция рассчета необходимых ежемесячных платежей по условиям кредита
function calculateCreditPerMonth(creditRate){
    const amount=calculateCreditAmount();
    const monthCredit=Number(amount/creditMonthesSlider.value);

    initCreditMonthesValue();
   creditPerMonth.textContent= Math.round(monthCredit + (monthCredit*creditRate/100)).toLocaleString();
};

function onProcentSliderChange(){
    assignCreditRate();
    initProcentPrepaymentValue();
    calculateCreditAmount();
    calculateCreditPerMonth(creditRate); 
};

function onCreditMonthesSliderChange(){
    assignCreditRate();
    initCreditMonthesValue();
    calculateCreditAmount();
    calculateCreditPerMonth(creditRate);
};
