function getJSON(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.responseType = "json";
    xhr.timeout = 10000;
    xhr.onload = () => {
        if (xhr.status != 200) {
            console.log(`File '${url}' is not uploaded! (${xhr.status}: ${xhr.statusText})`);
        }
        else {
            console.log(`File '${url}' is uploaded!`);
            console.log(xhr.response);
            document.querySelector("#res").innerHTML = "<pre>" + JSON.stringify(xhr.response) + "</pre>";
        }
    };
    xhr.onerror = () => {
        console.log("Query error!");
    };
}
