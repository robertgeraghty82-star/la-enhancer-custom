(function(){
    document.querySelectorAll('#incomings_form input[type="checkbox"]').forEach(cb => cb.checked = true);
    let buttons = Array.from(document.querySelectorAll('input, button'));
    let labelBtn = buttons.find(el => el.value === 'Label' || el.innerText?.trim() === 'Label');
    if (labelBtn) labelBtn.click();
})();