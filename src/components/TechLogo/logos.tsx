import TechLogo from './TechLogo'
import Logos from './logoMap'

export default Object.keys(Logos).map( key => 
  <TechLogo 
    id={Logos[key].id}
    href={Logos[key].href}
    image={Logos[key].image}
    alt={Logos[key].alt}
    title={Logos[key].title}
  />
)

 