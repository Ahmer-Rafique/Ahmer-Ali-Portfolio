import { Panaverse , Todo , Steps ,LandingPage ,DarkMode ,Testimonial } from "@/components/assets/Images"

export interface RecentProjectsCardsType {
    images: any,
    alt:string,
    subHeading: string,
    heading: string,
    btn: string,
    link:string,
    content:string,
    github:string,
}

export const RecentProjectsCards: Array<RecentProjectsCardsType> = [
    {
        images: Panaverse,
        alt:"Panaverse dao",
        subHeading: "Website",
        heading: "Panaverse Dao Website",
        btn: "Preview",
        link:"https://panaverse-dao-nine.vercel.app/",
        content:"This is Panaverse Dao (Decentralize AutoNumas Organizaioin) local website that i made as assignment and this is my work.",
        github:"",
    },
    {
        images: Todo,
        alt:"todo",
        subHeading: "App",
        heading: "Todo App",
        btn: "Preview",
        link:"https://todo-one-ochre.vercel.app/",
        content:"This is Todo local app that i made as assignment for PIAIC projects and this is my work and experience in front of you.",
        github:"",
    },
    {
        images: Steps,
        alt:"steps",
        subHeading: "App",
        heading: "Steps App",
        btn: "Preview",
        link:"https://7steps.vercel.app/",
        content:"Steps component like Youtube and Faceboog local app can be assigned many step whatever you want that i made as assignment and this is my work.",
        github:"",
    },
    {
        images: LandingPage,
        alt:"landing page",
        subHeading: "Website",
        heading: "Landing Page",
        btn: "Preview",
        link:"https://5landin-page.vercel.app/",
        content:"Landing Page local Design or Templete that i made as assignment on Css which is Chakra UI and this is my work.",
        github:"",
    },
    {
        images: DarkMode,
        alt:"dark mode",
        subHeading: "Toggler",
        heading: "Dark and Light Mode",
        btn: "Preview",
        link:"https://switcher-sand.vercel.app/",
        content:"Dark Mode Toggler local app which allow user to toggle between dark and light mode.",
        github:"",
    },
   
]

