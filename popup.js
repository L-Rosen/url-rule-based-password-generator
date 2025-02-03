document.addEventListener('DOMContentLoaded', async function() {
    //On récupère l'url
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    //On récupère les informations de la page
    const url = tab.url;
    let domain = (new URL(url)).hostname;

    document.getElementById('domain').textContent = domain;
});