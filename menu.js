const menuLinks = [...document.querySelectorAll('.menu-tabs a')];
const menuSections = [...document.querySelectorAll('.menu-sheet')];

const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  menuLinks.forEach(link => link.classList.toggle('active', link.hash === `#${visible.target.id}`));
}, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .1, .3] });

menuSections.forEach(section => sectionObserver.observe(section));
