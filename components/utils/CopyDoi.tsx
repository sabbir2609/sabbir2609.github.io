'use client';
import { useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

export default function CopyDoi({ doi }: { doi: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(doi);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-base-content/50 hover:text-primary transition-colors font-mono"
            title="Copy DOI"
        >
            {copied ? <FaCheck className="text-success" /> : <FaRegCopy />}
            <span>{copied ? 'Copied!' : 'Copy DOI'}</span>
        </button>
    );
}
