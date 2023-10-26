const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./shape/shapes.js');

class Svg {
    constructor() {
        this.text = '';
        this.shapeDesign = '';
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shapeDesign}
    ${this.text}
    </svg>`;
    }
    setText(text, Textcolor, x, y) {
      this.text = `<text x="${x}" y="${y}" fill="${Textcolor}">${text}</text>`; 
    }
    setShape(shape) {
        this.shapeDesign = shape.render();
    }
}

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to make?',
            choices: ['Square', 'Triangle', 'Circle'],
        },
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like in the logo?',
            validate: (input) =>
                input.length <= 3 || 'Text should be up to 3 text characters',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What text color would you like to use?',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What shape color would you like to use?',
        }
    ])
    .then(({ shape, text, textColor, shapeColor }) => {
        let shapeObj;

        if (shape === 'Circle') {
            shapeObj = new Circle(shapeColor, textColor, text);
        } else if (shape === 'Square') {
            shapeObj = new Square(shapeColor, textColor, text);
        } else {
            shapeObj = new Triangle(shapeColor, textColor, text);
        }

        const svg = new Svg();

        // Calculate x and y for text to be centered
       const x = 150 - (text.length * 10);
       const y = 100;

      svg.setText(text, textColor, x, y);
        svg.setShape(shapeObj); //

        fs.writeFile('logo.svg', svg.render(), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
