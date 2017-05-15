function checkIt() {
  // Initialize scores
  var jock = 0;
  var prep = 0;
  var nerd = 0;
  var geek = 0;
  var drama = 0;
  var hipster = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {
    if (e.checked) {
      if (e.value.indexOf('jock')>=0){
        jock++;
      }
      if (e.checked)
      if (e.value.indexOf('prep')>=0){
        prep++;
      }
      if (e.checked)
      if (e.value.indexOf('nerd')>=0){
        nerd++;
      }
      if (e.checked)
      if (e.value.indexOf('geek')>=0){
        geek++;
      }
      if (e.checked)
      if (e.value.indexOf('drama')>=0){
        drama++;
      }
      if (e.checked)
      if (e.value.indexOf('hipster')>=0){
        hipster++;
      }
    }
  }

  // Determine result
  var counts = "Troy: " + jock + ", " +
               "Sharpay: " + prep + ", " +
               "Taylor: " + nerd + ", " +
               "Gabriella: " + geek + ", " +
               "Ryan: " + drama + ", " +
               "Chad: " + hipster;

  // What is the highest value?
  var max = Math.max(jock,prep,nerd,geek,drama,hipster)

  // Form a message
  var message;

    if (max == jock) {
      title = "Answer These 6 Questions And We’ll Tell You Which High School Musical Character You Are";
      header = "You got: Troy Bolton";
      message = "You have a strong loyalty to your friends but tend to be swayed by materialistic tendencies and lose sight of what's important to you. You better Getcha' Head In The Game.";
      img = '<img src ="img/hs/troy.jpg">';
    }
    else if (max == prep) {
      title = "Answer These 6 Questions And We’ll Tell You Which High School Musical Character You Are";
      header = "You got: Sharpay Evans";
      message = "You have established your place in your community and don't like rapid change. You like when things go your way and have big dreams to bop, bop, bop, Bop To The Top.";
      img = '<img src ="img/hs/sharpay.jpg">';
    }
    else if (max == nerd) {
      title = "Answer These 6 Questions And We’ll Tell You Which High School Musical Character You Are";
      header = "You got: Taylor McKessie";
      message = "You focus a lot on school and find it to be the key to success. You are one to depend on and give good advice to friends. You're always confident that you can work, work, Work It Out.";
      img = '<img src ="img/hs/taylor.jpg">';
    }
    else if (max == geek) {
      title = "Answer These 6 Questions And We’ll Tell You Which High School Musical Character You Are";
      header = "You got: Gabriella Montez";
      message = "You're humble and don't usually like to be the center of attention. You do know when enough is enough and won't let things get out of hand, even though you get carried away having fun sometimes, Soaring, Flying.";
      img = '<img src ="img/hs/gabriella.jpg">';
    }
    else if (max == drama) {
      title = "Answer These 6 Questions And We’ll Tell You Which High School Musical Character You Are";
      header = "You got: Ryan Evans";
      message = "People always think you're a pushover, but you know how to stand your ground when necessary. You're very passionate about your dreams and you're tired of being in the shadow of others. You know What You've Been Looking For in life.";
      img = '<img src ="img/hs/ryan.jpg">';
    }
    else if (max == hipster) {
      title = "Answer These 6 Questions And We’ll Tell You Which High School Musical Character You Are";
      header = "You got: Chad Danforth";
      message = "You won't stand for injustices and aren't afraid to speak your mind. You're a generally chill person and believe strongly in your friends. You don't let anyone forget that We're All In This Together.";
      img = '<img src ="img/hs/chad.jpg">';
    }

  // Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-header').innerHTML = header;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-img').innerHTML = img;

  }
