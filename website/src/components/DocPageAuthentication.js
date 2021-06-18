import React from "react";
import { GithubLoginButton } from 'react-social-login-buttons';
import style from './DocPageAuthentication.module.css'

export default function DocAuthentication() {
    return (
        <div className={style.container}>
            <h1 className={style.h1}>Welcome on Dagger documentation</h1>
            <p>Please Sign In to Github to get access to the doc</p>
            <GithubLoginButton className={style.btn__github} onClick={() => window.location.href = process.env.REACT_APP_GITHUB_AUTHORIZE_URI} />
        </div>
    )
}