function initTable() {
    $.ajax({
        type: "GET",
        url: "../src/php/index.php",
        async: false,
        success: function(data) {
            $('#result_table tr:last').after(data);
        },
        error: function(data) { 
            alert(data);
        }
    });
}



function updateTable(data) {
    // let storage = window.localStorage;
    // storage.setItem('table_data', (storage.getItem('table_data') != null ? storage.getItem('table_data') : '') + data);
    $('#result_table tr:last').after(data);
}