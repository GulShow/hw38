'use strict';


const generateListArray = (arr) => {
    const ul = document.createElement('ul');

arr.forEach((el) => {
    const li = document.createElement('li');
    let childElement = null;
    if(Array.isArray(el)) {
        childElement = generateListArray(el)
    }
    else {
       childElement = document.createTextNode(el)
    }
    li.appendChild(childElement)
    ul.appendChild(li)
})
    return ul
}

document.body.appendChild(generateListArray([1,2,3]));
document.body.appendChild(generateListArray([1, 2, [1.1, 1.2, ['1.2', '1.2'], 1.3], 3]))
