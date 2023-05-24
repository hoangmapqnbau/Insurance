import React, { useState } from "react";
import classNames from "classnames/bind";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import SavingsIcon from '@mui/icons-material/Savings';

import styles from './home.module.scss'
import Widget from "./Widget";

const cx = classNames.bind(styles);

const Home = () => {
    const dataWidget = [
        {
            title: "Total booking",
            numberBooking: 32,
            percentage: "20 %",
            icon: CalendarMonthIcon,
            iconClass: "blue-color",
            typePer: 'negative',
        },
        {
            title: "Booking Success",
            numberBooking: 20,
            percentage: "20 %",
            icon: EventAvailableIcon,
            iconClass: "orange-color",
            typePer: 'positive',
        },
        {
            title: "Booking Cancel",
            numberBooking: 12,
            percentage: "20 %",
            icon: EventBusyIcon,
            iconClass: "ligter-green-color",
            typePer: 'negative',
        },
        {
            title: "Paid Amount",
            numberBooking: "$ 500",
            // percentage: "$50",
            icon: SavingsIcon,
            iconClass: "green-color",
            typePer: 'positive',
        },
    ]
    
    return (
        <div className={cx('home-container')}>
            <div className={cx('board-booking')}>
                <div className={cx('board-booking-wrapper')}>
                    <h1 className={cx('content')}>Need to find a doctor ?</h1>
                    <h1 className={cx('content')}>Go online with us!</h1>
                    <p className={cx('content')}>Get your first medical service at your home.</p>
                    <button className={cx('button-booking')}>Book Apointment</button>
                </div>
            </div>  
            <div className={cx('widgets-wrapper')}>
                {dataWidget.map((item, idx) => {
                    return (
                        <Widget 
                        key={idx} 
                        icon={item.icon} 
                        title={item.title} 
                        percentage={item.percentage}
                        numberBooking={item.numberBooking}
                        typePer={item.typePer}
                        iconClass={item.iconClass}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
