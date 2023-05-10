import React from 'react';

type TitleProps = {
    children: React.ReactNode;
};

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(({ children, ...props }, ref) => (
    <h1 ref={ref} className="text-4xl font-bold tracking-tight text-neutral-800" {...props}>
        {children}
    </h1>
));

export default Title;