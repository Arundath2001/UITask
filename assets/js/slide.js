let slide1 = 1;
function display(num) {
    document.querySelector('.headpara').classList.add('slide');
    document.querySelector('.new--headpara').classList.add('slide');
    if (num === 1) {
        document.querySelector('.headpara').classList.remove('slide');
    } else if (num === 2) {
        document.querySelector('.new--headpara').classList.remove('slide');
    }
}
function prev() {
    slide1 = Math.max(slide1 - 1, 1);
    display(slide1);
}
function next() {
    slide1 = Math.min(slide1 + 1, 2);
    display(slide1);
}