"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SupportFooter from "@/pageComponents/faq/SupportFooter";

export default function TesteSos() {
    const [faqHtml, setFaqHtml] = useState("");
    const [faqCss, setFaqCss] = useState("");
    const iframeRef = useRef(null);

    useEffect(() => {
        let isActive = true;

        async function loadFaq() {
            const res = await fetch("/api/debug/core-test");
            const data = await res.json();
            const first = data?.faq?.[1];

            if (!isActive || !first) return;

            setFaqHtml(first.content_html || "");
            setFaqCss(first.content_css || "");
        }

        loadFaq();

        return () => {
            isActive = false;
        };
    }, []);

    const iframeSrcDoc = useMemo(() => {
        if (!faqHtml && !faqCss) return "";
        return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>${faqCss || ""}</style>
  </head>
  <body>
    ${faqHtml || ""}
  </body>
</html>`;
    }, [faqHtml, faqCss]);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const resize = () => {
            try {
                const doc = iframe.contentDocument;
                if (!doc) return;
                const height = doc.documentElement.scrollHeight || doc.body.scrollHeight;
                iframe.style.height = `${height}px`;
            } catch {
                // ignore cross-origin isqysues
            }
        };

        const handleLoad = () => resize();
        iframe.addEventListener("load", handleLoad);

        // Resize after content changes
        const t = setTimeout(resize, 0);

        return () => {
            clearTimeout(t);
            iframe.removeEventListener("load", handleLoad);
        };
    }, [iframeSrcDoc]);

    return (
        <main className="bg-light h-full">
           <div className={"container"}>
               {iframeSrcDoc ? (
                   <iframe
                       ref={iframeRef}
                       srcDoc={iframeSrcDoc}
                       title="FAQ"
                       style={{ width: "100%", border: "0", display: "block", minHeight: "1000px" }}
                       sandbox="allow-popups allow-popups-to-escape-sandbox"
                   />
               ) : null}
           </div>
            <SupportFooter />
            
        </main>
    );
}
