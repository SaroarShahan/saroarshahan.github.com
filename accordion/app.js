(function() {
    const accorionItems = document.querySelectorAll(".accordion__item");

    accorionItems.forEach(function(item) {
        const accordionHeader = item.querySelector(".accordion__header");
        
        accordionHeader.addEventListener("click", function() {
            const activeItem = document.querySelector(".active");

            handleAccordionItem(item);

            if(activeItem && activeItem !== item) {
                handleAccordionItem(activeItem)
            }
        })
    })
    
    function handleAccordionItem(item) {
        const accordionContent = item.querySelector(".accordion__content");

        if(item.classList.contains("active")) {
            accordionContent.removeAttribute("style");
            item.classList.remove("active")
        } else {
            accordionContent.style.padding = "10px 15px";
            accordionContent.style.height = `${accordionContent.scrollHeight}px`;
            item.classList.add("active");
        }
    }
})()

