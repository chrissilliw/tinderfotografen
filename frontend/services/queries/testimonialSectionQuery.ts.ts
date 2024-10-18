export const testimonialSectionQuery = {
    populate: {
        sectionTitle: {
            populate: true
        },
        testimonial: {
            populate: true
        }
    }
};