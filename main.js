function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Example usage:
let inputString = "hello world how are you";
let result = capitalizeFirstLetter(inputString);
console.log(result); // Output: "Hello World How Are You"