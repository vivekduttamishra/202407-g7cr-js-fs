
var numberTextBox=document.getElementById('numberTextBox');
var consoleDiv=new Element('console');
var numberList=new Element('numberList','li');
var calc=new Calculator();



function handleAddToList(){
    var value = numberTextBox.value;
    var number = parseFloat(value);
    if(calc.addValue(number)){
        var index= calc.values.length-1;
        addLi(index,number);
    } else{
        consoleDiv.append(`Invalid Value :"${value}"`);
    }
}


function addLi(index,number) {
    numberList.appendWithId(`item-${index}`,

        `   ${number} 
            <button class='delete-button'  onclick="handleDeleteItem(${index})" >x</button>
        `
    )
    ;
}


function handleDeleteItem(index){
    //console.log(`deleting item #${index}=${numbers[index]}`);

    calc.remove(index);
    
    var li=document.getElementById(`item-${index}`);
    li.remove();
}


function handleClearUI(){
    console.log('calling clear');
    consoleDiv.clear();
    numberTextBox.value='';
    numberList.clear();
}

function handleReset(){
    
    handleClearUI();
    calc.reset();
}

function handleRefresh(){
    numberList.clear();
    for(var i=0; i<calc.values.length; i++){
        addLi(i, calc.values[i]);
    }
}


function handleSum(){
    var sum = calc.sum();
    consoleDiv.append(`Sum: ${sum}`);
}




function handleAverage(){
    var average=calc.average();
    consoleDiv.append(`Average: ${average}`);
}

function handleMin(){
    var min=calc.min();
    consoleDiv.append(`Min: ${min}`);
}

handleRefresh();
