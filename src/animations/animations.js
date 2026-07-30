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

export const slideLeft = {

    hidden: {
        opacity: 0,
        x: -80
    },

    visible: {

        opacity: 1,
        x: 0,

        transition: {
            duration: 0.8,
            ease: "easeOut"
        }

    }

};
export const slideRight = {

    hidden: {
        opacity: 0,
        x: 80
    },

    visible: {

        opacity: 1,
        x: 0,

        transition: {
            duration: 0.8,
            ease: "easeOut"
        }

    }

};