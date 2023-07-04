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

export type AboutPageContent = {
    title: string
    subtitle: string
    paragraph: string
    cardTitle1: string
    cardText1: string
    cardTitle2: string
    cardText2: string
    cardTitle3: string
    cardText3: string
}
