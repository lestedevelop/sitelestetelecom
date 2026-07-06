"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {withTrackingParams} from "@/lib/trackingParams";

export default function TrackedLink({href, children, onClick, target, ...props}) {
    const [trackedHref, setTrackedHref] = useState(href);

    useEffect(() => {
        if (typeof href !== "string") {
            setTrackedHref(href);
            return;
        }

        setTrackedHref(withTrackingParams(href, window.location.search, window.location.origin));
    }, [href]);

    function handleClick(event) {
        onClick?.(event);

        if (event.defaultPrevented || typeof href !== "string") return;

        const nextHref = withTrackingParams(href, window.location.search, window.location.origin);

        if (nextHref === href) return;

        if (target && target !== "_self") {
            event.preventDefault();
            window.open(nextHref, target, "noopener,noreferrer");
        }
    }

    return (
        <Link href={trackedHref} target={target} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}
