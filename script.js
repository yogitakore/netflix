let accordian = document.getElementsByClassName("FAQ-title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains(src="assets/images/icon-plus.svg")) {
      this.childNodes[1].classList.remove(src="assets/images/icon-plus.svg");
      this.childNodes[1].classList.add(src="assets/images/icon-minus.svg");
    } else {
      this.childNodes[1].classList.remove(src="assets/images/icon-plus.svg");
      this.childNodes[1].classList.add(src="assets/images/icon-plus.svg");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
