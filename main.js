
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

function translate() {
    console.log('Test of function');
    var text_fun = document.getElementById("inText").value;
    
    return printToDom(text_fun, 'dom');
};
