export function showError() {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}
export function hideError() {
    document.querySelector(".error").style.display = "none";
}