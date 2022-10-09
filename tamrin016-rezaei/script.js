const form = document.querySelector('form');



form.addEventListener('submit', submitForm);
function error(e){
    const ul =  document.querySelector('ul')
    const li =  document.createElement('li')
    li.innerText = e;
    ul.appendChild(li)
}

function submitForm(event){
    event.preventDefault();
    document.querySelector('ul').innerText = ''
    const inputs = event.target.elements;
    
    const name = inputs.name.value;
    const family = inputs.family.value;
    const email = inputs.email.value;
    const pass = inputs.pass.value;


    if(!name) error('نام خود را وارد کنید');

    if(!family) error('نام خانوادگی خود را وارد کنید');


    if(!email) error('ایمیل خود را وارد کنید');

   if(email){
       if(email.indexOf('@') == -1 || email.indexOf('.') == -1) error('ایمیل اشتباه است و ایمیل خود را درست وارد کنید');
   }




    if(!pass) error('رمز عبور خود را درست وارد کنید');
    if(pass){
    if(pass.length > 8 || pass.length < 4) error('رمز عبور باید کمتر از 8 و بیشتر از 4 باشد')
}



    // inputs.name.value = ''
    // inputs.family.value = ''
    // inputs.email.value = ''
    // inputs.pass.value = ''
}