function getComic() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myComic = JSON.parse(this.responseText);
        console.log(myComic.company.dc.batman);
      }
    };
    xhttp.open('GET', 'https://raw.githubusercontent.com/jafrazier/JSON/master/new.json', true);
    xhttp.send();
}
