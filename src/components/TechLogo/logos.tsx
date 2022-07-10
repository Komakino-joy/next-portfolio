import TechLogo from './TechLogo'
import Logos from './logoMap'

export default Object.keys(Logos).map( key => 
  <div key={Logos[key].id}>
    <TechLogo 
      id={Logos[key].id}
      href={Logos[key].href}
      image={Logos[key].image}
      alt={Logos[key].alt}
      title={Logos[key].title}
    />
  </div>
)

 