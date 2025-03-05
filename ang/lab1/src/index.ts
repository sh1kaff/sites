function getJSON(url: string): string | void {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url)

    xhr.send();

    xhr.responseType = "json";
    xhr.timeout = 10000;

    let content: string = "";

    xhr.onload = () => {
        if (xhr.status != 200) {
            content = `File '${url}' is not uploaded! (${xhr.status}: ${xhr.statusText})`;
            console.log(content);
        }
        else 
        {
            content = "<pre style='white-space: pre-wrap;'>" + JSON.stringify(xhr.response) + "</pre>"
            console.log(`File '${url}' is uploaded!`);
            console.log(xhr.response);
        }

        document.querySelector("#res").innerHTML = content;
    };

    xhr.onerror = () => {
        console.log("Query error!");
    };
}

