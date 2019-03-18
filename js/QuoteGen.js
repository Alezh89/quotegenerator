var beggining;
var middle;
var end;

beggining = [
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

middle = [
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

end = [
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

var endLow = end.map(function(name){	
	name = name.toLowerCase();
	return name;	
});

//get a random number between 1 and the quantaty of a designated array 
function rand(length){
	randNumber = Math.floor(Math.random() * (length));
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
	var oneQuote = beggining[rand(beggining.length)] + " " + middle[rand(middle.length)] + " " + endLow[rand(endLow.length)];
	result += "'" + oneQuote + "'<br>";	
	};	
	document.getElementById("quote").innerHTML = result;
};