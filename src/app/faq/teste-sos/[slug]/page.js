"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import SupportFooter from "@/pageComponents/faq/SupportFooter";

export default function TesteSosSlug() {
    const [faqHtml, setFaqHtml] = useState("");
    const [faqCss, setFaqCss] = useState("");
    const iframeRef = useRef(null);
    const params = useParams();
    const rawSlug = params?.slug;
    const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug || "";
    const asIndex = Number.isInteger(Number(slug)) ? Number(slug) : null;

    useEffect(() => {
        let isActive = true;

        async function loadFaq() {
            const res = await fetch("/api/debug/core-test");
            const data = await res.json();
            const list = Array.isArray(data?.faq) ? data.faq : [];
            let selected = null;
            if (slug) {
                selected = list.find((item) => item?.slug === slug) || null;
            }
            if (!selected && asIndex !== null) {
                selected = list[asIndex] || null;
            }

            if (!isActive || !selected) return;

            setFaqHtml(selected.content_html || "");
            setFaqCss(selected.content_css || "");
        }

        loadFaq();

        return () => {
            isActive = false;
        };
    }, [slug]);

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
                iframe.style.height = `800px`;
            } catch {
                // ignore cross-origin issues
            }
        };

        const handleLoad = () => resize();
        iframe.addEventListener("load", handleLoad);
        const t = setTimeout(resize, 0);

        return () => {
            clearTimeout(t);
            iframe.removeEventListener("load", handleLoad);
        };
    }, [iframeSrcDoc]);

    return (
        <main className="bg-light">
          <div className={"container"}>
              {iframeSrcDoc ? (
                  <iframe
                      ref={iframeRef}
                      srcDoc={iframeSrcDoc}
                      title="FAQ"
                      style={{ width: "100%", border: "0", display: "block", height: 800 }}
                      sandbox="allow-popups allow-popups-to-escape-sandbox"
                  />
              ) : null}
          </div>
            <SupportFooter />
        </main>
    );
}
