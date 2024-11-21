
import './App.css'
import NavBar from './components/NavBar'
import ProfileCard from './components/ProfileCard';
function App() {

  return (
    <>
   <div className='container my-5'>
   <div className='main'>
      <div className='content'>
      <h1 className='user-title'>Users</h1>
      {/* NavBar */}
        <NavBar/>
       {/* card */}
       <div className='row'>
       <ProfileCard
          image="/images/profile-1.png"
          title="Lelah Nichols"
          location="Troy, MI"
          tags={['clothes', 'stem']}
        />
        {/* card-2 */}

        <ProfileCard
            image= '/images/profile-2.png'
            title= 'Jesus Weiss'
            cardClass={"shadow"}
            location= 'Fort Worth, TX'
            tags= {['headset', 'gadget', 'speed', 'winter']}

        />
      
       {/* card-3 */}

       <ProfileCard
           image= '/images/profile-3.png'
           title= 'Annie Rice'
           location= 'Austin, TX'
           tags= {['road', 'mountain', 'trip', 'earth', 'nature']}

        />
         {/* card-4 */}

       <ProfileCard
           image= '/images/profile-4.png'
           title= 'Robert Brower'
           location= 'Cincinnati, OH'
           tags= {['Maintenance', 'gears', 'frames', 'repires']}

        />
         {/* card-5 */}

       <ProfileCard
          image= '/images/profile-5.png'
          title= 'Amy Campbell'
          location= 'Warrior, AL'
          tags= {['music', 'disks']}

        />
        {/* card-6 */}

       <ProfileCard
          image= '/images/profile-6.png'
          title= 'Anthony S. Morin'
          location= 'Lyndhurst, NJ'
          tags= {['vintage', 'electric']}

        />
    
     
       </div>
      </div>

     </div>
   </div>
    </>
  )
}

export default App
