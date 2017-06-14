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

  convert(number){
    return (number * 1E-2) / 1E-3;
  }
}

class MassConverter extends Converter {

  convert(number){
    return number / 1E3;
  }
}

class TimeConverter extends Converter {

  convert(number){
    return number / 60;
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

let length = 10;
// let length = '10';
// let length = [10, 11];
// let length = ['10', '11'];

let result1 = Converter.createConverter(conversion1).convert(length);
console.log(result1);
let result2 = Converter.createConverter(conversion2).convert(length);
console.log(result2);
let result3 = Converter.createConverter(conversion3).convert(length);
console.log(result3);