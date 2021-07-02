import React, { useState } from 'react';
import classNames from 'classnames';

export default function Card({ data, styles }) {
    const [active, setActive] = useState(false),
        onClick = () => {
            setActive(!active);
        },
        PlusSVG = () => (
            <svg
                height="60"
                viewBox="0 0 60 60"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="3">
                    <circle cx="30" cy="30" r="28.5" />
                    <path
                        d="m18.5 30.5h24m-12-12 .558 23.994"
                        strokeLinecap="square"
                    />
                </g>
            </svg>
        );

    return (
        <a
            className={classNames(styles.pillar, active && styles.active)}
            onClick={onClick}
            onKeyPress={onClick}
            role="button"
            tabIndex="0"
        >
            <div className={styles.front}>
                <h3>{data.header}</h3>
                <p>{data.text}</p>
                <PlusSVG />
            </div>
            <div className={styles.back}>
                <p>{data.back}</p>
                <svg
                    height="60"
                    viewBox="0 0 60 60"
                    width="60"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#fff"
                        strokeWidth="3"
                    >
                        <circle cx="30" cy="30" r="28.5" />
                        <path
                            d="m.5 12h24m-12-12 .558 23.994"
                            strokeLinecap="square"
                            transform="matrix(.70710678 .70710678 -.70710678 .70710678 30.144153 13.174934)"
                        />
                    </g>
                </svg>
            </div>
        </a>
    );
}
