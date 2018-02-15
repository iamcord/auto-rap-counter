var xhr = new XMLHttpRequest();
xhr.open('GET', "https://ipinfo.io/json", true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest(e) {
  if (xhr.readyState == 4) {
    var response = JSON.parse(xhr.responseText);
    console.log(response.ip);
  }
}
