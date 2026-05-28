function absoluteValueCalculation(number) {
    return Math.abs(number);
}
console.log(absoluteValueCalculation(-3));

function powerCalulation(base, exponent) {
    return Math.pow(base, exponent);
    }
    console.log(powerCalulation(13, 3));
   
function squareRootFinder(number) {
        return Math.sqrt(number);

    }
    console.log(squareRootFinder(15));

  function maxMinFinder(num1, num2) {
    return { max: Math.max(num1, num2), min: Math.min(num1, num2) };

  } 
  console.log(maxMinFinder(3, 13));

  function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(randomNumberGenerator(1, 113));

  function customRounding(number, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
  }
    console.log(customRounding(3.14159, 2));
  console.log(absoluteValueCalculation(-45));
  console.log(absoluteValueCalculation(67));
  console.log(powerCalulation(5, 3));
 console.log(squareRootFinder(144));
 console.log(maxMinFinder(3, 78, -12, 0.5, 27));
 console.log(randomNumberGenerator(1, 50 ));
 console.log(customRounding(23.67891, 2));
 