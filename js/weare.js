var currentUser;
// =================
//   SIGN UP
// =================
// Class constructor for Users
class User {
  constructor(email, password, firstName, lastName, address) {
    this.email = document.getElementById('email').value;
    this.password = document.getElementById('password').value;
    this.firstName = document.getElementById('firstName').value;
    this.lastName = document.getElementById('lastName').value;
    this.organization = document.getElementById('organization').value;
    this.profilePic = document.getElementById('profilePic').files[0].name;
    this.currentEvents = [1, 2, 3, 4];
  }
}
// Class of volunteer allows the user to track rewards
class Volunteer extends User {
  constructor(email, password, firstName, lastName, address) {
    super(email, password, firstName, lastName, address);
    this.type = 'volunteer';
    this.currentRewards = [1, 2, 3];
  }
}

// Class of organizer allows user to create new events
class Organizer extends User {
  constructor(email, password, firstName, lastName, address) {
    super(email, password, firstName, lastName, address);
    this.type = 'organizer';
  }
}

// checks sign up for to invoke class constructor
document.getElementById('createAccountButton').addEventListener('click', function() {
  if (newUserForm.getElementsByClassName('form-check-input')[0].checked === true) {
    newUser = JSON.stringify(new Volunteer());
  }
  else if (newUserForm.getElementsByClassName('form-check-input')[1].checked === true) {
    newUser = JSON.stringify(new Organizer());
  }
  checkSignUp();
  console.log('success');
});

// if email address is already in use, error message, otherwise create new account go back to sign in
function checkSignUp() {
  if (localStorage.getItem(`User ${document.getElementById('email').value}`)) {
    $('#signInFail').css({
      "display": "flex"
    });
  }
  else {
    localStorage.setItem(`User ${document.getElementById('email').value}`, newUser);
  }
  $('#newUserForm').css({
    "display": "none"
  });
  $(".signUpModal").css({
    "height": "227px"
  });
}


// =================
//   PROFILE BAR
// =================
// sign in user and set their account to the current user variable
$('#signInButton').on('click', (e) => {
  currentUser = JSON.parse(localStorage.getItem(`User ${document.getElementById('email').value}`));
  //hide sign in menus and display profile bars
  if (localStorage.getItem(`User ${document.getElementById('email').value}`) && currentUser.password === document.getElementById('password').value) {
    // $('.addButtonHide').css({"display" : "block"});
    $('#signInFail').css({
      "display": "none"
    });
    $('.dropdown').hide();
    $('#signIn').hide();
    $('.nonMainSignIn').css({
      "visibility": "hidden"
    });
    $('#profileBar').css({
      "display": "flex"
    });
    // profile menus for organizers
    if (currentUser.type === "organizer") {
      document.getElementById('rewardsButton').innerHTML = `<p class="text-center my-1">ORGANIZE</p>
        <div class="px-4 fa fa-plus-circle fa-3x"></div>`;
      // hide create event options for volunteers
    }
    else if (currentUser.type === "volunteer") {
      $('.newEventButton').hide();
    }
  }
  else {
    $('#signInFail').css({
      "display": "flex"
    });
  }
  // display user info in profile bar
  document.getElementById('profileName').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
  document.getElementById('myPic').src = `pictures/${currentUser.profilePic}`;
  $('h4').css({
    "padding-right": "1.5rem"
  });
});

// sign in menu animations
$('#closeSignIn').on('click', () => {
  $('#signInFail').css({
    "display": "none"
  });
});

$('#signUpButton').on('click', () => {
  $('#newUserForm').css({
    "display": "flex"
  });
  $(".signUpModal").css({
    "height": "650px"
  });
});

// profile bar animations and content loads dynamically
$('#profileBar').on('click', () => {
  $('#profileBar').stop().animate({
    "margin-left": "7%",
    "padding": "4%",
  });
  myEvents();
  eventSwipe();
  myRewards();
  // display buttons only on tablet and mobile views
  if (currentUser.type === 'volunteer') {
    rewardSwipe();
  }
  if (window.innerWidth > 1024) {
    $('.profileButton').css({
      "display": "none"
    });
  }
  else if (window.innerWidth < 1024) {
    $('.profileButton').css({
      "display": "flex"
    });
  }
});

