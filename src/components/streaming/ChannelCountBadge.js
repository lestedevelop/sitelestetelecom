"use client";

import {useId} from "react";

export default function ChannelCountBadge({count, isSales = false, className = ""}) {
    const id = useId().replaceAll(":", "");
    const textColor = isSales ? "#005044" : "#28FFDF";
    const labelColor = isSales ? "#005044" : "#FFFFFF";

    return (
        <svg
            viewBox="0 0 59 48"
            fill="none"
            aria-hidden="true"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M39.709 0.306c4.368 0 7.675-.001 10.229.342 2.561.345 4.411 1.04 5.836 2.466 1.426 1.426 2.123 3.276 2.467 5.838.344 2.553.343 5.86.343 10.229v8.942c0 4.368.001 7.675-.343 10.228-.344 2.563-1.041 4.412-2.467 5.837-1.425 1.426-3.274 2.123-5.836 2.467-2.554.343-5.861.343-10.229.343H19.181c-4.369 0-7.675 0-10.229-.343-2.562-.344-4.412-1.041-5.838-2.467C1.689 42.763.993 40.913.648 38.351.305 35.798.306 32.491.306 28.123v-8.942c0-4.369-.001-7.676.342-10.229.345-2.562 1.04-4.412 2.466-5.838C4.54 1.688 6.39.993 8.952.648 11.506.305 14.812.306 19.181.306h20.528Z"
                fill={isSales ? "#E4F7F3" : "#00684F"}
            />
            <path
                d="M39.709 0.306c4.368 0 7.675-.001 10.229.342 2.561.345 4.411 1.04 5.836 2.466 1.426 1.426 2.123 3.276 2.467 5.838.344 2.553.343 5.86.343 10.229v8.942c0 4.368.001 7.675-.343 10.228-.344 2.563-1.041 4.412-2.467 5.837-1.425 1.426-3.274 2.123-5.836 2.467-2.554.343-5.861.343-10.229.343H19.181c-4.369 0-7.675 0-10.229-.343-2.562-.344-4.412-1.041-5.838-2.467C1.689 42.763.993 40.913.648 38.351.305 35.798.306 32.491.306 28.123v-8.942c0-4.369-.001-7.676.342-10.229.345-2.562 1.04-4.412 2.466-5.838C4.54 1.688 6.39.993 8.952.648 11.506.305 14.812.306 19.181.306h20.528Z"
                fill={`url(#${id}-outer-fill)`}
                fillOpacity=".2"
                stroke={`url(#${id}-outer-stroke)`}
                strokeWidth=".611"
            />
            <path
                d="M39.913 3.098c3.616 0 6.36 0 8.479.284 2.128.287 3.672.866 4.865 2.058 1.192 1.193 1.772 2.737 2.058 4.865.285 2.12.284 4.863.284 8.48v9.725c0 3.617.001 6.36-.284 8.479-.286 2.128-.866 3.673-2.058 4.865-1.193 1.192-2.737 1.772-4.865 2.058-2.119.285-4.863.284-8.479.284H18.752c-3.617 0-6.36.001-8.48-.284-2.128-.286-3.673-.866-4.865-2.058-1.192-1.192-1.772-2.737-2.058-4.865-.285-2.119-.284-4.862-.284-8.479v-9.725c0-3.617-.001-6.36.284-8.48.286-2.128.866-3.672 2.058-4.865 1.192-1.192 2.737-1.771 4.865-2.058 2.12-.284 4.863-.284 8.48-.284h21.161Z"
                fill={`url(#${id}-inner-fill)`}
                fillOpacity=".2"
                stroke={`url(#${id}-inner-stroke)`}
                strokeWidth=".611"
            />
            <text
                x="29.5"
                y="25"
                textAnchor="middle"
                fill={textColor}
                fontFamily="var(--font-ibm-plex-sans), 'IBM Plex Sans', sans-serif"
                fontSize="22"
                fontWeight="700"
                letterSpacing="-1"
            >
                + {count}
            </text>
            <text
                x="29.5"
                y="36.2"
                textAnchor="middle"
                fill={labelColor}
                fontFamily="var(--font-ibm-plex-sans), 'IBM Plex Sans', sans-serif"
                fontSize="9.2"
                fontWeight="600"
            >
                canais
            </text>
            <defs>
                <linearGradient id={`${id}-outer-fill`} x1="14.053" y1="6.091" x2="66.408" y2="28.605" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#01FFA7"/>
                    <stop offset="1" stopColor="#04AC84" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id={`${id}-outer-stroke`} x1="12.188" y1="10.735" x2="49.389" y2="55.009" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#03FFA9"/>
                    <stop offset="1" stopColor="#189986" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id={`${id}-inner-fill`} x1="15.473" y1="8.219" x2="63.927" y2="29.547" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#01FFA7"/>
                    <stop offset="1" stopColor="#04AC84" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id={`${id}-inner-stroke`} x1="13.795" y1="12.299" x2="46.561" y2="52.311" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#03FFA9"/>
                    <stop offset="1" stopColor="#189986" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    );
}
