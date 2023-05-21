import React from 'react';
import cn from '../../utils/cn';

type TitleProps = {
    children: React.ReactNode;
    className?: string;
};

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(({ children, className, ...props }, ref) => (
    <h1 ref={ref} className={cn('text-4xl font-bold tracking-tight text-neutral-800 mt-4 mb-2 dark:text-neutral-100', className)} {...props}>
        {children}
    </h1>
));

export default Title;