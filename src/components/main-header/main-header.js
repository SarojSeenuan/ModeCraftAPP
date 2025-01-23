import Link from 'next/link';
import Image from 'next/image';
import NavLink from './nav-link';

import classes from './main-header.module.css';
import logoImg from 'modecraft/assets/logo.png';

export default function MainHeader() {
    return (
        <>
            <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image src={logoImg} alt='A logo of modecraft' priority />
                </Link>
                <nav className={classes.nav}>
                    <ul className={classes.middle}>
                        <li>
                            <NavLink href='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink href='/showcase'>Showcase</NavLink>
                        </li>
                        <li>
                            <NavLink href='/avatar'>Avatar Room</NavLink>
                        </li>
                        <li>
                            <NavLink href='/events'>Events</NavLink>
                        </li>
                    </ul>

                </nav>
                <nav className={classes.nav}>
                    <ul className={classes.right}>
                        <NavLink href='/contact'>CONTACT US</NavLink>
                    </ul>
                </nav>
            </header>
        </>
    );
}