$('#profileBar').on('mouseleave', () => {
  $('#profileBar').stop().animate({
    "margin-left": "87%",
    "padding": "9%",
  });
});

// profile navigation buttons
$('#eventsButton').on('click', () => {
  $('.profPiece').fadeOut(300);
  $('#profileEvents').delay(290).fadeIn(300);
});

$('#newsButton').on('click', () => {
  $('.profPiece').fadeOut(300);
  $('#profileNews').delay(290).fadeIn(300);
});

$('#rewardsButton').on('click', () => {
  $('.profPiece').fadeOut(300);
  $('#profileRewards').delay(290).fadeIn(300);
});


// =================
//  PAGE NAV
// =================

$('.eventsLink').on('click', () => {
  $('#home').fadeOut(300);
  $('#rewards').fadeOut(300);
  $('#community').fadeOut(300);
  $('#events').delay(290).fadeIn(300);
});

$('.rewardsLink').on('click', () => {
  $('#home').fadeOut(300);
  $('#events').fadeOut(300);
  $('#community').fadeOut(300);
  $('#rewards').delay(290).fadeIn(300);
});

$('.communityLink').on('click', () => {
  $('#home').fadeOut(300);
  $('#events').fadeOut(300);
  $('#rewards').fadeOut(300);
  $('#community').delay(290).fadeIn(300);
});

$('.homeLink').on('click', () => {
  $('#community').fadeOut(300);
  $('#events').fadeOut(300);
  $('#rewards').fadeOut(300);
  $('#home').delay(290).fadeIn(300);
});

// // =================
// //   EVENTS
// // =================
// let users store events and rewards they want to attend
let addevent = function(eventNum) {
  currentUser.currentEvents.push(eventNum);
  localStorage.setItem(`User ${document.getElementById('email').value}`, JSON.stringify(currentUser));
  currentUser = JSON.parse(localStorage.getItem(`User ${currentUser.email}`));
};

let addReward = function(rewardsNum) {
  currentUser.currentRewards.push(rewardsNum);
  localStorage.setItem(`User ${document.getElementById('email').value}`, JSON.stringify(currentUser));
  currentUser = JSON.parse(localStorage.getItem(`User ${currentUser.email}`));
};

