// 1.  Знайдіть суму всіх цифр від 1 до 100.
document.write('Задача 1: Знайдіть суму всіх цифр від 1 до 100' + '<br>');
let sum = 0;

for (i = 1; i <= 100; i++) {
  sum += i;
};
document.write(sum);

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
document.write('<br>' + '<br>' + 'Задача 2: Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран' + '<br>');
let arr = [1, 2, 3, 4, 5];

for (j = 0; j < arr.length; j++) {
  document.write(arr[j] + '<br>');
};

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
document.write('<br>' + 'Задача 3: Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення' + '<br>');

let arr2 = [-1, 22, 3, 44, 5];
let maxNum = 0;

for (k = 0; k < arr2.length; k++) {
  if (maxNum < arr2[k]) {
    maxNum = arr2[k];
  }
};
document.write(maxNum);


// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. 
// Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера. 
document.write('<br>' + '<br>' + 'Задача 4: Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів.' + '<br>' + 'Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера' + '<br>');
let userNum = prompt('Введіть через кому вісім чисел, включно з від`ємними числами та нулями');
let arrNum = userNum.split(',');
let positive = [];
let negative = [];
let zero = [];

for (l = 0; l < arrNum.length; l++) {
  if (arrNum[l] > 0) {
    positive.push(arrNum[l])
  } else if (arrNum[l] < 0) {
    negative.push(arrNum[l])
  } else if (arrNum[l] == 0) {
    zero.push(arrNum[l])
  }
};

document.write('<br>' + `Ви ввели такі числа: ${userNum}` + '<br>');
document.write(`Додатні числа: ${positive}, Всього додатніх чисел: ${positive.length}` + '<br>');
document.write(`Від'ємні числа: ${negative}, Всього від'ємних чисел: ${negative.length}` + '<br>');
document.write(`Всього нулів: ${zero.length}` + '<br>');

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
document.write('<br>' + '<br>' + 'Задача 5: Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8' + '<br>');

let x = 8,
    y = 1;
while (y <= 9) {
  z = x * y;
  document.write(x + 'x' + y + '=' + z + '<br>');
  y++;
}

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. 
// З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.
document.write('<br>' + 'Задача 6: Є масив з елементами 2, 5, 9, 15, 0, 4.' + '<br>' + 'З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.' + '<br>');

let oneMoreArr = [2, 5, 9, 15, 0, 4];

for (n = 0; n < oneMoreArr.length; n++) {
  if (oneMoreArr[n] > 3 && oneMoreArr[n] < 10) 
    document.write(oneMoreArr[n] + '<br>');
};

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , 
// провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?
document.write('<br>' + 'Задача 7: Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак ,' + '<br>' + 'провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?' + '<br>');
let calk;

do {
  let firstNum = +prompt('Введіть перше число');
  let secondNum = +prompt('Введіть друге число');
  let sign = prompt('Введіть дію: +, -, * або /');

  switch (sign) {
    case '+': 
      alert(`Результат: ${firstNum + secondNum}`);  
      break;
    case '-': 
      alert(`Результат: ${firstNum - secondNum}`);  
      break;
    case '*': 
      alert(`Результат: ${firstNum * secondNum}`);  
      break;
    case '/': 
      alert(`Результат: ${firstNum / secondNum}`);  
      break;
    default: alert('Ой лишенько, шос не те!');
  }
  calk = confirm('Бажаєте ще поюзати калькулятор?')

} while (calk === true);
