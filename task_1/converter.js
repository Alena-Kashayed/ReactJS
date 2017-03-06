class Converter {

  static createConverter({from: unit1, to: unit2}){
      if (unit1 === 'cm' && unit2 === 'mm') {
        return new LengthConverter();
      } else if (unit1 === 'g' && unit2 === 'kg') {
        return new MassConverter();
      } else if (unit1 === 's' && unit2 === 'min') {
        return new TimeConverter();
      } else {
        console.log('Unknown type');
      }
  }
}

class LengthConverter extends Converter {

  convert(...numbers){
      let outputNumbers;
      if(numbers.length > 1) {
          return outputNumbers = numbers.map((num) => {
              return typeof num === 'string' ? ((num * 1E-2) / 1E-3).toString() : (num * 1E-2) / 1E-3;
          });
      } else {
          let number = numbers[0];
          switch (typeof number) {
              case 'string': return ((number * 1E-2) / 1E-3).toString();
                  break;
              case 'number': return (number * 1E-2) / 1E-3;
                  break;
              case 'object': return outputNumbers = number.map((num) => {
                  return typeof num === 'string' ? ((num * 1E-2) / 1E-3).toString() : (num*1E-2) / 1E-3;
              });
                  break;
          }
      }
  }
}

class MassConverter extends Converter {

    convert(...numbers) {
        let outputNumbers;
        if (numbers.length > 1) {
            return outputNumbers = numbers.map((num) => {
                return typeof num === 'string' ? (num * 1E3).toString() : num * 1E3;
            });
        } else {
            let number = numbers[0];
            switch (typeof number) {
                case 'string':
                    return (number * 1E3).toString();
                    break;
                case 'number':
                    return number * 1E3;
                    break;
                case 'object':
                    return outputNumbers = number.map((num) => {
                        return typeof num === 'string' ? (num * 1E3).toString() : num * 1E3;
                    });
                    break;
                default:
                    console.log(typeof number);
            }
        }
    }
}

class TimeConverter extends Converter {

  convert(...numbers){
      let outputNumbers;
      if (numbers.length > 1){
          return outputNumbers = numbers.map((num) => {
              return typeof num === 'string' ? (num / 60).toString() : num / 60;
          });
      } else {
          let number = numbers[0];
          switch (typeof number) {
              case 'string': return (number / 60).toString();
                  break;
              case 'number': return number / 60;
                  break;
              case 'object': return outputNumbers = number.map((num) => {
                  return typeof num === 'string' ? (num / 60).toString() : num / 60;
              });
                  break;
              default: console.log(typeof number);
          }
      }
  }
}

let conversion1 = {
  from: 'cm',
  to: 'mm'
};
let conversion2 = {
  from: 'g',
  to: 'kg'
};
let conversion3 = {
  from: 's',
  to: 'min'
};

/////////     Test Data
// let inputValue = 10;
// let inputValue = '15';
let inputValue = [10, 11, 23];
// let inputValue = ['10', '11', '13'];
let a = 10;
let b = 45;
let c = 89;

let result1 = Converter.createConverter(conversion1).convert(inputValue);
console.log('Result 1 : ', result1);
let result2 = Converter.createConverter(conversion2).convert(inputValue);
console.log('Result 2 : ', result2);
let result3 = Converter.createConverter(conversion3).convert(inputValue);
console.log('Result 3 : ', result3);

let result4 = Converter.createConverter(conversion1).convert(a, b, c);
console.log('Result 4 : ', result4);
let result5 = Converter.createConverter(conversion2).convert(a, b, c);
console.log('Result 5 : ', result5);
let result6 = Converter.createConverter(conversion3).convert(a, b, c);
console.log('Result 6 : ', result6);