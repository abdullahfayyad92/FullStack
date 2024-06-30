//part1,2
// function add(){
//    let x = $('#for').val();
//    alert(x);
// }
// function plus(){
//     let html = `
//     <input id="for" class="form-control" type="text">
//     <button id="but" onclick="remove()" class="btn btn-primary">remove</button>
//     `;   function remove(){
//         document.getElementById('res').classList.remove('.form-control');

//     }
   
//     $('#res').prepend(html);
// }


//part3
$('#change').click( function(){
    $(this).toggleClass('vati');
} );