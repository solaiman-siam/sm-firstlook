

import { FaGithub } from "react-icons/fa6";
import { imageProvider } from "./imageProvider";

export const navMenus = [
    {
      "id": 1,
      "title": "Home",
      "link": "/",
      "icon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false"
      style="width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.9); flex-shrink: 0;">
      <path d="M216,120v96H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2"></path>
      <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H48V120l80-80,80,80Z"></path>
    </svg>`
    },
    {
      "id": 2,
      "title": "Projects",
      "link": "/projects",
      "icon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); color: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); flex-shrink: 0;"><g color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" weight="duotone"><path d="M216,64V192H40V64Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></g></svg>`,
    },
    // {
    //   "id": 3,
    //   "title": "Services",
    //   "icon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); color: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); flex-shrink: 0;"><g color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" weight="duotone"><path d="M224,127.17a96.48,96.48,0,0,1-2.39,22.18A24,24,0,0,1,198.21,168H152a24,24,0,0,0-24,24,24,24,0,0,1-32,22.61C58.73,201.44,32,169.81,32,128a96,96,0,0,1,95-96C179.84,31.47,223.55,74.35,224,127.17Z" opacity="0.2"></path><path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path></g></svg>`,
    //   "link": "/services"
    // },
    {
      "id": 4,
      "title": "Contact",
      "icon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); color: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); flex-shrink: 0;"><g color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" weight="duotone"><path d="M224,96l-78.55,56h-34.9L32,96l96-64Z" opacity="0.2"></path><path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z"></path></g></svg>`,
      "link": "/contact"
    },
    {
      "id": 5,
      "title": "Resources",
      "isSection": true
    },
    // {
    //   "id": 6,
    //   "title": "Bookmarks",
    //   "icon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); color: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); flex-shrink: 0;"><g color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" weight="duotone"><path d="M168,72V224l-56-40L56,224V72a8,8,0,0,1,8-8h96A8,8,0,0,1,168,72Z" opacity="0.2"></path><path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Zm0,152.46-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96ZM208,40V192a8,8,0,0,1-16,0V40H88a8,8,0,0,1,0-16H192A16,16,0,0,1,208,40Z"></path></g></svg>`,
    //   "link": "/bookmarks"
    // },
    {
      "id": 7,
      "title": "Stack",
      "icon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); color: var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9)); flex-shrink: 0;"><g color="var(--token-95a8ec94-3583-4d09-b434-687b27800b07, rgba(255, 255, 255, 0.9))" weight="duotone"><path d="M200,128a32,32,0,1,1-32-32A32,32,0,0,1,200,128ZM96,96h40V32H96a32,32,0,0,0,0,64ZM64,196a36,36,0,0,0,72,0V160H100A36,36,0,0,0,64,196Z" opacity="0.2"></path><path d="M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H144V40h24A24,24,0,0,1,192,64ZM72,64A24,24,0,0,1,96,40h32V88H96A24,24,0,0,1,72,64Zm24,88a24,24,0,0,1,0-48h32v48H96Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,168,152Z"></path></g></svg>`,
      "link": "/stack"
    },
    {
      "id": 8,
      "title": "Github",
      "icon": '',
      "link": "https://github.com/solaiman-siam"
    }
  ]
  
  export const projectData = [
    {
      "id": 1,
      "project_image": imageProvider.Duellert,
      "project_name": "Birthday Reminder and SMS Sending",
      "project_views": 1250,
      "project_year": 2025
    },
    {
      "id": 2,
      "project_image": imageProvider.Goldlync,
      "project_name": "Service Based with Subscription Model",
      "project_views": 2310,
      "project_year": 2025
    },
    {
      "id": 3,
      "project_image": imageProvider.Aleesa56,
      "project_name": "CQD - Commercial Cleaning Excellence",
      "project_views": 980,
      "project_year": 2025
    },
    {
      "id": 4,
      "project_image": imageProvider.Dustintess,
      "project_name": "Nova Motor Co. - Buy & Personalize Your Dream Car",
      "project_views": 1560,
      "project_year": 2024
    },
    {
      "id": 5,
      "project_image": imageProvider.MilesFiniq,
      "project_name": "FinIQ - Transforming Financial Services",
      "project_views": 1560,
      "project_year": 2025
    },
    {
      "id": 6,
      "project_image": imageProvider.Conmap,
      "project_name": "Construction Project Explorer Platform",
      "project_views": 1560,
      "project_year": 2025
    },
    {
      "id": 7,
      "project_image": imageProvider.Hbrook,
      "project_name": "Album Gallary - Discover and Buy Owner Albums",
      "project_views": 560,
      "project_year": 2024
    },
    
  ]
  