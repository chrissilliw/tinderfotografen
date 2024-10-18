
export const heroSectionQuery = {
    populate: {
        image: {
            fields: ["url", "alternativeText"]
        },
        link: {
            populate: true
        },
        cta: {
            populate: true
        },
        logoGrid: {
            populate: {
                image: {
                    fields: ["url", "alternativeText"]
                },
            },
        },
    },
};