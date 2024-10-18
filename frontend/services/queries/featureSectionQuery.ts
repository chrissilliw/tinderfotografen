
export const featureSectionQuery = {
    populate: {
        infoColumn: {
            populate: {
                feature: {
                    populate: {
                        icon: {
                            fields: ["url", "alternativeText"]
                        },
                    }
                },
                readMore: {
                    populate: true
                }
            }
        },
    }
};