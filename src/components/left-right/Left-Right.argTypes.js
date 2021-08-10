export const argTypes = {
    src: {
        name: "Media Source",
    },
    content: {
        name: "Content",
    },
    background: {
        name: "Background",
        control: { type: 'select' },
        options: [
            'red',
            'purple',
            'green',
            'teal',
            'blue',
            'orange',
            'navy',
            'violet',
            'slate',
            'dark-orange',
            'black',
            'gray-dark',
            'gray-medium',
            'gray-light',
            'electric-blue',
            'gray-blue',
            'zodiac-blue',
            'alice-gray',
            'solitude',
        ],
    },
    crop: {
        name: "Crop",
        control: { type: 'radio' },
        options: [
            'none',
            'wide',
            'narrow'
        ],
    },
    isReverse: {
        name: "Reverse",
        control: { type: "boolean" }
    },
    hasRoundedCorners: {
        name: "Rounded Corners",
    },
};