const input = 'ab,cd@yz ?:AB-ZD'; // Define input to encode
let charCodes = []; // Create an array to store ascii codes of each character in input

for (let i = 0; i < input.length; i++) { // Iterate through input string
    charCodes.push(input.charCodeAt(i)); // find ascii code or current character and push code into the array
}

function shifter(value) { // Create a function to shift code by 15
    let output; // Create a variable to store computation results in
    if (value >= 97 && value <= 122) { // Check is character is between a-z add 15 to the code value
        output = value + 15;
        if (output > 122) { // If new value is higher than maximum number in range we'll need to take away 26 (number of letters in alphabet)
            output = output - 26;
            return output
        } else { // Otherwise return new code
            return output
        }
    } else if (value >= 65 && value <= 90) { // Check is character is between A-Z add 15 to the code value
        output = value + 15;
        if (output > 90) { // If new value is higher than maximum number in range we'll need to take away 26 (number of letters in alphabet)
            output = output - 26;
            return output
        } else {
            return output // Otherwise return new code
        }
    } else { // If code is not in a-z or A-Z range return original code
        return value
    }
}

let encodedMessage = ''; // Create a variable to store encoded string in

for (let j = 0; j < charCodes.length; j++) { // Iterate through character code array
    encodedMessage += String.fromCharCode(shifter(charCodes[j])) // Pass current code value into shifter function and add outcome to outcome variable
}

console.log(encodedMessage); // Log encoded message to the console