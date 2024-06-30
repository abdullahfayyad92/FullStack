// task calculator
function oprat() {

    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    var z = document.getElementById('z').value;
    
    if(isNaN(x) || isNaN(y)){
        document.getElementById('res').innerHTML ='not num';    
    }else{
        switch(z){
            case'+':
            alert(x + y);

        }
    }
}
