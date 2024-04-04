import React from 'react';
import '../src/styles/Profile.css'
const Profile=()=>{
    return(
        <>
        <div className='profile'>
            <div className='profile-img' id='profile-image'>
                <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' height='100px' width='100px' style={{borderRadius:'60px',marginTop: '150px'}}/>
            </div>
            <div className='bio'>
                <p>add bio</p>
            </div>
            <div className='details'>
                <p>Name : Priyanka Maity</p>
                <p>studied at: SWAMI VIVEKANANDA UNIVERSITY</p>
                <p>Worjed at: hcl tecnology</p>
                <p>single</p>
                <p>Lives in Haldia</p>
                <p>joined in 2001</p>
            </div>
            <p></p>
        </div>
        </>
    )
}
export default Profile;