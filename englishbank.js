var confirmButtonCustomeMode = document.getElementById('confirmButtonCustomeMode');
var startButtonWelcomeScreen = document.getElementById('startButtonWelcomeScreen')
var welcomeScreenInscription = document.getElementById('welcomeScreenInscription')
var inputWordsScreenCustomeMode = document.getElementById('inputWordsScreenCustomeMode')
var gameScreen = document.getElementById('gameScreen');
var modeName = document.getElementById('modeName');


var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var buttonUnit1 = document.getElementById('buttonUnit1');
var buttonUnit2 = document.getElementById('buttonUnit2');
var buttonUnit3 = document.getElementById('buttonUnit3');
var buttonUnit4 = document.getElementById('buttonUnit4');
var buttonCustomeMode = document.getElementById('buttonCustomeMode');
var wordsString;
var points = 0;
var attempt = 0;


var unit1 = 'advantage-преимущество, animation-анимация, appliance-прибор, appropriate-подходящий, attachment-приложение, benefit-польза, boardroom-зал заседаний, clipart-клипарт, computer output-данные вывода, connectivity-связь, customer-заказчик, device-устройство, efficiency-эффективность, endure-терпеть, engine-двигатель, environment-окружающая среда, equipment-оборудование, expansion card-карта расширения, forwarding-пересылка, FTP-протокол передачи данных, graphical interface-графический интерфейс, handheld computer-ручной компьютер, hard disk-жесткий диск, information superhighway-информационная магистраль, interior designer-дизайнер интерьера, inventory-инвентарь, landscape-пейзаж, opportunity-возможность, password-пароль, relevance-актуальность, remote-дистанционный пульт, research-исследование, security system-система безопасности, significantly-существенно, sophisticated-утонченный, storage device-устройство хранения, supervision-наблюдение, to  determine-определять, to  encourage-поощрять, to  perform-исполнять, to download-скачивать, to enhance-усиливать, to log on-войти в систему, to require-требовать, to stay in touch-быть на связи, to upload-загружать, word processor-текстовой редактор';
var unit2 = 'adjacent-соседний, appointment-деловая встреча, binary system - двоичная система исчисления, bottleneck-препятствие, cache-кэш, cache hit-удачное обращение в кэш, capacity-вместимость, coherency-связность, computer motherboard-материнская плата, crash-крушить, decimal system-десятичнаяй система исчисление, electricity supply-электроснабжение, external-внешний, format-форматировать, handheld-ручной, headphones-наушники, loudspeaker-колонки, mainframe-большая ЭВМ, multimedia feature-особенности мультимедиа, multi-tasking-многозадачный, nuclear research-ядерный исследования, storage medium-носитель данных, portable-портативный, power failure-отключение электричества, power cord-зарядное устройство, processor-процессор, rotate-вращается, to attach-прикреплять, slow up-замедлять, system bus-системная шина, speed up-ускорять, suitable-совместимый,  personal digital assistant-КПК, to measure-измерять, versatile-многосторонний, versatility-многосторонность, viewable-видимый';
var unit3 = 'advantage-преимущество, application-приложение, approximate-приблизительный, attach-прикреплять, back up-резервное копирование, built in-встраивать, carbon paper-копировальная бумага, commonly known-широко известный, comparison-сравнение, dedicated-преданный, directly-непосредственно, dot matrix printer-матричный принтер, drawback-недостаток, droplets-капли, employ-использовать, feedback-обратная связь, improvement-улучшение, inappropriate-несоответствующий, ink-jet-струйная печать, inkless printer-бесчернильный принтер, keypad-клавиатура, keystroke-нажатие клавиши, layer-слой, layout-макет, LCD (Liquid Crystal Display)-жидкокристалический экран, legal documentations-правовая документация, peripheral device-перефирийное устройство, pixel-пиксель, power hungry-энергоемкий, precise dots-точные точки, primarily-в первую очередь, raster-растр, resolution-разрешение, reveal-выявить, sensitive-чувствительность, significant-значительное, simultaneously-одновременно, substantial-значительный, sufficient-достаточный, technology-технология, convert-конвертировать, enter-ввод, superimpose-накладывать, typewriter-печатная машинка, vector-based artwork-векторное искуство, versatile disk-универсальный диск, visual aid-визуальная помощь, warm-up time-время прогрева, wireless-безпроводной';
var unit4 = 'accountant-бухгалтер, accounting-подсчет, appliance-прибор, artificial intelligence-искуственный интелект, cleanse data-очистить данные, cluster-кластер, data mining-сбор данных, decision tree-древо решений, erroneous-ошибочный, fraud-мошенничество, general purpose-общие цели, grading-профилирование, income tax-подоходный налог, insurance claim-страховое возмещение, irrelevant-не имеет значение, leisure activities-досуг, life threatening-опасный для жизни, maintenance-техническое обслуживание, offline storage-оффлайн хранилище, online storage-онлайн хранилище, personal computers-персональный компьютер, raw data-необработанные данные, record keeping-учет, relevance-актуалный, scheduling-планирование, security-безопасность, sequence-последовательность, smart card-умная карта, stand alone-автономный, stock market forecasting-прогнох фондрынка, telephone dialling-телефонная связь, to remove-удалять, to delete-удалять, to ensure-обеспечивать, to fall by the wayside-терпеть неудачу, to meet the demands-удовлетворять потребности, to plug in-подключить, validity-период действия, warehouse-склад, worksheet-рабочий лист';

