// How do you make a function that only calls input function f  every 50 milliseconds?
// Actually whats being asked is Debounce. Its a pretty common concept for Frontend


function debounce(func, time) {
  // timeout must be defined outside of scope
  let timeout;
  return (...args) => {
    // may not need this if using arrow function
    // const args = arguments;
    const invokeLater = () => {
      timeout = null;
      func.apply(null, args);
      // func(...args)
    };

    // cannot clearTimeout on a timeout that has already occured
    clearTimeout(timeout);
    timeout = setTimeout(invokeLater, time);
  };
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


// *************************** USE THIS VERSION *********************
// https://www.youtube.com/watch?v=B1P3GFa7jVc

const debounce = (fn, delay) => {
  let timeoutID;

  // return a function
  return (...args) => {

    // clear a previously set timeout
    if(timeoutID) clearTimeout(timeoutID)

    timeoutID = setTimeout( () => {
      fn(...args)
    }, delay)

  }
}

window.addEventListener("click", debounce(e => {
  console.log('clicked!  ARGS:', e.target)
}, 2000))


/*
// EXAMPLE USAGE


var myEfficientFn = debounce(function() {
  // All the taxing stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);

document.getElementByID('button-id').addEventListener("click", debounce(e => {
  console.log('clicked')
}, 2000))


*/