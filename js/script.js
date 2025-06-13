document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("como");
    const especifiqueContainer = document.getElementById("especifique-container");
  
    select.addEventListener("change", () => {
      if (select.value === "Otro") {
        especifiqueContainer.style.display = "block";
        document.getElementById("especifique").setAttribute("required", "required");
      } else {
        especifiqueContainer.style.display = "none";
        document.getElementById("especifique").removeAttribute("required");
      }
    });
  
    const form = document.getElementById("contactForm");
    console.log(form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensaje enviado.");
      especifiqueContainer.style.display = "none";
      form.reset();
    });
  });
  