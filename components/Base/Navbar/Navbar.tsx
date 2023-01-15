import styles from "./Navbar.module.sass";
import React from "react";
import Link from "next/link";


const ZodiacLink: React.FC<{ name: string }> = ({ name }) => (
    <div className={styles.zodiacLink}>
        <Link href={'/' + name}>
            <img src={`/zodiac/colored/${name}.webp`} alt="" />
        </Link>
        <span>
            {name[0].toUpperCase() + name.substring(1)}
        </span>
    </div>
);


const Navbar: React.FC = () => {
    return (
        <div className={styles.context}>

            <div className={styles.primary}>
                <h1>Astros</h1>
            </div>

            <div className={styles.secondary}>
                <ZodiacLink name="aries" />
                <ZodiacLink name="taurus" />
                <ZodiacLink name="gemini" />
                <ZodiacLink name="cancer" />
                <ZodiacLink name="leo" />
                <ZodiacLink name="virgo" />
                <ZodiacLink name="libra" />
                <ZodiacLink name="scorpio" />
                <ZodiacLink name="sagittarius" />
                <ZodiacLink name="capricorn" />
                <ZodiacLink name="aquarius" />
                <ZodiacLink name="pisces" />
            </div>

        </div>
    );
}


export default Navbar;
