//Creating an object container for all the DOM elements
const elements = {
    drums: document.querySelectorAll('.drums div'),
    //sounds
    clap: document.getElementById('clap'),
    boom: document.getElementById('boom'),
    hihat: document.getElementById('hihat'),
    kick: document.getElementById('kick'),
    openHat: document.getElementById('open-hat'),
    ride: document.getElementById('ride'),
    snare: document.getElementById('Snare'),
    tink: document.getElementById('tink'),
    tom: document.getElementById('tom'),
    board: document.querySelector('.container')

}
//randomly generating colors as a box shadows when clicking in drums
//creating a colors object
const colors = {
    FusionRed: '#fc5c65',
    orangeHibiscus: '#fd9644',
    flirTatious: '#fed330',
    reptileGreen: '#26de81',
    lighterPurple: '#a55eea',
    heighBlue: '#45aaf2'
}
//we generate a random number from 1 to 6 (we have 6 colors in our object) 
const boxShadowCus = '1vh 1vh 4vh';
const colorValues = Object.values(colors);
const trash = []

//eventListeners
elements.drums.forEach(drum => {
    drum.addEventListener('click', playDrum)
    drum.addEventListener('mouseout', () => {
        removeColor(drum)
    })
})

function playDrum(e) {
    const drumClass = e.target.className
    switch(drumClass){
        case 'clap' :
            soundPlayer(elements.clap); 
            renderColor(elements.drums, 'clap')
            break;
        case 'hithat':
            soundPlayer(elements.hihat);
            renderColor(elements.drums, 'hithat')
            break;
        case 'kick':
            soundPlayer(elements.kick)
            renderColor(elements.drums, 'kick')
            break
        case 'openhat':
            soundPlayer(elements.openHat);
            renderColor(elements.drums, 'openhat')
            break;
        case 'boom':
            soundPlayer(elements.boom);
            renderColor(elements.drums, 'boom')
            break;
        case 'ride':
            soundPlayer(elements.ride);
            renderColor(elements.drums, 'ride')
            break;
        case 'snare':
            soundPlayer(elements.snare);
            renderColor(elements.drums, 'snare')
            break;
        case 'tom':
            soundPlayer(elements.tom);
            renderColor(elements.drums, 'tom')
            break;
        case 'tink':
            soundPlayer(elements.tink);
            renderColor(elements.drums, 'tink')
            break;         
    }
    // visualEffects()
}

function soundPlayer(drumSound){
    drumSound.currentTime = 0;
    drumSound.play()
    
}

function renderColor(divs, drumClass) {
    let randomColsIds = Math.floor(Math.random() * 7)
    let colorStyle = colorValues[randomColsIds]

    divs.forEach(div => {
        if (div.classList.contains(drumClass)){
            div.style.boxShadow = boxShadowCus + colorStyle;
        }
        else {
            div.style.boxShadow = null
        }
    })
    visualEffects(colorStyle)
}

function removeColor(drum) {
    drum.style.boxShadow = null
}

function visualEffects(color) {
    const vis = document.createElement('div')
    vis.className = 'visual-eff'
    elements.board.appendChild(vis)
    vis.style.backgroundColor = color
    setTimeout(removeColorVisualEffect, 1200, vis)
    trash.push(vis)
    trash.splice(vis, 1)
}
function removeColorVisualEffect(vis){
    vis.parentElement.removeChild(vis)
}