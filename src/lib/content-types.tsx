export type Blog = {
    title: string
    date: string
    slug: string
}

export type Show = {
    title: string
    venue: string
    address: string
    date: Date
    start: string
    end: string
    description: string
    image: string
    imagePosition: "object-left-top" | "object-top" | "object-right-top" | "object-left" | "object-center" | "object-right" | "object-left-bottom" | "object-bottom" | "object-right-bottom"
    slug: string
}

export type HomePageContent = {
    backgroundImage: string
    title: string
    subtitle: string
    featuredVideo: string
}

export type AboutPageContent = {
    backgroundImage: string
    title: string
    subtitle: string
    paragraph: string
    cardTitle1: string
    cardImage1: string
    cardText1: string
    cardTitle2: string
    cardImage2: string
    cardText2: string
    cardTitle3: string
    cardImage3: string
    cardText3: string
}

export type VideosPageContent = {
    title: string
    subtitle: string
    videos: string[]
}

export type ShowsPageContent = {
    title1: string
    title2: string
    noUpcoming: string
}

export type ContactPageContent = {
    title: string
    blurb: string
    instagram: string
    youtube: string
    email: string
}