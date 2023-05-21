import React from 'react';
import cn from '../../utils/cn';

type ArticleProps = {
    children: React.ReactNode;
    className?: string;
};

const Article = React.forwardRef<HTMLElement, ArticleProps>(({ children, className, ...props }, ref) => (
    <article ref={ref} className={cn("w-full md:w-3/4 lg:w-1/2 mx-auto px-4", className)} {...props}>
        {children}
    </article>
));

export default Article;