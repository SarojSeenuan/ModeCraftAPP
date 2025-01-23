import classes from './page.module.css';
import Testimonial from 'modecraft/components/team';
import MainHeaderBackground from 'modecraft/components/main-header/header-background';
import Parallax from 'modecraft/components/parallaxText';
import AboutUS from 'modecraft/components/aboutUS';
import WelcomePage from 'modecraft/components/main-header/welcome';
import { Scene } from 'modecraft/components/main-header/welcome';

export default function Homepage() {
    return (
        <>
            <header className={classes.header}>
                <MainHeaderBackground />
                <WelcomePage />
            </header>
            <main className={classes.main}>
                {/* about section */}
                <section id='section1' className={classes.section}>
                    <div className={classes.about}>
                        <AboutUS />
                    </div>
                </section>

                {/* banner section */}
                <section id='section2' className={classes.section}>
                    <div className={classes.banner}>
                        <Parallax />
                    </div>
                </section>

                {/* member section */}
                <section id='section3' className={classes.section}>
                    <div className={classes.member}>
                        <h2>MEET OUR TEAMS</h2>
                        <Testimonial />
                    </div>
                </section>

                <Scene />

            </main>


        </>
    );
}
