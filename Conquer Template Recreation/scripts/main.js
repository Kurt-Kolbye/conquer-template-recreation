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
    var headerOffset = 60;
    var windowTop = $(window).scrollTop() + headerOffset;
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
    // If the user is on mobile, this will close the Nav Menu
    
    // TODO: Add a check for if the nav-toggle is displayed and
    // if not, don't call toggleNavMenu() or setTimeout() function 
    // so it doesn't "flash" on desktop
    toggleNavMenu();
    // If on mobile, wait before the slideUp() call is completed to scroll the user
    setTimeout(scroll, 400);
    function scroll() {
        var section;
        var headerClass = '.header';
        var headerOffset = document.querySelector(headerClass).clientHeight;
        
        switch (element.id) {
            case 'nav-home':
                section = $('#home-section');
                $(window).scrollTop(section.offset().top - headerOffset);
                break;
            case 'nav-about':
                section = $('#about-section');
                $(window).scrollTop(section.offset().top - headerOffset);
                break;
            case 'nav-services':
                section = $('#services-section');
                $(window).scrollTop(section.offset().top - headerOffset);
                break;
            case 'nav-contact':
                section = $('#contact-section');
                $(window).scrollTop(section.offset().top - headerOffset);
                break;
            default:
                break;
        }
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