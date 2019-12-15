let total = 1;
const deger_select = document.querySelector('.misli-deger');
let misli = deger_select.options[deger_select.selectedIndex].value
let max_kazanc = document.querySelector('.kazanc-2');
let kazanc_deger = document.querySelector('.kazanc-deger');

onClick = (e) => {
    console.log(misli)
    const val = e.target.nextElementSibling;
    val.classList.toggle('orange')
    kazanc_deger.innerText = misli
    console.log(val.classList.value)
    if(val.classList.value === 'orange'){
        total = parseFloat((total * val.dataset.value)).toFixed(2);
    }else{
        total = parseFloat((total / val.dataset.value)).toFixed(2);
    }

    max_kazanc.innerText = (misli * total).toFixed(2);    
}

document.querySelectorAll('.choose').forEach((key)=>{
    key.addEventListener('click', onClick)
})



console.log(misli+'ilk değer');

onChange = () => {   
    misli = deger_select.options[deger_select.selectedIndex].value
    console.log(misli)
    kazanc_deger.innerText = misli
    max_kazanc.innerText = (total * misli).toFixed(2); 
}

deger_select.addEventListener('change', onChange)


onHandler = () => {

}




