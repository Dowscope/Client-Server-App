
// Connect to the server
const socket = io('localhost:53002')
socket.on('connect', () => {
})

// GameState Object
const gameState = {
  drops: []
}

function drop() {
  socket.emit('drop')
}

function showInfo() {
  socket.emit('show')
}

function registerName() {
  const userName = document.getElementById('userName').value
  socket.emit('hello', {
    name: userName
  })
}

function createDrop() {
  const element = createDropElement()
  const drop = {
    id: Date.now() + Math.random(),
    element,
    location: {
      x: window.innerWidth * Math.random(),
      y: -200,
    },
    velocity: {
        x: Math.random() * (Math.random() > 0.5 ? -1 : 1) * 3,
        y: 1 + Math.random() * 2,
    },
    landed: false,
  }
  drops.push(drop)
  document.body.appendChild(element);
  updateElementLocation(drop);
}

function createDropElement()
{
    const element = document.createElement('div');
    element.className = 'drop';
    element.innerHTML = `
        <img class="icon" src="./images/rabbit.png">
    `
    return element;
}

function updateElementLocation(drop) {
  drop.element.style.top = drop.location.y + 'px';
  drop.element.style.left = drop.location.x - (drop.element.clientWidth / 2) + 'px';
}



init()