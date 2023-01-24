// Create an array which will hold all of the event objocts
var eventsArray = [];
var eventNum = eventsArray.length;
//class constructor to create Events objects
class Event {
  constructor(event, organization, location, category, picture, popular, description) {
    this.eventNum = eventsArray.length;
    this.event = event;
    this.organization = organization;
    this.location = location;
    this.category = category;
    this.picture = `pictures/${picture}`;
    this.popular = popular;
    this.description = description;
    eventNum = eventsArray.length + 1;
  }
  // method which allows Event Objects to render on page
  print() {
    $(`
<div class="item small-grow">
  <a class="item_pic"><img src="${this.picture}" height="261px" width="350px" data-toggle="modal" data-target="#myModal${this.eventNum}"></a>
  <div class="item-words">
    <p class="event pb-2">${this.event}</p>
    <p class="organization mt-2" style="font-weight: bold;">${this.organization}</p>
    <p class="location pb-2">${this.location}</p>
  </div>
</div>
<div class="modal fade" id="myModal${this.eventNum}">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
    <div class="modal-content">
      <div class="modal-body d-flex flex-column">
        <div class="d-flex align-items-center">
          <img class="p-2" src="${this.picture}" style="height:130px; width:175px; float: left;">
          <h1 class="p-2"
          >${this.event}</h1>
        </div>
        <p class="ml-3 d-flex justify-content-center">${this.description}</p>
      </div>

      <div class="modal-footer d-flex justify-content-around">
        <button id="${this.eventNum}" type="button" style="width: 30%" class="btn btn-primary addEventButton small-grow addButtonHide" data-dismiss="modal" onClick="addevent(${this.eventNum})">Add Event</button>
        <button type="button" style="width: 30%" class="btn btn-danger small-grow" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`).appendTo($('.category_list_pop'));
  }
}
//if the eventsArray is being created and saved to local storage for the first time, invoke these constructor functions to fill it up
if (localStorage.getItem(`eventsArray`) === null) {
  eventsArray.push(new Event('Park Cleanup', 'Cleaner Neighborhoods Coalition', 'San Francisco', 'environment', 'bluebutterfly.jpeg', false, 'Our parks are important to the wellbeing of our communities. We are going to spend the day cleaning up trash at our community parks.'));
  eventsArray.push(new Event('Tree Trimming Day', 'Arbor Society', 'Oakland', 'environment', 'grassy.jpeg', false, 'Trees not only look beautiful, but they help purify the air by removing CO2 from the atmosphere. Help up trim the trees and keep them healthy.'));
  eventsArray.push(new Event('Beautify the Beach', 'Surfers United', 'Santa Cruz', 'environment', 'wave.jpeg', false, 'Our beaches are great places to spend time with friends and family, but we need to make sure theat they are clean and safe. Help us Pick up trash.'));
  eventsArray.push(new Event('Forest Clearing', 'Cal Fire', 'Half Moon Bay', 'environment', 'sears.jpg', false, 'Forest fires have dvastated California for the yeras. Do your part by helping to clear our brush and prevent future forest fires.'));
  eventsArray.push(new Event('No More Plastic Day', 'BPA Free Society', 'San Mateo', 'environment', 'purpocean.jpeg', false, 'Plastic products wash up on our beaches all the time, creating a dangerous environment for humans and animals alike. Let\'s keep our beaches safe.'));
  eventsArray.push(new Event('Flower Day', 'SF Parks and Recreation', 'San Francisco', 'environment', 'blueflower.jpeg', true, 'Flowers make people happy. Pick flowers for our flower Fair. Proceeds will go to the homeless.'));
  eventsArray.push(new Event('Global Warming Town Hall', 'City of Fremont', 'Fremont', 'environment', 'purplesnow.jpeg', false, 'Come attend our town hall meeting and help us brainstorm how our city can do its part and prevent global warming.'));
  eventsArray.push(new Event('Save the Animals Day', 'ASPCA', 'Santa Rosa', 'environment', 'cooper.jpg', false, 'Every year, thousands of aniumals need to be adopted or else they will need to be put down. Come volunteer your time and give these animals the care anbd love that they need.'));
  eventsArray.push(new Event('Plant a Tree in Our Community', 'Green Again', 'Santa Clara', 'environment', 'forest.jpg', false, 'Trees are cut down all the time to make paper goods. Help us plant trees to replenish what we destroy.'));

  eventsArray.push(new Event('House Building Day', 'Habitat for humanity', 'Cupertino', 'housing', 'boathouse.jpeg', false, 'Help us build small houses to help provide shelter for those who do not have it.'));
  eventsArray.push(new Event('Planning for Growth', 'San Jose City', 'San Jose', 'housing', 'citydusk.jpeg', false, 'The future growth of our city depends on you. Come to our planning commission meeting and provide your input.'));
  eventsArray.push(new Event('Care Packages for the Homeless', 'FTLG', 'Oakland', 'housing', 'mountainhouse.jpeg', false, 'The holidays are coming up. Volunteer your time and help prepare and distribute and distribute care packages for the less fortunate.'));
  eventsArray.push(new Event('Free Trailer Cleaning', 'Embarcadero Navigation Center', 'San Francisco', 'housing', 'homeinterior.jpg', false, 'Many people have to live out of a car or trailer because they are unable to adfford housing. Let\'s help them by keeping their shelters clean.'));
  eventsArray.push(new Event('Clothing Drive', 'United Tech Workers Coalition', 'San Jose', 'housing', 'castle.jpg', false, 'Those without housing need proper clothing to battle the elements. Help pass out jacekts to those who need them.'));
  eventsArray.push(new Event('Housing Day', 'Better Houses For America', 'San Jose', 'housing', 'teallake.jpeg', true, 'Hundreds of homes sit vacant in our city while thousands are living on the streets. Help clean up these dwelling so that they are habitable again.'));
  eventsArray.push(new Event('Do It Yourself Home Improvement', 'Home Depot', 'Union City', 'housing', 'waterhouse.jpeg', false, 'Houses need time for maintenance and improvement so that they remain habitable. Can\t afford the upkeep? No problem, join us and learn how to perform many tasks by yourself.'));
  eventsArray.push(new Event('Go Green', 'LEED', 'Newark', 'housing', 'snowyhomes.jpeg', true, 'Energy Efficiency is extremely important for future reduction of carbon emmision and global warming. Come join us and learn what you can do around your house to play your part in saving the Earth.'));
  eventsArray.push(new Event('Vacant Lot Improvement', 'City of Oakland', 'Oakland', 'housing', 'apartments.jpg', false, 'Hundreds of lots around the city remain vacant  and unusable. Let\'s clean up these lots so that we can build new houses and parks.'));

  eventsArray.push(new Event('Mentorship Day', 'The Last Mile', 'San Quentin', 'education', 'laptop.jpeg', false, 'The Last Mile is the Gold Standard of prison education. Help us train the currently incarcerated to be tommorow\s coders.'));
  eventsArray.push(new Event('Teach for a Day', 'Teachers of America', 'Oakland', 'education', 'letters.jpeg', true, 'Do you have a special skill or knowledge of a subject that you think would be useful for today\'s youth to learn. Contact us to volunteer and teach for a day at a school near you.'));
  eventsArray.push(new Event('GED Prep', 'Adult Education Coalition', 'San Fransico', 'education', 'coloredpencils.jpeg', false, 'Many students are forced to drop out of high school for various reasons. This greatly restricts their opportunities in life. Help change their future by helping them study for the GED exam.'));
  eventsArray.push(new Event('After School Code Camp', 'Hack the Hood', 'Oakland', 'education', 'keyboard.jpeg', true, 'Want to bring diversity to the tech industry? Want to be a socially responsible coder? Want to help out at risk youth? Volunteer your time at our after school program to help at-risk youth learn to code.'));
  eventsArray.push(new Event('Vocational Training Day', 'Higher Education for All', 'Fremont', 'education', 'ilya.jpg', false, 'With the ever changing economy, todays workers need to be specially trained for many jobs. Do you have expertise in a trade? Volunteer your time to help retrain our workforce.'));
  eventsArray.push(new Event('Music Program Fundraiser', 'NHSD Music Department', 'Union City', 'education', 'alexandre.jpg', false, 'Our school district\s music programs at risk of closing due to budget cuts. We are hosting a telephone fundraiser to raised money to keep our programs running. Donate your time answering phones and helping us raise money for the youth.'));
  eventsArray.push(new Event('STEM for Girls', 'Society of Female Scientists', 'San Mateo', 'education', 'instruments.jpeg', false, 'With females making up 51% of the population in the United States, the percent of females working in STEM are extremely disroportionate. Help us prepare girls for jobs in these exciting fields. '));
  eventsArray.push(new Event('Prison Media Project', 'Society of Preofessional Journalists', 'San Quentin', 'education', 'alfons.jpg', false, 'For far too long, underrepresented populations have been unable to tell their stories. Help the incarcerated people in San Quentin document their lives.'));
  eventsArray.push(new Event('Green Job Training', 'Green Jobs for All', 'Santa Clara', 'education', 'chutter.jpg', false, 'The green economy is booming. Want top help train the workforce for these new and exciting jobs? Volunteer with Green jobs for All.'));

  eventsArray.push(new Event('Feed America', 'Second Harvest Food bank', 'San Jose', 'food', 'curry.jpeg', false, 'Thousands of people go hungry in the Silicon Valley. Volunteer your time to help feed the hungry.'));
  eventsArray.push(new Event('Water for All', 'Clean Water Coalition', 'San Leandro', 'food', 'fruit.jpeg', false, 'Many American s do not drink enough water each day. Join us in this education initiative to inform the public about the benefits of drinking enough water.'));
  eventsArray.push(new Event('Food Education Day', 'Healthy Eating Group', 'San Mateo', 'food', 'tea.jpeg', false, 'Understanding that what we put into our body profoundly affects our health is the basis of feeling good. Help us with the Food Education Fair.'));
  eventsArray.push(new Event('Canned Food Drive', 'Oakland Unified School District', 'Oakland', 'food', 'spices.jpeg', false, 'Each year, the students who attend our schools donate food to feed tose who are hungry. Volunteer today to help sort and distribute the donated food.'));
  eventsArray.push(new Event('Community Garden', 'Richmond Green', 'Richmond', 'food', 'pizza.jpg', false, 'The Richmond community garden helps provide the local community with healthy food options. Help us maintain the community garden and maintain the community\'s health.'));
  eventsArray.push(new Event('Organics Day', 'Fremotn Organic Society', 'Fremont', 'food', 'bigbowl.jpeg', false, 'GMO food is not natural. Organic foods are. Join us to help encourage organic and sustainable farming techniques, .'));
  eventsArray.push(new Event('Food Education Day', 'Healthy Eating Group', 'San Jose', 'food', 'soup3.jpeg', false, 'Many American s do not drink enough water each day. Join us in this education initiative to inform the public about the benefits of drinking enough water.'));

  eventsArray.push(new Event('Let Us Help', 'Kaiser', 'Fremont', 'health', 'play.jpeg', false, 'Mental health issues go untreated because we do not always identify them. Help us help the mentally ill.'));
  eventsArray.push(new Event('Checkup Day', 'UCSF', 'San Francisco', 'health', 'hearthedge.jpeg', true, 'We believe that healthcare is a basic human right. On checkup day, we provide free primary care checkups to the uninsured. Volunteer to help out with Checkup Day.'));
  eventsArray.push(new Event('Breast Cancer Run', 'Breast Cancer Society', 'San Quen tin', 'health', 'playdo.jpeg', false, 'Our annual breast cancer run in San Quentin State Prison not only raises money for the cause, but also brings awareness to the issue.'));
  eventsArray.push(new Event('Free Physical Therapy', 'County of Santa Clara', 'Los Altos', 'health', 'happypaint.jpeg', false, 'Many healthcare plans do not cover physical therapy. Volunteer to help out at our physical therapy day.'));
  eventsArray.push(new Event('Let Us Help', 'Kaiser', 'Fremont', 'health', 'love.jpeg', false, 'Mental health issues go untreated because we do not always identify them. Help us help the mentally ill.'));
  eventsArray.push(new Event('Checkup Day', 'UCSF', 'San Francisco', 'health', 'lakemount.jpeg', true, 'We believe that healthcare is a basic human right. On checkup day, we provide free primary care checkups to the uninsured. Volunteer to help out with Checkup Day.'));
  eventsArray.push(new Event('Checkup Day', 'UCSF', 'San Francisco', 'health', 'husky.jpeg', true, 'We believe that healthcare is a basic human right. On checkup day, we provide free primary care checkups to the uninsured. Volunteer to help out with Checkup Day.'));
  eventsArray.push(new Event('Checkup Day', 'UCSF', 'San Francisco', 'health', 'crazydog.jpeg', true, 'We believe that healthcare is a basic human right. On checkup day, we provide free primary care checkups to the uninsured. Volunteer to help out with Checkup Day.'));

  eventsArray.push(new Event('Park Cleanup', 'Cleaner Neighborhoods Coalition', 'San Francisco', 'environment', 'bluebutterfly.jpeg', false, 'Our parks are important to the wellbeing of our communities. We are going to spend the day cleaning up trash at our community parks.'));
  eventsArray.push(new Event('Tree Trimming Day', 'Arbor Society', 'Oakland', 'environment', 'grassy.jpeg', false, 'Trees not only look beautiful, but they help purify the air by removing CO2 from the atmosphere. Help up trim the trees and keep them healthy.'));
  eventsArray.push(new Event('Beautify the Beach', 'Surfers United', 'Santa Cruz', 'environment', 'wave.jpeg', false, 'Our beaches are great places to spend time with friends and family, but we need to make sure theat they are clean and safe. Help us Pick up trash.'));
  eventsArray.push(new Event('Forest Clearing', 'Cal Fire', 'Half Moon Bay', 'environment', 'sears.jpg', false, 'Forest fires have deastated California for the years. Do your part by helping to clear our brush and prevent future forest fires.'));
  eventsArray.push(new Event('No More Plastic Day', 'BPA Free Society', 'San Mateo', 'environment', 'purpocean.jpeg', false, 'Plastic products wash up on our beaches all the time, creating a dangerous environment for humans and animals alike. Let\'s keep our beaches safe.'));
  eventsArray.push(new Event('Flower Day', 'SF Parks and Recreation', 'San Francisco', 'environment', 'blueflower.jpeg', true));
  eventsArray.push(new Event('Global Warming Town Hall', 'City of Fremont', 'Fremont', 'environment', 'purplesnow.jpeg', false, 'Come attend our ty own hall meeting and help us brainstorm how our city can do its part and prevent global warming.'));
  eventsArray.push(new Event('Save the Animals Day', 'ASPCA', 'Santa Rosa', 'environment', 'cooper.jpg', false, 'Every year, thousands of aniumals need to be adopted or else they will need to be put down. Come volunteer your time and give these animals the care anbd love that they need.'));
  eventsArray.push(new Event('Plant a Tree in Our Community', 'Green Again', 'Santa Clara', 'environment', 'forest.jpg', false, 'Trees are cut down all the time to make paper goods. Help us plant trees to replenish what we destroy.'));

  eventsArray.push(new Event('House Building Day', 'Habitat for humanity', 'Cupertino', 'housing', 'boathouse.jpeg', false, 'Help us build small houses to help provide shelter for those who do not have it.'));
  eventsArray.push(new Event('Planning for Growth', 'San Jose City', 'San Jose', 'housing', 'citydusk.jpeg', false, 'The future growth of our city depends on you. Come to our planning commission meeting and provide your input.'));
  eventsArray.push(new Event('Care Packages for the Homeless', 'FTLG', 'Oakland', 'housing', 'mountainhouse.jpeg', false, 'The holidays are coming up. Volunteer your time and help prepare and distribute and distribute care packages for the less fortunate.'));
  eventsArray.push(new Event('Free Trailer Cleaning', 'Embarcadero Navigation Center', 'San Francisco', 'housing', 'homeinterior.jpg', false, 'Many people have to live out of a car or trailer because they are unable to adfford housing. Let\'s help them by keeping their shelters clean.'));
  eventsArray.push(new Event('Clothing Drive', 'United Tech Workers Coalition', 'San Jose', 'housing', 'castle.jpg', false, 'Those without housing need proper clothing to battle the elements. Help pass out jacekts to those who need them.'));
  eventsArray.push(new Event('Housing Day', 'Better Houses For America', 'San Jose', 'housing', 'teallake.jpeg', true, 'Hundreds of homes sit vacant in our city while thousands are living on the streets. Help clean up these dwelling so that they are habitable again.'));
  eventsArray.push(new Event('Do It Yourself Home Improvement', 'Home Depot', 'Union City', 'housing', 'waterhouse.jpeg', false, 'Houses need time for maintenance and improvement so that they remain habitable. Can\t afford the upkeep? No problem, join us and learn how to perform many tasks by yourself.'));
  eventsArray.push(new Event('Go Green', 'LEED', 'Newark', 'housing', 'snowyhomes.jpeg', true, 'Energy Efficiency is extremely important for future reduction of carbon emmision and global warming. Come join us and learn what you can do around your house to play your part in saving the Earth.'));
  eventsArray.push(new Event('Vacant Lot Improvement', 'City of Oakland', 'Oakland', 'housing', 'apartments.jpg', false, 'Hundreds of lots around the city remain vacant  and unusable. Let\'s clean up these lots so that we can build new houses and parks.'));

  eventsArray.push(new Event('Mentorship Day', 'The Last Mile', 'San Quentin', 'education', 'laptop.jpeg', false, 'The Last Mile is the Gold Standard of prison education. Help us train the currently incarcerated to be tommorow\s coders.'));
  eventsArray.push(new Event('Teach for a Day', 'Teachers of America', 'Oakland', 'education', 'letters.jpeg', true, 'Do you have a special skill or knowledge of a subject that you think would be useful for today\'s youth to learn. Contact us to volunteer and teach for a day at a school near you.'));
  eventsArray.push(new Event('GED Prep', 'Adult Education Coalition', 'San Fransico', 'education', 'coloredpencils.jpeg', false, 'Many students are forced to drop out of high school for various reasons. This greatly restricts their opportunities in life. Help change their future by helping them study for the GED exam.'));
  eventsArray.push(new Event('After School Code Camp', 'Hack the Hood', 'Oakland', 'education', 'keyboard.jpeg', true, 'Want to bring diversity to the tech industry? Want to be a socially responsible coder? Want to help out at risk youth? Volunteer your time at our after school program to help at-risk youth learn to code.'));
  eventsArray.push(new Event('Vocational Training Day', 'Higher Education for All', 'Fremont', 'education', 'ilya.jpg', false, 'With the ever changing economy, todays workers need to be specially trained for many jobs. Do you have expertise in a trade? Volunteer your time to help retrain our workforce.'));
  eventsArray.push(new Event('Music Program Fundraiser', 'NHSD Music Department', 'Union City', 'education', 'alexandre.jpg', false, 'Our school district\s music programs at risk of closing due to budget cuts. We are hosting a telephone fundraiser to raised money to keep our programs running. Donate your time answering phones and helping us raise money for the youth.'));
  eventsArray.push(new Event('STEM for Girls', 'Society of Female Scientists', 'San Mateo', 'education', 'instruments.jpeg', false, 'With females making up 51% of the population in the United States, the percent of females working in STEM are extremely disroportionate. Help us prepare girls for jobs in these exciting fields. '));
  eventsArray.push(new Event('Prison Media Project', 'Society of Preofessional Journalists', 'San Quentin', 'education', 'alfons.jpg', false, 'For far too long, underrepresented populations have been unable to tell their stories. Help the incarcerated people in San Quentin document their lives.'));
  eventsArray.push(new Event('Green Job Training', 'Green Jobs for All', 'Santa Clara', 'education', 'chutter.jpg', false, 'The green economy is booming. Want top help train the workforce for these new and exciting jobs? Volunteer with Green jobs for All.'));

  eventsArray.push(new Event('Feed America', 'Second Harvest Food bank', 'San Jose', 'food', 'curry.jpeg', false, 'Thousands of people go hungry in the Silicon Valley. Volunteer your time to help feed the hungry.'));
  eventsArray.push(new Event('Water for All', 'Clean Water Coalition', 'San Leandro', 'food', 'fruit.jpeg', false, 'Many American s do not drink enough water each day. Join us in this education initiative to inform the public about the benefits of drinking enough water.'));
  eventsArray.push(new Event('Food Education Day', 'Healthy Eating Group', 'San Mateo', 'food', 'tea.jpeg', false, 'Understanding that what we put into our body profoundly affects our health is the basis of feeling good. Help us with the Food Education Fair.'));
  eventsArray.push(new Event('Canned Food Drive', 'Oakland Unified School District', 'Oakland', 'food', 'spices.jpeg', false, 'Each year, the students who attend our schools donate food to feed tose who are hungry. Volunteer today to help sort and distribute the donated food.'));
  eventsArray.push(new Event('Community Garden', 'Richmond Green', 'Richmond', 'food', 'pizza.jpg', false, 'The Richmond community garden helps provide the local community with healthy food options. Help us maintain the community garden and maintain the community\'s health.'));
  eventsArray.push(new Event('Organics Day', 'Fremotn Organic Society', 'Fremont', 'food', 'bigbowl.jpeg', false, 'GMO food is not natural. Organic foods are. Join us to help encourage organic and sustainable farming techniques, .'));
  eventsArray.push(new Event('Food Education Day', 'Healthy Eating Group', 'San Jose', 'food', 'soup3.jpeg', false, 'Many American s do not drink enough water each day. Join us in this education initiative to inform the public about the benefits of drinking enough water.'));

  eventsArray.push(new Event('Let Us Help', 'Kaiser', 'Fremont', 'health', 'play.jpeg', false, 'Mental health issues go untreated because we do not always identify them. Help us help the mentally ill.'));
  eventsArray.push(new Event('Checkup Day', 'UCSF', 'San Francisco', 'health', 'hearthedge.jpeg', true, 'We believe that healthcare is a basic human right. On checkup day, we provide free primary care checkups to the uninsured. Volunteer to help out with Checkup Day.'));
  eventsArray.push(new Event('Breast Cancer Run', 'Breast Cancer Society', 'San Quen tin', 'health', 'playdo.jpeg', false, 'Our annual breast cancer run in San Quentin State Prison not only raises money for the cause, but also brings awareness to the issue.'));
  eventsArray.push(new Event('Free Physical Therapy', 'County of Santa Clara', 'Los Altos', 'health', 'happypaint.jpeg', false, 'Many healthcare plans do not cover physical therapy. Volunteer to help out at our physical therapy day.'));
  eventsArray.push(new Event('Let Us Help', 'Kaiser', 'Fremont', 'health', 'love.jpeg', false, 'Mental health issues go untreated because we do not always identify them. Help us help the mentally ill.'));
  eventsArray.push(new Event('Checkup Day', 'UCSF', 'San Francisco', 'health', 'lakemount.jpeg', true, 'We believe that healthcare is a basic human right. On checkup day, we provide free primary care checkups to the uninsured. Volunteer to help out with Checkup Day.'));
  eventsArray.push(new Event('Checkup Day', 'UCSF', 'San Francisco', 'health', 'husky.jpeg', true, 'We believe that healthcare is a basic human right. On checkup day, we provide free primary care checkups to the uninsured. Volunteer to help out with Checkup Day.'));
  eventsArray.push(new Event('Checkup Day', 'UCSF', 'San Francisco', 'health', 'crazydog.jpeg', true, 'We believe that healthcare is a basic human right. On checkup day, we provide free primary care checkups to the uninsured. Volunteer to help out with Checkup Day.'));
  //save the array to local storagee
  localStorage.setItem(`eventsArray`, JSON.stringify(eventsArray));
}
//retrieve and set the eventsArray to the saved item in local storage
eventsArray = JSON.parse(localStorage.getItem(`eventsArray`));

