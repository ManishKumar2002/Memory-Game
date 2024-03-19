const cards = document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
  { id: 1, image: 'Media/bat-ball.png', newAlt: 'Bat-Ball Image' },
  { id: 2, image: 'Media/bike.png', newAlt: 'Bike Image' },
  { id: 3, image: 'Media/bird.jpg', newAlt: 'Bird Image' },
  { id: 4, image: 'Media/football.jpg', newAlt: 'Football Image' },
  { id: 5, image: 'Media/rhino.png', newAlt: 'Rhino Image' },
  { id: 6, image: 'Media/tree.jpg', newAlt: 'Tree Image' },
  { id: 7, image: 'Media/football.jpg', newAlt: 'Football Image' },
  { id: 8, image: 'Media/bat-ball.png', newAlt: 'Bat-Ball Image' },
  { id: 9, image: 'Media/tree.jpg', newAlt: 'Tree Image' },
  { id: 10, image: 'Media/bike.png', newAlt: 'Bike Image' },
  { id: 11, image: 'Media/bird.jpg', newAlt: 'Bird Image' },
  { id: 12, image: 'Media/rhino.png', newAlt: 'Rhino Image' },
];

const goToLevel2Button = document.getElementById('goToLevel2');
goToLevel2Button.style.display = 'none';

const restartGame = () => {
  let toggledCard = document.getElementsByClassName('card toggled');
  imagesLinkArray.sort(() => Math.random() - 0.5);
  Object.values(toggledCard).forEach(function (el) {
    setTimeout(() => {
      el.classList.remove("toggled");
    }, 0);
  });
  toggledCardsArray.length = 0;
  move = 0;
  winCount = 0;
  movesDisplay.innerText = `Moves: ${move}`;
  let allImagesSrc = document.getElementsByClassName('card-image');
  Object.values(allImagesSrc).forEach((el, index) => {
    el.src = imagesLinkArray[index].image;
    el.alt = imagesLinkArray[index].newAlt;
    el.id = imagesLinkArray[index].id;
  });
  goToLevel2Button.style.display = 'none';
};
restart.addEventListener('click', restartGame);


const goToLevel2 = () => {
  alert('Congratulations! Level 1 completed. Going to Level 2.');

  window.location.href = 'level2.html';
};
goToLevel2Button.addEventListener('click', goToLevel2);

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function () {
    this.classList.add("toggled");
    toggledCardsArray.push(this);
    let thisImgSrc = this.querySelector('.card-image').src;
    let previousImgSrc =
      toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
    if (thisImgSrc !== previousImgSrc) {
      toggledCardsArray.forEach(function (el) {
        setTimeout(() => {
          el.classList.remove("toggled");
        }, 500);
      });
      toggledCardsArray.length = 0;
      move++;
    } else {
      toggledCardsArray.length = 0;
      move++;
      winCount++;
    }
    movesDisplay.innerText = `Moves: ${move}`;
    if (winCount === 6) {
      setTimeout(() => {
        alert(`Congratulations!!! You won Level 1 in ${move} moves.`);
        goToLevel2Button.style.display = 'inline-block';
      }, 300);
    }
  });
}
