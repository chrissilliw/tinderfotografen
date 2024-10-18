export const stepByStepSectionQuery = {
    populate: {
        sectionTitle: {
            populate: true
        },
        howItWorks_card: {
            populate: true
        },
        readMore: {
            populate: true
        }
    },
};