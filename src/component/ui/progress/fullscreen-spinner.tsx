import React from 'react';
import { Spinner } from './index';

const FullScreenSpinner: React.FC = (props) => (
    <div className="flex min-h-screen justify-center items-center">
        <Spinner/>
    </div>
);

export default FullScreenSpinner;
