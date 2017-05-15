function checkIt() {
  // Initialize scores
  var evil = 0;
  var tea = 0;
  var blanket = 0;
  var shower = 0;
  var depressed = 0;
  var yell = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {
    if (e.checked) {
      if (e.value.indexOf('evil')>=0){
        evil++;
      }
      if (e.checked)
      if (e.value.indexOf('tea')>=0){
        tea++;
      }
      if (e.checked)
      if (e.value.indexOf('blanket')>=0){
        blanket++;
      }
      if (e.checked)
      if (e.value.indexOf('shower')>=0){
        shower++;
      }
      if (e.checked)
      if (e.value.indexOf('depressed')>=0){
        depressed++;
      }
      if (e.checked)
      if (e.value.indexOf('yell')>=0){
        yell++;
      }
    }
  }

  // Determine result
  var counts = "Evil: " + evil + ", " +
               "Tea: " + tea + ", " +
               "Blanket: " + blanket + ", " +
               "Shower: " + shower + ", " +
               "Depressed: " + depressed + ", " +
               "Yelling: " + yell;

  // What is the highest value?
  var max = Math.max(evil,tea,blanket,shower,depressed,yell)

  // Form a message
  var message;

    if (max == evil) {
      title = "Pick From These 6 Questions And We’ll Tell You Which Kermit Meme You Are";
      header = "You got: Evil Kermit";
      message = "You have good intentions and wish to do good things, but every time you actually go to do said 'thing' your subconscious convinces you to do the opposite. It's a vicious cycle.";
      img = '<img src ="img/kermit/evil.jpeg">';
    }
    else if (max == tea) {
      title = "Pick From These 6 Questions And We’ll Tell You Which Kermit Meme You Are";
      header = "You got: But That's None of My Business Kermit";
      message = "P.E.T.T.Y. You're petty and an observer. You know when someone has does something wrong, and you have all the receipts to call them out on it but...that's none of your business.";
      img = '<img src ="img/kermit/tea.jpeg">';
    }
    else if (max == blanket) {
      title = "Pick From These 6 Questions And We’ll Tell You Which Kermit Meme You Are";
      header = "You got: Cozy Kermit";
      message = "After a long day, your favorite thing to do is wrap yourself in a blanket burrito and sit under the AC vent in your room. You believe the most important thing in life is being comfortable: a respectable point of view.";
      img = '<img src ="img/kermit/blanket.jpg">';
    }
    else if (max == shower) {
      title = "Pick From These 6 Questions And We’ll Tell You Which Kermit Meme You Are";
      header = "You got: Shower Kermit";
      message = "You take at least 10 showers a day. You hate the feeling of being sweaty and feel oblidged to rinse yourself off after every outing that you take. You probably shouldn't do that, it kinda dries your skin out dude.";
      img = '<img src ="img/kermit/shower.jpg">';
    }
    else if (max == depressed) {
      title = "Pick From These 6 Questions And We’ll Tell You Which Kermit Meme You Are";
      header = "You got: Depressed Kermit";
      message = "You find yourself pondering upon your incessant suffering 24/7 and curl up into a fetal position under the sheets at night to cry away troubles that will never go away. Professional help is the answer.";
      img = '<img src ="img/kermit/depressed.jpg">';
    }
    else if (max == yell) {
      title = "Pick From These 6 Questions And We’ll Tell You Which Kermit Meme You Are";
      header = "You got: Yelling Kermit";
      message = "You're constantly yelling. It doesn't matter where you are, what you're doing, or who you're with. It will always be the time and place for a good yell. Your friends are probably really annoyed with you but are too nice to say anything.";
      img = '<img src ="img/kermit/yell.jpg">';
    }

  // Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-header').innerHTML = header;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-img').innerHTML = img;

  }
