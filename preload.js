const css = `
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  /* Don't override body scroll anymore */
`;

window.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.innerText = css;
  document.head.appendChild(style);
});
