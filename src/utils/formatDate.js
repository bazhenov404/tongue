export function formatDate(timestamp) {
    if (!timestamp) return "Data non disponibile";

    return new Date(timestamp * 1000).toLocaleDateString("it-IT", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}