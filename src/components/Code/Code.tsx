import React from 'react';
import cn from '../../utils/cn';

type CodeProps = {
    children: React.ReactNode;
    className?: string;
};

const Code = React.forwardRef<HTMLElement, CodeProps>(({ children, className, ...props }, ref) => (
    <code ref={ref} className={cn("p-1 text-sm border rounded bg-neutral-100 dark:bg-neutral-600 dark:border-neutral-500 dark:text-neutral-100", className)} {...props}>
        {children}
    </code>
));

export default Code;