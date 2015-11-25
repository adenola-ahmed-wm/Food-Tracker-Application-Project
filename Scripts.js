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
        exp: expInput.value
    };
    return item;
}

    function updateTable(item) {
        if(item.name == "" || item.desc == "" || item.date == "" || item.life == "" || item.exp == "") return;


            var tablerow = document.createElement("tr");
            var name = document.createElement("td");
            var desc = document.createElement("td");
            var date = document.createElement("td");
            var life = document.createElement("td");
            var exp = document.createElement("td");

        name.innerHTML = item.name;
        desc.innerHTML = item.desc;
        date.innerHTML = item.date;
        life.innerHTML = item.life;
        exp.innerHTML = item.exp;

        if(parseFloat(item.life) == 2 ) tablerow.style.backgroundColor = "red";

        tablerow.appendChild(name);
        tablerow.appendChild(desc);
        tablerow.appendChild(date);
        tablerow.appendChild(life);
        tablerow.appendChild(exp);
        tableOutput.appendChild(tablerow);}