// display events in profile bar, layout depends on width
var myEvents = function() {
  if (window.innerWidth < 736) {
    document.getElementById('profileEvents').innerHTML = '<h5 class="text-center" style="margin-top: -60%; font-size: 1.8rem;">EVENTS</h5>';
  }
  else if (window.innerWidth > 736 && window.innerWidth < 1024) {
    document.getElementById('profileEvents').innerHTML = '<h5 class="text-center" style="margin-top: -35%; font-size: 2.5;">EVENTS</h5>';
  }
  else if (window.innerWidth > 1024) {
    document.getElementById('profileEvents').innerHTML = '<h5 class="text-center" style="font-size: 1.8rem;">EVENTS</h5>';
  }

  for (i = 0; i < currentUser.currentEvents.length; i++) {
    currentNum = currentUser.currentEvents[i];
    if (window.innerWidth < 736) {
      $(
        `<div id="profileEvent${i+1}" class="profileEvents flex-column bg-light text-dark" style="z-index: -1; position:absolute; opacity:0; margin: 0% 5% 0 0; height: 50%;" >
        <div class="d-flex flex-column align-items-center">
          <img class="p-2 profEventsPic" src="${eventsArray[currentNum].picture}" style="width:100%; float: left;">
          <h1 class="px-2 text-center" style="font-size: 22px;">${eventsArray[currentNum].event}</h1>
        </div>
        <p class="mx-2 d-flex text-center" style="font-size: 14px;">${eventsArray[currentNum].description}</p>
      </div>`).appendTo($('#profileEvents'));
    }
    else if (window.innerWidth > 736 && window.innerWidth < 1024) {
      $(
        `<div id="profileEvent${i+1}" class="profileEvents flex-column bg-light text-dark" style="z-index: -1; position:absolute; opacity:0; margin: 0% 5% 0% 0; height: 50%; width: 90%" >
        <div class="d-flex align-items-center" >
          <img class="p-2" src="${eventsArray[currentNum].picture}" style="height:260px; width:350px; float: left;">
          <h1 class="p-2 text-center">${eventsArray[currentNum].event}</h1>
        </div>
        <p class="m-5 d-flex text-center">${eventsArray[currentNum].description}</p>
      </div>
  `).appendTo($('#profileEvents'));
    }
    else if (window.innerWidth > 1024) {
      $(
        `<div id="profileEvent${i+1}" class="profileEvents flex-column bg-light text-dark" style="margin: 0% 10% 0 0; height: 425px; width: 90%; border-top: 1px solid rgba(43,46,80,.5);">
        <div class="d-flex align-items-center" >
          <img class="p-2" src="${eventsArray[currentNum].picture}" style="height:260px; width:350px; float: left;">
          <h1 class="p-2 text-center">${eventsArray[currentNum].event}</h1>
        </div>
        <p class="m-5 d-flex text-center">${eventsArray[currentNum].description}</p>
      </div>`).appendTo($('#profileEvents'));
    }
  }
};

// display rewards in profile bar, layout depends on width
var myRewards = function() {
  if (currentUser.type === 'volunteer') {
    if (window.innerWidth < 736) {
      document.getElementById('profileRewards').innerHTML = '<h5 class="text-center" style="margin-top: -60%; font-size: 1.8rem;">REWARDS</h5>';
    }
    else if (window.innerWidth > 736 && window.innerWidth < 1024) {
      document.getElementById('profileRewards').innerHTML = '<h5 class="text-center" style="margin-top: -35%; font-size: 2.5rem;">REWARDS</h5>';
    }
    else if (window.innerWidth > 1024) {
      document.getElementById('profileRewards').innerHTML = '<h5 class="text-center" style=" font-size: 1.8rem; overflow: scroll;">REWARDS</h5>';
    }

    for (i = 0; i < currentUser.currentRewards.length; i++) {
      currentNum = currentUser.currentRewards[i];
      if (window.innerWidth < 736) {
        $(
          `<div id="profileReward${i+1}" class="profileRewards flex-column bg-light text-dark" style="z-index: -1; position:absolute; opacity:0; margin: 0% 5% 0 0; height: 50%;" >
        <div class="d-flex flex-column align-items-center">
          <img class="p-2" src="${rewardsArray[currentNum].picture}" style="width:100%; float: left;">
          <h1 class="px-2" style="font-size: 22px;">${rewardsArray[currentNum].reward}</h1>
        </div>
      </div>`).appendTo($('#profileRewards'));
      }
      else if (window.innerWidth > 736 && window.innerWidth < 1024) {
        $(
          `<div id="profileReward${i+1}" class="profileEvents flex-column bg-light text-dark" style="z-index: -1; position:absolute; opacity:0; margin: 0% 5% 0 0; height: 425px; width: 90%" >
        <div class="d-flex align-items-center flex-column justify-content-center" >
          <img class="p-2" src="${rewardsArray[currentNum].picture}" style="height:260px; width:350px; float: left;">
          <h1 class="p-2 text-center">${rewardsArray[currentNum].reward}</h1>
        </div>
      </div>`).appendTo($('#profileRewards'));
      }
      else if (window.innerWidth > 1024) {
        $(
          `<div id="profileReward${i+1}" class="profileEvents flex-column bg-light text-dark" style="margin: 0% 5% 0 0; border-top: 1px solid rgba(43,46,80,.5);">
        <div class="d-flex align-items-center flex-column" >
          <img class="p-2" src="${rewardsArray[currentNum].picture}" style="height:225px; width:300px; float: left;">
          <h1 class="p-2 text-center">${rewardsArray[currentNum].reward}</h1>
        </div>
      </div>`).appendTo($('#profileRewards'));
      }
    }
  }

};

