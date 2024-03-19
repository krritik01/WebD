// document.getElementById("owl").onclick=function(){
//     alert('owl clicked')
// } This is not a good approach

// document.getElementById('owl').addEventListener('click', function(){
//     alert('owl clicked')
// })

document.getElementById("owl").addEventListener("click", function(e){
    console.log(e)
}, false)

//e = eventObject
//type, tinmestamp, defaultPrevented, 
//target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode

//Event propagation -: Event Propagation determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM is Event Bubbling(default) and Event Capturing.

// 1. Bubbling: When an event happens on a component, it first runs the event handler on it, then on its parent component, then all the way up on other ancestors’ components. By default, all event handles through this order from center component event to outermost component event.

// 2. Capturing: It is the opposite of bubbling. The event handler is first on its parent component and then on the component where it was actually wanted to fire that event handler. In short, it means that the event is first captured by the outermost element and propagated to the inner elements. It is also called trickle down.

