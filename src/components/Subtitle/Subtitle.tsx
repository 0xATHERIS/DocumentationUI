import React from 'react';

type SubtitleProps = {
    children: React.ReactNode;
};

const Subtitle = React.forwardRef<HTMLHeadingElement, SubtitleProps>(({ children, ...props }, ref) => (
    <h4 ref={ref} className="text-xl font-medium tracking-tight mb-4 text-neutral-800" {...props}>
        {children}
    </h4>
));

export default Subtitle;