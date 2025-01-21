import classes from './page.module.css';
import Testimonial from 'modecraft/components/team';
import MainHeaderBackground from 'modecraft/components/main-header/header-background';
import Parallax from 'modecraft/components/parallaxText';
import AboutUS from 'modecraft/components/aboutUS';

export default function Homepage() {
    return (
        <>
            <header className={classes.header}>
                <MainHeaderBackground />
            </header>
            <main className={classes.main}>
                {/* about section */}
                <section className={classes.section}>
                    <div className={classes.about}>
                        <AboutUS />
                    </div>
                </section>

                {/* banner section */}
                <section className={classes.section}>
                    <div className={classes.banner}>
                        <Parallax />
                    </div>
                </section>

                {/* member section */}
                <section className={classes.section}>
                    <div className={classes.member}>
                        <h2>MEET OUR TEAMS</h2>
                        <Testimonial />
                    </div>
                </section>
            </main>
        </>
    );
}
