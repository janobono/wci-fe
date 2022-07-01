import { FallbackProps } from 'react-error-boundary';
import React from 'react';

function ErrorFallback(_props: FallbackProps) {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <p className="font-mono text-xl text-red-500">Unexpected error occurred</p>
        </div>
    );
}

export default ErrorFallback;
