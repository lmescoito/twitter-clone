import React, { useState, useEffect } from 'react';

function Feed() {
    const [tweets, setTweets] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchTweets = async () => {
            const response = await fetch('http://localhost:8000/api/posts/');
            const data = await response.json();
            setTweets(data);
        };
        fetchTweets();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });
        const newTweet = await response.json();
        setTweets([newTweet, ...tweets]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's happening?"
                />
                <button type="submit">Tweet</button>
            </form>
            <ul>
                {tweets.map((tweet) => (
                    <li key={tweet.id}>{tweet.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default Feed;
