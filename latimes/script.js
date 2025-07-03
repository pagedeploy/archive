const headlineInput = document.getElementById('headline');
const categorySelect = document.getElementById('category');
const linkDisplay = document.getElementById('link-display');

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .substring(0, 64);
}

function updateLink() {
  const headline = slugify(headlineInput.value || "your-sensational-news-headline-here");
  const category = categorySelect.value.toLowerCase();
  linkDisplay.textContent = `https://latimes.page/${category}/${headline}`;
}

function copyLink() {
  const link = linkDisplay.textContent;
  navigator.clipboard.writeText(link).then(() => {
    const original = linkDisplay.textContent;
    linkDisplay.textContent = "Copied!";
    setTimeout(() => {
      linkDisplay.textContent = original;
    }, 1500);
  });
}

headlineInput.addEventListener('input', updateLink);
categorySelect.addEventListener('change', updateLink);

updateLink();