$("#scanner").click(function () {

    cordova.plugins.barcodeScanner.scan(
        function (result) {

            $("#search").val(result.text);

        },
        function (error) {

            $("#autocomplete-input").val("Scanning failed: " + error);

        },

    );

});

$("#browser").click(function () {

    window.open($("#search").val(), '_blank');

});

$("#google").click(function () {

    var link = 'https://www.google.fr/search?q=' + $("#search").val();
    window.open(link, '_blank');

});