export interface Theme {
  id: string;
  name: string;
  author: string;
  rating: number;
  codePreview: string;
}

export const themes: Theme[] = [
  {
    id: "github-theme",
    name: "GitHub Theme",
    author: "GitHub",
    rating: 4,
    codePreview: `const user = document.getElementById('user');
if (user && user.value) {
  console.log('Hello, ' + user.value);
  return;
}`
  },
  {
    id: "one-dark-pro",
    name: "One Dark Pro",
    author: "binaryify",
    rating: 5,
    codePreview: `const user = document.getElementById('user');
if (user && user.value) {
  console.log('Hello, ' + user.value);
  return;
}`
  },
  {
    id: "dracula",
    name: "Dracula",
    author: "Dracula Theme",
    rating: 4,
    codePreview: `const user = document.getElementById('user');
if (user && user.value) {
  console.log('Hello, ' + user.value);
  return;
}`
  }
];
