const loginButton = document.getElementById('login');

loginButton.addEventListener('click', function(){
    
    const accName = document.getElementById('name');
    const password = document.getElementById('pass');

    if(accName.value == "" && password.value == "")
    {
        accName.style.border = 'thin solid red';
        password.style.border = 'thin solid red';
    }
    else if(accName.value != "" && password.value == "")
    {
        accName.style.border = 'thin solid blue';
        password.style.border = 'thin solid red';
    }
    else if(accName.value == "" && password.value != "")
    {
        accName.style.border = 'thin solid red';
        password.style.border = 'thin solid blue';
    }
    else
    {
        document.getElementById('submitArea').style.display = 'none';
        document.getElementById('transArea').style.display = 'block';
    }
});

const depButton = document.getElementById('depBtn');
const withButton = document.getElementById('withBtn');

const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');

const jomaTaka = document.getElementById('joma');
const tolaTaka = document.getElementById('tola');
const motTaka = document.getElementById('mot');

depButton.addEventListener('click', function(){
    const input_1 = parseFloat(deposit.value);
    const depo = parseFloat(jomaTaka.innerText);
    const bal = parseFloat(motTaka.innerText);

    if(deposit.value == "")
    {
        deposit.style.border = 'thick solid red';
        withdraw.style.border = 'none';
    }

    else
    {
        const total_1 = input_1 + depo;
    
        jomaTaka.innerText = total_1;
    
        deposit.value = "";
    
        const balance_1 = bal + input_1;
    
        motTaka.innerText = balance_1;

        deposit.style.border = 'none';
        withdraw.style.border = 'none';

    }

})

withButton.addEventListener('click', function(){
    const input_2 = parseFloat(withdraw.value);
    const withd = parseFloat(tolaTaka.innerText);
    const bala = parseFloat(motTaka.innerText);

    if(withdraw.value == "")
    {
        withdraw.style.border = 'thick solid red';
        deposit.style.border = 'none';
    }

    else
    {
        const total_2 = input_2 + withd;
    
        tolaTaka.innerText = total_2;
    
        withdraw.value = "";
    
        const balance_2 = bala - input_2;
    
        motTaka.innerText = balance_2;

        withdraw.style.border = 'none';
        deposit.style.border = 'none';
    }

})