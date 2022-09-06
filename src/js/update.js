function recieveSubmit() {

    let x_value = $('#x_value').val();
    let y_value = $('#y_value').val();
    let r_value = $('#r_value').val();
    
    if (validateInputedValues(x_value, y_value, r_value)) {
        console.log(new Date().getTimezoneOffset());
        $.ajax({
            type: "POST",
            url: "../src/php/index.php",
            async: false,
            data: {"x": x_value.trim(), "y": y_value.trim(), "r": r_value.trim(), "timezone": new Date().getTimezoneOffset()},
            success: function(data) {
                updateTable(data);
            },
            error: function(data) { 
                alert(data);
            }
        });
    }
}