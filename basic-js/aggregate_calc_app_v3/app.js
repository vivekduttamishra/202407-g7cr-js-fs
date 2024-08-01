

var app = (
    function () {

        var numberTextBox = document.getElementById('numberTextBox');
        var consoleDiv = new Element('console');
        var numberList = new Element('numberList', 'li');
        var calc = new Calculator();


        function handleAddToList() {
            var value = numberTextBox.value;
            var number = parseFloat(value);
            if (calc.addValue(number) === 0) {
                var index = calc.values.length - 1;
                addLi(index, number);
            } else {
                consoleDiv.append(`Invalid Value :"${value}"`);
            }
        }


        function addLi(index, number) {
            numberList.appendWithId(`item-${index}`,

                `   ${number} 
            <button class='delete-button'  onclick="handleDeleteItem(${index})" >x</button>
        `
            )
                ;
        }


        function handleDeleteItem(index) {
            //console.log(`deleting item #${index}=${numbers[index]}`);

            calc.remove(index);

            var li = document.getElementById(`item-${index}`);
            li.remove();
        }


        function handleClearUI() {
            console.log('calling clear');
            consoleDiv.clear();
            numberTextBox.value = '';
            numberList.clear();
        }

        function handleReset() {

            handleClearUI();
            calc.reset();
        }

        function handleRefresh() {
            numberList.clear();
            for (var i = 0; i < calc.values.length; i++) {
                addLi(i, calc.values[i]);
            }
            if (calc.values.length === 0) {
                consoleDiv.append('No numbers in the list.');
            }
        }

        function handleSum() {
            var sum = calc.sum();
            consoleDiv.append(`Sum: ${sum}`);
        }

        function handleAverage() {
            var average = calc.average();
            consoleDiv.append(`Average: ${average}`);
        }

        function handleMin() {
            var min = calc.min();
            consoleDiv.append(`Min: ${min}`);
        }

        function handleStartup() {
            console.log('errors', calc.addValue(2, 3, 4, 9, 5, 7));
            handleRefresh();
        }

        return {
            handleAddToList: handleAddToList,
            handleSum,
            handleAverage,
            handleMin,
            handleClearUI,
            handleReset,
            handleRefresh,
            handleStartup
        };

    }
)();



var app = (
    function () {
        // all your global codes and function here

        return {
            //select function that should be
            //used outside this block.
        };
    }
)();

