import React from 'react';
import './Blog.css';
import { RiLink } from 'react-icons/ri';

const Blog = () => {
    const achievements = [
        {
            id: 1,
            title: "2nd Runner-up, Programming Contest",
            year: "2024",
            description: "NSTU Intra University Programming Contest organized by CSTE Club",
            category: "Achievement"
        },
        {
            id: 2,
            title: "2nd Place, SRS Poster Presentation",
            year: "2024",
            description: "Intra-University Software Project Showcasing organized by IT Club, NSTU",
            category: "Achievement"
        },
        {
            id: 3,
            title: "6th Place, Programming Contest",
            year: "2023",
            description: "NSTU EEE DAY 2023 Inter University Programming Contest (Regional)",
            category: "Achievement"
        }
    ];

    const competitiveProgramming = [
        {
            id: 1,
            platform: "Codeforces",
            username: "CodeWarriorSK",
            achievement: "Solved 200+ problems, Max Rating: 1100",
            link: "https://codeforces.com/profile/CodeWarriorSK"
        },
        {
            id: 2,
            platform: "LeetCode",
            username: "warrior-salman",
            achievement: "Solved 100+ problems",
            link: "https://leetcode.com/warrior-salman"
        },
        {
            id: 3,
            platform: "Beecrowd",
            username: "Salman Khan",
            achievement: "Solved 50+ problems",
            link: "https://www.beecrowd.com.br/judge/en/profile/user/salman-khan"
        }
    ];

    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Achievements & Competitive Programming</h2>

            <div className="blog__container grid">
                <div style={{gridColumn: '1 / -1'}}>
                    <h3 style={{fontSize: '1.3rem', marginBottom: '20px', color: '#f1f5fe'}}>🏆 Achievements</h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                        {achievements.map((achievement) => (
                            <div key={achievement.id} className="blog__card" style={{padding: '20px'}}>
                                <h4 style={{color: '#fde047', marginBottom: '10px'}}>{achievement.title}</h4>
                                <p style={{color: '#a1a1a1', marginBottom: '8px'}}><strong>{achievement.year}</strong></p>
                                <p style={{color: '#d4d4d4', fontSize: '0.95rem'}}>{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{gridColumn: '1 / -1', marginTop: '40px'}}>
                    <h3 style={{fontSize: '1.3rem', marginBottom: '20px', color: '#f1f5fe'}}>💻 Competitive Programming Profiles</h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                        {competitiveProgramming.map((profile) => (
                            <div key={profile.id} className="blog__card" style={{padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <div>
                                    <h4 style={{color: '#fde047', marginBottom: '10px'}}>{profile.platform}</h4>
                                    <p style={{color: '#a1a1a1', marginBottom: '8px'}}>@{profile.username}</p>
                                    <p style={{color: '#d4d4d4', fontSize: '0.95rem'}}>{profile.achievement}</p>
                                </div>
                                <a href={profile.link} target="_blank" rel="noreferrer" style={{marginTop: '15px', display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#f97316', textDecoration: 'none', fontSize: '0.9rem'}}>
                                    Visit Profile <RiLink size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog