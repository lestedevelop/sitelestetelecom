import React from 'react';
import { twMerge } from "tailwind-merge";


export default function Section({children, style,className}) {
    return (
        <section className="" style={style}>
            <div className={twMerge("container",className)}>
                {children && React.Children.map(children, c => React.cloneElement(c))}
            </div>
        </section>
    )
}