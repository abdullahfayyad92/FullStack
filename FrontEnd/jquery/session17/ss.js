//part2,3 jquery
// function add(){
//     let name;
//     name = $('#name').val();
//    if(name == ''){
//     $('#name').addClass('error');
//    }else {
//     $('#name').removeClass('error');
//     alert(name);
//    }
// }

//part5,6 hide show toggle
// $('#arr').click(  function(){
//     $('#dad').hide();
// }  );
// $('#att').click(  function(){
//     $('#da').animate({left:'250px'});
// }  );
// $('#ayy').click(  function(){
//     $('#dad').fadeToggle(5000);
// }  );

// part7 call back
// $('#att').click(  function(){
//     $('#da').show( function(){
//         $(this).slideUp(5000);
//     } );
// });
// $('#arr').click(  function(){
//       $('#da').hide();
// }  );

// part8 get set events
// $('#scr').scroll(function(){
//     alert('ali');
// });
// $(window).scroll(function(){
//     alert('ali');
// });
let x = $('.doo').offset();
console.log(x);

    $(window).scroll( function(){
            let y = $(window).scrollTop();
        console.log(y);
        if( x.top == y){
            alert('ali');
         }
} );