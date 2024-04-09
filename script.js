/* const answer = Math.floor(Math.random() * 10 + 1)
let guess = 0

document.getElementById('sm').onclick =
	function () {
		gues = document.getElementById('gf').value
		guess += 1

		if (gues == answer) {
			alert(`${answer} is the number. it took you ${guess}  guesses`)
		} else if (gues < answer) {
			alert('too small')
		} else {
			alert('too large')
		}
	} /
	function tocelsius(temp) {
		return (temp - 32) * (5 / 9)
	}

function tofarenheit(temp) {
	return (temp * 9) / 5 + 32
}

document.getElementById('sub').onclick = function () {
	let temp

	if (document.getElementById('c').checked) {
		temp = document.getElementById('tb').value
		return (document.getElementById('ans').innerHTML = tocelsius(temp) + "'c")
	} else if (document.getElementById('f').checked) {
		temp = document.getElementById('tb').value
		return (document.getElementById('ans').innerHTML = tofarenheit(temp))
	} else {
		document.getElementById('ans').innerHTML = 'select a unit'
	}
}

let canvas = document.getElementById('mycanvas')
let context = canvas.getContext('2d')
context.fillStyle = 'lightblue'
context.beginPath()
context.arc(250, 250, 220, 0, 2 * Math.PI)
context.fill()

context.stroke()
 */
/* document.cookie = "firstName=SpongeBob;  */

const timeDisplay = document.querySelector('#timeDisplay')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resetBtn = document.querySelector('#resetBtn')

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let hrs = 0
let mins = 0
let secs = 0
let milsec = 0

startBtn.addEventListener('click', () => {
	if (paused) {
		paused = false
		startTime = Date.now() - elapsedTime
		intervalID = setInterval(updateTime, 75)
	}
})
pauseBtn.addEventListener('click', () => {
	if (!paused) {
		paused = true
		elapsedTime = Date.now() - startTime
		clearInterval(intervalID)
	}
})
resetBtn.addEventListener('click', () => {
	paused = true
	clearInterval(intervalID)
	startTime = 0
	elapsedTime = 0
	currentTime = 0
	hrs = 0
	mins = 0
	secs = 0
	milsec = 0
	timeDisplay.textContent = '00:00:00:00'
})

function updateTime() {
	elapsedTime = Date.now() - startTime
	milsec = Math.floor((elapsedTime / (1000 / 100)) % 100)
	secs = Math.floor((elapsedTime / 1000) % 60)
	mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
	hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

	milsec = pad(milsec)
	secs = pad(secs)
	mins = pad(mins)
	hrs = pad(hrs)

	timeDisplay.textContent = `${hrs}:${mins}:${secs}:${milsec}`

	function pad(unit) {
		return ('0' + unit).length > 2 ? unit : '0' + unit
	}
}

const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const choiceBtns = document.querySelectorAll('.choiceBtn')
let player
let computer
let result

choiceBtns.forEach((button) =>
	button.addEventListener('click', () => {
		player = button.textContent
		computerTurn()
		playerText.textContent = `Player: ${player}`
		computerText.textContent = `Computer: ${computer}`
		resultText.textContent = checkWinner()
	})
)
/* 
function computerTurn() {
	const randNum = Math.floor(Math.random() * 3) + 1
	switch (randNum) {
		case 1:
			computer = 'ROCK'
			break
		case 2:
			computer = 'PAPER'
			break
		case 3:
			computer = 'SCISSORS'
			break
	}
}

function checkWinner() {
	if (player == computer) {
		return 'Draw!'
	} else if (computer == 'ROCK') {
		return player == 'PAPER' ? 'YOU WIN!' : 'You Lose!'
	} else if (computer == 'PAPER') {
		return player == 'SCISSORS' ? 'YOU WIN!' : 'You Lose!'
	} else if (computer == 'SCISSORS') {
		return player == 'ROCK' ? 'YOU WIN!' : 'You Lose!'
	}
}

const cells = document.querySelectorAll('.cell')
const statusText = document.querySelector('#statusText')
const restartBtn = document.querySelector('#restartBtn')
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

let options = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let running = false

initializeGame()

function initializeGame() {
	cells.forEach((cell) => cell.addEventListener('click', cellClicked))
	restartBtn.addEventListener('click', restartGame())
	statusText.textContent = `${currentPlayer}'s turn`
	running = true
}
function cellClicked() {
	const cellIndex = this.getAttribute('cellindex')
	if (options[cellIndex] != '' || !running) {
		return
	}
	updateCell(this, cellIndex)
	checkVictor()
}
function updateCell(cell, index) {
	options[index] = currentPlayer
	cell.textContent = currentPlayer
}
function changePlayer() {
	currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
	statusText.textContent = `${currentPlayer}'s turn`
}
function checkVictor() {
	let roundWon = false
	for (let i = 0; i < winConditions.length; i++) {
		const Condition = winConditions[i]
		const cellA = options[Condition[0]]
		const cellB = options[Condition[1]]
		const cellC = options[Condition[2]]

		if (cellA == '' || cellB == '' || cellC == '') {
			continue
		}
		if (cellA == cellB && cellB == cellC) {
			roundWon = true
			break
		}
	}

	if (roundWon) {
		statusText.textContent = `${currentPlayer} wins!`
		running = false
	} else if (!options.includes('')) {
		statusText.textContent = `Draw!`
		running = false
	} else {
		changePlayer()
	}
}

function restartGame() {
	currentPlayer = 'X'
	options = ['', '', '', '', '', '', '', '', '']
	cells.forEach((cell) => (cell.textContent = ''))
	running = true
	restartBtn.addEventListener('click', initializeGame)
}
 */