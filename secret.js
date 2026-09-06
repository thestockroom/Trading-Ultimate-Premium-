const SECRET = {
  name: "TRADING ULTIMATE PREMIUM",

  theme: {
    primary: "#7C3AED",
    secondary: "#A855F7",
    background: "#F8F7FF",
    text: "#171323"
  }
};

document.documentElement.style.setProperty("--primary", SECRET.theme.primary);
document.documentElement.style.setProperty("--secondary", SECRET.theme.secondary);
document.documentElement.style.setProperty("--background", SECRET.theme.background);
document.documentElement.style.setProperty("--text", SECRET.theme.text);

document.querySelectorAll("[data-brand-name]").forEach(el => {
  el.textContent = SECRET.name;
});
