import React from 'react';
import ReactDOM from 'react-dom/client';

/*

App
    header
        logoContainer
            logo
        navItems
            home
            about
            contact
            cart
    body
        searchContainer
            searchBar
            searchBtn
        CardContainer
            Card
                image
                name
                cusisines
                avgRating
                costForTwo
                delhiveryTime
    footer
*/


const restaurants = [
    {
        "info": {
            "id": "234875",
            "name": "Adil Hotel",
            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
            "locality": "Rautha Wada",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Tandoor"
            ],
            "avgRating": 4.3,
            "parentId": "27123",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 11.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "11.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-16 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151649",
            "name": "Hotel Sai Nath & Sai Restaurant",
            "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
            "locality": "railway station",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "101802",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.0K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 11.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "11.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151518",
            "name": "Bakery World",
            "cloudinaryImageId": "mt2aggiscfl3yviatwng",
            "locality": "Parasia Road",
            "areaName": "Parasia Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery",
                "Ice Cream",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "40363",
            "avgRatingString": "4.4",
            "totalRatingsString": "264",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 14.1,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "14.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151656",
            "name": "Dev International",
            "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
            "locality": "khajri road",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "71556",
            "avgRatingString": "4.3",
            "totalRatingsString": "488",
            "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 11.7,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "11.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹166 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151648",
            "name": "Mr. Gurung Momo & Chinese Corner",
            "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
            "locality": "Teacher's Colony",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "140255",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.1K+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 11.8,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "11.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151515",
            "name": "Gupta Bhojnalay",
            "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
            "locality": "fulwara chowk",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Fast Food",
                "Indian",
                "Beverages"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "91635",
            "avgRatingString": "4.0",
            "totalRatingsString": "447",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 10.8,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "10.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "658210",
            "name": "The Fusion Lounge",
            "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            "locality": "Triloki nagar",
            "areaName": "Railway Station",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "395453",
            "avgRatingString": "4.2",
            "totalRatingsString": "342",
            "sla": {
                "deliveryTime": 53,
                "lastMileTravel": 11.9,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "11.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "184424",
            "name": "Sab Ghar Tak Foods",
            "cloudinaryImageId": "ryzswg44bt7thqzkuaj4",
            "locality": "Sanchar Colony",
            "areaName": "Parsia Road",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "173932",
            "avgRatingString": "4.4",
            "totalRatingsString": "614",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 11.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "11.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "150591",
            "name": "Satkar Restaurant",
            "cloudinaryImageId": "rvxp5xbniat84r6efku2",
            "locality": "Sinchai Colony",
            "areaName": "Satkar Chowk",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Indian",
                "Salads",
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "21553",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.8K+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 13.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "13.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "625927",
            "name": "Kathi Junction",
            "cloudinaryImageId": "nigqvxgzvyxtfjuqasgg",
            "locality": "Bunglow Madhuvan Colony",
            "areaName": "Prasia Road",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "rolls",
                "Burgers",
                "Pizzas",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "1935",
            "avgRatingString": "4.2",
            "totalRatingsString": "363",
            "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 11,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "11.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-15 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3b0b614f-0387-4a0f-a596-fc7645fb209d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
            "type": "WEBLINK"
        }
    },
]



const Card = ({data}) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = data
    const {deliveryTime} = sla;
    return (
        <div className='card'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}.jpg`} alt='cardImg' />
            <div className='textContainer'>
                <h2>{name}</h2>
                <h3>{cuisines.join(', ')}</h3>
                <h4>{avgRating} *</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} min</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='searchContainer'>
                <input className='searchBar' type='text' />
                <button className='searchBtn'>Search</button>
            </div>

            <div className='cardContainer'>
                {
                    restaurants.map((restaurant)=>(
                        <Card key={restaurant?.info?.id} data={restaurant?.info} />
                    ))
                }
            </div>

        </div>
    )
}

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img alt='logo' className='logo' src='https://www.designmantic.com/logo-images/167083.png?company=Company%20Name&keyword=food&slogan=&verify=1' />
            </div>
            <div className='navItems'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);