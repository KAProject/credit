let total_credit=0;
let credit_1 = 0; let credit_2 = 0; let credit_3 = 0; let credit_4 = 0; let credit_5 = 0; credit_6 = 0; let credit_7 = 0; let credit_8 = 0; let credit_9 = 0; let credit_10 = 0; let credit_11=0; let credit_12=0; let credit_13=0;



function Credit_1(radio) {
    if (radio.value === "yes") {
        credit_1 = 10;
    } else if (radio.value === "no") {
        credit_1 = -10;
    }

    console.log(credit_1)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_2(radio) {
    if (radio.value === "yes") {
        credit_2 = 5;
    } else if (radio.value === "no") {
        credit_2 = -10;
    }

    console.log(credit_2)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_3(radio) {
    if (radio.value === "yes") {
        credit_3 = 5;
    } else if (radio.value === "no") {
        credit_3 = -5;
    }

    console.log(credit_3)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_4(radio) {
    if (radio.value === "yes") {
        credit_4 = 10;
    } else if (radio.value === "no") {
        credit_4 = -10;
    }

    console.log(credit_4)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_5(radio) {
    if (radio.value === "yes") {
        credit_5 = 5;
    } else if (radio.value === "no") {
        credit_5 = -5;
    }

    console.log(credit_5)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_6(radio) {
    if (radio.value === "yes") {
        credit_6 = 10;
    } else if (radio.value === "no") {
        credit_6 = -15;
    }

    console.log(credit_6)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_7(radio) {
    if (radio.value === "yes") {
        credit_7 = 5;
    } else if (radio.value === "no") {
        credit_7 = -5;
    }

    console.log(credit_7)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_8(radio) {
    if (radio.value === "yes") {
        credit_8 = 10;
    } else if (radio.value === "no") {
        credit_8 = -15;
    }

    console.log(credit_8)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_9(radio) {
    if (radio.value === "yes") {
        credit_9 = -20;
    } else if (radio.value === "no") {
        credit_9 = 10;
    }

    console.log(credit_9)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_10(radio) {
    if (radio.value === "yes") {
        credit_10 = -20;
    } else if (radio.value === "no") {
        credit_10 = 5;
    }

    console.log(credit_10)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_11(radio) {
    if (radio.value === "yes") {
        credit_11 = 10;
    } else if (radio.value === "no") {
        credit_11 = -15;
    }

    console.log(credit_11)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_12(radio) {
    if (radio.value === "yes") {
        credit_12 = 10;
    } else if (radio.value === "no") {
        credit_12 = -15;
    }

    console.log(credit_12)
    document.getElementById('credit').textContent = add_credits();
}

function Credit_13(radio) {
    if (radio.value === "yes") {
        credit_13 = -5;
    } else if (radio.value === "no") {
        credit_13 = 5;
    }

    console.log(credit_13)
    document.getElementById('credit').textContent = add_credits();
}


function calculate_credit(submit){
    const newUrl = "Credit_page.html";
    window.location.href = newUrl;
    document.getElementById('my_credit').textContent =credit_1;
}

function add_credits(){
    return credit_1+credit_2+credit_3+credit_4+credit_5+credit_6+credit_7+credit_8+credit_9+credit_10+credit_11+credit_12+credit_13;
    // window.location.href = "Credit_page.html?credit=" + add_credits();

}





function calculate_and_redirect() {
    let my_credit = 0;
    my_credit = add_credits();
    // Redirect to the new page with the credit value as a query parameter
    window.location.href = "Credit_page.html?credit=" + my_credit;
}