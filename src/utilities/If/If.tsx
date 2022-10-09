import React from 'react'

interface IfProps {
    show: boolean;
    children: React.ReactNode
}

export const If = ({ children, show }: IfProps) => (
    show ? children : null
)
