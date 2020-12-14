// Make Visible and Invisible Categories and Category-Items

function visible(submenuName){
    document.getElementById(submenuName).style.display='flex';
    document.getElementById(submenuName).style.flexDirection='row';
}
function unvisible(submenuName){
    document.getElementById(submenuName).style.display = 'none';
}

// Open and Close Mobile Menu

function openNav(){
    document.getElementById('mobile-menu').style.width= '100%';
    document.getElementById('search_btn').style.display='none';
}
function closeNav(){
    document.getElementById('mobile-menu').style.width= '0%';
    document.getElementById('search_btn').style.display='flex';
}

// Insıde and Outside Mobile Menu

function insideNav(){
    document.getElementById('mobile-menu').style.width= '0%';
    document.getElementById('search_btn').style.display='flex';
    document.getElementById('mobile-menu-item').style.width= '100%';
    document.getElementById('search_btn').style.display='none';
}
function outsideNav(){
    document.getElementById('mobile-menu-item').style.width= '0%';
    document.getElementById('search_btn').style.display='flex';
    document.getElementById('mobile-menu').style.width= '100%';
    document.getElementById('search_btn').style.display='none';
}

//Search Bar Visibilty for Last 5 Text Value

function searchBarVisible(){
    document.getElementById('searched-values').style.display='flex' ;
}

function searchBarInvisible(){
    document.getElementById('searched-values').style.display='none' ;
}

function searchBarVisible_Mobile(){
    document.getElementById('searched-values').style.display='flex' ;
}

function searchBarInvisible_Mobile(){
    document.getElementById('searched-values').style.display='none' ;
}
