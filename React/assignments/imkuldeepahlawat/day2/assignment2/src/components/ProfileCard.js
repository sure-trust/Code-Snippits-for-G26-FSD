
import {useState} from 'react'


function ProfileCard() {
    const [profile, setProfile] = useState({
      name: '',
      email: '',
      avatar: ''
    });
  
    const updateProfile = (field, value) => {
      setProfile(prev => (
        {
        ...prev,
        [field]: value
      }
    ));
    };
  
    return (
      <div>
        <input 
          value={profile.name}
          onChange={e => updateProfile('name', e.target.value)}
        />
        <input 
          value={profile.email}
          onChange={e => updateProfile('email', e.target.value)}
        />
        <input 
          value={profile.avatar}
          onChange={e => updateProfile('avatar', e.target.value)}
        />


        <div>
            <h1>{profile.name}</h1>
            <h2>{profile.email}</h2>
            <img src={profile.avatar} width='200' height='200'/>
        </div>
        {/* More fields */}
      </div>
    );
  }


  export  default ProfileCard