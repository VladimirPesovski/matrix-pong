import {SVG_NS} from '../settings'

export default class Board {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    render(svg) {
        
        let rect = document.createElementNS(SVG_NS, 'rect')
        rect.getAttributeNS(null, 'fill', '#353535')
        rect.setAttributeNS(null, 'width', this.width)
        rect.setAttributeNS(null, 'height', this.height)
        svg.appendChild(rect)


        let circle = document.createElementNS(SVG_NS, 'circle')
        circle.setAttributeNS(null, 'r', '60')
        circle.setAttributeNS(null, 'cx', 256)
        circle.setAttributeNS(null, 'cy', 128)
        circle.setAttributeNS(null, 'stroke', 'white')
        circle.setAttributeNS(null, 'stroke-width', '8')
        svg.appendChild(circle)

        let circleLeft = document.createElementNS(SVG_NS, 'circle')
        circleLeft.setAttributeNS(null, 'r', '60')
        circleLeft.setAttributeNS(null, 'cx', 0)
        circleLeft.setAttributeNS(null, 'cy', 128)
        circleLeft.setAttributeNS(null, 'stroke', 'white')
        circleLeft.setAttributeNS(null, 'stroke-width', '8')
        svg.appendChild(circleLeft)

        let circleRight = document.createElementNS(SVG_NS, 'circle')
        circleRight.setAttributeNS(null, 'r', '60')
        circleRight.setAttributeNS(null, 'cx', 512)
        circleRight.setAttributeNS(null, 'cy', 128)
        circleRight.setAttributeNS(null, 'stroke', 'white')
        circleRight.setAttributeNS(null, 'stroke-width', '8')
        svg.appendChild(circleRight)


        let line = document.createElementNS(SVG_NS, 'line')
        line.setAttributeNS(null, 'height', this.height)
        line.setAttributeNS(null, 'width', this.width)
        line.setAttributeNS(null, 'x1', this.width/2)
        line.setAttributeNS(null, 'x2', this.width/2)
        line.setAttributeNS(null, 'y1', '0')
        line.setAttributeNS(null, 'y2', this.height)
        line.setAttributeNS(null, 'stroke-width', '4')
        line.setAttributeNS(null, 'stroke-dasharray', '256, 1')
        line.setAttributeNS(null, 'stroke', 'white')
        svg.appendChild(line)

        let elem = document.createElementNS(SVG_NS, "rect");
 
        elem.setAttributeNS(null,"x",181);
        elem.setAttributeNS(null,"y",2);
        elem.setAttributeNS(null,"width",150);
        elem.setAttributeNS(null,"height",40);
        elem.setAttributeNS(null,"fill", "none");
        elem.setAttributeNS(null, 'stroke', 'white')
        elem.setAttributeNS(null, 'stroke-width', '4')

        svg.appendChild(elem);


        

    }

}