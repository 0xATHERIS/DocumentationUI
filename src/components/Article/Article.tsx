import React from 'react';

type ArticleProps = {
    children: React.ReactNode;
};

const Article = React.forwardRef<HTMLElement, ArticleProps>(({ children, ...props }, ref) => (
    <article ref={ref} className="w-full md:w-3/4 lg:w-1/2 mx-auto px-4" {...props}>
        {children}
    </article>
));

export default Article;