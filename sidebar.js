document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('geminiFrame');

  iframe.addEventListener('load', () => {
    iframe.style.opacity = '1';
  });

  setTimeout(() => {
    iframe.style.opacity = '1';
  }, 4000);
});