document.addEventListener('DOMContentLoaded', () => {
  // Adds a dynamic margin to the "main" element to account for the "header" height
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const headerHeight = header.offsetHeight
  main.style.marginTop = `${headerHeight}px`
})
