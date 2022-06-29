class Paginator extends Animator {
    constructor(options) {
        super();
        this.main = options.main
        this.sections = options.sections
        this.pause = options.pause
        this.start = this.sections[0]
        this.canGo = false
        this.yDown = null
        this.menu = options.menu
        this.listen()
        this.headerTimeline = headerTimeline
        // this.servicesTimeline = servicesTimeline
        document.body.classList.add('js-enabled');
    }

    listen() {
        
        this.menu.querySelectorAll('a').forEach(menuLink => {
            menuLink.onclick = (event) => {
                if (this.canGo) {
                    this.stoping(this.start, event.target.hash.replace('#', ''))
                }
            }
        })

        window.onwheel = (event) => {
            let direction = event.deltaY > 0 ? 1 : -1
            let newer = this.sections.indexOf(this.start) + direction

            if (newer >= 0 && newer < this.sections.length && this.canGo) {
                this.stoping(this.start, this.sections[newer])
            }
        }

        window.ontouchstart = (event) => {
            const firstTouch = event.touches[0] || event.originalEvent.touches[0]
            this.yDown = firstTouch.clientY
        }

        window.ontouchmove = (event) => {
            let yDiff = this.yDown - event.touches[0].clientY;
            let direction = yDiff > 0 ? 1 : -1
            let newer = this.sections.indexOf(this.start) + direction

            if (newer >= 0 && newer < this.sections.length && this.canGo) {
                this.stoping(this.start, this.sections[newer])
            }
        }
    }

    stoping(curSec, newSec) {
        clearTimeout(this.showNext.stopper)
        this.canGo = false
        this.hidePrev(curSec)
        this.showNext.stopper = setTimeout(() => this.showNext(newSec), 2000)
    }

    showNext(secName) {
        this.start = secName
        this.headerTimeline.play()
        this[secName + 'Show']()
    }

    hidePrev(secName) {
        this.headerTimeline.reverse()
        this[secName + 'Hide']()
    }
}
