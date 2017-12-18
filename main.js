window.addEventListener('DOMContentLoaded', init);


function init() {
    

var params = {
    activeClass: 'box__item--active',
    activeClassTabText: 'box__article--active',
    targetArr: document.querySelector('.box__list')
}


function showNumbers(params) {
    var quantityItems = params.targetArr.children.length;
    for (i = 0; i < quantityItems; i++) {
            if (params.targetArr.children[i].classList.contains(params.activeClass) ) {
                document.querySelector('.numbers').innerText = (i + 1) + ' из ' + quantityItems;
                break
            }

        }
}

showNumbers(params)

function selectTabsText(params) {
    var targetDataTab = document.querySelector('.' + params.activeClass).dataset.btn;
    var targetAtribite = 'article' + '[data-btn=' + '"' + targetDataTab + '"' + ']';
    document.querySelector('.' + params.activeClassTabText).classList.remove(params.activeClassTabText);
    document.querySelector(targetAtribite).classList.add(params.activeClassTabText);

}

selectTabsText(params)

function changeTabWithClick(params) { params.targetArr.addEventListener('click', function (event) {
        if (event.target.classList.contains(params.activeClass)) {
            return;
        } else {
            document.querySelector('.' + params.activeClass).classList.remove(params.activeClass);
            event.target.classList.add(params.activeClass);
        }

        selectTabsText(params)
        showNumbers(params)


})
}


function changeTabWithKey(params) { document.addEventListener('keydown', function(event) {
    var targetItem = document.querySelector('.' + params.activeClass);
    if (event.keyCode !== 39 && event.keyCode !== 37) {
        return;
    } else if (event.keyCode === 39) {
        if (targetItem.nextElementSibling == null) {
            targetItem.parentElement.firstElementChild.classList.add(params.activeClass);
            document.querySelector('.' + params.activeClass).parentElement.lastElementChild.classList.remove(params.activeClass);
            showNumbers(params);
            selectTabsText(params);
        } else {
            targetItem.nextElementSibling.classList.add(params.activeClass);
            targetItem.classList.remove(params.activeClass);
            showNumbers(params);
            selectTabsText(params);
        }
    } else {
        if (targetItem.previousElementSibling == null) {
            targetItem.parentElement.lastElementChild.classList.add(params.activeClass);
            targetItem.classList.remove(params.activeClass);
            showNumbers(params);
            selectTabsText(params);
        } else {
            targetItem.previousElementSibling.classList.add(params.activeClass);
            targetItem.classList.remove(params.activeClass);
            showNumbers(params);
            selectTabsText(params);
        }
    }
})
}



changeTabWithClick(params)
changeTabWithKey(params)




}