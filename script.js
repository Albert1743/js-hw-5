let name = prompt('What is your name?').toLowerCase().trim()
let money = 100

if (name[0] === 'a') {
    let age = prompt('Your age ?')
    if (age > 19 || 40 < age) {
        let balance = prompt('Your balance $ ?')
        if (balance >= money) {
            alert('Welocme to club')
        } else {
            alert ('You are not allowed to enter the club')
        }
    }
} else {
    alert('You are not allowed to enter the club')
}


