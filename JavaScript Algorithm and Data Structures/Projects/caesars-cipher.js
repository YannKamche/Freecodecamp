function rot13(str) {
  // Split the string into an array of characters
  return str.split('').map(char => {
    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Use ASCII values to perform the ROT13 transformation
      const charCode = char.charCodeAt(0);
      const decodedCharCode = charCode >= 65 && charCode <= 90 ? ((charCode - 65 + 13) % 26) + 65 : charCode;
      return String.fromCharCode(decodedCharCode);
    } else {
      // Pass non-alphabetic characters unchanged
      return char;
    }
  }).join('');
}

// Test cases
console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));    // Output: "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));     // Output: "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
