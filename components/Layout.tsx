import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const variants = {
    initial: {
        opacity: 0,
        y: 8,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.91, 1, 0.88, 1],
        },
    },
}

const Layout = ({ children }: Props): JSX.Element => {
    const { asPath } = useRouter();
    return (
        <div>
            <motion.main
                key={asPath}
                initial="initial"
                animate="enter"
                variants={variants}
                transition={{ type: 'linear' }}
            >
                {children}
            </motion.main>
        </div>
    );

}

export default Layout