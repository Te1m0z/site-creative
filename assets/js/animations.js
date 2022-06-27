const headerTimeline = gsap.timeline({ defaults: { duration: 1, ease: 'Power4.easeInOut' } })
    .to('.logo .line', { right: '100%' }, 0)
    .fromTo('.logo img', { x: -10, opacity: 0 }, { x: 0, opacity: 1 }, 0)
    .fromTo('.menu li', { opacity: 0, x: 10 }, { opacity: 1, x: 0, stagger: 0.1 }, 0.3)

class Animator {


    homeShow() {

        let tl = gsap.timeline({
            onStart: () => document.querySelector('#home').classList.add("active"),
            onComplete: () => this.canGo = true,
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })

        tl
            .fromTo('#home h2', { x: 40, opacity: 0 }, { x: 0, opacity: 1 })
            // .fromTo('#services .service-item', { y: 20, opacity: 0 }, { y: 0, stagger: 0.1, opacity: 1, })
    }


    homeHide() {

        console.log('homeHide')

        let tl = gsap.timeline({
            onComplete: () => document.querySelector('#home').classList.remove("active"),
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })

        tl
            .fromTo('#home h2', { x: 0, opacity: 1 }, { x: 100, opacity: 0 })
            // .fromTo('#home .service-item', { y: 20, opacity: 0 }, { y: 0, stagger: 0.1, opacity: 1, })
    }

    servicesShow() {

        let tl = gsap.timeline({
            onStart: () => document.querySelector('#' + this.start).classList.add("active"),
            onComplete: () => this.canGo = true,
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })

        tl
            .fromTo('#services h2', { x: 40, opacity: 0 }, { x: 0, opacity: 1 })
            .fromTo('#services .service-item', { y: 20, opacity: 0 }, { y: 0, stagger: 0.1, opacity: 1, })
    }


    servicesHide() {

        let tl = gsap.timeline({
            onComplete: () => document.querySelector('#services').classList.remove("active"),
            defaults: { duration: 1, ease: 'Power4.easeInOut' }
        })

        tl
            .fromTo('#services h2', { x: 0, opacity: 1 }, { x: 40, opacity: 0 })
            .fromTo('#services .service-item', { y: 0, opacity: 1 }, { y: -20, stagger: 0.1, opacity: 0, }, 0)
    }
}