export const imageInfoSectionQuery = {
    // populate: {
    //     image: {
    //         fields: ["url", "alternativeText"],
    //     },
    //     infoSection: {
    //         populate: true
    //     },
    //     readMore: {
    //         populate: true
    //     },
    //     imagePositioning: {
    //         populate: true
    //     }
    // }
    populate: {
        image: { fields: ["url", "alternativeText"] },
        infoSection: { populate: true},
        readMore: { populate: true},
        imagePositioning: { populate: true},
      },
};