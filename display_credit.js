function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener("DOMContentLoaded", function() {
    const credit = getQueryParam('credit');
    document.getElementById('credit').textContent = credit;
});
