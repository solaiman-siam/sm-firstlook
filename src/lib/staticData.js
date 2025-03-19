


export const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <path d="M216,120v96H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2"></path>
      <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H48V120l80-80,80,80Z"></path>
    </svg>
  );
  
  export const ProjectIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <path d="M216,64V192H40V64Z" opacity="0.2"></path>
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
    </svg>
  );
  

export const navMenus = [
    {
      "title": "Home",
      "icon": HomeIcon,
      "link": "/"
    },
    {
      "title": "Projects",
      "icon": ProjectIcon,
      "link": "/projects"
    },
    {
      "title": "Services",
      "icon": "globe",
      "link": "/services"
    },
    {
      "title": "Contact",
      "icon": "mail",
      "link": "/contact"
    },
    {
      "title": "Resources",
      "isSection": true
    },
    {
      "title": "Bookmarks",
      "icon": "bookmark",
      "link": "/bookmarks"
    },
    {
      "title": "Stack",
      "icon": "link",
      "link": "/stack"
    },
    {
      "title": "Twitter",
      "icon": "x",
      "link": "https://twitter.com"
    }
  ]
  