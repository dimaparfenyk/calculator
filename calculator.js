const creditData= { 
   thirty: {
    percentage:30,
    firstTimeRange:{start:1, end:12, rate:6.99},
    secondTimeRange:{start:13, end:24, rate:9.99},
    thirdTimeRange:{start:25, end:36, rate:12.99},
    fourthTimeRange:{start:37, end:60, rate:12.99},
    fifthTimeRange:{start:61, end:84, rate:14.99}
    },
    fourty:{
    percentage:40,
    firstTimeRange:{start:1, end:12, rate:5.99},
    secondTimeRange:{start:13, end:24, rate:8.99},
    thirdTimeRange:{start:25, end:36, rate:10.99},
    fourthTimeRange:{start:37, end:60, rate:12.99},
    fifthTimeRange:{start:61, end:84, rate:12.99}
    },
    fifty:{
    percentage:50,
    firstTimeRange:{start:1, end:12, rate:2.99},
    secondTimeRange:{start:13, end:24, rate:5.99},
    thirdTimeRange:{start:25, end:36, rate:9.99},
    fourthTimeRange:{start:37, end:60, rate:10.99},
    fifthTimeRange:{start:61, end:84, rate:11.99}
    },
    sixty:{
    percentage:60,
    firstTimeRange:{start:1, end:12, rate:0.01},
    secondTimeRange:{start:13, end:24, rate:4.99},
    thirdTimeRange:{start:25, end:36, rate:6.99},
    fourthTimeRange:{start:37,end:60, rate:9.99},
    fifthTimeRange:{start:61, end:84, rate:10.99}
    },
    seventy:{
    percentage:70,
    firstTimeRange:{start:1, end:12, rate:0.01},
    secondTimeRange:{start:13, end:24, rate:1.99},
    thirdTimeRange:{start:25, end:36, rate:6.99},
    fourthTimeRange:{start:37, end:60, rate:6.99},
    fifthTimeRange:{start:61, end:84, rate:7.99},
    },
};

    console.dir(creditData)
    console.log(creditData.thirty.percentage)
    const carPrice=document.querySelector('.car-price').value;
    const procentSlider=document.querySelector('.start-payment-procent');
    const procentPrepaymentValue=document.querySelector('.procent-input');
    const creditMonthes=document.querySelector('.js-credit-term-input');
    const creditMonthesSlider=document.querySelector('.js-credit-term');
    const creditAmount=document.querySelector('.amount-credit');
    const creditPerMonth=document.querySelector('.calc-result');
    
    let creditRate=0;
    // инициализация суммы кредита и месячной суммы при первой загрузке
    calculateCreditAmount();
    calculateCreditPerMonth(creditRate);  

    // присвоение значения процентной ставки в зависимости от времени и первичного взноса 
function assignCreditRateValue(){
    const procent=Number(procentPrepaymentValue.value);
    const monthCount=Number(creditMonthesSlider.value);

        const {thirty, fourty, fifty,sixty,seventy}=creditData;
        switch (procent) {
        case thirty.percentage:
            const {firstTimeRange,secondTimeRange,thirdTimeRange,fourthTimeRange,fifthTimeRange}=thirty;

            if(monthCount<=firstTimeRange.end){
                creditRate=firstTimeRange.rate;
            }
            else if(monthCount>=secondTimeRange.start && monthCount<=secondTimeRange.end){
                creditRate=secondTimeRange.rate;
            }
            else if(monthCount>=thirdTimeRange.start&&monthCount<=fourthTimeRange.end){
                creditRate=thirdTimeRange.rate;
            }
            else if(monthCount>=fifthTimeRange.start){
                creditRate=fifthTimeRange.rate;
            }
            break;
            case fourty.percentage:
                if(monthCount<=fourty.firstTimeRange.end){
                    creditRate=fourty.firstTimeRange.rate;
                }
                else if(monthCount>=fourty.secondTimeRange.start && monthCount<=fourty.secondTimeRange.end){
                    creditRate=fourty.secondTimeRange.rate;
                }
                else if(monthCount>=fourty.thirdTimeRange.start&&monthCount<=fourty.thirdTimeRange.end){
                    creditRate=fourty.thirdTimeRange.rate;
                }
                else if(monthCount>=fourty.fourthTimeRange.start&&monthCount<=fourty.fifthTimeRange.end){
                    creditRate=fourty.fourthTimeRange.rate;
                }
            break;
            case fifty.percentage:
                if(monthCount<=fifty.firstTimeRange.end){
                    creditRate=fifty.firstTimeRange.rate;
                }
                else if(monthCount>=fifty.secondTimeRange.start && monthCount<=fifty.secondTimeRange.end){
                    creditRate=fifty.secondTimeRange.rate;
                }
                else if(monthCount>=fifty.thirdTimeRange.start&&monthCount<=fifty.thirdTimeRange.end){
                    creditRate=fifty.thirdTimeRange.rate;
                }
                else if(monthCount>=fifty.fourthTimeRange.start&&monthCount<=fifty.fourthTimeRange.end){
                    creditRate=fifty.fourthTimeRange.rate;
                }
                else if(monthCount>=fifty.fifthTimeRange.start&&monthCount<=fifty.fifthTimeRange.end){
                    creditRate=fifty.fifthTimeRange.rate;
                }
            break;
            case sixty.percentage:
                if(monthCount<=sixty.firstTimeRange.end){
                    creditRate=sixty.firstTimeRange.rate;
                }
                else if(monthCount>=sixty.secondTimeRange.start && monthCount<=sixty.secondTimeRange.end){
                    creditRate=sixty.secondTimeRange.rate;
                }
                else if(monthCount>=sixty.thirdTimeRange.start&&monthCount<=sixty.thirdTimeRange.end){
                    creditRate=sixty.thirdTimeRange.rate;
                }
                else if(monthCount>=sixty.fourthTimeRange.start&&monthCount<=sixty.fourthTimeRange.end){
                    creditRate=sixty.fourthTimeRange.rate;
                }
                else if(monthCount>=sixty.fifthTimeRange.start&&monthCount<=sixty.fifthTimeRange.end){
                    creditRate=sixty.fifthTimeRange.rate;
                }
            break;
            case seventy.percentage:
                if(monthCount<=seventy.firstTimeRange.end){
                    creditRate=seventy.firstTimeRange.rate;
                }
                else if(monthCount>=seventy.secondTimeRange.start && monthCount<=seventy.secondTimeRange.end){
                    creditRate=seventy.secondTimeRange.rate;
                }
                else if(monthCount>=seventy.thirdTimeRange.start&&monthCount<=seventy.fourthTimeRange.end){
                    creditRate=seventy.thirdTimeRange.rate;
                }
                else if(monthCount>=seventy.fifthTimeRange.start&&monthCount<=seventy.fifthTimeRange.end){
                    creditRate=seventy.fifthTimeRange.rate;
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



