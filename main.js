const cancelBtn = document.getElementById('cancel');
const taskDiv = document.getElementById('task-div');

cancelBtn.addEventListener('click', () => {
    taskDiv.style.display = 'none';
});

const openBtn = document.getElementById('open-button');

openBtn.addEventListener('click', () => {
    taskDiv.style.display = 'flex'
})

const saveBtn = document.getElementById('save');
const card = document.getElementById('card');

const input = document.getElementById('naziv-input');
const nazivKartice = document.getElementById('naziv-kartice');

const body = document.getElementById('body');

saveBtn.addEventListener('click', () => {

    const cardClone = document.createElement('div');
    cardClone.classList.add('card');
    cardClone.innerHTML = card.innerHTML;
    nazivKartice.textContent = input.value;
    tekstKartice.textContent = input2.value;

    cardClone.appendChild(nazivKartice);
    cardClone.appendChild(tekstKartice);
    body.appendChild(cardClone);
    cardClone.style.display = 'flex';

    taskDiv.style.display = 'none' ;
})

const input2 = document.getElementById('sadrzaj-input');
const tekstKartice = document.getElementById('tekst-kartice');
