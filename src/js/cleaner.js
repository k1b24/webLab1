function clean_table() {
    let empty_table = `<tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Текущее время</th>
                        <th>Время выполнения</th>
                        <th>Результат</th>
                    </tr>`;
    $('#table').html(empty_table);
}

function clean_input() {
    const field = $('#x_value');
    $('#x' + field.val()).removeClass('selected');
    field.val("");
}