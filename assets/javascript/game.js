//declare beginning variables
var wordBank=["pumpkin", "trick", "treat", "candy", "mask", "spooky", "scary", "monster", "witch", "ghost", "frankenstein", "ghoul", "goblin", "skeleton", "cemetery", "phantom", "vampire", "mummy", "werewolf"];
var triesLeft= 9; 
var winTotal= 0;
var lossTotal= 0;
var lettersGuessed

alert("Try to guess the word!");

//put starting variables into HTML dynamically using getElementById and .innerHTML

document.getElementById("guessLeft").innerHTML = "<p>Tries remaining: </p>" + triesLeft;

document.getElementById("winTotal").innerHTML = "<p>Wins: </p>" + winTotal;

document.getElementById("lossTotal").innerHTML = "<p>Losses: </p>" + lossTotal;

//declare a variable to stand-in for the random word
var hangWord;
// create function to select a random word from wordBank array and set as hangWord variable
function wordPicker() 
	{
 		hangWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		console.log('hangword = ' + hangWord);
	};
//call wordPicker function
wordPicker();

//create array for characters of hangWord variable
var hangWordArray = [];
//turn hangWord into an array
function wordConverter ()
	{
	for (var i=0; i<hangWord.length; i++)
		{
			hangWordArray.push(hangWord.charAt(i));
			//logged to console as a test to make sure the array was populating correctly	
			console.log(hangWordArray[i]);
		}
	};
//call wordConverter function
wordConverter();

//create array to push underscores into
var blankSpacesPlaceHolder = [];

//push underscores into existing placeholder
function createBlanks() 
	{
		for (var i=0; i<hangWord.length; i++)
		{
			blankSpacesPlaceHolder.push('_');
		}
		document.getElementById('currentWord').innerHTML = blankSpacesPlaceHolder;
	};
//call placeholder function
createBlanks();

//create global variable for key pressed by user
var userPressed;
//create event to recognize key pushed by user
document.onkeyup = function (event)//Brian helped with this, I don't understand why this function takes event as an argument 
	{
		userPressed = event.key
		console.log(userPressed)
		triesLeft--
		document.getElementById("guessLeft").innerHTML = "<p>Tries remaining: </p>" + triesLeft;
		//create a for loop to check userPressed for each letter of hangWord corresponding to the hangWordArray;
for (var i= 0; i < hangWordArray.length; i++)
	{ 
		//if userPressed is equal to character value in the index value of the corresponding iteration of loop, insert userPressed into blankSpacesPlaceHolder array
		if (hangWordArray[i] == userPressed)
		{
			//create function to insert userPressed character into html element
			function insertLetter()
				{
					//change the value of the array index value equal to current iteration blank space to the value of userPressed
					blankSpacesPlaceHolder[i] = userPressed;
					//print the new value of blankSpacesPlaceHolder (with correct guess value) into HTML
				};
			//call function insertLetter
			insertLetter();
			document.getElementById('currentWord').innerHTML = blankSpacesPlaceHolder;
		}
	};	
	};
//----------------------script above works---------------------------//


//create condition to increase wins and losses; would be part of larger loop, but I can't get my game to work 
//if (hangWordArray === blankSpacesPlaceHolder){winTotal++};
//else if (triesLeft = 0) {alert('Game Over') lossTotal++};
