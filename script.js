/**
 * LINAH ACADEMY - OFFICIAL CLIENT SCRIPT
 * Interactions, Mobile Navigation, Lightbox, Slider, FAQ & Form Validation
 * Designed and developed by Caint Creation
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // =========================================================================
    // 1. Navigation & Header Sticky Effects
    // =========================================================================
    const header = document.getElementById('header');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navWrapper = document.getElementById('navWrapper');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    // Header shadow on scroll
    const handleHeaderScroll = () => {
        if (!header) return;
        if (window.scrollY > 40) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();

    // Mobile Navigation Toggle
    if (hamburgerBtn && navWrapper) {
        const toggleMobileMenu = () => {
            const isActive = hamburgerBtn.classList.toggle('active');
            navWrapper.classList.toggle('active');
            hamburgerBtn.setAttribute('aria-expanded', String(isActive));
            if (isActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        const closeMobileMenu = () => {
            hamburgerBtn.classList.remove('active');
            navWrapper.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };

        hamburgerBtn.addEventListener('click', toggleMobileMenu);

        // Close on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navWrapper.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navWrapper.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (navWrapper.classList.contains('active') &&
                !navWrapper.contains(e.target) &&
                !hamburgerBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    // Scroll Spy for Navigation Active State
    const updateActiveNavOnScroll = () => {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });

    // Smooth Anchor Scrolling with Header Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId.startsWith('#')) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =========================================================================
    // 2. Hero Background Video Controls
    // =========================================================================
    const heroVideo = document.getElementById('heroVideo');
    const videoToggleBtn = document.getElementById('videoToggleBtn');

    // Pause video if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches && heroVideo) {
        heroVideo.pause();
        if (videoToggleBtn) {
            videoToggleBtn.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i>';
            videoToggleBtn.setAttribute('aria-label', 'Play background video');
        }
    }

    if (heroVideo && videoToggleBtn) {
        videoToggleBtn.addEventListener('click', () => {
            if (heroVideo.paused) {
                heroVideo.play();
                videoToggleBtn.innerHTML = '<i class="fas fa-pause" aria-hidden="true"></i>';
                videoToggleBtn.setAttribute('aria-label', 'Pause background video');
            } else {
                heroVideo.pause();
                videoToggleBtn.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i>';
                videoToggleBtn.setAttribute('aria-label', 'Play background video');
            }
        });
    }

    // =========================================================================
    // 3. Program Selection Pre-filling Form
    // =========================================================================
    const programEnquireBtns = document.querySelectorAll('.program-enquire-btn');
    const programSelect = document.getElementById('programSelect');
    const parentNameInput = document.getElementById('parentName');

    programEnquireBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const programCode = btn.getAttribute('data-program');
            if (programSelect && programCode) {
                programSelect.value = programCode;
                // Add highlight class briefly
                programSelect.classList.add('is-focused');
                setTimeout(() => {
                    programSelect.classList.remove('is-focused');
                    if (parentNameInput) {
                        parentNameInput.focus();
                    }
                }, 600);
            }
        });
    });

    // =========================================================================
    // 4. Accessible Gallery Lightbox
    // =========================================================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentGalleryIndex = 0;
    const galleryData = Array.from(galleryItems).map((item, idx) => {
        const img = item.querySelector('img');
        const captionH4 = item.querySelector('h4');
        const captionCat = item.querySelector('.gallery-category');
        return {
            src: img ? img.getAttribute('src') : '',
            alt: img ? img.getAttribute('alt') : 'Linah Academy Activity',
            title: captionH4 ? captionH4.textContent.trim() : `School Image ${idx + 1}`,
            category: captionCat ? captionCat.textContent.trim() : 'Linah Academy'
        };
    });

    const openLightbox = (index) => {
        if (!lightbox || !galleryData[index]) return;
        currentGalleryIndex = index;
        const data = galleryData[currentGalleryIndex];

        lightboxImg.src = data.src;
        lightboxImg.alt = data.alt;
        lightboxCaption.textContent = `${data.category}: ${data.title}`;
        lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryData.length}`;

        lightbox.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    };

    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.setAttribute('hidden', '');
        document.body.style.overflow = '';
        if (galleryItems[currentGalleryIndex]) {
            galleryItems[currentGalleryIndex].focus();
        }
    };

    const showNextImage = () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
        openLightbox(currentGalleryIndex);
    };

    const showPrevImage = () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
        openLightbox(currentGalleryIndex);
    };

    galleryItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View larger image: ${galleryData[index].title}`);

        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });

    if (lightbox) {
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
        if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

        // Click outside image to close
        lightbox.addEventListener('click', (e) => {
            if (e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-container')) {
                closeLightbox();
            }
        });

        // Keyboard controls for lightbox
        document.addEventListener('keydown', (e) => {
            if (lightbox.hasAttribute('hidden')) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        });
    }

    // =========================================================================
    // 5. Parent Testimonials Carousel
    // =========================================================================
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialSlider = document.getElementById('testimonialSlider');
    const testiPrevBtn = document.getElementById('testiPrev');
    const testiNextBtn = document.getElementById('testiNext');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const slides = document.querySelectorAll('.testimonial-slide');

    if (testimonialTrack && slides.length > 0) {
        let currentSlide = 0;
        let slideInterval = null;
        const totalSlides = slides.length;

        const goToSlide = (slideIndex) => {
            currentSlide = (slideIndex + totalSlides) % totalSlides;
            testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

            sliderDots.forEach((dot, index) => {
                const isActive = index === currentSlide;
                dot.classList.toggle('active', isActive);
                dot.setAttribute('aria-selected', String(isActive));
            });
        };

        const startAutoplay = () => {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 6000);
        };

        const pauseAutoplay = () => {
            if (slideInterval) clearInterval(slideInterval);
        };

        if (testiNextBtn) {
            testiNextBtn.addEventListener('click', () => {
                goToSlide(currentSlide + 1);
                pauseAutoplay();
                startAutoplay();
            });
        }

        if (testiPrevBtn) {
            testiPrevBtn.addEventListener('click', () => {
                goToSlide(currentSlide - 1);
                pauseAutoplay();
                startAutoplay();
            });
        }

        sliderDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetSlide = parseInt(dot.getAttribute('data-slide'), 10);
                goToSlide(targetSlide);
                pauseAutoplay();
                startAutoplay();
            });
        });

        // Pause on hover
        if (testimonialSlider) {
            testimonialSlider.addEventListener('mouseenter', pauseAutoplay);
            testimonialSlider.addEventListener('mouseleave', startAutoplay);
            testimonialSlider.addEventListener('focusin', pauseAutoplay);
            testimonialSlider.addEventListener('focusout', startAutoplay);
        }

        startAutoplay();
    }

    // =========================================================================
    // 6. Accessible FAQ Accordion
    // =========================================================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const panel = item.querySelector('.faq-panel');

        if (trigger && panel) {
            trigger.addEventListener('click', () => {
                const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

                // Close other panels
                faqItems.forEach(otherItem => {
                    const otherTrigger = otherItem.querySelector('.faq-trigger');
                    const otherPanel = otherItem.querySelector('.faq-panel');
                    if (otherTrigger && otherPanel && otherItem !== item) {
                        otherTrigger.setAttribute('aria-expanded', 'false');
                        otherPanel.classList.remove('show');
                    }
                });

                // Toggle current panel
                trigger.setAttribute('aria-expanded', String(!isExpanded));
                panel.classList.toggle('show', !isExpanded);
            });
        }
    });

    // =========================================================================
    // 7. Admissions Enquiry Form Validation & Real Integration
    // =========================================================================
    const contactForm = document.getElementById('contactForm');
    const formStatusBanner = document.getElementById('formStatusBanner');
    const submitFormBtn = document.getElementById('submitFormBtn');

    // CONFIGURATION NOTE FOR ADMINISTRATORS:
    // To route admissions straight to your email via Formspree, create a free form at https://formspree.io
    // and paste your Formspree endpoint URL here. If empty, the website intelligently offers
    // direct WhatsApp or mailto dispatch so parents never lose their enquiry!
    const FORMSPREE_ENDPOINT = ''; 

    if (contactForm) {
        const parentName = document.getElementById('parentName');
        const parentEmail = document.getElementById('parentEmail');
        const parentPhone = document.getElementById('parentPhone');
        const childName = document.getElementById('childName');
        const programSelect = document.getElementById('programSelect');
        const enquiryMessage = document.getElementById('enquiryMessage');
        const honeypot = document.getElementById('schoolWebsiteUrl');

        const validateEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        const validatePhone = (phone) => {
            // Allows Kenya (+254... or 07...) or general international phone strings
            return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.replace(/\s+/g, ''));
        };

        const setFieldError = (input, errorId, message) => {
            input.classList.add('is-invalid');
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = message;
            }
        };

        const clearFieldError = (input, errorId) => {
            input.classList.remove('is-invalid');
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
            }
        };

        // Live input listeners for clearing errors
        if (parentName) parentName.addEventListener('input', () => clearFieldError(parentName, 'parentNameError'));
        if (parentEmail) parentEmail.addEventListener('input', () => clearFieldError(parentEmail, 'parentEmailError'));
        if (parentPhone) parentPhone.addEventListener('input', () => clearFieldError(parentPhone, 'parentPhoneError'));
        if (programSelect) programSelect.addEventListener('change', () => clearFieldError(programSelect, 'programSelectError'));
        if (enquiryMessage) enquiryMessage.addEventListener('input', () => clearFieldError(enquiryMessage, 'enquiryMessageError'));

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Anti-bot Honeypot check
            if (honeypot && honeypot.value.trim() !== '') {
                console.warn('Bot submission prevented.');
                return;
            }

            let isValid = true;

            // Validate Parent Name
            if (!parentName.value.trim() || parentName.value.trim().length < 2) {
                setFieldError(parentName, 'parentNameError', 'Please enter your full name (at least 2 letters).');
                isValid = false;
            } else {
                clearFieldError(parentName, 'parentNameError');
            }

            // Validate Email
            if (!parentEmail.value.trim() || !validateEmail(parentEmail.value.trim())) {
                setFieldError(parentEmail, 'parentEmailError', 'Please enter a valid email address.');
                isValid = false;
            } else {
                clearFieldError(parentEmail, 'parentEmailError');
            }

            // Validate Phone
            if (!parentPhone.value.trim() || !validatePhone(parentPhone.value.trim())) {
                setFieldError(parentPhone, 'parentPhoneError', 'Please provide a valid phone number (e.g. +254 711 864 110).');
                isValid = false;
            } else {
                clearFieldError(parentPhone, 'parentPhoneError');
            }

            // Validate Program Selection
            if (!programSelect.value) {
                setFieldError(programSelect, 'programSelectError', 'Please select an educational program.');
                isValid = false;
            } else {
                clearFieldError(programSelect, 'programSelectError');
            }

            // Validate Message
            if (!enquiryMessage.value.trim() || enquiryMessage.value.trim().length < 5) {
                setFieldError(enquiryMessage, 'enquiryMessageError', 'Please enter your enquiry message or questions.');
                isValid = false;
            } else {
                clearFieldError(enquiryMessage, 'enquiryMessageError');
            }

            if (!isValid) {
                formStatusBanner.className = 'form-status-banner error';
                formStatusBanner.textContent = 'Please correct the highlighted fields above before submitting.';
                formStatusBanner.removeAttribute('hidden');
                return;
            }

            // Prepare Form Data
            const formData = {
                parentName: parentName.value.trim(),
                parentEmail: parentEmail.value.trim(),
                parentPhone: parentPhone.value.trim(),
                childName: childName ? childName.value.trim() : 'Not specified',
                program: programSelect.options[programSelect.selectedIndex].text,
                message: enquiryMessage.value.trim()
            };

            // Loading state
            submitFormBtn.disabled = true;
            submitFormBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending enquiry...';

            // Check if backend service is configured
            if (FORMSPREE_ENDPOINT) {
                try {
                    const response = await fetch(FORMSPREE_ENDPOINT, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });

                    if (response.ok) {
                        formStatusBanner.className = 'form-status-banner success';
                        formStatusBanner.innerHTML = '<strong>Thank you!</strong> Your enquiry has been received. Our admissions team will contact you shortly.';
                        formStatusBanner.removeAttribute('hidden');
                        contactForm.reset();
                    } else {
                        throw new Error('Network error');
                    }
                } catch (error) {
                    showDirectDispatchOptions(formData);
                } finally {
                    submitFormBtn.disabled = false;
                    submitFormBtn.innerHTML = '<span class="btn-text">Submit Admissions Enquiry</span> <i class="fas fa-paper-plane" aria-hidden="true"></i>';
                }
            } else {
                // When on GitHub Pages without backend setup:
                // Do NOT pretend the email sent! Provide clear, immediate options so the parent can send right away via WhatsApp or Email.
                setTimeout(() => {
                    showDirectDispatchOptions(formData);
                    submitFormBtn.disabled = false;
                    submitFormBtn.innerHTML = '<span class="btn-text">Submit Admissions Enquiry</span> <i class="fas fa-paper-plane" aria-hidden="true"></i>';
                }, 400);
            }
        });

        function showDirectDispatchOptions(data) {
            const formattedMessage = `Hello Linah Academy,%0A%0AMy name is ${encodeURIComponent(data.parentName)}.%0AEmail: ${encodeURIComponent(data.parentEmail)}%0APhone: ${encodeURIComponent(data.parentPhone)}%0AChild: ${encodeURIComponent(data.childName)}%0AProgram: ${encodeURIComponent(data.program)}%0A%0AMessage:%0A${encodeURIComponent(data.message)}`;

            const whatsappUrl = `https://wa.me/254711864110?text=${formattedMessage}`;
            const mailtoUrl = `mailto:mutabilinah@gmail.com?subject=${encodeURIComponent(`Admission Enquiry: ${data.program} - ${data.parentName}`)}&body=${formattedMessage.replace(/%0A/g, '%0D%0A')}`;

            formStatusBanner.className = 'form-status-banner info';
            formStatusBanner.innerHTML = `
                <div style="margin-bottom: 0.75rem;">
                    <strong>Enquiry Ready!</strong> To ensure your message reaches our admissions team immediately, please choose your preferred channel:
                </div>
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 0.6rem 1.15rem; font-size: 0.9rem;">
                        <i class="fab fa-whatsapp" aria-hidden="true"></i> Send via WhatsApp
                    </a>
                    <a href="${mailtoUrl}" class="btn btn-primary" style="padding: 0.6rem 1.15rem; font-size: 0.9rem;">
                        <i class="fas fa-envelope" aria-hidden="true"></i> Send via Email Client
                    </a>
                </div>
            `;
            formStatusBanner.removeAttribute('hidden');
        }
    }

    // =========================================================================
    // 8. Back-to-Top Floating Button
    // =========================================================================
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
