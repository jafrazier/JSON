function getComicDc() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myComic = JSON.parse(this.responseText);
        var pick = document.getElemetById;
        pick('book1').innerHTML = myComic.company.dc.batman.name;

      }
    };
    xhttp.open('GET', 'https://raw.githubusercontent.com/jafrazier/JSON/master/new.json', true);
    xhttp.send();
}
getElemetById
