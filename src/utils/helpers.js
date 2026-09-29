export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const navOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const formatDate = (dateString) => {
  if (!dateString) return '';
  return dateString;
};
