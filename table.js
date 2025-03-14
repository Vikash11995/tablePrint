function printTable() {
    let x = document.getElementById("myNum").value;
    let MyTable = "";
    for(let i = 1; i <= 10; i++) {
        MyTable += `${x} X ${i} = ${x * i} <br>`;
    }
    if(x == "") {
document.querySelector('.Tables').innerHTML = "Please enter a number";

    }
    else if(x == 0) {
        
        document.querySelector('.Tables').innerHTML = "Please enter a number other than 0";
    }
    else{
        document.querySelector('.Tables').innerHTML = MyTable;

    }
    
}
