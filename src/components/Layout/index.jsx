import React from 'react';
import classNames from "classnames/bind";
import Provider from './store/Provider';

import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from './layout.module.scss'

const cx = classNames.bind(styles)

function Layout({ children, defaultExpanded }) {

    return (
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
    );
}

export default Layout;