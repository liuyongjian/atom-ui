import React, { useEffect, useRef } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    indeterminate?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ indeterminate, className, ...rest }, ref) => {
        const defaultRef = useRef<HTMLInputElement>(null);
        const resolvedRef = ref || defaultRef;

        useEffect(() => {
            if (resolvedRef && typeof resolvedRef !== 'function' && resolvedRef.current) {
                resolvedRef.current.indeterminate = indeterminate ?? false;
            }
        }, [resolvedRef, indeterminate]);

        return (
            <input
                type="checkbox"
                ref={resolvedRef}
                className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out ${className}`}
                {...rest}
            />
        );
    }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
