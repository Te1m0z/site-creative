const headerTimeline = gsap.timeline({ defaults: { duration: 1, ease: 'Power4.easeInOut' } })
    .to('.logo .line', { right: '100%' }, 0)
    .fromTo('.logo img', { x: -10, opacity: 0 }, { x: 0, opacity: 1 }, 0)
    .fromTo('.menu li', { opacity: 0, x: 10 }, { opacity: 1, x: 0, stagger: 0.1 }, 0.3)

class Animator {

    homeShow() {
        gsap.timeline({
            onStart: () => {
                document.querySelector('#home').classList.add("active")
                window.location.hash = '#home'
            },
            onComplete: () => {
                this.canGo = true
            },
            defaults: { ease: 'Power4.easeInOut' }
        })
        .fromTo('#home .home-benefits_item', { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, stagger: 0.1 })
        .fromTo('#home .content', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 }, 0)
    }

    homeHide() {
        gsap.timeline({
            onComplete: () => document.querySelector('#home').classList.remove("active"),
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })
        .fromTo('#home .home-benefits_item', { x: 0, opacity: 1 }, { x: 100, opacity: 0 })
        .fromTo('#home .content', { x: 0, opacity: 1 }, { x: -20, opacity: 0, }, 0)
    }

    servicesShow() {

        gsap.timeline({
            onStart: () => {
                document.querySelector('#services').classList.add("active")
                window.location.hash = '#services'
            },
            onComplete: () => {
                this.canGo = true
            },
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })
        .fromTo('#services h2', { x: 40, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('#services .service-item', { y: 20, opacity: 0 }, { y: 0, stagger: 0.1, opacity: 1, })
    }


    servicesHide() {

        gsap.timeline({
            onComplete: () => document.querySelector('#services').classList.remove("active"),
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })
        .fromTo('#services h2', { x: 0, opacity: 1 }, { x: 40, opacity: 0 })
        .fromTo('#services .service-item', { y: 0, opacity: 1 }, { y: -20, stagger: 0.1, opacity: 0, }, 0)
    }

    aboutShow() {

        gsap.timeline({
            onStart: () => {
                document.querySelector('#about').classList.add("active")
                window.location.hash = '#about'
            },
            onComplete: () => {
                this.canGo = true
            },
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })
        .fromTo('#about h2', { x: 40, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('#about p', { y: 20, opacity: 0 }, { y: 0, opacity: 1, }, 0)
    }


    aboutHide() {

        gsap.timeline({
            onComplete: () => document.querySelector('#about').classList.remove("active"),
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })
        .fromTo('#about h2', { x: 0, opacity: 1 }, { x: 40, opacity: 0 })
        .fromTo('#about p', { y: 0, opacity: 1 }, { y: -20, opacity: 0, }, 0)
    }

    contactShow() {

        gsap.timeline({
            onStart: () => {
                document.querySelector('#contact').classList.add("active")
                window.location.hash = '#contact'
            },
            onComplete: () => {
                this.canGo = true
            },
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })
        .fromTo('#contact h2', { x: 40, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('#contact p', { y: 20, opacity: 0 }, { y: 0, opacity: 1, }, 0)
    }


    contactHide() {

        gsap.timeline({
            onComplete: () => document.querySelector('#contact').classList.remove("active"),
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })
        .fromTo('#contact h2', { x: 0, opacity: 1 }, { x: 40, opacity: 0 })
        .fromTo('#contact p', { y: 0, opacity: 1 }, { y: -20, opacity: 0, }, 0)
    }
}