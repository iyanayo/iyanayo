// Iyán Àyo: small helpers
const PHONE = "17059231430";

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// "Order this" buttons open WhatsApp with the dish already typed in
document.querySelectorAll(".order").forEach((btn) => {
  const text = `Hello Ayo, I would like to order ${btn.dataset.dish}.`;
  btn.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
});