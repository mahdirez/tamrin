const information = {
  firstName: "mahdi",
  lastName: "rezaei",
  job: "programmer",
  age: 22,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  ageInDays(){
    return this.age * 365;
  },
  bio() {
    return `name : ${this.fullName()} 
job : ${this.job} 
age : ${this.age}
ageInDays : ${this.ageInDays()}`;
  }
};

console.log(information.bio());
