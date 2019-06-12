// set 3 arrays containing parts of a quote
//Generator 1

var begginingQuote = [
'Beauty',
'Bravery',
'Brilliance',
'Brutality',
'Calmness',
'Charity',
'Coldness',
'Compassion',
'Confidence',
'Contentment',
'Courage',
'Curiosity',
'Dedication',
'Determination',
'Ego',
'Elegance',
'Enthusiasm',
'Envy',
'Evil',
'Fear',
'Generosity',
'Goodness',
'Graciousness',
'Hatred',
'Honesty',
'Honor',
'Hope',
'Humility',
'Humor',
'Insanity',
'Integrity',
'Intelligence',
'Jealousy',
'Kindness',
'Loyalty',
'Maturity',
'Patience',
'Perseverance',
'Sanity',
'Self-control',
'Sensitivity',
'Sophistication',
'Stupidity',
'Sympathy',
'Talent',
'Tolerance',
'Trust',
'Warmth',
'Weakness',
'Wisdom',
'Wit'
]

var middleQuote = [
"forms",
"leads to",
"helps with",
"starts",
"makes",
"designes",
"overcomes",
"pays with",
"never leads to",
"has nothing to do with",
"goes before",
"makes it easier to",
"takes away",
"destroys",
"means",
"is the same as",
"is more important than",
"covers"
]

var endQuote = [
'Adoration',
'Amazement',
'Anger',
'Anxiety',
'Apprehension',
'Clarity',
'Delight',
'Despair',
'Disappointment',
'Disbelief',
'Excitement',
'Fascination',
'Friendship',
'Grief',
'Happiness',
'Hate',
'Helpfulness',
'Helplessness',
'Infatuation',
'Joy',
'Love',
'Misery',
'Pain',
'Pleasure',
'Power',
'Pride',
'Relaxation',
'Relief',
'Romance',
'Sadness',
'Satisfaction',
'Silliness',
'Sorrow',
'Strength',
'Surprise',
'Tiredness',
'Uncertainty',
'Wariness',
'Weariness',
'Worry'
]

//set an array of 3 arrays where 'movie [0][x][y]' and 'movie [1][x][y]' and 'movie [2][x][y]' is a movie with its title
//Generator 2

var movies = [
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
"The Godfather",
"Star Wars",
"Taxi Driver",
"Apocalypse Now",
"The Terminator",
"Forrest Gump",
"Apollo 13",
"The Godfather II",
"Hellbound",
"The Shining",
"Terminator 2: Judgment Day",
"Dead Poets Society",
"Titanic",
"Braveheart",
"Taken",
"Star Wars Episode VII: The Force Awakens",
"Pulp Fiction",
"Goodfellas",
"Scarface",
"The Dark Knight",
"Fight Club"
],
[
"1972",
"1977",
"1976",
"1979",
"1984",
"1994",
"1995",
"1974",
"1991",
"1980",
"1991​​​​​",
"1989",
"1997",
"1995",
"2008",
"2015",
"1994",
"1990",
"1983",
"2008",
"1999"
]
];

var endQuoteLow = endQuote.map(function(name){	
	name = name.toLowerCase();
	return name;	
});

//get a random number between 1 and the quantaty of a designated array 
function randomInt(length){
	randNumber = Math.floor(Math.random() * (length));
	return randNumber;
};

//function that will give 1 to 5 quotes when the botton is clicked 
function generateQuote() {
	var numOfQuotes = document.getElementById("numOfQuotes").value;

	//limils on number of quotes indicated by user
	if (numOfQuotes > 5) {
	numOfQuotes = 5;
	} else if (numOfQuotes <= 0) {
	numOfQuotes = 1;
	};

	var result = '';
	var fancyQuotePage = document.getElementById('fancyQuote');
	var movieQuotePage = document.getElementById('movieQuote');

	//for load speed purposes I made loops inside if-else but not other way round
		if (fancyQuotePage){
			for (var i = 0; i < numOfQuotes; i++) {				
			var oneQuote = begginingQuote[randomInt(begginingQuote.length)] + " " + middleQuote[randomInt(middleQuote.length)] + " " + endQuoteLow[randomInt(endQuoteLow.length)];	
			result += "<p>'" + oneQuote + "'</p>";	
			};	
		} else if (movieQuotePage) {
			for (var i = 0; i < numOfQuotes; i++) {				
			var randNumber = randomInt(movies[0].length);
			var oneQuote = "'" + movies[0][randNumber] + "' " + movies[1][randNumber] + ', ' + movies[2][randNumber];	
			result += "<p>" + oneQuote + "</p>";		
			};
		};
	document.getElementById("quote").innerHTML = result;
};

