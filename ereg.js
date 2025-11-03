function testRegex(pattern, input) 
{ 
    const regex = new RegExp(pattern); 
    return regex.test(input); 
} 


