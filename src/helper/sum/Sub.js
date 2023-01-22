export const sumArticles = (numbers) => {
    console.log(numbers)
    var result = 0;
    numbers.forEach(element => {
        console.log(element.price)
        result +=  element.price
    });
    return result;
}