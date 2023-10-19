function reverseWords(sentence) {
    function reverseString(str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

    const words = [];
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (char === ' ' || i === sentence.length - 1) {
            // End of a word, reverse it and add to the words array
            if (i === sentence.length - 1) {
                currentWord += char;
            }
            words.push(reverseString(currentWord));
            currentWord = '';
        } else {
            currentWord += char;
        }
    }

    // Join the reversed words to form the reversed sentence
    const reversedSentence = words.join(' ');

    return reversedSentence;
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); 
