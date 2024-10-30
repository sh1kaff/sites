function addRecord(form) {
    let formData = new FormData(form);

    for ( let val of formData.values() ) {
        if ( !val ) { return; }
    }

    let table = document.getElementById("table");
    let rows = length(table.rows);
    let new_id = Number(document.getElementById("table").rows[rows].cells[0].textContent) + 1;
    
    


    console.log( Object.fromEntries(formData) );
    return Object.fromEntries(formData);
}

document.getElementById("addform").addEventListener("submit", function (e) {
    e.preventDefault();
    addRecord(e.target);
});