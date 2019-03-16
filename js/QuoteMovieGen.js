//set an array of 2 arrays where 'movie [x][x]' is a movie with its title

var movie = [
[
"I'm going to make him an offer he can't refuse.",
"May the Force be with you",
"You talking to me?", 
"I love the smell of napalm in the morning.",
"I'll be back.",
"Mama always said life was like a box of chocolates. You never know what you're gonna get.",
"Houston, we have a problem.",
"Keep your friends close, but your enemies closer.",
"You call that a hit?",
"Here's Johnny!",
"Hasta la vista, baby.",
"Carpe diem. Seize the day, boys. Make your lives extraordinary.",
"I'm king of the world!",
"They may take our lives, but they'll never take our freedom!", 
"I will look for you, I will find you, and I will kill you.", 
"Chewie, we're home.", 
"Say ‘what’ again. Say ‘what’ again, I dare you, I double dare you motherfucker, say what one more Goddamn time!",
"I mean, funny like I'm a clown? I amuse you?",
"Say hello to my little friend!", 
"Why so serious?",
"The first rule of Fight Club is: You do not talk about Fight Club." 
],
[
"The Godfather, 1972",
"Star Wars, 1977",
"Taxi Driver, 1976",
"Apocalypse Now, 1979",
"The Terminator, 1984",
"Forrest Gump, 1994",
"Apollo 13, 1995",
"The Godfather II, 1974",
"Hellbound, 1991",
"The Shining, 1980",
"Terminator 2: Judgment Day, 1991​​​​​",
"Dead Poets Society, 1989",
"Titanic, 1997",
"Braveheart, 1995",
"Taken, 2008",
"Star Wars Episode VII: The Force Awakens, 2015",
"Pulp Fiction, 1994",
"Goodfellas, 1990",
"Scarface, 1983",
"The Dark Knight, 2008",
"Fight Club, 1999"
]
];

//get a random number between 1 and the quantaty of the array 
function rand(length){
	randNumber = Math.floor(Math.random() * (length + 1));
	return randNumber;
};

//function that will give 1 to 5 quotes when the botton is clicked
function act() {
	var numOfQuotes = document.getElementById("quant").value;

	//limils on number of quotes indicated by user
	if (numOfQuotes > 5) {
	numOfQuotes = 5;
	} else if (numOfQuotes <= 0) {
	numOfQuotes = 1;
	};

	var result = '';
	for (var i = 0; i < numOfQuotes; i++) {
	var randNumber = rand(movie[0].length);
	var oneQuote = "'" + movie[0][randNumber] + "' " + movie[1][randNumber];
	result += oneQuote + "<br>";	
	};	
	document.getElementById("quote").innerHTML = result;
};
