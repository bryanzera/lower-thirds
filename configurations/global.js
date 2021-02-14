// TODO: Move this to an endpoint that injects the following data from the url data

const repeatDuration = 5;
const animationDuration = .5;
const titleDuration = 2;

document.addEventListener("DOMContentLoaded", function() {

  // set repeat if configured
  if (repeatDuration) {
    setTimeout(() => {
      window.location.reload();
    }, repeatDuration * 1000);
  }

  // locate all transitional elements
  const elements = document.getElementsByClassName('lower-thirds-element');

  // transition to in
  setTimeout(() => {

    // add in class to all elements inside
    for (i=0; i<elements.length; i++) {
      elements[i].classList.add("animation-in");
    }
  }, animationDuration * 1000);

  // wait for title duration
  setTimeout(() => {

    // remove in, add out class
    for (i=0; i<elements.length; i++) {
      elements[i].classList.remove("animation-in");
      elements[i].classList.add("animation-out");
    }

  }, titleDuration * 1000);

});
