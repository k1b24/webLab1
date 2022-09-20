function cleanTable() {
    let empty_table = `<tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Текущее время</th>
                        <th>Время выполнения</th>
                        <th>Результат</th>
                    </tr>`;
    $('#result_table').html(empty_table);
    $.ajax({
        type: "POST",
        url: "../src/php/index.php",
        data: {"delete_argument": "delete"},
        async: false,
    });
}

function cleanInput() {
    const field = $('#x_value');
    $('#x' + field.val()).removeClass('selected');
    field.val("");
}