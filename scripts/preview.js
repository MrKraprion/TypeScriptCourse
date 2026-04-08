document.addEventListener('DOMContentLoaded', () => {
	// Ищем все элементы <details> с классом .spoiler
	const spoilers = document.querySelectorAll('details.spoiler');

	spoilers.forEach(details => {
		details.addEventListener('toggle', () => {
			if (details.open) {
				// Сбрасываем анимацию, чтобы она проигралась заново
				details.classList.remove('fade-in-animation');
				
				// Магия для перезапуска CSS анимации (force reflow)
				void details.offsetWidth; 
				
				// Добавляем класс анимации
				details.classList.add('fade-in-animation');
			}
		});
	});
	
	console.log('Custom Markdown Preview Scripts Loaded');
});