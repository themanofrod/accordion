const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach( function(accordionItem) {
	accordionItem.addEventListener('click', () => {
		closeAccordion()
		accordionItem.classList.toggle('open-accordion')
	});
});


function closeAccordion() {
	accordionItems.forEach( function(accordionItem) {
		accordionItem.classList.remove('open-accordion');
	});
};
