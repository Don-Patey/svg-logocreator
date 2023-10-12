const fs = require(`fs`);
const inquirer = require(`inquirer`);
const {Circle} = require(`./shape/shapes.js`);


// set txt need to play around x&y to get it in the middle

class Svg{
    constructor(){
        this.text = "";
        this.shapeDesign = ""; 
    }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shapeDesign}
    ${this.text}
    </svg>`;
    }
    setText(text, color){
        this.text = `<text x="0" y="15" fill="${color}">${text}</text>`;
    }
    setShape(shape){
        this.shapeDesign = shape.render();
    }
}





    //ask for text, text color, shape color, //
    inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: "what shape would you like to make?",
            choices: ['Square', 'Triangle', 'Circle'],
        },
        {
            type: 'input',
            name: 'text',
            message: "what text would you like in the logo?",
            validate: (input) => 
                input.length <= 3 || "Text should be up to 3 text characters"
        },
        {
            type: 'input',
            name: 'textColor',
            message: "what text color would you like to use?",
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "what shape color would you like to use?",
         
        }
    ]).then(({shape, text, textColor, shapeColor}) => {
    let answer

       

      
        // if (shape === 'Circle'){
        //    answer = new Circle();
        // } else if (shape === 'Square'){
        //     svg.setShape(new Square(shapeColor));
        // } else {
        //     svg.setShape(new Triangle(shapeColor));
      
        answer = new Circle();
        answer.setColor(shapeColor);
        const svg = new Svg();
        svg.setText(text, textColor);
        svg.setShape(answer);
        

        

       fs.writeFile('logo.svg', svg.render(), (err) => {
            if (err) {
                console.log(err);
            } 
        })
    }) 

    