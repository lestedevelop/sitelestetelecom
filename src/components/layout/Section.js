import React from 'react';
import { twMerge } from "tailwind-merge";


export default function Section({children, style,className}) {
    return (
        <section className="mx-auto w-full" style={style}>
            <div className={twMerge("mx-auto max-w-5xl px-3 py-6 sm:px-6 lg:px-4",className)}>
                {children && React.Children.map(children, c => React.cloneElement(c))}
            </div>
        </section>
    )
}