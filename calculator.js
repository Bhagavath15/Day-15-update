function calc_func(e){
    var data_calc = document.querySelector('.one-field')
    var value_calc = data_calc.innerText
    console.log(e.innerText)

    var last_element = value_calc.slice(-1)[0]

    exp_arr = ['+','-','*','/']
    if(!exp_arr.includes(last_element) && data_calc.innerText!=''){
        data_calc.innerText = value_calc + e.innerText
    }
    else if(!exp_arr.includes(e.innerText)){
        data_calc.innerText = value_calc + e.innerText
    }
    else{
        console.log('last element is already expression')
    }
}


var key_trigger = document.querySelector('body')

key_trigger.addEventListener('keypress',(e)=>{
    console.log(e)
    var data_calc = document.querySelector('.data')
    if(e.code.includes('Digit') || e.code.includes('Numpad')){
        var value_calc = data_calc.innerText
        data_calc.innerText = value_calc + e.key
    }
    else{
        console.log('Not a number')
    }
    var last_element = value_calc.slice(-1)[0]
    exp_arr = ['+','-','*','/']

    if(!exp_arr.includes(last_element)){
        data_calc.innerText = value_calc + e.key
    }
    else if(!exp_arr.includes(e.innerText)){
        data_calc.innerText = value_calc + e.key
    }
    else{
        console.log('last element is already expression')
    }
})