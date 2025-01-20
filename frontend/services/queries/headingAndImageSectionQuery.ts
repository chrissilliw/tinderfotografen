export const headingAndImageSectionQuery = {
    populate: {
        headingGroup: {
            populate: {
                text: {
                    populate: true
                },
                image: {
                    fields: ['url', 'alternativeText']
                },
            }
        },
        image: {
            fields: ['url', 'alternativeText']
        },
    }       
};