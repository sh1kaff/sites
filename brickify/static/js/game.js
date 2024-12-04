var canvas = document.getElementById("sandbox");

var context = canvas.getContext("2d");
var button_bounds;
var max = 0;
var clicks = 0;

function getRandomColor() {
    let colors = [];
    for (let i = 0; i < 3; ++i) {
        colors[i] = Math.round(Math.random() * 255);
    }

    return `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${Math.random()})`;
}

function drawSquareByCenter(x, y, r = 40, color = getRandomColor()) {
    context.fillStyle = color;
    context.fillRect(x - r / 2, y - r / 2, r, r);
}

function drawHamsterCounter() {
    let font_size = 20;
    let text = `Count: ${clicks}`;
    let max_text = `Max: ${max}`;
    
    let cx = canvas.clientWidth / 2 - text.length * 2 - 1.5 * font_size;
    let cy = 0.05 * canvas.clientHeight;

    context.clearRect(0, 0, canvas.clientWidth, 2 * cy);

    context.fillStyle = "black";
    context.font = `${font_size}px verdana`;
    context.fillText(text, cx, cy);
    context.fillText(max_text, cx, 2 * cy);
}

function initHamsterButton() {
    let bx = canvas.clientWidth / 2;
    let by = canvas.clientHeight / 2;
    let ba = canvas.clientHeight / 2;

    button_bounds = [bx, by, ba];
}

function inButtonBounds(x, y) {
    bx = button_bounds[0];
    by = button_bounds[1];
    ba = button_bounds[2] / 2;

    if (x >= bx - ba &&
        x <= bx + ba &&
        y >= by - ba &&
        y <= by + ba
    ) {
            return true;
        }
    
    
    return false;
}

function calc_win(count) {
    win_prob = 0.7;
    if (count > 10) {
        win_prob /= Math.pow(1.049, count - 10);
    }

    if (Math.random() <= win_prob) return 1;
    
    return 0;
} 


initHamsterButton();
drawSquareByCenter(...button_bounds);
drawHamsterCounter();


canvas.addEventListener("click", (e) => {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    // console.log(`Click: (${x}, ${y})`);
    // console.log(`Fact Click: (${e.clientX}, ${e.clientY})`);
    // console.log(`Bounds: h = ${canvas.clientHeight}, w = ${canvas.clientWidth}`);

    if (inButtonBounds(x, y)) {
        if ( calc_win(clicks) ) {
            ++clicks;
        } else {
            clicks = (!clicks) ? 0 : clicks - 1;
        }

        if (clicks > max) {
            max = clicks;
        }
        

        drawSquareByCenter(...button_bounds);
        drawHamsterCounter();
        // console.log("InBounds!");
    }

});   