// swipe animation for events in profile bar -- refer to swipelive.js for explanatino of mechanics
var eventSwipe = function() {
  let profileEvents = document.getElementsByClassName('profileEvents');
  let eventSwipeX1;
  let eventSwipeX2;
  let eventSwipeDiff;
  let eventSwipeTotal = 1;
  let eventSwipeTargetL = profileEvents.length;
  let eventSwipeTargetR = eventSwipeTotal + 1;

  let eventSwipeLeftNav = function() {
    let tll = anime.timeline({
      easing: 'linear',
      duration: 500
    });
    tll
      .add({
        targets: `#profileEvent${eventSwipeTotal}`,
        translateX: 500,
      }, 10)
      .add({
        targets: `#profileEvent${eventSwipeTargetL}`,
        "opacity": "1",
      }, 100)
      .add({
        targets: `#profileEvent${eventSwipeTotal}`,
        "opacity": 0,
      }, 300)
      .add({
        targets: `#profileEvent${eventSwipeTotal}`,
        translateX: 0,
      }, 400);
    eventSwipeTotal--;
    eventSwipeTargetR--;
    eventSwipeTargetL--;

    if (eventSwipeTargetL > profileEvents.length) {
      eventSwipeTargetL === 1;
    }
    else if (eventSwipeTotal === 1) {
      eventSwipeTargetL = profileEvents.length;
    }
    else if (eventSwipeTotal === 0) {
      eventSwipeTotal = profileEvents.length;
      eventSwipeTargetL = eventSwipeTotal - 1;
    }
    else if (eventSwipeTargetR === 0) {
      eventSwipeTargetR = profileEvents.length;
    }
    console.log('swipe right');
    console.log(eventSwipeTargetL, eventSwipeTotal, eventSwipeTargetR);
  };

  let eventSwipeRightNav = function() {
    let tlr = anime.timeline({
      easing: 'linear',
      duration: 500
    });

    tlr
      .add({
        targets: `#profileEvent${eventSwipeTotal}`,
        translateX: -500,
      }, 10)
      .add({
        targets: `#profileEvent${eventSwipeTargetR}`,
        "opacity": "1",
      }, 100)
      .add({
        targets: `#profileEvent${eventSwipeTotal}`,
        "opacity": 0,
      }, 300)
      .add({
        targets: `#profileEvent${eventSwipeTotal}`,
        translateX: 0,
      }, 400);
    eventSwipeTotal++;
    eventSwipeTargetR++;
    eventSwipeTargetL++;

    if (eventSwipeTotal === profileEvents.length) {
      eventSwipeTargetR = 1;
    }
    else if (eventSwipeTotal > profileEvents.length) {
      eventSwipeTotal = 1;
    }
    else if (eventSwipeTargetL > profileEvents.length) {
      eventSwipeTargetL = 1;
    }

    console.log('swipe left');
    console.log(eventSwipeTargetL, eventSwipeTotal, eventSwipeTargetR);
  };
  document.getElementById('profileEvent1').addEventListener('touchstart', function(e) {
    swipeX1 = e.touches[0].screenX;
  });
  document.getElementById('profileEvent1').addEventListener('touchend', function(e) {
    //calculate ending point
    swipeX2 = e.changedTouches[0].screenX;
    //calculate if swipe was left or right
    swipeDiff = swipeX1 - swipeX2;
    //if it was a left swipe
    if (swipeDiff > 20) {
      eventSwipeRightNav();
      console.log('successleft');
    }

    //if it was a right swipe
    else if (swipeDiff < -20) {
      eventSwipeLeftNav();
      console.log('successright');

    }
  });
  // display first event
  $('#profileEvent1').css({
    "opacity": "1",
    "z-index": "3"
  });
};

