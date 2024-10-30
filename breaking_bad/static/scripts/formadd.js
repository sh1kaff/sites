function addRecord(form) {
    let formData = new FormData(form);
    let vals = Object.values( Object.fromEntries(formData) );

    for ( let val of vals ) {
        if ( !val ) { return; }
    }

    let table = document.getElementById("table");
    
    let row = table.insertRow(table.rows.length);

    row.insertCell(0).innerHTML = table.rows.length;
    for (let i = 0; i < 3; ++i) {
        row.insertCell(i + 1).innerHTML = vals[i].replace(/[<>]/g, "").slice(0, 20);
    }
}

document.getElementById("addform").addEventListener("submit", function (e) {
    e.preventDefault();
    addRecord(e.target);
});