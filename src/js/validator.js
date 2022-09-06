function validateInputedValues(x, y, r) {

    let validation_info_box = document.querySelector('.validation_info');
    validation_info_box.classList.remove("show");

    let validation_info = "";
    let x_validation_success = false;
    let y_validation_success = false;
    let r_validation_success = false;
    let validation_success = false;
    
    if (x === undefined || x === "") {
        validation_info += "<span>Не выбрано значение X!</span>";
    } else {
        x_validation_success = true;
    }

    if (!(y.trim() === "")) {
        if (/^(-?\d*\.\d+|-?\d*|-?\d*e[-\+]?\d+)$/.test(y)) {
            if ((parseFloat(y) > -5) && (parseFloat(y) < 3)) {
                y_validation_success = true;
            } else validation_info += "<span>Координата Y задается числом в промежутке (-5..3)!</span>";
        } else validation_info += "<span>Координата Y задается числом!</span>";
    } else validation_info += "<span>Не введена координата Y!</span>";

    if (r === null) {
        validation_info += "<span>Не выбрано значение R!</span>";
    } else {
        r_validation_success = true;
    }

    validation_success = x_validation_success && y_validation_success && r_validation_success;

    if (!validation_success) {
        $(".validation_info").html("<br>" + validation_info + "<br>");
        validation_info_box.classList.add("show");
    }

    return validation_success;
}
