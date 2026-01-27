"use client";

import { JsonView, darkStyles } from "react-json-view-lite";
import { Jsonic } from "jsonic";
import "react-json-view-lite/dist/index.css";

function normalizeValue(value) {
    if (typeof value !== "string") return value;

    const trimmed = value.trim();
    if (!trimmed) return value;

    try {
        return JSON.parse(trimmed);
    } catch {}

    try {
        return Jsonic(trimmed);
    } catch {}

    const match = trimmed.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
    if (match) {
        try {
            return JSON.parse(match[0]);
        } catch {}
        try {
            return Jsonic(match[0]);
        } catch {}
    }

    return value;
}

function truncateStrings(value, maxLen, seen = new WeakSet()) {
    if (maxLen <= 0) return value;
    if (typeof value === "string") {
        return value.length > maxLen ? `${value.slice(0, maxLen)}…` : value;
    }
    if (value && typeof value === "object") {
        if (seen.has(value)) return value;
        seen.add(value);
        if (Array.isArray(value)) {
            return value.map((item) => truncateStrings(item, maxLen, seen));
        }
        const out = {};
        for (const [key, val] of Object.entries(value)) {
            out[key] = truncateStrings(val, maxLen, seen);
        }
        return out;
    }
    return value;
}

export function JsonDraculaViewer({
    value,
    title,
    defaultExpanded = true,
    maxPreviewChars = 200,
    height = 420,
}) {
    const normalized = truncateStrings(normalizeValue(value), maxPreviewChars);
    const expanded = defaultExpanded ? Infinity : 1;

    return (
        <div
            style={{
                background: "#282a36",
                color: "#f8f8f2",
                border: "1px solid #6272a4",
                borderRadius: 14,
                overflow: "hidden",
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            {title ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 12px",
                        borderBottom: "1px solid #6272a4",
                        fontSize: 12,
                        color: "#bd93f9",
                        fontWeight: 700,
                    }}
                >
                    {title}
                </div>
            ) : null}
            <div
                style={{
                    padding: 12,
                    maxHeight: height === "auto" ? "70vh" : height,
                    overflow: "auto",
                }}
            >
                <JsonView
                    data={normalized}
                    shouldExpandNode={(_keyName, valueToExpand, level) =>
                        level < expanded &&
                        (Array.isArray(valueToExpand) ||
                            (valueToExpand && typeof valueToExpand === "object"))
                    }
                    style={darkStyles}
                />
            </div>
        </div>
    );
}
