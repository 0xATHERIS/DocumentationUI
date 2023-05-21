import React from 'react';
import cn from '../../utils/cn';

type TextProps = {
    children: React.ReactNode;
    className?: string;
};

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(({ children, className, ...props }, ref) => (
    <p ref={ref} className={cn("mb-4 text-base font-normal leading-relaxed text-neutral-800 dark:text-neutral-100", className)} {...props}>
        {children}
    </p>
));

export default Text;