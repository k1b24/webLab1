function processXSelection(x) {
    const field = $('#x_value');
    if (field.val() === x) {
        field.val("");
        $('#x' + x).removeClass('selected');
    } else {
        if (field.val() !== "") {
            $('#x' + field.val()).removeClass('selected');
        }
        field.val(x);
        $('#x' + x).addClass('selected');
    }
}