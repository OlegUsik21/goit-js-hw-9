const form = document.querySelector('.feedback-form');
const formData = { email: "", message: "" };

window.addEventListener('DOMContentLoaded', () => {
    const savedData = loadFromLS('feedback-form-state') || {};
    form.elements.email.value = savedData.email || '';
    form.elements.message.value = savedData.message || '';
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
});

form.addEventListener('input', () => {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    saveToLS('feedback-form-state', formData);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Please fill all fields');
        return;
    }

    console.log({ email: formData.email, message: formData.message });

    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
});



function saveToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch {
        return null;
    }
}