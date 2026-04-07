const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const storageKey = "portfolio-theme";

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem(storageKey, theme);

  if (themeLabel) {
    themeLabel.textContent = theme === "light" ? "Tema claro" : "Tema escuro";
  }
}

const savedTheme = localStorage.getItem(storageKey);
applyTheme(savedTheme === "light" ? "light" : "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const subject = encodeURIComponent(`Contato pelo portfolio - ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nContexto:\n${message}`
    );

    formFeedback.textContent = "Abrindo seu aplicativo de e-mail com a mensagem pronta.";
    window.location.href = `mailto:portopaulo@icloud.com?subject=${subject}&body=${body}`;
  });
}
