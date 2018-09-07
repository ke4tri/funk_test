
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// let translate = () =>  {
//     console.log('Test of function');
//     var text_fun = document.getElementById("inText").value;
//     return printToDom(text_fun, 'dom');
// };


document.getElementById("funkBut").addEventListener("click", function(){
    let x = document.getElementById("inText").value;
    document.getElementById("demo").innerHTML = x;
});

