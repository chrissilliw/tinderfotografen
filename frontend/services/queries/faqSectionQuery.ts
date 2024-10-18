export const faqSectionQuery = {
    populate: {
        sectionTitle: {
            populate: true
        },
        faq: {
            populate: true
        }
    }
};