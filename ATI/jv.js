window.onload = function(){ 
	document.getElementById("butt").onclick = function() {
		loadDoc()
	};
}

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			myFunction(xhttp);
		}
	};
	xhttp.open("GET", "http://localhost/ATI/data.xml", true);
	xhttp.send();
}

function myFunction(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>Titulo</th><th>Artista</th></tr>";
	var x = xmlDoc.getElementsByTagName("CD");
	var tam = x.length;
	for (i = 0; i < tam; i++) { 
		table += "<tr><td>" +
		x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td><td>" +
		x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td></tr>";
	}
	document.getElementById("demo").innerHTML = table;
}