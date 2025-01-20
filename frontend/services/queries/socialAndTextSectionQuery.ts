export const socialAndTextSectionQuery = {
    populate: {
        text: {
            populate: true
        },
        socials: {
            populate: {
                title: {
                    populate: true
                },
                socialLink: {
                    populate: true
                }
            }
        }
    }
}