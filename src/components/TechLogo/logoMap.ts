import htmlLogo from '../../../public/assets/html5.logo.svg'
import cssLogo from '../../../public/assets/css3.logo.svg'
import sassLogo from '../../../public/assets/sass.logo.svg'
import jsLogo from '../../../public/assets/js.logo.svg'
import reactLogo from '../../../public/assets/react.logo.svg'
import reduxLogo from '../../../public/assets/redux.logo.svg'
import sagaLogo from '../../../public/assets/redux-saga.logo.svg'
import firebaseLogo from '../../../public/assets/firebase.logo.svg'
import pgLogo from '../../../public/assets/postgres.logo.svg'
import mongoLogo from '../../../public/assets/mongodb.logo.svg'
import nodeLogo from '../../../public/assets/nodejs.logo.svg'
import vueLogo from '../../../public/assets/vue.logo.svg'
import styledLogo from '../../../public/assets/styled-components.webp'
import bootstrapLogo from '../../../public/assets/bootstrap-5.svg'
import tailwindLogo from '../../../public/assets/tailwindcss.svg'
import oracleLogo from '../../../public/assets/oracle.svg'
import postmanLogo from '../../../public/assets/postman.svg'
import photoshopLogo from '../../../public/assets/photoshop.svg'
import appleLogo from '../../../public/assets/apple.svg'
import windowsLogo from '../../../public/assets/microsoft-windows.svg'
import pythonLogo from '../../../public/assets/python.svg'
import gqlLogo from '../../../public/assets/gql.logo.svg'
import nextLogo from '../../../public/assets/next.logo.svg'
import hasuraLogo from '../../../public/assets/hasura.logo.svg'
import magicLogo from '../../../public/assets/magic.logo.svg'

const logos: any =  {
  python: {    
    id: 0,    
    href: 'https://www.python.org/',
    image: pythonLogo,
    alt: 'python logo',
    title: 'Python'
  },
  windows: {        
    id: 1,
    href: 'https://www.microsoft.com/en-us/windows',
    image: windowsLogo,
    alt: 'microsoft windows logo',
    title: 'Windows OS'
  },
  apple: {        
    id: 2,
    href: 'https://www.apple.com/',
    image: appleLogo,
    alt: 'apple logo',
    title: 'Mac OS'
  },
  photoshop: {     
    id: 3,   
    href: 'https://www.adobe.com/products/photoshop/landpa.html?sdid: KKQIN&mv: search&kw: photoshop&ef_id: Cj0KCQjw5uWGBhCTARIsAL70sLKUyyPpcytM4vWgr5k0zdX3ktlh0UW5fBVMRPW0jNanNhttps://www.apple.com/:G:s&s_kwcid: AL!3085!3!522507805137!e!!g!!photoshop!1712238394!67643541820&gclid: Cj0KCQjw5uWGBhCTARIsAL70sLKUyyPpcytM4vWgr5k0zdX3ktlh0UW5fBVMRPW0jNanNhttps://www.apple.com/',
    image: photoshopLogo,
    alt: 'photoshop logo',
    title: 'Photoshop'
  },  
  oracle: {        
    id: 4,
    href: 'https://www.oracle.com/database/',
    image: oracleLogo,
    alt: 'oracle database logo',
    title: 'Oracle DB'
  },
  postman: {       
    id: 5, 
    href: 'https://www.postman.com/',
    image: postmanLogo,
    alt: 'postman logo',
    title: 'Postman'
  },
  tailwind: {      
    id: 6,  
    href: 'https://tailwindcss.com/',
    image: tailwindLogo,
    alt: 'tailwind css logo',
    title: 'Tailwind CSS'
  },
  bootstrap: {    
    id: 7,    
    href: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
    image: bootstrapLogo,
    alt: 'bootstrap logo',
    title: 'Bootstrap 5'
  },
  styled: {       
    id: 8, 
    href: 'https://styled-components.com/',
    image: styledLogo,
    alt: 'styled components logo',
    title: 'Styled Components'
  },  
  html: {   
    id: 9,     
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    image: htmlLogo,
    alt: 'html five logo',
    title: 'HTML 5'
  },
  sass: {  
    id: 10,      
    href: 'https://sass-lang.com/',
    image: sassLogo,
    alt: 'sass logo',
    title: 'Sass'
  },
  js: {        
    id: 11,   
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    image: jsLogo,
    alt: 'javascript logo',
    title: 'JavaScript'
  },
  firebase: {  
    id: 12,       
    href: 'https://firebase.google.com/?gclid: CjwKCAjwwqaGBhBKEiwAMk-FtOODwv2rC8fOc37MnA1K6-ygdvkrHJM4pREmprtZtKHL5rkR27h73RoCWVUQAvD_BwE&gclsrc: aw.ds',
    image: firebaseLogo,
    alt: 'google firebase logo',
    title: 'Firebase'
  },
  mongodb: {   
    id: 13,      
    href: 'https://www.mongodb.com/cloud/atlas/lp/try2?utm_source: google&utm_campaign: gs_americas_united_states_search_brand_atlas_desktop&utm_term: mongodb%20docs&utm_medium: cpc_paid_search&utm_ad: e&utm_ad_campaign_id: 1718986498&gclid: CjwKCAjwwqaGBhBKEiwAMk-FtGMpoI5990hy209BQHDBq1aSl04wgK4LK_bRHwqpX7xfEulLjOny8hoCfcsQAvD_BwE',
    image: mongoLogo,
    alt: 'mongo db logo',
    title: 'MongoDB'
  },  
  vue: {     
    id: 14,    
    href: 'https://v3.vuejs.org/',
    image: vueLogo,
    alt: 'vue logo',
    title: 'Vue'
  },
  react: { 
    id: 15,        
    href: 'https://reactjs.org/docs/getting-started.html',
    image: reactLogo,
    alt: 'react logo',
    title: 'React'
  },
  redux: { 
    id: 16,        
    href: 'https://redux.js.org/',
    image: reduxLogo,
    alt: 'redux logo',
    title: 'Redux'
  },
  saga: {  
    id: 17,       
    href: 'https://redux-saga.js.org/',
    image: sagaLogo,
    alt: 'redux saga logo',
    title: 'Redux Saga'
  },
  css: {  
    id: 18,       
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    image: cssLogo,
    alt: 'css logo',
    title: 'CSS'
  },  
  node: {  
    id: 19,       
    href: 'https://nodejs.org/en/docs/',
    image: nodeLogo,
    alt: 'node logo',
    title: 'Node js'
  },
  postgres: {  
    id: 20,       
    href: 'https://www.postgresql.org/',
    image: pgLogo,
    alt: 'postgres logo',
    title: 'PostgreSQL'
  },
  next: {    
    id: 21,    
    href: 'https://nextjs.org/',
    image: nextLogo,
    alt: 'NextJs logo',
    title: 'NextJs'
  },
  magic: {   
    id: 22,     
    href: 'https://magic.link/',
    image: magicLogo,
    alt: 'Magic.link logo',
    title: 'Magic.link'
  },
  hasura: {  
    id: 23,      
    href: 'https://hasura.io/',
    image: hasuraLogo,
    alt: 'Haura logo',
    title: 'Hasura'
  },  
  gql: {     
    id: 24,   
    href: 'https://graphql.org/',
    image: gqlLogo,
    alt: 'GraphQL logo',
    title: 'GraphQL'
  },
}

export default logos