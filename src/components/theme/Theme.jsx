"use client"

import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'

export default function Theme() {
    const { toggle, theme } = useContext(ThemeContext)

    // console.log(theme)

    return (
        <div className="header__toggle" onClick={toggle}>
            <Image src='/moon.svg' alt='어두운 버전' width={24} height={24} />
            <span className='ball' style={
                theme === 'dark' ? { right: 2 } : { left: 2 }
            }></span>
            <Image src='/sun.svg' alt='밝은 버전' width={24} height={24} />
        </div>
    )
}
