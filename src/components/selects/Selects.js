import './Selects.css'
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Maldives3 from '../../assets/maldives3.jpg'
import Keywest from '../../assets/keywest.jpg';

import SelectImg from '../selectImg/SelectImg';

const Selects = () => {
  return (
    <div className='selects' name='select'>
        <div className='container'>
        <SelectImg bgImg={BoraBora} text='Bora Bora'/>
        <SelectImg bgImg={BoraBora2} text='Emerald Bay'/>
        <SelectImg bgImg={Maldives} text='Madives'/>
        <SelectImg bgImg={Maldives2} text='Grenada'/>
        <SelectImg bgImg={Maldives3} text='Barbados'/>
        <SelectImg bgImg={Keywest} text='Key west'/>
        </div>
      
    </div>
  )
}

export default Selects;
