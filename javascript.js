// Jason Lazera 7/31/21 jason_lazera@student.uml.edu
var it = 0;
var x_start_valid = false;
var x_end_valid = false;
var y_start_valid = false;
var y_end_valid = false;

//makes sure that user input is valid
function error_check() {

    //get values from form
    let x_start = Math.floor(document.getElementById("x_start").value);
    let x_end = Math.floor(document.getElementById("x_end").value);
    let y_start = Math.floor(document.getElementById("y_start").value);
    let y_end = Math.floor(document.getElementById("y_end").value);

    x_start_valid = false;
    x_end_valid = false;
    y_start_valid = false;
    y_end_valid = false;

    //checking x start conditions
    if (x_start > 50 || x_start < -50 ) {
        text = "Please make sure the ending x value is larger than the starting x value";
        document.getElementById("demo").innerHTML = text;
    } 

    else {
        x_start_valid = true;
        text = "valid";
        document.getElementById("demo").innerHTML = text;
    }
    
    //checking x end conditions
    console.log(x_start, x_end);

    if (x_end > 50 || x_end < -50 || (x_end - x_start) < 0 ) {

        if((x_end - x_start) < 0) {
            text = "Please make sure the ending x value is larger than the starting x value";
            document.getElementById("demo2").innerHTML = text;
        }

        else {
            text = "Please enter an integer value from -50 to 50 (inclusive)";
            document.getElementById("demo2").innerHTML = text;
        }
    }

    else {
        x_end_valid = true;
        text = "valid";
        document.getElementById("demo2").innerHTML = text;
    }

    //checking y start conditions
    if (y_start > 50 || y_start < -50) {
        text = "Please make sure the ending x value is larger than the starting x value";
        document.getElementById("demo3").innerHTML = text;
    }

    else {
        y_start_valid = true;
        text = "valid";
        document.getElementById("demo3").innerHTML = text;
    }

    //checking y end conditions
    if (y_end > 50 || y_end < -50 || (y_end - y_start) < 0) {
        
        console.log((y_end - y_start));
        if((y_end - y_start) < 0) {
            text = "Please make sure the ending y value is larger than the starting y value";
            document.getElementById("demo4").innerHTML = text;
        }

        else {
            text = "Please enter an integer value from -50 to 50 (inclusive)";
            document.getElementById("demo4").innerHTML = text;
        }
    }

    else {
        y_end_valid = true;
        text = "valid";
        document.getElementById("demo4").innerHTML = text;
    }

    if (x_start_valid == true && x_end_valid == true && 
        y_start_valid == true && y_end_valid == true) {
        create_table();
    }

}

//some code from this function was taken from https://stackoverflow.com/questions/14643617/create-table-using-javascript
//function generates the table
function create_table() {

    var x_start = Math.floor(document.getElementById("myForm").elements[0].value);
    var x_end = Math.floor(document.getElementById("myForm").elements[1].value);
    var y_start = Math.floor(document.getElementById("myForm").elements[2].value);
    var y_end = Math.floor(document.getElementById("myForm").elements[3].value);

    var num = Number(x_start);
    var num2 = Number(y_start);

    //html elements are imported
    var tablearea = document.getElementById('tablearea');
    var tbl = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '2px solid black';

    //table is made based on template from stackoverflow
    for(var i = y_start-1; i <= y_end; i++){
        var tr = tbl.insertRow();

        for(var j = x_start-1; j <= x_end; j++) {

            var td = tr.insertCell();

            if(i == y_start-1 && j == x_start-1) {
                td.appendChild(document.createTextNode(''));
            }

            else if (i == (y_start-1)) {
                td.appendChild(document.createTextNode((num)));
                num = num + 1;
            }

            else if (j == (x_start-1)) {
                td.appendChild(document.createTextNode((num2)));
                num2 = num2 + 1;
            }

            else {
                td.appendChild(document.createTextNode(i*j));
                if (i == y_start-1 && j != x_start-1) {
                    td.appendChild(document.createTextNode(i));
                }
            }
            td.style.border = '2px solid black';
        }
    }

    if (it > 0) {
        var table1 = document.getElementById('table1');
        tablearea.removeChild(table1);
        console.log(1);
    }

    tbl.setAttribute('id', 'table1');
    tablearea.appendChild(tbl);
    
    it++;
}
