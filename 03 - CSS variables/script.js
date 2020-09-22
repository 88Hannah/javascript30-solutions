const inputs = document.querySelectorAll('.controls input');

const handleUpdate = control => {
    const unit = control.dataset.unit || '';
    document.documentElement.style.setProperty(`--${control.name}`, control.value + unit);
};

inputs.forEach(control => {
    control.addEventListener('change', event => handleUpdate(event.target));
    control.addEventListener('mousemove', event => handleUpdate(event.target));
});