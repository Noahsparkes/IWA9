const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
   
}
   console.log(expenses)
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = tax[913] / 100  //proper format for dividing numbers here
const startingAfterTax = salary * (1 - taxAsDecimal);
const type = lodging + size;
const balance = expenses['transport'] - expenses['food'] - rent[type] 

console.log(balance)



//should console.log a value of 2658.05