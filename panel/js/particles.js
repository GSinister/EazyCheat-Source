particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 }
        },
        opacity: {
            value: 0.6313181133058181,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: true }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 7.192807192807193,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 130,
            color: '#ffffff',
            opacity: 0.5451601006942778,
            width: 1.4
        },
        move: {
            enable: true,
            speed: 1.0,
            direction: 'top',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'bubble' },
            onclick: { enable: true, mode: 'repulse' },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
                distance: 230,
                size: 6,
                duration: 3.3,
                opacity: 8,
                speed: 3
            },
            repulse: { distance: 210, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
