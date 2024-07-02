var robot = require("robotjs");
//Get the mouse position, retuns an object with x and y.
function getMouseLocation() {
    return robot.getMousePos();
}
function checkMouseIdle(oldValue) {
    let newValue = getMouseLocation();
    console.log("Mouse is at x:" + newValue.x + " y:" + newValue.y);
    if (newValue.x == oldValue.x && newValue.y == oldValue.y) {
        console.log("Mouse value is same. So Moving Mouse");
        moveMouse(newValue);
    } else {
        console.log("Mouse Value is different so waiting for another 2 min")
    }
    setTimeout(checkMouseIdle, 45000, newValue);
}
function moveMouse(oldValue) {
    robot.moveMouse(oldValue.x+100,oldValue.y);
    let newValue = getMouseLocation();
    if (newValue.x == oldValue.x && newValue.y == oldValue.y) {
        robot.moveMouse(oldValue.x-100,oldValue.y);
    }
}
let mouseLocation = getMouseLocation();
checkMouseIdle(mouseLocation);