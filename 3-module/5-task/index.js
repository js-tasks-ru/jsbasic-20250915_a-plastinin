function getMinMax(str) {
  
  const arrayNumbers = str.split(' ').filter((value) => isFinite(value));
  
  switch (arrayNumbers.length) {
    case 0:
      arrayNumbers.push(0); // значение по умолчанию
      break; 
    case 1: 
      break;
    default: 
      arrayNumbers.sort((a, b) => a - b);
  }

  return {
    min: +arrayNumbers[0],      // shift()исключен для обработки ситуации  
    max: +arrayNumbers.pop(),   // когда в строке одно числовое значение
  };

}
