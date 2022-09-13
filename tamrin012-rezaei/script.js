//summery

// const text = prompt('enter you text')
// function summary(text,word){
//     const Description = text.substr(0,word)
//     console.log(`${Description}...`)
// }

// summary(text,10)

//secret card

// const cardNumber = prompt('enter card number:')

// function secretCard(num){
//     return num.replace(num.slice(8,12),'****');
// }

// console.log(secretCard(cardNumber))

//censor

// const Description =prompt('enter description');

// function censor(text,word){
//     return text.replace(word,'*'.repeat(word.length))
// }

// console.log(censor(Description,'name'))

//level

const workExperience = prompt("Work experience:");

function level(num){
if( num <=2){
    return 'junior'
}else if(num <= 5){
    return 'mid-level'
}else if(num > 5){
    return 'senior'
}else{
    return 'error'
}
}

console.log(level(workExperience));
