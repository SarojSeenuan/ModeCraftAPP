import classes from './page.module.css';
import Testimonial from 'modecraft/components/team';
import MainHeaderBackground from 'modecraft/components/main-header/header-background';
import Parallax from 'modecraft/components/parallaxText';




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
                        <h2>ABOUT US</h2>
                        <p>「3D仮想ファッションストア・モークラフト」は、最新のWeb技術を活用して、ファッションデザイナーと消費者をつなぐ革新的なプラットフォームを創造するプロジェクトです。このプラットフォームでは、ユーザーが3D空間で衣服デザインを閲覧し、インタラクティブに操作し、リアルタイムでカスタマイズし、さらには3Dアバターを使用して「試着」することができます。</p>
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
