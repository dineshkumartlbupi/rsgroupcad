import React from 'react';
import { Loader2 } from 'lucide-react';

const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 text-[#0d1b42] animate-spin" />
    </div>
);

export default PageLoader;
