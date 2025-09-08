import React from 'react';

export default function Section({children, style}){
    return (
        <section className="mx-auto w-full" style={style}>
            <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6 lg:px-4">
                {children && React.Children.map(children, c => React.cloneElement(c))}
            </div>
        </section>
    )
}