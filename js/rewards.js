//  Array that holds all of the reward objects
var rewardsArray = [];

// rewards class constructor
var rewardsNum = 0;
class Reward {
  constructor(reward, picture) {
    this.rewardsNum = rewardsNum;
    this.reward = reward;
    this.picture = `pictures/${picture}`;
    rewardsNum++;
  }
  print() {
    // method that allows the reward objects to be appended to the page
    $(`
<div class="item">
  <a class="item_pic" ><img src="${this.picture}" height="261px" width="350px" data-toggle="modal" data-target="#myModal${this.rewardsNum}" style="background-color: white;" ></a>
  <div class="item-words">
    <p class="event">${this.reward}</p>
    <p class="organization">${this.organization}</p>
    <p class="location">${this.location}</p>
  </div>
</div>
<div class="modal fade" id="myModal${this.rewardsNum}">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
    <div class="modal-content">
      <div class="modal-body d-flex flex-column">
        <div class="d-flex align-items-center">
          <img class="p-2" src="${this.picture}" style="height:130px; width:175px; float: left;">
          <h1 class="p-2">${this.reward}</h1>
        </div>
        <p class="ml-3 d-flex justify-content-center"> Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram ipsum Loram </p>
      </div>

      <div class="modal-footer d-flex justify-content-around">
        <button id="${this.rewardsNum}" type="button" style="width: 30%" class="btn btn-primary addEventButton small-grow addButtonHide" data-dismiss="modal" onClick="addReward(${this.rewardsNum})">Add Reward</button>
        <button type="button" style="width: 30%" class="btn btn-danger small-grow" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`).appendTo($('.category_list_rewards'));
  }
}

// create rewards objects using the previous class constructor
rewardsArray.push(new Reward('Best Buy Gift Card', 'BestBuy.jpeg'));
rewardsArray.push(new Reward('Jimmy Johns Gift Card', 'jimmyJohns.jpeg'));
rewardsArray.push(new Reward('IHOP Gift Card', 'IHOP.jpeg'));
rewardsArray.push(new Reward('Subway Gift Card', 'subway.jpeg'));
rewardsArray.push(new Reward('McDonald\'s Gift Card', 'mcDonalds.jpeg'));
rewardsArray.push(new Reward('Walmart Gift Card', 'walmart.jpeg'));
rewardsArray.push(new Reward('Starbucks Gift Card', 'starbucks.jpeg'));
rewardsArray.push(new Reward('Target Gift Card', 'target.jpeg'));
rewardsArray.push(new Reward('Amazon Gift Card', 'amazon.jpeg'));

// append the rewards objects to the page
var filterRewards = function() {
  setTimeout(() => {
    document.getElementById('category_mainRewards').innerHTML = `
    <div class= "category_head">
      <h1 class= "category_title ">Popular</h1>
      <p class= "category_description">MOST VIEWED REWARDS</p>
    </div>
    <nav class= "category_list_rewards category_list_pop">
    </nav>`;
    for (i = 0; i < rewardsArray.length; i++) {
      rewardsArray[i].print();
    }
  }, 290);
  $('#category_mainRewards').delay(290).fadeIn(300);
};

$('.rewardsLink').on('click', filterRewards);