import React from 'react';
import { useTranslation } from 'react-i18next';

const SimpleLayout: React.FC<any> = ({children}) => {
    const {t} = useTranslation();

    return (
        <>
            <header>

            </header>
            <nav>

            </nav>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
        // <div className="container min-h-screen">
        //     <div className="p-4 space-x-4">
        //         <Tooltip label={t(RESOURCE.ACTION.HOME)}>
        //             <IconButton
        //                 aria-label={t(RESOURCE.ACTION.HOME)}
        //                 icon={<Home/>}
        //                 //to="/"
        //             />
        //         </Tooltip>
        //     </div>
        //     <main className="flex-1 p-4">
        //         {children}
        //     </main>
        // </div>
    );
};

export default SimpleLayout;
