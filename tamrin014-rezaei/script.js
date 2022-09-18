const submit = confirm('میخواهید بازی کنید؟');
if(submit){
    const random = Math.floor(Math.random()*10);
    console.log(random)

     let i = 5;
     while (i > 0){
         if(i == 5){
             const quiz = prompt('از بین یک تا ده یک عدد انتخاب کنید؟');
             if (quiz == random && i ==5){
                 alert(" افرین در اولین حدس درست گفتی");
                 break;
             }

         }else if(i < 4 ){
             const quiz = prompt(` اشتباه گفتی یه بار دیگه امتحان کن* تعداد فرصت باقیمانده ${i}`)
             if(quiz == random ){
                 alert(`افرین درست گفتی عدد ${random} بود`)
                 break;
             }
         }
         i--;
     }
    if(i == 0){
        alert(`باختی عدد درست ${random} بود`);
    }

}