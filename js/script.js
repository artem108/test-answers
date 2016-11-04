var answer = {1:true};
function checkAnswer() {
    var error = false;
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        var checked = inputs[i].checked;
        var right = answer[i+1] == true;
            if (checked !== right) {
            error = true;
            break;
        }
    }
    var output = document.getElementById('output');
    output.value = error ? 'Error' : 'Submit';
    return false;
}
