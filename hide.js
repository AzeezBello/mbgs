document.addEventListener("DOMContentLoaded", function () {
  var headings = document.querySelectorAll("h3");

  headings.forEach(function (heading) {
    var next = heading.nextElementSibling;

    if (!next || next.tagName.toLowerCase() !== "p") {
      return;
    }

    var toggleParagraph = function () {
      var isHidden = next.hasAttribute("hidden");

      if (isHidden) {
        next.removeAttribute("hidden");
        heading.setAttribute("aria-expanded", "true");
      } else {
        next.setAttribute("hidden", "hidden");
        heading.setAttribute("aria-expanded", "false");
      }
    };

    next.setAttribute("hidden", "hidden");
    heading.style.cursor = "pointer";
    heading.setAttribute("role", "button");
    heading.setAttribute("tabindex", "0");
    heading.setAttribute("aria-expanded", "false");

    heading.addEventListener("click", toggleParagraph);
    heading.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleParagraph();
      }
    });
  });
});
