import css from '../assets/css.png'
import cypress from '../assets/cypress.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import nextjs from '../assets/nextjs-icon.png'
import nodejs from '../assets/nodejs.png'
import reactjs from '../assets/reactjs.png'
import supabase from '../assets/supabase.png'
import tailwind from '../assets/tailwind.png'
import threejs from '../assets/threejs.svg'
import typescript from '../assets/typescript.png'
import vite from '../assets/vite.svg'
import indygo from '../assets/indygo.png'
import studenthub from '../assets/studenthub.png'
import portfolio from '../assets/portfolio.png'


export const technologies = [
    {
        name: "css",
        icon: css
    },
    {
        name: "figma",
        icon: figma
    },
    {
        name: "git",
        icon: git
    },
    {
        name: "html",
        icon: html
    },
    {
        name: "javascript",
        icon: javascript
    },
    {
        name: "mongodb",
        icon: mongodb
    },
    {
        name: "nextjs",
        icon: nextjs
    },
    {
        name: "nodejs",
        icon: nodejs
    },
    {
        name: "reactjs",
        icon: reactjs
    },
    {
        name: "tailwind",
        icon: tailwind
    },
    {
        name: "threejs",
        icon: threejs
    },
    {
        name: "typescript",
        icon: typescript
    },
    {
        name: "supabase",
        icon: supabase
    },
    {
        name: "cypress",
        icon: cypress
    },
    {
        name: "vite",
        icon: vite
    }
]

export const projects = [
    {
        index:"1",
        title: "Student Hub",
        image: studenthub,
        summary: "First School of Code Project. The brief was to develop a solution that would help other bootcampers. Working as a group of 4 over the course of 5 days, we decided on developing the student-hub that would hold the 4 main links (zoom, Notion, Slack and Github) used daily and to be a repository of topics where students could seach for a topic e.g React and be provided with the heading, a brief overview and some links. Stretch goals were to allow students to add to the this repository so it could continue to grow.",
        github: "https://github.com/Mrbusy13/bc13_w9_project-frontend-depechecode",
        url: "https://socstudenthubproject.vercel.app/",
        techstack:["React", "Node", "Express", "Tailwind CSS", "Postgres", "Jest" ]
    },
    {
        index:"2",
        title: "IndyGo",
        image: indygo,
        summary: "Final School of Code Project. The brief was to identify an issue and solve it using a tech solution. As a group of 6, we had 4 weeks to ideate, plan and develop our solution which was IndyGo; a mobile solution that would display a map centered on a users location, display local businesses within a given radius and display a carousel of short-term deals that would help businesses increase footfall at quiet times and to help eliminate wastage of time sensitive products such as food.",
        github: "https://github.com/Mrbusy13/indygo",
        url: "https://indygo.netlify.app/",
        techstack:["Next.js", "Typescript", "Supabase", "SupabaseAuth", "Leaflet.js", "Tailwind CSS", "Jest", "Cypress" ]
    },
    {
        index:"3",
        title: "Portfolio",
        image: portfolio,
        summary: "This is my portfolio site to tell my story, showcase some of my projects and the technologies I have learnt. I really enjoyed building this single page React application using Vite and I wanted to learn 3d as it looks so cool so have brought in some Three.js elements",
        github: "https://github.com/Mrbusy13/Portfolio",
        url: "https://nickhughes.vercel.app/",
        techstack:["React.js", "Typescript", "Vite", "React-Three/Fiber", "Three.js", "Tailwind CSS"]
    }
]