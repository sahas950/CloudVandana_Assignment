const surveyForm = document.getElementById('surveyForm');
const popup = document.getElementById('popup');
const formData = document.getElementById('formData');
const closePopupButton = document.querySelector('.close');

function submitForm() {
    // Perform necessary form validations here
    // You can add validation logic as needed

    // Display the form data in a popup
    const data = [];
    const formElements = surveyForm.elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.name) {
            if (element.type === 'radio' && element.checked) {
                // Only include the checked gender in the popup
                data.push(`<li><b>${element.name}:</b> ${element.value}</li>`);
            } else if (element.type !== 'radio') {
                data.push(`<li><b>${element.name}:</b> ${element.value}</li>`);
            }
        }
    }
    formData.innerHTML = data.join('');
    popup.style.display = 'block';
    return false; // Prevent form submission
}

function resetForm() {
    surveyForm.reset();
}

function closePopup() {
    popup.style.display = 'none';
    surveyForm.reset();

}

closePopupButton.addEventListener('click', closePopup);
