 //Putting resultat of scanning into search bar
$("#scanner").click(function() {

  cordova.plugins.barcodeScanner.scan(
    function(result) {

      $("#search").val(result.text);
    },
    function(error) {

      $("#autocomplete-input").val("Scanning failed: " + error);
    },
  );
});

//Click on Google button take search bar value into google search
$("#google").click(function() {

  var link = 'https://www.google.fr/search?q=' + $("#search").val();
  window.open(link, '_blank');

});

//Click on Browser button put link into Browser
$("#browser").click(function() {

  var input = $("#search").val();
  //if there is only www. we add http:// header
  if (input.substring(0, 4) == 'www.') {
    $("#search").val('http://www.' + input.substring(4), '_blank'),
      $("#browser").html('Click one more time');

  } else {
    //Regex control to check if it's a link
    var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
    var is_url = re.test(input);
    if (is_url) {
      $("#browser").html('Gooooo')
      window.open(input, '_blank')
    } else {
      $("#browser").html('This is not a link');
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //JUST DON'T LOOK AT THIS IF U ALREADY DID
  //PUT
  //FUCK U RIGHT IN THE PUSSY
  //INTO SEARCH BAR
  //AND CLICK OPEN IN BROWSER
  //AND ENJOY
  if (input == 'FUCK U RIGHT IN THE PUSSY') {
    $('#target').css("visibility", "visible");
    $("h1").html('FUCK U RIGHT IN THE PUSSY');
    $("a").html('FUCK U RIGHT IN THE PUSSY').removeClass("ui-btn ui-corner-all ui-shadow").addClass("ui-btn ui-corner-all ui-shadow ui-state-disabled");
    $("p").html('FUCK U RIGHT IN THE PUSSY');
    $("input").attr('disabled', 'disabled');
    $(function() {

      var largeur = ($(window).width()) - 50;
      var hauteur = ($(window).height()) - 50;

      var p = $('#target').offset();
      p.top = 170;
      p.left = 170;
      $('#target').offset(p);
      var n = 0;

      setInterval(function() {
        x = Math.floor(Math.random() * largeur);
        y = Math.floor(Math.random() * hauteur);
        var p = $('#target').offset();
        p.top = y;
        p.left = x;
        $('#target').offset(p);
      }, 500);

      $('#target').click(function() {
        n += 1;
        $("span").text("U just touch me " + n + " times");
      });

    });
  }
});
