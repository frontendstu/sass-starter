console.log('Hello, World!');

/* ------------------------------- */
/* Header Menu Toggle              */
/* ------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const headerMenuToggle = document.querySelector('.header__toggle');
    const headerMenuNav = document.querySelector('#header-nav');

    headerMenuToggle.addEventListener('click', function () {
        const isMenuVisible = headerMenuNav.hasAttribute('data-visible');

        if (isMenuVisible) {
            headerMenuNav.removeAttribute('data-visible');
            headerMenuToggle.setAttribute('aria-expanded', 'false');
        } else {
            headerMenuNav.setAttribute('data-visible', '');
            headerMenuToggle.setAttribute('aria-expanded', 'true');

            // Optional: Close menu on click outside
            document.addEventListener('click', closeMenuOnClickOutside);
        }
    });

    function closeMenuOnClickOutside(event) {
        if (
            !headerMenuNav.contains(event.target) &&
            !headerMenuToggle.contains(event.target)
        ) {
            headerMenuNav.removeAttribute('data-visible');
            headerMenuToggle.setAttribute('aria-expanded', 'false');
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }
});

/* ------------------------------- */
/* Section Fade In                 */
/* ------------------------------- */

const fadeInElements = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in__active');
                fadeInObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

fadeInElements.forEach((element) => fadeInObserver.observe(element));
