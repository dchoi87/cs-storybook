export const argTypes = {
    type: {
        name: "Media Type",
        control: { type: 'select' },
        options: [
            'image',
            'video',
            'map'
        ],
    },
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
            'white',
        ],
    },
    crop: {
        name: "Crop",
        control: { type: 'radio' },
        options: [
            'none',
            'short',
            'medium'
        ],
    },
    isReverse: {
        name: "Reverse",
        control: { type: "boolean" }
    },
    hasRoundedCorners: {
        name: "Rounded Corners",
    },
    isFullWidth: {
        name: "Full Width"
    }
};