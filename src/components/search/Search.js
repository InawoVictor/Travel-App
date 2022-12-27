import './Search.css';
import Gold from '../../assets/gold.png'

const Search = () => {
  return (
    <div className='search' name='search'>
      <div className='container'>
        <div className='left'>
            <h2>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae rem eos recusandae magnam voluptate labore ipsum, 
            repudiandae nostrum? Cumque qui optio sed velit 
            veritatis perspiciatis aliquam dolorem ipsa quasi alias.
            </p>
            <div className='search-col-2'>
                <div className='box'>
                    <div>
                        <img src={ Gold } alt='/'style={{marginRight: '1rem'}} />
                    </div>
                    <div>
                        <h3>WORLD'S LEADING</h3>
                        <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <h3>NO ONE INCLUDES MORE</h3>
                        <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        <button>View packages</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='promo'>
                <h4 className='save'>GET ADDITIONAL 7% OFF</h4>
                <p className='timer'> 12 HOURS LEFT</p>
                <p className='offers'>VIEW ALL CURRENT OFFERS</p>
            </div>
            <form>
                <div className='input-wrap'>
                    <label>Destination</label>
                    <select>
                        <option value='1'>Grand Antigua</option>
                        <option value='1'>Granda</option>
                        <option value='1'>Emerald</option>
                        <option value='1'>Bora Bora</option>
                        <option value='1'>Keywest</option>
                        <option value='1'>Barbados</option>
                    </select>
                </div>
                <div className='date'>
                    <div className='input-wrap'>
                        <label>Check-In</label>
                        <input type='date' />
                    </div>
                    <div className='input-wrap'>
                        <label>Check-Out</label>
                        <input type='date' />
                    </div>
                </div>
                <button>Rates & Availabilities</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Search;
