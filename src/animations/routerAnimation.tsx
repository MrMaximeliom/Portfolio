export const routerAnimation = {
    // hidden: { opacity: 0, x: -100, y: 100 },
    // enter: { opacity: 1, x: 0, y: 0 },
    // exit: { opacity: 0, x: 0, y: -200 },
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.1,
            duration:0.1
        },
    },
    exit:{
        opacity:0,
        transition:{
            delay:0.1,
            ease:"easeInOut"
        }
    }
}