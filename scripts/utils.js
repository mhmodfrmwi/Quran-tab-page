export const clickLabelEvent = (item) =>
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      item.click();
    }
  });
export const observerElements = (sectionElements) => {
  const options = { threshold: 0.2 };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  sectionElements.forEach((element) => {
    observer.observe(element);
  });
};
