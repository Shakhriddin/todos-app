export const changePageTitle = (value) => {
  return document.querySelector('title').textContent = `${value} - Todos App`;
};