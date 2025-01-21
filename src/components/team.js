'use client'
import kenIMG from 'modecraft/assets/team-member/ken.jpg'
import haruIMG from 'modecraft/assets/team-member/haru.jpg'
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import classes from './team.module.css'

gsap.registerPlugin(ScrollTrigger);


const TEAM_MEMBERS = [
    { name: 'シヌアン サロード', title: 'Fullstack Developer', image: kenIMG, quote: "It's all good. I was amazed at the quality of the Design. We've seen amazing results already." },
    { name: 'ウルジバダラフ ハリウン', title: 'UI/UX Designer', image: haruIMG, quote: "I've been using ModeCraft for a few months now and I'm really impressed with the results. The design is beautiful and the features are easy to use." },
];

function TeamMember({ member }) {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(ref.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <div ref={ref} className={classes[ 'team-member' ]}>
            <div className={classes[ 'quote-container' ]}>
                <p className={classes.quote}>{member.quote}</p>
                <h2 className={classes.name}>{member.name}</h2>
                <p className={classes.title}>{member.title}</p>
            </div>
            <div className={classes[ 'image-container' ]}>
                <Image src={member.image} alt={member.name} />
            </div>
        </div>
    );
}

export default function Testimonial() {
    return (
        <div className={classes[ 'testimonial-wrapper' ]}>
            {TEAM_MEMBERS.map((member, index) => (
                <TeamMember key={index} member={member} />
            ))}
        </div>
    );
}