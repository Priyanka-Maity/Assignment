import React,{createContext,useState} from 'react'
export const Globalcontext=createContext()
export default function Globalprovider({children}){
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [posts, setPosts] = useState([]);
  
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
        setPosts([...posts, newPost]);
        setImage(null);
        setCaption('');
      };
      reader.readAsDataURL(image);
    };
  
    const handleCommentSubmit = (postId, comment) => {
      const updatedPosts = posts.map(post =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      );
      setPosts(updatedPosts);
     
    };
  
return(
    <Globalcontext.Provider value={{posts,setPosts,caption,setCaption,handleImageChange,handleImageUpload,handleCommentSubmit}}>
    {children}
</Globalcontext.Provider>
)
}