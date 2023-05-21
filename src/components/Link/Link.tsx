import React from 'react';
import cn from '../../utils/cn';

type LinkProps = {
    children: React.ReactNode;
    className?: string;
    to: string;
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ children, className, to, ...props }, ref) => (
    <a href={to} ref={ref} className={cn("text-base font-normal leading-relaxed text-blue-800 dark:text-blue-400 underline underline-offset-2", className)} {...props}>
        {children}
    </a>
));

export default Link;