startButtonWelcomeScreen.onclick = function() {
	startButtonWelcomeScreen.style.display = 'none';
	gameScreen.style.display = 'block';
	inputWordsScreenCustomeMode.style.display = 'none';
	points = 0;
	attempt = 0;
	document.getElementById('pointsText').innerHTML = points + ' правильных ответов из ' + attempt;
}

buttonUnit1.onclick = function() {
	welcomeScreenInscription.style.display = 'none';
	inputWordsScreenCustomeMode.style.display = 'none';
	if(gameScreen.style.display == 'block'){
		if(confirm('Вы точно хотите закончить игру?')) {
			gameScreen.style.display = 'none';
			startButtonWelcomeScreen.style.display = 'block';
			score();
			wordsString = unit1;
			game();
			modeName.innerHTML = 'Unit 1';

		}
	} else {
		startButtonWelcomeScreen.style.display = 'block';
		wordsString = unit1;
		game();
		modeName.innerHTML = 'Unit 1';
	}
}
buttonUnit2.onclick = function() {
	welcomeScreenInscription.style.display = 'none';
	inputWordsScreenCustomeMode.style.display = 'none';
	if(gameScreen.style.display == 'block'){
		if(confirm('Вы точно хотите закончить игру?')) {
			gameScreen.style.display = 'none';
			startButtonWelcomeScreen.style.display = 'block';
			score();
			wordsString = unit2;
			game();
			modeName.innerHTML = 'Unit 2';
		}
	} else {
		startButtonWelcomeScreen.style.display = 'block';
		wordsString = unit2;
		game();
		modeName.innerHTML = 'Unit 2';
	}
}
buttonUnit3.onclick = function() {
	welcomeScreenInscription.style.display = 'none';
	inputWordsScreenCustomeMode.style.display = 'none';
	if(gameScreen.style.display == 'block'){
		if(confirm('Вы точно хотите закончить игру?')) {
			gameScreen.style.display = 'none';
			startButtonWelcomeScreen.style.display = 'block';
			score();
			wordsString = unit3;
			game();
			modeName.innerHTML = 'Unit 3';
		}
	} else {
		startButtonWelcomeScreen.style.display = 'block';
		wordsString = unit3;
		game();
		modeName.innerHTML = 'Unit 3';
	}
}
buttonUnit4.onclick = function() {
	welcomeScreenInscription.style.display = 'none';
	inputWordsScreenCustomeMode.style.display = 'none';
	if(gameScreen.style.display == 'block'){
		if(confirm('Вы точно хотите закончить игру?')) {
			gameScreen.style.display = 'none';
			startButtonWelcomeScreen.style.display = 'block';
			score();
			wordsString = unit4;
			game();
			modeName.innerHTML = 'Unit 4';
		}
	} else {
		startButtonWelcomeScreen.style.display = 'block';
		wordsString = unit4;
		game();
		modeName.innerHTML = 'Unit 4';
	}
}
buttonCustomeMode.onclick = function() {
	startButtonWelcomeScreen.style.display = 'none';
	welcomeScreenInscription.style.display = 'none';
	if(gameScreen.style.display != 'block'){
		inputWordsScreenCustomeMode.style.display = 'block';
		modeName.innerHTML = 'Costume mode';
	}
	if(gameScreen.style.display == 'block'){
		if(confirm('Вы точно хотите закончить игру?')) {
			gameScreen.style.display = 'none';
			inputWordsScreenCustomeMode.style.display = 'block';
			score();
			modeName.innerHTML = 'Custome mode';
		}
	} 
}
confirmButtonCustomeMode.onclick = function() {
	wordsString = document.getElementById('inputWordsArea').value;
	inputWordsScreenCustomeMode.style.display = 'none';
	gameScreen.style.display = 'block';
	points = 0;
	attempt = 0;
	document.getElementById('pointsText').innerHTML = points + ' правильных ответов из ' + attempt;
	game();
}

