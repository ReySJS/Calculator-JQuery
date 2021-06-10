let operationCounter = 0;

///////////////////////////////////////////////////////////////////////////
///////////////////////Number Entry Function///////////////////////////////
$('.keys').on('click', function () {

    if ($('#display').text().length == 7 && operationCounter == 1) {
    } else {
        if (operationCounter == 0) {
            $('#display').text($(this).attr("entry"));
            operationCounter = 1;
        } else {
            $('#display').text($('#display').text() + $(this).attr("entry"));
        }
    }
})
///////////////////////Number Entry Function///////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//////////////////////Function to Perform Operation////////////////////////
$('.operation-button').on('click', function () {
    if (!calculator.getOperand1()) {
        calculator.setOperand1($('#display').text());
        calculator.setOperation($(this).attr("operation"));
        $('#operation').html($(this).text());
    }
    else {
        calculator.setOperand2($('#display').text());
        calculator.getResult();
        if (Number.isInteger(calculator.getResult())) {
            $('#display').text(calculator.getResult());
        }
        else {
            $('#display').text(calculator.getResult().toFixed(2));
        }
        calculator.setOperation($(this).attr("operation"));
        $('#operation').html($(this).attr("operation"));
        calculator.setOperand1($('#display').text());
        calculator.setOperand2();
    }
    operationCounter = 0;
});
//////////////////////Function to Perform Operation////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
////////////////////Function to Perform the Calculation ///////////////////
$('#calculate-button').on('click', () => {

    calculator.setOperand2($('#display').text());
    if (calculator.getResult() == "error") {
        $('#display').text(calculator.getResult());
    }
    else if (Number.isInteger(calculator.getResult())) {
        $('#display').text(calculator.getResult())
    }
    else {
        $('#display').text(calculator.getResult().toFixed(2));
    }
    $('#operation').html('');
    calculator.clearCalculator();
    operationCounter = 0;
});
////////////////////Function to Perform Calculation ///////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
///////////////Function to Perform Percentage Calculation /////////////////
$('#percent-button').on('click', () => {
    calculator.setOperand2($('#display').text());
    $('#display').text(calculator.getResultPercent());
    $('#operation').html('');
    operationCounter = 0;
});
///////////////Function to Perform Percentage Calculation /////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
////////////////////////Function to Clear Entry////////////////////////////
$('#ce-button').on('click', () => {
    $('#display').text('0');
    operationCounter = 0;
});
////////////////////////Function to Clear Entry////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//////////////////////////Function to Clear All////////////////////////////
$('#ac-button').on('click', () => {
    $('#operation').html('');
    $('#display').html('0');
    calculator.clearCalculator();
    operationCounter = 0;
});
//////////////////////////Function to Clear All////////////////////////////
///////////////////////////////////////////////////////////////////////////