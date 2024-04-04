import React from 'react';
import { connect } from 'react-redux';
import Footer from './component/Footer';
import Nav from './component/Nav';

const Home = ({ posts }) => {
    // Style for the images
    const imageStyle = {
        maxWidth: '300px',
        maxHeight: '300px',
        margin: '10px 0'
    };

    // Function to handle comment submission (needs to be implemented)
    const handleCommentSubmit = (postId, comment) => {
        
        console.log(`Comment submitted for post ${postId}: ${comment}`);
    };

    return (
        <div id='root'>
            <Nav />
            <div style={{ height: '900px', width: '1500px',alignItems:'center' }}>
                {posts.length === 0 ? (
                    <p>No posts available.</p>
                ) : (
                    posts.map(post => (
                        <div key={post.id}>
                            <p>{post.caption}</p>
                            <img src={post.imageUrl} alt="Posted" style={imageStyle} />
                            <ul>
                                {post.comments && post.comments.map((comment, index) => (
                                    <li key={index}>{comment}</li>
                                ))}
                            </ul>
                            <input
                                type="text"
                                placeholder="Add a comment"
                                onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                        handleCommentSubmit(post.id, e.target.value);
                                        e.target.value = '';
                                    }
                                }}
                            />
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
};

// Connect the component to Redux store and map state to props
const mapStateToProps = (state) => ({
    posts: state.posts,
});

export default connect(mapStateToProps)(Home);


