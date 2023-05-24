import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import { KeyboardArrowUp, PersonOutline } from "@mui/icons-material";
import Tooltip from '@mui/material/Tooltip';

import styles from './home.module.scss'

const cx = classNames.bind(styles)

function Widget({ title, icon, percentage, numberBooking, typePer, iconClass  }) {
    const IconProps = icon || 'div';
    const tooltip = useRef();
    const [fakeCount, setFakecount] = useState();

    useEffect(() => {
        const timerId = setInterval(() => setFakecount((Math.random() * 10).toFixed(2)), 50)
        setTimeout(() => {
            clearInterval(timerId);
            setFakecount(numberBooking);
        }, 1500);
        
    }, [])


    return (<>
        <Tooltip title={<h1>{title}</h1>} arrow >
            <div className={cx("widget")}>
                <div className={cx('left')}>
                    <span className={cx('title')}>{title}</span>
                    <span className={cx('counter')}>{fakeCount}</span>
                </div>
                <div className={cx('right')}>
                    <div className={cx(['percentage', typePer])}>
                        {percentage && <KeyboardArrowUp />}
                        {percentage}
                    </div>
                    <IconProps className={cx(['icon', iconClass])} />
                </div>
            </div>
        </Tooltip>
    </>);
}

export default Widget;
