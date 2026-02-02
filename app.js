let email = 'amirx  `nmatchanov@gmail.com'
console.log(email.indexOf('o')) 

 let name = prompt('ismingizini kiriting!')
let boshHarfi = name.charAt().toUpperCase()
let davomi  = name.slice(1).toLowerCase()
let result = boshHarfi + davomi
alert(`Salom, ${result}`)


let i = 0 
for (i; i< 10; i++){
    console.log('amir')
}

const names = ['ahror', 'sanjar', 'ali']

for ( let i = 0; i< names.length; i++){
    let boshHarfi = names[i].charAt().toUpperCase()
let davomi  = names[i].slice(1).toLowerCase()
let result = boshHarfi + davomi
    console.log(`${result}`)
}