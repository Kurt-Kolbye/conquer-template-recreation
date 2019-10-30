// Bind to Window's scroll event
$(window).scroll(function() {
    findActiveSection();
});

// Finds which section is actively shown to the user
function findActiveSection() {
    var sections = $('section');
    
    for (var i = 0; i < sections.length; i++) {
        if (elementIsVisible(sections[i])) {
            toggleActiveSectionNav(sections[i]);
            break;
        }
    }
}

// Toggles the active section's related nav item
function toggleActiveSectionNav(activeSection) {
    var navItems = $('#nav-items li');
    
    // Remove nav-section-active class from all nav items
    for (var i = 0; i < navItems.length; i++) {
        $(navItems[i]).removeClass('nav-section-active');
    }

    // Determine which section is active and add class to the nav item
    switch (activeSection.id) {
        case 'home-section':
            $('#nav-home').addClass('nav-section-active');
            break;
        case 'about-section':
            $('#nav-about').addClass('nav-section-active');
            break;
        case 'services-section':
            $('#nav-services').addClass('nav-section-active');
            break;
        case 'contact-section':
            $('#nav-contact').addClass('nav-section-active');
            break;
        default:
            break;
    }
}

// Determines if the element is visible on the screen
function elementIsVisible(element) {
    // Get the top and bottom of the window and element
    // Subtract header from calculations
    var headerOffset = $('.header').height();
    var windowTop = $(window).scrollTop() - headerOffset;
    var windowBottom = windowTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    if(elementTop < windowBottom && elementBottom > windowTop) {
        // Element is visible
        return true;
    }
    else {
        // Element is not visible
        return false;
    }
}

// Scroll to section based on what nav item was used
function scrollToSection(element) {
    var section;

    // TODO: Add margin or height to compensate for header
    switch (element.id) {
        case 'nav-home':
            section = document.getElementById('home-section');
            section.style.height += $('.header').height();
            section.scrollIntoView();           
            break;
        case 'nav-about':
            section = document.getElementById('about-section');
            section.style.height += $('.header').height();
            section.scrollIntoView();
            break;
        case 'nav-services':
            section = document.getElementById('services-section');
            section.style.height += $('.header').height();
            section.scrollIntoView();
            break;
        case 'nav-contact':
            section = document.getElementById('contact-section');
            section.style.height += $('.header').height();
            section.scrollIntoView();
            break;
        default:
            break;
    }
}

// Toggles the navigation buttons for mobile
function toggleNavMenu() {
    var navItems = $('#nav-items');
    
    if (navItems.is(':visible')) {
        navItems.slideUp(function() {
            // Catch and remove display: none in case a user resizes above a small screen
            navItems.css('display', '');
        });
    }
    else {
        navItems.slideDown();
    }
};