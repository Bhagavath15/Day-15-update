var form_submit = document.querySelector('#form-submit')

form_submit.addEventListener('submit', (e)=>{
    e.preventDefault()
    var first_name = document.querySelector('[placeholder="firstname"]')
    var last_name = document.querySelector('[placeholder="lastname"]')
    var address = document.querySelector('[placeholder="address"]')
    var pincode = document.querySelector('[placeholder="pincode"]')
    var gender = document.querySelector('[placeholder="gender"]')
    var foods = document.querySelector('#food')
    var state = document.querySelector('[placeholder="state"]')
    var city = document.querySelector('[placeholder="city"]')
    console.log('form submitted')
    console.log(first_name,last_name,address,pincode,gender,foods,state,city)

    var datas = [first_name,last_name,address,pincode,gender,foods,state,city]

    var creating_tr = document.createElement('tr')

    for(var i=0;i<datas.length;i++){
        var creating_td = document.createElement('td')
        creating_td.innerText = datas[i].value
        creating_tr.append(creating_td)
    }

    document.querySelector('tbody').append(creating_tr)
    for(let i of datas){
        i.value = ''
    }
})