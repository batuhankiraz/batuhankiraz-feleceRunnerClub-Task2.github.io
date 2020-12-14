function newelement(){
    var inputValue = document.getElementsByName('search-Txt').value ;
    var p = document.createElement('p')
    p.append(inputValue);
    document.getElementById('searched-values').innerHTML = p ;
}

function newelement_Mobile(){
    var inputValue = document.getElementsByName('search-tool').value ;
    document.getElementById('searched-values').innerHTML = inputValue;
}