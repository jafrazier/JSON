function getComicDc() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myComic = JSON.parse(this.responseText);
        console.log(myComic.company.dc.batman.name);
        document.getElementById('book1').innerHTML = myComic.company.dc.batman.name;
        document.getElementById('release1').innerHTML = myComic.company.dc.batman.release;
        document.getElementById('image1').src = myComic.company.dc.batman.image;
        document.getElementById('para1').innerHTML = myComic.company.dc.batman.content;
      }
    };
    xhttp.open('GET', 'https://raw.githubusercontent.com/jafrazier/JSON/master/new.json', true);
    xhttp.send();
}
