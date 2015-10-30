/**
 * Created by session2 on 10/22/15.
 */
var nameInput = document.getElementById('name');
var descInput = document.getElementById("desc");
var dateInput = document.getElementById("date");
var lifeInput = document.getElementById("life");
var expInput = document.getElementById("exp");

/*Get element by DOM */
    var tableOutput = document.getElementById("table");

    function update() {
        var newItem = getInputItem();
        updateTable(newItem);
    }

function getInputItem() {
    var item = {
        name: nameInput.value,
        desc: descInput.value,
        date: dateInput.value,
        life: lifeInput.value,
        exp: expInput.value,
    };
    return item;
}

    function updateTable(item) {}