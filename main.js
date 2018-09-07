
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// let translate = () =>  {
//     console.log('Test of function');
//     var text_fun = document.getElementById("inText").value;
//     return printToDom(text_fun, 'dom');
// };


// document.getElementById("SPANISH").addEventListener("click", function(){
//     let x = document.getElementById("inText").value;
//     document.getElementById("demo").innerHTML = x;
// });


document.getElementById("SPANISH").addEventListener("click", function(){
    var elmnt = document.createElement("p");
    elmnt.setAttribute("id","dom2")
    var item = document.getElementById("dom");
    item.replaceChild(elmnt, item.childNodes[0]);
    let x = document.getElementById("inText").value;
    return printToDom(x, "dom2")
});

