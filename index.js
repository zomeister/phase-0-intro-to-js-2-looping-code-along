
// returns an array of thank you messages for each name provided to the function
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }
    return messages;
}

// invokes console.log once for each number, counting down from the number provided to zero
function countDown(i) {
    while ( i >= 0 ) {
        console.log(i);
        i--;
    }
    return;
}
