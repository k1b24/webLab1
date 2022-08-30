function recieveSubmit() {

    let x_value = $('#x_value').val();
    let y_value = $('#y_value').val();
    let r_value = $('#r_value').val();
    
    if (validate_inputed_values(x_value, y_value, r_value)) {
        $.ajax({
            type: "POST",
            url: "../src/php/index.php",
            async: false,
            data: {"x": x_value.trim(), "y": y_value.trim(), "r": r_value.trim()},
            success: function(data) {
                $('#result_table tr:last').after(data);
            },
            error: function(data) { 
                alert(data);
            }
        });
    }
}