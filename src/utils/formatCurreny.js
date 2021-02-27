export default function formatCurrency(value) {
  return value
    ? value.toLocaleString("it-IT", { style: "currency", currency: "VND" })
    : null;
}
