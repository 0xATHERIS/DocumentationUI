import React from 'react';
import cn from '../../utils/cn';
import LinkIcon from '../../icons/LinkIcon';

type SectionTitleProps = {
    children: string;
    className?: string;
};

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(({ children, className, ...props }, ref) => (
    <a href={`#${children}`} className="flex items-center mb-2 group">
        <h4 ref={ref} className={cn("mr-1 text-lg font-medium leading-none text-neutral-800 dark:text-neutral-100", className)} {...props}>
            {children}
        </h4>
        <span className="transition-all -translate-x-3 opacity-0 group-hover:opacity-50 group-hover:translate-x-0"><LinkIcon /></span>
    </a>
));

export default SectionTitle;