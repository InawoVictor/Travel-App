import './Destinations.css'
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Keywest from '../../assets/keywest.jpg';

const Destinations = () => {
  return (
    <div className='destinations' name='destination'>
      <div className='container'>
        <h1>All-Inclusive Resorts</h1>
        <p>On The Carribean's Best Beaches</p>
        <div className='img-container'>
            <img src={BoraBora} alt='/' className='span-3 image-grid-row-2' />
            <img src={BoraBora2} alt='/' />
            <img src={Maldives} alt='/' />
            <img src={Maldives2} alt='/' />
            <img src={Keywest} alt='/' />
        </div>
      </div>
    </div>
  )
}

export default Destinations;
