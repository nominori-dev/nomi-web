import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );

}

export default Layout