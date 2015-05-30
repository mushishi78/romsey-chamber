---
---

function loadMore() {
	var hiddenItems = document.querySelectorAll('.feed .hide');
	var numberOfItems = Math.min(hiddenItems.length, 5);
	for(var i = 0; i < numberOfItems; i++) {
		hiddenItems[i].className = hiddenItems[i].className.replace('hide', '');
	}
}