// swipe animation for rewards in profile bar -- refer to swipelive.js for explanatino of mechanics
var rewardSwipe = function() {
  let profileRewards = document.getElementsByClassName('profileRewards');
  let RewardSwipeX1;
  let RewardSwipeX2;
  let RewardSwipeDiff;
  let RewardSwipeTotal = 1;
  let RewardSwipeTargetL = profileRewards.length;
  let RewardSwipeTargetR = RewardSwipeTotal + 1;

  let rewardSwipeLeftNav = function() {
    let tll = anime.timeline({
      easing: 'linear',
      duration: 500
    });

    tll
      .add({
        targets: `#profileReward${RewardSwipeTotal}`,
        translateX: 500,
      }, 10)
      .add({
        targets: `#profileReward${RewardSwipeTargetL}`,
        "opacity": "1",
      }, 100)
      .add({
        targets: `#profileReward${RewardSwipeTotal}`,
        "opacity": 0,
      }, 300)
      .add({
        targets: `#profileReward${RewardSwipeTotal}`,
        translateX: 0,
      }, 400);
    RewardSwipeTotal--;
    RewardSwipeTargetR--;
    RewardSwipeTargetL--;

    if (RewardSwipeTargetL > profileRewards.length) {
      RewardSwipeTargetL === 1;
    }
    else if (RewardSwipeTotal === 1) {
      RewardSwipeTargetL = profileRewards.length;
    }
    else if (RewardSwipeTotal === 0) {
      RewardSwipeTotal = profileRewards.length;
      RewardSwipeTargetL = RewardSwipeTotal - 1;
    }
    else if (RewardSwipeTargetR === 0) {
      RewardSwipeTargetR = profileRewards.length;
    }

    console.log('swipe right');
    console.log(RewardSwipeTargetL, RewardSwipeTotal, RewardSwipeTargetR);
  };

  let rewardSwipeRightNav = function() {
    let tlr = anime.timeline({
      easing: 'linear',
      duration: 500
    });

    tlr
      .add({
        targets: `#profileReward${RewardSwipeTotal}`,
        translateX: -500,
      }, 10)
      .add({
        targets: `#profileReward${RewardSwipeTargetR}`,
        "opacity": "1",
      }, 100)
      .add({
        targets: `#profileReward${RewardSwipeTotal}`,
        "opacity": 0,
      }, 300)
      .add({
        targets: `#profileReward${RewardSwipeTotal}`,
        translateX: 0,
      }, 400);
    RewardSwipeTotal++;
    RewardSwipeTargetR++;
    RewardSwipeTargetL++;

    if (RewardSwipeTotal === profileRewards.length) {
      RewardSwipeTargetR = 1;
    }
    else if (RewardSwipeTotal > profileRewards.length) {
      RewardSwipeTotal = 1;
    }
    else if (RewardSwipeTargetL > profileRewards.length) {
      RewardSwipeTargetL = 1;
    }

    console.log('swipe left');
    console.log(RewardSwipeTargetL, RewardSwipeTotal, RewardSwipeTargetR);
  };

  document.getElementById('profileReward1').addEventListener('touchstart', function(e) {
    swipeX1 = e.touches[0].screenX;
  });
  document.getElementById('profileReward1').addEventListener('touchend', function(e) {
    //calculate ending point
    swipeX2 = e.changedTouches[0].screenX;
    //calculate if swipe was left or right
    swipeDiff = swipeX1 - swipeX2;
    //if it was a left swipe
    if (swipeDiff > 20) {
      rewardSwipeRightNav();
      console.log('successleft');
    }

    //if it was a right swipe
    else if (swipeDiff < -20) {
      rewardSwipeLeftNav();
      console.log('successright');

    }
  });
  // display first reward
  $('#profileReward1').css({
    "opacity": "1",
    "z-index": "3"
  });
}