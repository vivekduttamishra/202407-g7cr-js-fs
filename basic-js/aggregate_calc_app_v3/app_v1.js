

const app={
    numberList: new Element('numberList','li'),
    numberTextBox: document.getElementById('numberTextBox'),
    console: new Element('console'),
    handleAddToList: function(){
        var item=this.numberTextBox.value;
        this.numberList.append(item);
    },
    handleStartup:function(){
        this.numberList.append(1,2,3,4,5);    
    }

}

