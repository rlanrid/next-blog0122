'use client'

import React from 'react'
import styles from './page.module.scss'
import Menu from '@/components/menu/Menu'
import { signIn, useSession } from 'next-auth/react'

export default function page() {
    const { data, status } = useSession();

    console.log(data, status);

    return (
        <main id='main'>
            <div className={styles.login__wrap}>
                <div className={styles.login__header}>
                    <h3>login</h3>
                    <p>로그인</p>
                    <Menu />
                </div>
                <form className={styles.login__form}>
                    <fieldset>
                        <legend className="blind">로그인 영역</legend>
                        <div>
                            <label htmlFor="youEmail" className="required blind">이메일</label>
                            <input
                                type="email"
                                id="youEmail"
                                name="youEmail"
                                placeholder="이메일"
                                className="input__style"
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="youPass" className="required blind">비밀번호</label>
                            <input
                                type="password"
                                id="youPass"
                                name="youPass"
                                placeholder="비밀번호"
                                className="input__style"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div>
                        </div>
                        <button type="submit" className="btn__style2 mt30">로그인</button>
                    </fieldset>
                </form>
                <div className={styles.sns__form}>
                    <div onClick={() => { signIn("google") }}>구글</div>
                    <div>페이스북</div>
                    <div onClick={() => { signIn("github") }}>Github</div>
                </div>
            </div>
        </main>
    )
}
