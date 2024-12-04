function setOnPageClass() {
    let pageName = window.location.pathname.split("/").pop();
    let anchor = document.querySelector(`.menu a[href='${pageName}']`);
    anchor.classList.add("onpage");
}

setOnPageClass();


function genSpannedHead() {
    let head = document.querySelector(".introduction h1");

    let spannedHead = head.textContent.replace(/[^ ]/g, (match) => {
        return `<span>${match}</span>`;
    });

    head.innerHTML = spannedHead;
}

genSpannedHead();

// Add event listener for scrolling with scaling brick.

(() => {
    let image = document.querySelector(".introduction img");
    if (!image) return;
    
    window.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        const maxScroll = scrollHeight - clientHeight;

        const power = 2;
        const scale = 1 + (scrollTop / maxScroll) * power;

        image.style.transform = `scale(${scale})`;
    })
})();
