console.log('Hello DOM');

// Selecting Elements from DOM

const pageTitle = document.getElementById('page-title');
const subTitle = document.getElementById('subtitle');
const changeTitleBtn = document.getElementById('change-title-btn');
const colorBtn = document.getElementById('color-btn');
const addCard = document.getElementById('add-card-btn');
const clearCards = document.getElementById('clear-cards-btn');
const addCustomCards = document.getElementById('custom-cards-btn');
const cardsContainer = document.getElementById('cards-container');
const customTextInput = document.getElementById('custom-text-input')

changeTitleBtn.addEventListener('click', () => {
        if(pageTitle.innerText === 'DOM Manipulation Playground')
        {
            pageTitle.innerText = 'DOM In Action';
            subTitle.innerText = 'Nice Job, JS Changed it...'
        } else {

            pageTitle.innerText = 'DOM Manipulation Playground';
            subTitle.innerText = 'Click the button below to see the dom in action';
        }
});

colorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = randomColor;

});

// Helper function to create a card

function createCard(text) {
    const card = document.createElement('div');
    card.className = 'card';

    const content = document.createElement('p');
    content.innerText = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete Card';

    deleteBtn.addEventListener('click', () => {
        card.remove();
    });

    card.appendChild(content);
    card.appendChild(deleteBtn);

    return card;
}

//-------------Add Card Btn Fuctionality-------//

addCard.addEventListener('click', () => {
    const card = createCard('Dynamically created card');
    cardsContainer.appendChild(card);

});

//----------Add a custom text------------//

addCustomCards.addEventListener('click', () => {
    const value = customTextInput.value.trim();
    if (!value) return;

    const card = createCard(value);
    cardsContainer.appendChild(card);
    customTextInput.value = '';
});




//-----------Clear All Cards------------//

clearCards.addEventListener('click', () => {
    cardsContainer.innerHTML = '';
});

//-----------Some custom code------------//

const myBtn = document.getElementById('clickMe');
const changeColorBtn = document.getElementById('changeMyColor');
const resetBtn = document.getElementById('resetBtn');


myBtn.addEventListener('mouseenter', () => {
  // Code to execute when the mouse enters the element
  myBtn.style.backgroundColor = 'lightblue';
  myBtn.style.position = 'absolute';

  let tPosition = '200px';
  let lPosition = '300px';
  myBtn.style.top = tPosition;
  myBtn.style.left = lPosition;

  myBtn.innerText = 'Woww That was close...'
});

myBtn.addEventListener('mouseleave', () => {
  // Code to execute when the mouse enters the element
  myBtn.style.backgroundColor = 'lightblue';
  myBtn.style.position = 'absolute';

  let tPosition = '300px';
  let lPosition = '500px';
  myBtn.style.top = tPosition;
  myBtn.style.left = lPosition;

  myBtn.innerText = 'Woww That was close...'
});

changeColorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
changeColorBtn.style.backgroundColor = randomColor;
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
});