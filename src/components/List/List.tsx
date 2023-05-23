import React from 'react';
import cn from '../../utils/cn';

type ListProps = {
    array: Array<React.ReactNode | string>;
    className?: string;
    listType?: "none" | "disc" | "decimal"
};

const List = React.forwardRef<HTMLUListElement, ListProps>(({ array, className, listType = "decimal", ...props }, ref) => (
    <ul ref={ref} {...props} className={cn("text-neutral-800 dark:text-neutral-100 text-base font-normal leading-relaxed list-inside", `list-${listType}`, className)}>
        {array.map((x) => (
            <li>{x}</li>
        ))}
    </ul>
));

export default List;