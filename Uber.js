//* write a class to calculate the uber price.

class Uber{
 
    constructor(city,rates,basePrice){
        this.city=city;
        this.rates=rates;
        this.basePrice=basePrice;
    }

 getRate(){
     let finalRate = (this.rates * this.basePrice);
     return finalRate;
 }

}

var c1 =new Uber("Attur",10,20);
console.log(c1.getRate());