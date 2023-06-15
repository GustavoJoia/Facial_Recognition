let table = document.querySelector('tbody')
import { translate } from "./translate.js";

export function write(data){

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    data.forEach((element, index) => {

        let row = document.createElement('tr')
        let id = document.createElement('td')
        id.textContent = (index+1)
        let emotion = document.createElement('td')
        emotion.textContent = translate(element.expression)
        let prob = document.createElement('td')
        prob.textContent = (element.probability*100).toFixed(1)+'%'
        table.appendChild(row)
        row.appendChild(id)
        row.appendChild(emotion)
        row.appendChild(prob)
    });

}