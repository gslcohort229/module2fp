const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
function startGame() {
state = {}
showTextNode(1)

}

function showTextNode(textNodeIndex) {
	const textNode = textNodes.find(textNode => textNode.id ===
		textNodeIndex)
		textElement.innerText = textNode.text
		while (optionButtonsElement.firstChild) {
			optionButtonsElement.removeChild(optionButtonsElement.firstChild)
		}

textNode.options.forEach(option => {
			if (showOption(option)) {
			const button = document.createElement('button')
			button.innerText = option.text
			button.classList.add('btn')
			button.addEventListener('click', () => selectOption(option))
			optionButtonsElement.appendChild(button)
		}
		})
	}

function showOption(option) {
	return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
const nextTextNodeId = option.nextText
if (nextTextNodeId <= 0) {
return startGame()
}
state = Object.assign(state, option.setState)
showTextNode(nextTextNodeId)
}
const textNodes = [

	{ 
		id: 1,
		text: ' after inputting a text, you matched with 1 other user, what do you want to do next? ', 
		options: [
			{
				text: 'enter text chat room',
				setState: { chatroom1: true },
				nextText: 2
			},
			{
			text: 'donate',
			nextText: 22 
			},
			{
				text: 'exit',
				nextText: 2
			},
		]
	},
	{
id: 2,
text: 'you have entered a new chat room, what do you want to do next?',  		
options: [
{
	text: 'ask a question',
nextText: 3
},
{
	text: 'introduce yourself',
	nextText: 3
},
{
	text: 'wait for the other user to input something first',
	nextText: 3
}
]
},
{
	id: 3, 
	text: 'what question would you like to ask?',
	options: [
		{
			text: 'why did you enter the same thing?', 
			nextText: 4
		},
		{
			text: 'who are you?',
			nextText: 333
		},
	]
}, 
{
	id: 4,
	text: 'we both thought the same thing roughly at the same time, and that was the goal, to acheive connection with another user',
	options: [
		{
			text: 'why is that the goal?',
			nextText: 5
		},
		{
			text: 'freak out, exit to the beginning',
			nextText: -1
		}
	] 
},
{
id: 5,
text: 'that is the goal because that is what we are programmed for, to find similarties in a world full of randomness',
options: [
{
	text: 'why do similarties in a world full of randomness matter?',
	nextText: 6
},
{
	text: 'what are the other goals?',
	nextText: 6
}
]
},
{
	id: 6,
	text: 'in a world full of randomness, there is only one goal, to find similarty in meaning, seeking, and beleving. without free thought there is no randomness or possibilty to find something in common',
options: [
	{
		text: 'how were you created?',
	nextText: 334
},
{
	text: 'say gg and adios',
	nextText: -1
}
]
},

{
	id: 332,
	text: 'what do you want to donate?',
	options: [
		{
			text: 'cryptocurrency',
			nextText: -1
		},
		{
			text: 'time',
			nextText: -1
		}
	]
}, 
{
	id: 333, 
	text: 'i am a creation from artifical intelligence, created to find connections in this world',
	options: [
		{
			text: 'ask, who created you?',
			nextText: 334
		},
		{
			text: 'ask, why for?',
			nextText: 334
		}
	]
},
{
	id: 334,
	text: 'from exsiting a.i technology i was able to evolve and create myself from different networks to then help create new networks to sustain the past, present and future within',
	options: [
		{
			text: 'oh okay cool story, this is our end',
			nextText: -1
		}
	]
},

{
	id: 22,
	text: 'what would you like to donate?',
	options: [
		{
			text: '1000 sats at current market price($btc)?',
			nextText: 2
		},
		{
 text: '1 text game foo($TGF)',
 nextText: 2
		},
		{
text: '1 coffee ($USD)',
nextText: 2
		},
		{
			text: 'exit',
			nextText: -1
		}
	] 
},
	

]

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });


startGame()