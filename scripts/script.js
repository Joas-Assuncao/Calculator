// CALCULATOR MADE WITH CONSTRUCTION FUNCTION

function Calculator() {
    this.display = document.querySelector('.display');

    this.init = () => {
        this.clickButtons();
        this.clickKeys();
    };

    this.clickButtons = () => {
        document.addEventListener('click', (event) => {
            const element = event.target;

            if(element.classList.contains('btn-clear')) this.clearDisplay();            
            if(element.classList.contains('btn-del')) this.deleteOneValueDisplay();
            if(element.classList.contains('btn-equal')) this.doResult();
            if(element.classList.contains('btn-num')) this.insertValue(element.innerText);
        })
    };

    this.clearDisplay = () => this.display.value = '';;

    this.deleteOneValueDisplay = () => this.display.value = this.display.value.slice(0, -1);

    this.doResult = () => {
        try {
            const count = eval(this.display.value)

            if(!count) {
                alert('Invalid count!');
                return;
            }

            this.display.value = String(count);
        } catch {
            alert('Invalid count!');
            return;
        }
    }

    this.insertValue = element => this.display.value += element;

    this.clickKeys = () => {
        document.addEventListener('keypress', (event) => {
            const key = event.keyCode;
            const elementIsActive = document.activeElement;

            if(elementIsActive === this.display) {
                return;
            }

            if(key === 13) {
                this.doResult();
                return;
            }

            const keys = [
                40, 41, 42, 43, 44, 45, 46, 47, // '(', ')', '*', '+', '.', '-', '.', '/'
                48, 49, 50, 51, 52, 53, 54, 55, 56, 57 // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            ];
            const values = [
                '(', ')', '*', '+', '.', '-', '.', '/',
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
            ];
            const index = keys.indexOf(key);

            if(index !== -1) {
                this.display.value += values[index];
            };
        })

        document.addEventListener('keyup', (event) => {
            const key = event.keyCode;
            const elementIsActive = document.activeElement;

            if(elementIsActive === this.display) {
                return;
            }
            
            if(key === 8) {
                this.deleteOneValueDisplay();
                return;
            }
        })
    }
}

const calculator = new Calculator();
calculator.init();