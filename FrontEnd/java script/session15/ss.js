// part 2 color box
// function chang(mo){
//     document.body.style.background = mo;
// }
//part 3 array part 4
// var person =['gwafa','manga','toffah','ananas'];
// for(var x = 0; x < person.length ; x++){
//     console.log(person[x]);
// }
// for(var x = 0; x < person.length ; x++){
//     var res = '<li>' + person[x] + '</li>'
//     document.getElementById('list').innerHTML += res;
// }
// part 5 object
// var person = {name:'ali', age:20};
// console.log(person);
// var persons = [
//     {name:'ali',age:20},
//     {name:'maher',age:30}
// ];
// console.log(persons[1].age);
// part 6 push crad system without updat


// function add(){
//     var names = document.getElementById('name').value;
//     var ages = document.getElementById('age').value;
//     var person ={name:names , age:ages};
//     persons.push(person);
//     console.log(persons);
//     veiw();
    
// }
// var persons =[];

// function veiw(){
//     for(x = 0; x < persons.length ; x++){
//         var dat = 'name:  '+ persons[x].name + '  age: '+ persons[x].age+ ' <button class="btn btn-danger" onclick="remove(' + x + ')"> remove</button>' + '<br>';
//     }document.getElementById('res').innerHTML += dat ;
   
// }
// function remove(id){
//     persons.splice(id, 1);
//     // alert(id);
//     console.log(persons);
// }
function add(){
    var names = document.getElementById('name').value;
    var ages = document.getElementById('age').value;
    var person ={name:names , age:ages};
    persons.push(person);
    console.log(persons);
    veiw();
    
}
var persons =[];

function veiw(){
    var dat ='';
    for(x = 0; x < persons.length ; x++){
        dat += 'name:  '+ persons[x].name + '  age: '+ persons[x].age+ ' <button class="btn btn-danger" onclick="remove(' + x + ')"> remove</button>' + '<br>';
    }document.getElementById('res').innerHTML = dat ;
   
}
function remove(id){
    persons.splice(id, 1);
    // alert(id);
    console.log(persons);
    veiw();
}