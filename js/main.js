const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // add boreder to current tab
  this.classList.add("tab-border");
  //grab content item from dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class
  tabContentItem.classList.add("show");
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

// listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));
