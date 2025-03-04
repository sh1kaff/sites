function getFile(url: string): string | void {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url)

    xhr.send();
    console.log(1);

    xhr.timeout = 10000;

    xhr.onload = () => {
        if (xhr.status != 200) {
            console.log(`File '${url}' is not uploaded! (${xhr.status}: ${xhr.statusText})`);
        }
        else {
            console.log(`File '${url}' is uploaded!`);
            return xhr.response;
        }
    };

    xhr.onerror = () => {
        console.log("Query error!");
    };
}

