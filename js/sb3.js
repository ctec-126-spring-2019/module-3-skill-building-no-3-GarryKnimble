// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1() {
    let output = ''
    output = '<p>In the heart of Holy See</p>' +
        '<p>In the home of Christianity</p>' +
        '<p>The Seat of power is in danger</p>'

    return output
}

function verse2() {
    let output = ''
    output = '<p>There´s a foe of a thousand swords</p>' +
        '<p>They´ve been abandoned by their lords</p>' +
        '<p>Their fall from grace will pave their path, to damnation</p>'

    return output
}

function verse3() {
    let output = ''
    output = '<p>Under guard of 42</p>' +
        '<p>Along a secret avenue</p>' +
        '<p>Castel Saint’Angelo is waiting</p>'

    return output
}

function verse4() {
    let output = ''
    output = '<p>Dying for salvation with dedication</p>' +
        '<p>No Capitulation, annihilation</p>' +
        '<p>Papal commendation, reincarnation</p>' +
        '<p>Heaven is your destination</p>'

    return output
}

function verse5() {
    let output = ''
    output = '<p>In the name of god</p>'

    return output
}

function chorus1() {
    let output = ''
    output = '<p>Then the 189</p>' +
        '<p>In the service of heaven</p>' +
        '<p>They’re protecting the holy line</p>' +
        '<p>It was 1527, gave their lives on the steps to heaven</p>' +
        '<p>Thy will be done!</p>'

    return output
}

function chorus2() {
    let output = ''
    output = '<p>For the grace, for the might of our lord</p>' +
        '<p>For the home of the holy</p>' +
        '<p>For the faith, for the way of the sword</p>' +
        '<p>Gave their lives so boldly<p>'

    return output
}

function chorus3() {
    let output = ''
    output = '<p>For the grace, for the might of our lord</p>' +
        '<p>In the name of his glory</p>' +
        '<p>For the faith, for the way of the sword</p>' +
        '<p>Come and tell their story again</p>'

    return output
}

function chorus4() {
    let output = ''
    output = '<p>They’re the guard of the Holy See</p>' +
        '<p>They’re the guards of Christianity</p>' +
        '<p>Their path to history is paved with salvation</p>'
    return output
}

function chorus5() {
    let output = ''
    output = '<p>Gave their lives so boldly</p>' +
        '<p>Come and tell the Swiss guards story again</p>'

    return output
}

function chorus6() {
    let output = ''
    output = '<p>For the grace, for the might of our lord</p>' +
        '<p>In the name of his glory</p>' +
        '<p>For the faith, for the way of the sword</p>' +
        '<p>Come and tell their story</p>'

    return output
}



function main() {
    let finalOutput = '' // used to build lyrics string
    finalOutput += verse1() + "<br>" +
        verse2() + "<br>" +
        chorus1() + "<br>" +
        chorus2() + "<br>" +
        chorus3() + "<br>" +
        verse3() + "<br>" +
        chorus4() + "<br>" +
        chorus1() + "<br>" +
        chorus2() + "<br>" +
        chorus3() + "<br>" +
        verse4() + "<br>" +
        verse4() + "<br>" +
        verse5() + "<br>" +
        chorus2() + "<br>" +
        chorus6() + "<br>" +
        chorus5()
    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}