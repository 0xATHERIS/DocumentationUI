import React from 'react';
import cn from '../../utils/cn';

type SubtitleProps = {
    children: React.ReactNode;
    className?: string;
};

const Subtitle = React.forwardRef<HTMLHeadingElement, SubtitleProps>(({ children, className, ...props }, ref) => (
    <h2 ref={ref} className={cn("mb-6 text-xl font-medium tracking-tight text-neutral-800 dark:text-neutral-100", className)} {...props}>
        {children}
    </h2>
));

export default Subtitle;