function score(){
	var coefficientOfResult = points/attempt;
	var descriptionOfResult;
	if(attempt > 5) {
		if(coefficientOfResult == 1) {
			descriptionOfResult = 'Стопроцентная готовность. Так держать.';
		} else if (coefficientOfResult < 1 && coefficientOfResult >= 0.8) {
			descriptionOfResult = 'Отлично.';
		} else if (coefficientOfResult < 0.8 && coefficientOfResult >= 0.6) {
			descriptionOfResult = 'Хорошо. Осталось доучить лишь несколько слов.';
		} else if (coefficientOfResult < 0.6 && coefficientOfResult > 0.4) {
			descriptionOfResult = 'Средний результат. Не падай духом!';
		} else if (coefficientOfResult < 0.6 && coefficientOfResult > 0.4) {
			descriptionOfResult = 'Стоит подучить!';
		} else {
			descriptionOfResult = 'Стоит задуматься';
		}
	} else {
		descriptionOfResult = 'Стоит тренировать слова большее количество раз, чем ' + attempt;
	}
	if(points == 1){
		alert(points + ' правильный ответ из ' + attempt + '.' + '\n' + descriptionOfResult);
	} else {
		alert(points + ' правильных ответа из ' + attempt + '.' + '\n' + descriptionOfResult);
	}
}
finishButtonGameScreen.onclick = function() {
	if(confirm('Вы точно хотите закончить игру?')) {
		gameScreen.style.display = 'none';
		welcomeScreenInscription.style.display = 'block';
		score();
	}
}




function game() {
	var wordsEnRu = wordsString.split(', ');
	var enWord = [];
	var ruWord = [];
	var temporaryEnRu = [];
	

	for(var i = 0; i < wordsEnRu.length; i++) {
		temporaryEnRu = wordsEnRu[i].split('-');
		enWord.push(temporaryEnRu[0]);
		ruWord.push(temporaryEnRu[1]);

	}

	var amountOfWords = enWord.length;

	if(amountOfWords < 3) {
		alert('Неправильный ввод, либо введено менее чем 3 слова');
		startButtonWelcomeScreen.style.display = 'none';
		welcomeScreenInscription.style.display = 'none';
		inputWordsScreenCustomeMode.style.display = 'block';
		if(document.getElementById('gameScreen').style.display == 'block'){
			gameScreen.style.display = 'none';
		}
		return 1;
	}


	var randomArray = [];													//array with random numbers
	randomArray[0] = Math.floor(Math.random()*amountOfWords);
	randomArray[1];
	randomArray[2];
	do {																	//make values different	
		randomArray[1] = Math.floor(Math.random()*amountOfWords);
	} while (randomArray[1] == randomArray[0]);

	do {
		randomArray[2] = Math.floor(Math.random()*amountOfWords);
	} while (randomArray[2] == randomArray[1] || randomArray[2] == randomArray[0]);

	button1.value = enWord[randomArray[0]];
	button2.value = enWord[randomArray[1]];
	button3.value = enWord[randomArray[2]];

	var ruElement = Math.floor(Math.random()*3);							//selection of the number from three existing for request
	document.getElementById('requestedWord').innerHTML = ruWord[randomArray[ruElement]];//print the requested russian word

	button1.onclick = function(){
		if(randomArray[0] == randomArray[ruElement]) {
			points += 1;
		}
		attempt += 1;
		document.getElementById('pointsText').innerHTML = points + ' правильных ответов из ' + attempt;
		game();

	};
	button2.onclick = function(){
		if(randomArray[1] == randomArray[ruElement]) {
			points += 1;
		}
		attempt += 1;
		document.getElementById('pointsText').innerHTML = points + ' правильных ответов из ' + attempt;
		game();
	};
	button3.onclick =  function(){
		if(randomArray[2] == randomArray[ruElement]) {
			points += 1;
		}
		attempt += 1;
		document.getElementById('pointsText').innerHTML = points + ' правильных ответов из ' + attempt;
		game();
	};
};