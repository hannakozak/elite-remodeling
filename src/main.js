import './style.css';

const header = document.querySelector('.header');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', () => {
	const isOpen = header.classList.toggle('open');
	toggle.textContent = isOpen ? '✕' : '☰';
	toggle.setAttribute('aria-expanded', isOpen);
});
