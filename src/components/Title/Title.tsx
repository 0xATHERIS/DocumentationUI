import React from 'react';

type TitleProps = {
    children: React.ReactNode;
    className?: string;
};

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(({ children, className, ...props }, ref) => (
    <h1 ref={ref} className={`text-4xl font-bold tracking-tight text-neutral-800 mt-4 mb-2 ${className}`} {...props}>
        {children}
    </h1>
));

export default Title;