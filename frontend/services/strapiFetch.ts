import { flattenAttributes } from "@/app/lib/utils";
import qs from "qs";
import { heroSectionQuery } from "./queries/heroSectionQuery";
import { featureSectionQuery } from "./queries/featureSectionQuery";
import { imageInfoSectionQuery } from "./queries/imageInfoSectionQuery";
import { testimonialSectionQuery } from "./queries/testimonialSectionQuery.ts";
import { sectionTitleQuery } from "./queries/sectionTitleQuery";
import { stepByStepSectionQuery } from "./queries/stepByStepSectionQuery";
import { faqSectionQuery } from "./queries/faqSectionQuery";
import { headingAndImageSectionQuery } from "./queries/headingAndImageSectionQuery";
import { socialAndTextSectionQuery } from "./queries/socialAndTextSectionQuery";

type BlockComponent = 
  "layout.hero-section" | 
  "layout.feature-section" | 
  "layout.image-info-section" |
  "layout.testimonial-section" |
  "layout.step-by-step-section" |
  "layout.faq-section";

const combinedQuery = {
    populate: {
        blocks: 
        {
            populate:
            {   
                ...heroSectionQuery.populate,
                ...featureSectionQuery.populate,
                ...imageInfoSectionQuery.populate, 
                ...stepByStepSectionQuery.populate,
                ...faqSectionQuery.populate,
                ...headingAndImageSectionQuery.populate,
                ...testimonialSectionQuery.populate,
                ...socialAndTextSectionQuery.populate,
            },
        },
    },
}

// const aboutCombinedQuery = {
//     populate: {
//         blocks: {
//             populate: {
//                 ...headingAndImageSectionQuery.populate
//             }
//         }
//     }
// }


export const homePageQuery = qs.stringify(combinedQuery, {encodeValuesOnly: true});


export const baseUrl = "http://localhost:1337";

export const getStrapiData = async (path: string) => {


    // const dynamicQuery = createDynamicQuery(blocks);

    // console.log("Dynamic Query: ", dynamicQuery)

    // const queryString = qs.stringify(dynamicQuery);

    const url = new URL(path, baseUrl);
    // url.search = homePageQuery;
    url.search = homePageQuery;

    try{
        const response = await fetch(url.href);
        if( !response.ok) {
            throw new Error(`Failed to fetch data from Strapi: ${response.status}`); 
        }
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



        /*
    export async function getGlobalPageMetadata() {
        const url = new URL("/api", baseUrl);

        url.search = qs.stringify({
            fields: ["title", "description"]
            
        })
        return await fetch(url.href);
    }

    */
// export const fetchFeatureSection = async () => {
//     const queryString = "/api/home-page?populate[blocks][populate][infoColumn][populate][feature][populate][icon][fields][0]=url&populate[blocks][populate][infoColumn][populate][feature][populate][icon][fields][1]=alternativeText&populate[blocks][populate][infoColumn][populate][readMore][populate]=true";
//     const query = ({
//         populate: {
//             blocks: {
//                 populate: {
//                     infoColumn: {
//                         populate: {
//                             feature: {
//                                 populate: {
//                                     icon: {
//                                         fields: ["url", "alternativeText"]
//                                     },
//                                 }
//                             },
//                             readMore: {
//                                 populate: true
//                             },
//                         }
//                     },
                
//                 },
//             }
//         },
//     });

//     const req = await fetch(`${getStrapiURL}${queryString}`);
//     const res = await req.json();
//     const flattendData = flattenAttributes(res)
//     // console.log(flattendData);
//     return flattendData;
// }