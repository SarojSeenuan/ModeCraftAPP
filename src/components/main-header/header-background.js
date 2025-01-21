import classes from './header-background.module.css'
import Image from 'next/image'
import bgImg from 'modecraft/assets/bg.jpeg';


export default function MainHeaderBackground() {
    return (
        <div className={classes[ 'header-background' ]}>
            <Image src={bgImg} alt='ModeCraft Background' />
        </div>
    )
}