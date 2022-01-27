export const storage = (key, value) => {
  if (value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  return JSON.parse(localStorage.getItem(key));
};

export const clearStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('todos');
};