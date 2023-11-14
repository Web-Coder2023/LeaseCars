let show = () => {
    let showButton = document.querySelector('.contacts-state__show');
    let itemList = document.querySelectorAll('.contacts-state__item');

    let itemsToShow = 2;
    let itemsIncrement = 4;
    
    showButton.addEventListener('click', () => {
        for (let i = 0; i < itemsIncrement; i++) {
            let index = itemsToShow + i;
            if (itemList[index]) {
                itemList[index].style.display = 'block';
            }
        }
    
        itemsToShow += itemsIncrement;
    
        if (itemsToShow >= itemList.length) {
            showButton.style.display = 'none';
        }
    });

    for (let i = 0; i < itemList.length; i++) {
        if (i >= itemsToShow) {
            itemList[i].style.display = 'none';
        }
    }

    if (itemsToShow >= itemList.length) {
        showButton.style.display = 'none';
    }
}
show();