import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { cls } from '../../../util'

const classes = {
    base: 'border transition duration-500 ease select-none focus:outline-none focus:shadow-outline',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    size: {
        small: 'px-2 py-1 text-sm',
        normal: 'px-4 py-2',
        large: 'px-8 py-3 text-lg'
    },
    variant: {
        primary: 'border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-600',
        success: 'border-green-500 bg-green-500 text-white hover:bg-green-600',
        error: 'border-red-500 bg-red-500 text-white hover:bg-red-600',
        warning: 'border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600',
        info: 'border-teal-500 bg-teal-500 text-white hover:bg-teal-600',
        dark: 'border-gray-700 bg-gray-700 text-white hover:bg-gray-800',
        light: 'border-gray-200 bg-gray-200 text-gray-700 hover:bg-gray-300'
    }
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'submit' | 'button',
    variant?: 'primary' | 'success' | 'error' | 'warning' | 'info' | 'dark' | 'light',
    size?: 'small' | 'normal' | 'large',
    pill?: boolean | undefined,
    disabled?: boolean | undefined
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            type = 'button',
            variant = 'primary',
            size = 'normal',
            pill,
            disabled = false,
            className,
            ...props
        }, ref
    ) => (
        <button
            ref={ref}
            disabled={disabled}
            type={type}
            className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
            {...props}
        >
            {children}
        </button>
    ));

Button.displayName = 'Button';

export default Button;
