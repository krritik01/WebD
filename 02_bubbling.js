// 1. Bubbling: When an event happens on a component, it first runs the event handler on it, then on its parent component, then all the way up on other ancestors’ components. By default, all event handles through this order from center component event to outermost component event.

//This is the example of the Event Bubbling -  bubbling goes botton to top
document.getElementById("images").addEventListener("click", function(e){
    console.log("clicked inside the ul")
}, false)  

// document.getElementById("owl").addEventListener("click", function(e){
//     console.log("clicked on the owl")
// }, false)

//And if we want dont want bubbling in inner element the we use a method stopPropagation()

document.getElementById("owl").addEventListener("click", function(e){
    console.log("clicked on the owl")
    e.stopPropagation()
}, false)



// The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

// The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.
document.getElementById("google").addEventListener("click", function(e){
    console.log("Google clicked")
    e.preventDefault()
    e.stopPropagation()
}, false)


