let anchor = document.querySelector("a");

const viewComments = (e) => {
  console.log(e);
  // To access a property of the event object, we can use dot notation:
  let eventTarget = e.target;
  // Log the target to the console
  console.log(eventTarget);

  var eventType = e.type;
  console.log("The event type is: " + eventType);

  // Prevent page from jumping to top.
  e.preventDefault();

  let comments = document.querySelector("#comments");

  console.log(comments.style.display);

  if (comments.style.display === "") {
    comments.className = "show-comments";
  } else {
    comments.style.display === "";
  }
};

anchor.addEventListener("click", viewComments);
