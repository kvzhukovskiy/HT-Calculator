var keys = document.querySelectorAll('#calculator span'); // получаем очередь нажатий
var operators = ['+', '-', 'x', '÷']; // массив для проверки нажатого оператора

// Обрабатываем нажатые клавиши в порядке очереди
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML; // Значение в поле ввода
		var btnVal = this.innerHTML; // Текущий оператор

		//Очистка поля для ввода
		if(btnVal == 'C') {
			input.innerHTML = '';
		} else if(btnVal == '=') { // В случае нажатия на равно
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.') //Если в конце есть лишняя точка или оператор, удаляем
				equation = equation.replace(/.$/, '');
			
			if(equation) // Если поле не пусто, то выполняем строку
				input.innerHTML = eval(equation);

		} else if(operators.indexOf(btnVal) > -1) { // Если это оператор, то мы можем поставить минус в самом начале 
			var lastChar = inputVal[inputVal.length - 1]; // Либо любой оператор, если это не пустая строка
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
		} else { // Если это цифра или точка, то просто добавляем в строку
			input.innerHTML += btnVal;
		}
		e.preventDefault();
	} 
}