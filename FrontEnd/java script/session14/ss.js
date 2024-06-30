//part 3 inner css in js
var as = function(){
    var x =document.getElementById('x').value;
    var y =document.getElementById('y').value;

    if(x == ''){
        document.getElementById('x').classList.add('error');
    }else{
        document.getElementById('x').classList.remove('error');
    }
    if (y == ''){
        document.getElementById('y').classList.add('error');
    
    }else{
        document.getElementById('y').classList.remove('error');
    }
    if(x !=''  && y != ''){
        alert(x * y);
    }
}   
// part 5 inner css in js
// window.onscroll = function(){
//     if(window.scrollY > 100){
//         document.getElementById('w').classList.add('bgd');
//         document.getElementById('w').classList.remove('bg');
//     }else{
//         document.getElementById('w').classList.add('bg');
//         document.getElementById('w').classList.remove('bgd');
//     }
// }