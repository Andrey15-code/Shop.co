export function initMenu() {
  const menuBtn = document.getElementById('menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')

  if (!menuBtn || !mobileMenu) return

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
  })
}