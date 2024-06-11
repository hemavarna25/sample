document.addEventListener('DOMContentLoaded', () => {
    loadRequests();
});

function loadRequests() {
    const requestList = document.getElementById('request-list');
    const requests = JSON.parse(localStorage.getItem('requests')) || [];

    requestList.innerHTML = '';

    requests.forEach((request, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${request}`;
        requestList.appendChild(listItem);
    });
}
