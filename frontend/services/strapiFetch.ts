import { flattenAttributes } from "@/app/lib/utils";
import qs from "qs";
import { heroSectionQuery } from "./queries/heroSectionQuery";
import { featureSectionQuery } from "./queries/featureSectionQuery";
import { imageInfoSectionQuery } from "./queries/imageInfoSectionQuery";
import { testimonialSectionQuery } from "./queries/testimonialSectionQuery.ts";
import { sectionTitleQuery } from "./queries/sectionTitleQuery";
import { stepByStepSectionQuery } from "./queries/stepByStepSectionQuery";
import { faqSectionQuery } from "./queries/faqSectionQuery";

type BlockComponent = 
  "layout.hero-section" | 
  "layout.feature-section" | 
  "layout.image-info-section" |
  "layout.testimonial-section" |
  "layout.step-by-step-section" |
  "layout.faq-section";

const queryMap: { [key in BlockComponent]: any } = {
    "layout.hero-section": heroSectionQuery,
    "layout.feature-section": featureSectionQuery,
    "layout.image-info-section": imageInfoSectionQuery,
    "layout.testimonial-section": testimonialSectionQuery,
    "layout.step-by-step-section": stepByStepSectionQuery,
    "layout.faq-section": faqSectionQuery,
  };

  export const createDynamicQuery = (blocks: any[]) => {
    const dynamicQuery = blocks.reduce((acc: any, block: any) => {
        // if (block.__component in queryMap) {
        //     console.log("funkar");
        //     const query = queryMap[block.__component as BlockComponent];
        //     return query ? query.populate : {};
        // }
        // return {};

        // switch (block.__component) {
            // case 'layout.hero-section':
            //     return heroSectionQuery;

            // case 'layout.feature-section': 
            //     return featureSectionQuery;

            // case 'layout.image-info-section':
            //     return imageInfoSectionQuery;

            // case 'layout.testimonial-section':
            //     return testimonialSectionQuery;

            // case 'layout.step-by-step-section':
            //     return stepByStepSectionQuery;

            // case 'layout.faq-section':
            //     return faqSectionQuery;

        //     default: 
        //         return {};
        // }

    //     switch (block.__component) {
    //         case 'layout.image-info-section':
    //             acc[block.__component] = imageInfoSectionQuery;
    //             break;

    //         case 'layout.feature-section':
    //             acc[block.__component] = featureSectionQuery;
    //             break;

    //         case 'layout.hero-section':
    //             acc[block.__component] = heroSectionQuery;
    //             break;

    //         default:
    //             acc[block.__component] = {}; // Standardvärde om komponenten inte matchar någon query
    //     }
    //     return acc;
    // }, {});
    
    const combinedQuery = {
        populate: {
            blocks: {
                populate: '*',
        },
        },
    };

    // console.log("Combined Query:", combinedQuery);
    console.log('Blocks: ', blocks);
    return combinedQuery;

  };

// const combinedQuery = {
//     populate: {
//         blocks: {
//             populate:
//             {
//                 ...heroSectionQuery.populate,
//                 ...featureSectionQuery.populate,
//                 ...imageInfoSectionQuery.populate,
//                 ...sectionTitleQuery.populate,
//                 ...testimonialSectionQuery.populate,
//                 ...stepByStepSectionQuery.populate,
//                 ...faqSectionQuery.populate,
//             },
//         },
//     },
// }


// export const homePageQuery = qs.stringify(combinedQuery);

// const dynamicQuery = blocks.map(( blocks:any) => {
//     if (block.__component in queryMap) {
//         const query = queryMap[block.__component as BlockComponent];
//         return query ? query.populate : {};
//     }
//     return {};
// })

export const getStrapiData = async (path: string, blocks: any[]) => {
    const baseUrl = "http://localhost:1337";

    const dynamicQuery = createDynamicQuery(blocks);

    // console.log("Dynamic Query: ", dynamicQuery)

    const queryString = qs.stringify(dynamicQuery);

    const url = new URL(path, baseUrl);
    // url.search = homePageQuery;
    url.search = queryString;

    try{
        const response = await fetch(url.href);
        const data = await response.json();
        const flattenData = flattenAttributes(data);
        // console.dir(flattenData, {depth: null});
        return flattenData;
    } catch (error) {
        console.error("Error: ", error);
    }
}

export const getStrapiURL = "http://localhost:1337";

export const fetchTopNavMenu = async () => {
    const queryString = "/api/global?populate[topnav][populate][logoLink][populate][image][fields][0]=url&populate[topnav][populate][logoLink][populate][image][fields][1]=alternativeText&populate[topnav][populate][logoLink][populate][image][fields][2]=name&populate[topnav][populate][link][populate]=true&populate[topnav][populate][cta][populate]=true";
    const query = ({
            populate: {
                topnav: {
                    populate: {
                        logoLink: {
                            populate: {
                            image: {
                                fields: ["url", "alternativeText", "name"],
                            },
                            },
                        },
                        link: {
                            populate: true,
                        },
                        cta: {
                            populate: true
                        }
                    },
                },
            },
        })

        const req = await fetch(`${getStrapiURL}${queryString}`);
        const res = await req.json();
        // console.log(res);
        return res;
    }; 

export const fetchFeatureSection = async () => {
    const queryString = "/api/home-page?populate[blocks][populate][infoColumn][populate][feature][populate][icon][fields][0]=url&populate[blocks][populate][infoColumn][populate][feature][populate][icon][fields][1]=alternativeText&populate[blocks][populate][infoColumn][populate][readMore][populate]=true";
    const query = ({
        populate: {
            blocks: {
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
                            },
                        }
                    },
                
                },
            }
        },
    });

    const req = await fetch(`${getStrapiURL}${queryString}`);
    const res = await req.json();
    const flattendData = flattenAttributes(res)
    // console.log(flattendData);
    return flattendData;
}
