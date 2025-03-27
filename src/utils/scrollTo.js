export function scrollTo(sectionId) {
  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
    return { scrollTo };
  }
  