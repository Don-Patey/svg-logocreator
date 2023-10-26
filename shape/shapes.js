class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
}
}

class Circle extends Shape {
    render() {
        return `<svg width="200" height="200">
        <circle cx="100" cy="100" r="50" stroke-width="1" fill="${this.color}" />
        </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg width="200" height="200">
        <polygon points="100,0 160,100 40,100" fill="${this.color}" />
        
        </svg>`;
        console.log(this.text);
    }
}

class Square extends Shape {
    render() {
        return `<svg width="200" height="200">
        <rect x="50" y="100" width="100" height="100" fill="${this.color}" stroke-width="1" />
        </svg>`;
    }
}

module.exports = { Circle, Square, Triangle };
