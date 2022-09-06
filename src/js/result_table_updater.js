if (window.localStorage.getItem('table_data') != null) {
    $('#result_table tr:last').after(window.localStorage.getItem('table_data'));
}

function updateTable(data) {
    let storage = window.localStorage;
    storage.setItem('table_data', (storage.getItem('table_data') != null ? storage.getItem('table_data') : '') + data);
    $('#result_table tr:last').after(data);
}