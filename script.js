function attachMousemoveListeners(selectors) {
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((span) => {
      span.onmousemove = (e) => {
        const { target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--head-mouse-x", `${x}px`);
        target.style.setProperty("--head-mouse-y", `${y}px`);
      };
    });
  });
}
document.querySelectorAll(".btn-hero").forEach((wrapper) => {
  wrapper.addEventListener("mouseover", () => {
    wrapper.scrollBy({ left: wrapper.offsetWidth, behavior: "smooth" });
  });

  wrapper.addEventListener("mouseleave", () => {
    wrapper.scrollBy({ left: -wrapper.scrollLeft, behavior: "smooth" });
  });
});
function setInitialValues(selectors) {
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((span) => {
      span.style.setProperty("--head-mouse-x", "0px");
      span.style.setProperty("--head-mouse-y", "0px");
    });
  });
}

if (window.innerWidth > 600) {
  const selectors = [".h1", ".head", ".card-head", ".card-subhead"];
  attachMousemoveListeners(selectors);

  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });

  setInitialValues(selectors);

  document.querySelectorAll(".btn-hero").forEach((wrapper) => {
    wrapper.addEventListener("mouseover", () => {
      wrapper.scrollBy({ left: wrapper.offsetWidth, behavior: "smooth" });
    });

    wrapper.addEventListener("mouseleave", () => {
      wrapper.scrollBy({ left: -wrapper.offsetWidth, behavior: "smooth" });
    });
  });
} else {
  console.log("lol");
}

let menu = document.querySelector(".spl");
menu.onclick = () => {
  let list = document.querySelector(".list");
  list.style.display = "flex";
  console.log("lol");
};
