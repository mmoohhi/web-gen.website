// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId); // Changed to use the actual href value
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('fixed', 'top-0', 'z-40', 'shadow-md','rounded-md','w-[80%]','left-[10%]','m-[20px]');
        navbar.classList.add('border-double', 'border-4', 'border-[#404040]','rounded-[10px]','bg-[#404040]');
    } 
    
    else {
        navbar.classList.remove('fixed', 'top-0', 'z-40', 'shadow-md','rounded-[10px]');
        navbar.classList.remove('border-double', 'border-4', 'border-[#404040]');
        navbar.classList.remove('border-none');
        navbar.classList.remove('w-[80%]','left-[5%]','m-[20px]');
    }
};