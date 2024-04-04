import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from './data/action';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Profile from './Profile';
const App = ( {addPost }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
    const handleImageChange = e => {
      const file = e.target.files[0];
      if (file && file.size <= 5 * 1024 * 1024) {
        setImage(file);
      } else {
        alert('Please select a valid image file (under 5MB).');
      }
    };
  
    const handleImageUpload = () => {
      if (!image) {
        alert('Please select an image to upload.');
        return;
      }
  
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPost = {
          id: Date.now(),
          imageUrl: reader.result,
          caption,
          comments: []
        };
        addPost(newPost);
        setImage(null);
        setCaption(''); // Navigate to the posts page
      };
      reader.readAsDataURL(image);
    };
  const handleUpload = () => {
    handleImageUpload();
    // After uploading image, navigate to posts page
    navigate('/');
  };
  return (
    <>
    <div id='root'>
      <Nav/>
      <Profile/>
      <h2 style={{textAlign:'center'}}>Create a Post</h2>
      <div style={imageStyle}>
       
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          value={caption}
          onChange={e => setCaption(e.target.value)}
          placeholder="Enter a caption"
          style={{marginRight:'10px',padding:'10px',backgroundColor:'#fff',borderRadius:'5px',color:'black'}}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
      
      <Footer/>
    </div>
    </>
  );
};

const imageStyle = {
  maxWidth: '700px',
  maxHeight: '300px',
  boxShadow: '4px 4px 9px #ddd',
  margin: '4em',
  padding: '1em',
  marginLeft:'400px'
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

