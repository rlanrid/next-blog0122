"use client"

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

export default function Menu() {
    // const status = "unauthenticated";
    // const name = "webs"

    const { data: session, status } = useSession();

    return (
        <ul>
            {status === "authenticated" ? (
                <>
                    <li><span>{session.user.name}님 반갑습니다.</span></li>
                    <li onClick={signOut}>로그아웃</li>
                </>
            ) : (
                <>
                    <li><Link href="/login">로그인</Link></li>
                    <li><Link href="/join">회원가입</Link></li>
                </>
            )}
        </ul>
    )
}
