const {log}  = console;
const findMaxDepth = (item, current) => {
    // console.log(current);
    if (item.children === 0) return current;
    current++;
    let max = current;
    for (let element of Array.from(item.children)) {
        max = Math.max(findMaxDepth(element, current), max);        
    }
    return max;    
}

const appDiv = document.querySelector('#app');

const max = findMaxDepth(appDiv, 0) - 1;

log(max);