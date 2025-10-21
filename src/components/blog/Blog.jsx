import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card coming-soon-card">
                    <div className="blog__thumb">
                        <div className="coming-soon-content">
                            <h3 className="coming-soon-title">📝 Coming Soon</h3>
                            <p className="coming-soon-text">Blog posts and articles are on the way. Stay tuned for updates on software engineering, IoT projects, and technology insights!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog