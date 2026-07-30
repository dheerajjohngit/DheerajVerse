export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 60
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

export const staggerContainer = {

    hidden: {},

    visible: {

        transition: {

            staggerChildren: 0.18

        }

    }

};

export const floatingImage = {
    animate: {
        y: [0, -6, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
        }
    }
};