//EVENTS
anime({
  targets: 'body',
  easing: 'linear',
  duration: 550,
  opacity: 1,
});

//variables
let functionsArray = [popularFilter, environmentFilter, housingFilter, educationFilter, foodFilter, healthFilter];
let boxes = document.getElementsByClassName('swipeItem');
let swipeX1;
let swipeX2;
let swipeDiff;
let swipeTotal = 1;
let swipeTargetL = boxes.length;
let swipeTargetL2 = swipeTargetL - 1;
let swipeTargetR = swipeTotal + 1;
let swipeTargetR2 = swipeTargetR + 1;
//animation timing
let leftNav = function() {
  let tlr = anime.timeline({
    easing: 'easeInOutBack',
    duration: 600
  });

  //animation frames

  tlr
    .add({
      targets: `#cat${swipeTotal}`,
      translateX: 120,
      opacity: .5,
      "font-size": ".8em",
      "color": "rgba(85,88,167,.5)",
      "z-index": "3",
    }, 10)
    .add({
      targets: `#cat${swipeTargetR}`,
      opacity: 0,
      "z-index": "1",
    }, 10)
    .add({
      targets: `#cat${swipeTargetL}`,
      translateX: 0,
      opacity: 1,
      "font-size": "1.2em",
      "color": "rgb(85,88,167)",
      "font-weight": "bold",
      "z-index": "3",
    }, 10)
    .add({
      targets: `#cat${swipeTargetL2}`,
      translateX: -120,
      opacity: .5,
      "font-size": ".8em",
      "color": "rgba(85,88,167,.5)",
      "z-index": "2",

    }, 10);

  document.getElementById(`cat${swipeTargetL}`).removeEventListener('click', leftNav);

  document.getElementById(`cat${swipeTargetR}`).removeEventListener('click', rightNav);

  swipeTotal--;
  swipeTargetR--;
  swipeTargetR2--;
  swipeTargetL--;
  swipeTargetL2--;

  if (swipeTotal === 2) {
    swipeTargetL2 = boxes.length;
  }
  else if (swipeTotal === 1) {
    swipeTargetL = boxes.length;
  }
  else if (swipeTotal < 1) {
    swipeTotal = boxes.length;
  }
  else if (swipeTargetR2 === 1) {
    swipeTargetR = boxes.length;
  }
  else if (swipeTargetR2 < 1) {
    swipeTargetR2 = boxes.length;
  }
  functionsArray[swipeTotal - 1]();


  document.getElementById(`cat${swipeTargetL}`).addEventListener('click', leftNav);

  document.getElementById(`cat${swipeTargetR}`).addEventListener('click', rightNav);

  console.log('swipe right');
  console.log(swipeTargetL2, swipeTargetL, swipeTotal, swipeTargetR, swipeTargetR2);
};
//animation timing
let rightNav = function() {
  let tll = anime.timeline({
    easing: 'easeInOutBack',
    duration: 600
  });

  //animation frames
  tll

    .add({
      targets: `#cat${swipeTotal}`,
      translateX: -120,
      opacity: .5,
      "font-size": ".8em",
      "color": "rgba(85,88,167,.5)",
      "z-index": "3",
    }, 10)
    .add({
      targets: `#cat${swipeTargetL}`,
      opacity: 0,
      "z-index": "1",
    }, 10)
    .add({
      targets: `#cat${swipeTargetR}`,
      translateX: 0,
      opacity: 1,
      "font-size": "1.2em",
      "color": "rgb(85,88,167)",
      "font-weight": "bold",
      "z-index": "3",

    }, 10)
    .add({
      targets: `#cat${swipeTargetR2}`,
      translateX: 120,
      opacity: .5,
      "font-size": ".8em",
      "color": "rgba(85,88,167,.5)",
      "z-index": "2",

    }, 10),

    document.getElementById(`cat${swipeTargetL}`).removeEventListener('click', leftNav);

  document.getElementById(`cat${swipeTargetR}`).removeEventListener('click', rightNav);

  swipeTotal++;
  swipeTargetR++;
  swipeTargetR2++;
  swipeTargetL++;
  swipeTargetL2++;

  if (swipeTotal === boxes.length - 1) {
    swipeTargetR2 = 1;
  }
  else if (swipeTotal === boxes.length) {
    swipeTargetR = 1;
  }
  else if (swipeTotal > boxes.length) {
    swipeTotal = 1;
  }
  else if (swipeTargetL2 === boxes.length) {
    swipeTargetL = 1;
  }
  else if (swipeTargetL2 > boxes.length) {
    swipeTargetL2 = 1;
  }
  functionsArray[swipeTotal - 1]();


  document.getElementById(`cat${swipeTargetL}`).addEventListener('click', leftNav);

  document.getElementById(`cat${swipeTargetR}`).addEventListener('click', rightNav);


  console.log('swipe left');
  console.log(swipeTargetL2, swipeTargetL, swipeTotal, swipeTargetR, swipeTargetR2);
};

anime({
  targets: `#cat${swipeTargetL}`,
  translateX: -120,
  opacity: .5,
  "font-size": ".8em",
  "color": "rgba(85,88,167,.5)",
  "z-index": "1",
});
anime({
  targets: `#cat${swipeTargetR}`,
  translateX: 120,
  opacity: .5,
  "font-size": ".8em",
  "color": "rgba(85,88,167,.5)",
  "z-index": "1",
});
anime({
  targets: `#cat${swipeTotal}`,
  opacity: 1,
  "font-size": "1.2em",
  "color": "rgb(85,88,167)",
  "font-weight": "bold",
  "z-index": "1",
});


//caluculate starting point
document.getElementById('content').addEventListener('touchstart', function(e) {
  swipeX1 = e.touches[0].screenX;
});

document.getElementById('content').addEventListener('touchend', function(e) {
  //calculate ending point
  swipeX2 = e.changedTouches[0].screenX;
  //calculate if swipe was left or right
  swipeDiff = swipeX1 - swipeX2;
  //if it was a left swipe
  if (swipeDiff > 20) {
    rightNav();
  }

  //if it was a right swipe
  else if (swipeDiff < -20) {
    leftNav();
  }
});


document.getElementById(`cat${swipeTargetL}`).addEventListener('click', leftNav);

document.getElementById(`cat${swipeTargetR}`).addEventListener('click', rightNav);