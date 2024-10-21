const addNumber = (...numbers) => {
    let sum = 0;
   //Change to map function
   numbers.map((v) => sum+= v)
    return sum;
}

export default addNumber