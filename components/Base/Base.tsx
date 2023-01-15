import styles from "./Base.module.sass";
import Head from "next/head";
import React, {ReactNode} from "react";
import Navbar from "@/components/Base/Navbar/Navbar";


interface BaseProps {
    title: string;
    children?: ReactNode;
}


const Base: React.FC<BaseProps> = ({ title, children }) => {
    return (
        <div className={styles.context}>

            <Head>
                <title>{ title }</title>
            </Head>

            <Navbar />

            <div className={styles.main}>
                { children }
            </div>

        </div>
    );
}


export default Base;
