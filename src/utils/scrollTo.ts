// Динамически измеряем высоту шапки (учитывает safe-area на iPhone)
const getNavbarHeight = (): number => {
  const navbar = document.querySelector('header');
  return navbar ? navbar.getBoundingClientRect().height : 72;
};

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const navbarHeight = getNavbarHeight();
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top, behavior: 'smooth' });
};
