import React from 'react';

type ArticleProps = {
    children: React.ReactNode;
};

const Article = React.forwardRef<HTMLElement, ArticleProps>(({ children, ...props }, ref) => (
    <article ref={ref} className="w-4/5 md:w-2/3 mx-auto px-4" {...props}>
        {children}
    </article>
));

export default Article;