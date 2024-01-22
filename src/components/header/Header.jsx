import Link from 'next/link'
import React from 'react'
import Theme from '../theme/Theme'

export default function Header() {
    return (
        <header>
            <div className="header__wrap">
                <div className="container">
                    <div className="header__left">
                        <h1 className="logo">
                            CODEWA
                        </h1>
                    </div>
                    <Theme />
                </div>
            </div>
        </header>
    )
}
