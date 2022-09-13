const submit = confirm("ایا میخواهید در سایت ثبت نام کنید؟");

if (submit) {
  const name = prompt("نام خود را وارد کنید:");

  const family = prompt("نام خانوادگی خود را وارد کنید:");

  const age = prompt("سن خود را وارد کنید:");

  const password = prompt("رمز عبور خود را وارد کنید:");

  if(name && family && age >= 18 && password >= 6){
    alert(`${name} ${family} ثبت نام شما با موفقیت انجام شد`)
  }else{
    alert('مشخصات خود را با دقت وارد کنید!!')
  }
}
