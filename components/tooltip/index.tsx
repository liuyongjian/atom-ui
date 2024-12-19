import { useState, useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import { cn } from '@/components/__utils';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({
    children,
    content,
    placement = 'top',
    className,
    ...props
}) => {
    const [visible, setVisible] = useState(false);
    const referenceRef = useRef<HTMLDivElement | null>(null);
    const popperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (referenceRef.current && popperRef.current && visible) {
            createPopper(referenceRef.current, popperRef.current, {
                placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                ],
            });
        }
    }, [visible, placement]);

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
            ref={referenceRef}
            {...props}
        >
            {children}

            {visible && (
                <div
                    ref={popperRef}
                    className={cn(
                        'bg-gray-700 text-white text-sm rounded px-2 py-1 z-10',
                        className
                    )}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
