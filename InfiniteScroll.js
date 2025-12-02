const itemsWrapper = document.querySelector('.items');
const wrapper = document.querySelector('.wrapper');
const spacer = document.querySelector('.spacer');
const itemsCount = 1000;
spacer.style.height = 1000 * 22 + "px";
const items = [1,2,3,4,5,6,7,8,9,10];

wrapper.addEventListener('scroll', (event) => {
    const startIndex = Math.floor(event.target.scrollTop / 22)+1;
    if (startIndex > 991) return;
    console.log(event.target.scrollTop, startIndex);
    
    for (let i=startIndex; i<startIndex+10; i++) {
        itemsWrapper.children[i-startIndex].textContent = "Item " + i;
    }
    itemsWrapper.style.transform = `translateY(${(startIndex-1) * 22}px`;
})

function generatePath(items) {
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.textContent = "Item " + item;
        itemsWrapper.appendChild(itemDiv);
    });
}

generatePath(items);