// if the user is an organizer they can create anew event and store it in local storage by clicking the new event button
document.getElementById('createEventButton').addEventListener('click', function(e) {
  if (document.getElementById('eventName').value && document.getElementById('eventLocation').value && document.getElementById('eventCategory').value && document.getElementById('eventPic').value) {
    eventsArray.push(new Event(document.getElementById('eventName').value,
      currentUser.organization, document.getElementById('eventLocation').value, document.getElementById('eventCategory').value, document.getElementById('eventPic').files[0].name, false, document.getElementById('eventDescription').value));
    localStorage.setItem(`eventsArray`, JSON.stringify(eventsArray));
  }
  else {
    alert('Please fill out all information.');
  }
});

//When the events page navigates to a new category, it filters through all of the Event objects to retrieve the desired objects which have a particular category
var popularFilter = function() {
  $('#category_main').fadeOut(300);
  setTimeout(() => {
    document.getElementById('category_main').innerHTML = `
    <div class= "category_head">
      <h1 class= "category_title ">Popular</h1>
      <p class= "category_description">MOST VIEWED EVENTS</p>
    </div>
    <nav class= "category_list_pop">
    </nav>`;
    //after the program finds the desired objects, it stores them in an array
    var popularArray = eventsArray.filter(x => x.popular === true);
    for (i = 0; i < popularArray.length; i++) {
      // The program needs to reset the prototype of the objects when it retrieves them from local storage because they lose their class when stored and retrieved
      Object.setPrototypeOf(popularArray[i], Event.prototype);
      //invoke method which allows each object to render on the page
      popularArray[i].print();
    }
  }, 290);
  $('#category_main').delay(290).fadeIn(300);
};

