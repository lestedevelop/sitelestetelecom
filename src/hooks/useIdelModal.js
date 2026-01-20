"use client";

import { useEffect, useRef, useState } from "react";

export function useIdleModal({idleMs = 60000, enabled = true, once = true,
                             } = {}) {
    const [isOpen, setIsOpen] = useState(false);
    const timerRef = useRef(null);
    const openedOnceRef = useRef(false);

    function clearTimer() {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = null;
    }

    function startTimer() {
        clearTimer();

        if (!enabled) return;
        if (once && openedOnceRef.current) return;

        timerRef.current = window.setTimeout(() => {
            openedOnceRef.current = true;
            setIsOpen(true);
        }, idleMs);
    }

    useEffect(() => {
        if (!enabled) return;

        const events = [
            "mousemove",
            "mousedown",
            "keydown",
            "scroll",
            "touchstart",
            "pointerdown",
            "visibilitychange",
        ];

        const onActivity = () => {
            if (document.visibilityState === "hidden") return;
            startTimer();
        };

        events.forEach((ev) => window.addEventListener(ev, onActivity, { passive: true }));
        startTimer();

        return () => {
            clearTimer();
            events.forEach((ev) => window.removeEventListener(ev, onActivity));
        };
    }, [enabled, idleMs]);

    function close() {
        setIsOpen(false);
        startTimer();
    }

    function open() {
        setIsOpen(true);
    }

    return { isOpen, open, close, setIsOpen };
}
