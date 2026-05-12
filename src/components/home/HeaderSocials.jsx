import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
            <a href='https://github.com/salman-nstu' className='home__social-link' target='_blank' rel='noreferrer' title="GitHub">
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/mrsksalman' className='home__social-link' target='_blank' rel='noreferrer' title="LinkedIn">
                <FaLinkedinIn />
            </a>

            <a href='https://codeforces.com/profile/CodeWarriorSK' className='home__social-link' target='_blank' rel='noreferrer' title="Codeforces">
                <SiCodeforces />
            </a>

            <a href='https://leetcode.com/warrior-salman' className='home__social-link' target='_blank' rel='noreferrer' title="LeetCode">
                <SiLeetcode />
            </a>
        </div>
    );
};

export default HeaderSocials;