$('.eventsLink').on('click', popularFilter);

// Environment Filter - repeat for environment objects
var environmentFilter = function() {
  $('#category_main').fadeOut(300);
  setTimeout(() => {
    document.getElementById('category_main').innerHTML = `
    <div class="category_head">
      <h1 class="category_title ">Environment</h1>
      <p class="category_description">Save our Planet</p>
    </div>
    <nav class="category_list_pop">
    </nav>`;
    var environmentArray = eventsArray.filter(x => x.category === 'environment');
    for (i = 0; i < environmentArray.length; i++) {
      Object.setPrototypeOf(environmentArray[i], Event.prototype);
      environmentArray[i].print();
    }
  }, 290);
  $('#category_main').delay(290).fadeIn(300);
}

// Housing Filter - repeat for housing objects
var housingFilter = function() {
  $('#category_main').fadeOut(300);
  setTimeout(() => {
    document.getElementById('category_main').innerHTML = `
    <div class="category_head">
      <h1 class="category_title">HOUSING</h1>
      <p class="category_description">Shelter for All</p>
    </div>
    <nav class="category_list_pop">
    </nav>`;
    var housingArray = eventsArray.filter(x => x.category === 'housing');
    for (i = 0; i < housingArray.length; i++) {
      Object.setPrototypeOf(housingArray[i], Event.prototype);
      housingArray[i].print();
    }
  }, 290);
  $('#category_main').delay(290).fadeIn(300);
}

