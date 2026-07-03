const form = document.getElementById('plantForm');
const successCard = document.getElementById('successCard');
const fields = {
    successName: document.getElementById('successName'),
    successPlantName: document.getElementById('successPlantName'),
    successPlantType: document.getElementById('successPlantType'),
    successPhone: document.getElementById('successPhone'),
    successEmail: document.getElementById('successEmail'),
    successLocation: document.getElementById('successLocation'),
    successNotes: document.getElementById('successNotes'),
};

form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    fields.successName.textContent = data.get('fullName') || '—';
    fields.successPlantName.textContent = data.get('plantName') || '—';
    fields.successPlantType.textContent = data.get('plantType') || '—';
    fields.successPhone.textContent = data.get('phone') || '—';
    fields.successEmail.textContent = data.get('email') || '—';
    fields.successLocation.textContent = data.get('location') || '—';
    fields.successNotes.textContent = data.get('notes') || '—';

    successCard.classList.remove('hidden');
    setTimeout(() => successCard.classList.add('visible'), 20);

    form.reset();
});