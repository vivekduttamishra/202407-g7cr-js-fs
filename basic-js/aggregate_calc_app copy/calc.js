
var numberTextBox=document.getElementById('numberTextBox');
var consoleDiv=document.getElementById('console');
var numberList=document.getElementById('numberList');
var numbers=[2,3,5,9,6];

handleRefresh();

function addToList(){
    var value = numberTextBox.value;
    var number = parseFloat(value);
    if(!isNaN(number)){
        //console.innerHTML+=  `<p>Adding number ${number}</p>`;
        numbers.push(number);
        addLi(number,numbers.length-1);
    } else{
        //consoleDiv.innerHTML+=`<p>Invalid Value :"${value}"</p>`;
        consoleWrite(`Invalid Value :"${value}"`);
    }
}

function consoleWrite(value){
    consoleDiv.innerHTML+=`<p>${value}</p>`;
}

function addLi(number,index) {
    numberList.innerHTML += 
    `<li id="item-${index}">
        ${number} 
        <button class='delete-button'  onclick="deleteItem(${index})" >x</button>
    </li> `;


}
function addLi_v0(number,index) {

    var li= document.createElement('li');
    li.setAttribute('id', `item-${index}`);
    li.textContent = `${number} `;

    var button= document.createElement('button');
    button.textContent = "X";
    button.addEventListener('click', ()=> deleteItem(index));
    button.setAttribute('class','delete-button');
    li.appendChild(button);

    numberList.appendChild(li);   
 

}

function deleteItem(index){
    //console.log(`deleting item #${index}=${numbers[index]}`);

    numbers.splice(index, 1);
    //refresh();
    var li=document.getElementById(`item-${index}`);
    li.remove();
}


function clearUI(){
    console.log('calling clear');
    //alert('Clearning!');

    consoleDiv.innerHTML=`<p>Clearing</p>`;
    numberTextBox.value='';
    numberList.innerHTML='';
    //console.innerHTML='';
}

function reset(){
    consoleDiv.innerHTML=`<p>Resetting</p>`;
    clearUI();
    //also remove from the memory
    numbers=[];
}

function handleRefresh(){
    numberList.innerHTML="";
    for(var i in numbers){
        addLi(numbers[i],i);
    }
}

function sum() {
    var sum = 0;
    for (var number of numbers) {
        sum += number;
    }
    return sum;
}

function handleSum(){
    var sum = sum();
    consoleWrite(`Sum: ${sum}`);
}


function average() {
    return sum() / numbers.length;
}


function handleAverage(){
   
    var average=average();

    consoleWrite(`Average: ${average}`);
}




document
    .getElementById('addButton')
    .addEventListener('click', addToList);


