function testRegex(pattern, input) 
{ 
    const regex = new RegExp(pattern); 
    return regex.test(input); 
} 

//tester si la chaîne contient «atari 2600» avec un espace qui sépare les 2 mots
console.log(testRegex("atari\\s2600", "console atari 2600")); // true