// Education Filter - repeat for education objects
var educationFilter = function() {
  $('#category_main').fadeOut(300);
  setTimeout(() => {
    document.getElementById('category_main').innerHTML = `
    <div class= "category_head">
      <h1 class= "category_title ">Education</h1>
      <p class= "category_description">Knowledge for All</p>
    </div>
    <nav class= "category_list_pop">
    </nav>`;
    var educationArray = eventsArray.filter(x => x.category === 'education');
    for (i = 0; i < educationArray.length; i++) {
      Object.setPrototypeOf(educationArray[i], Event.prototype);
      educationArray[i].print();
    }
  }, 290);
  $('#category_main').delay(290).fadeIn(300);
}

// Food Filter - repeat for food objects
var foodFilter = function() {
  $('#category_main').fadeOut(300);
  setTimeout(() => {
    document.getElementById('category_main').innerHTML = `
    <div class= "category_head">
      <h1 class= "category_title ">Food</h1>
      <p class= "category_description">End Hunger</p>
    </div>
    <nav class= "category_list_pop">
    </nav>`;
    var foodArray = eventsArray.filter(x => x.category === 'food');
    for (i = 0; i < foodArray.length; i++) {
      Object.setPrototypeOf(foodArray[i], Event.prototype);
      foodArray[i].print();
    }
  }, 290);
  $('#category_main').delay(290).fadeIn(300);
}

//Health Filter - repeat for health objects
var healthFilter = function() {
  $('#category_main').fadeOut(300);
  setTimeout(() => {
    document.getElementById('category_main').innerHTML = `
    <div class= "category_head">
      <h1 class= "category_title">Health</h1>
      <p class= "category_description">Help Those Who Need Us</p>
    </div>
    <nav class= "category_list_pop">
    </nav>`;
    var mentalhealthArray = eventsArray.filter(x => x.category === 'health');
    for (i = 0; i < mentalhealthArray.length; i++) {
      Object.setPrototypeOf(mentalhealthArray[i], Event.prototype);
      mentalhealthArray[i].print();
    }
  }, 290);
  $('#category_main').delay(290).fadeIn(300);
}