/**
 * @typedef {{ id: string, type: "heading", level: 2 | 3 | 4, text: string }} HeadingBlock
 * @typedef {{ text: string, href: string }} ParagraphLinkSegment
 * @typedef {{ id: string, type: "paragraph", text?: string, segments?: Array<string | ParagraphLinkSegment> }} ParagraphBlock
 * @typedef {{ id: string, type: "list", style: "ordered" | "unordered", items: string[] }} ListBlock
 * @typedef {{ id: string, type: "link", text: string, href: string }} LinkBlock
 * @typedef {{ id: string, type: "image", src: string, alt: string }} ImageBlock
 * @typedef {{ id: string, type: "video", src: string }} VideoBlock
 * @typedef {{ id: string, type: "divider" }} DividerBlock
 * @typedef {{ id: string, type: "note", title: string, blocks: Array<HeadingBlock | ParagraphBlock | ListBlock | LinkBlock | ImageBlock | VideoBlock | DividerBlock> }} NoteBlock
 * @typedef {HeadingBlock | ParagraphBlock | ListBlock | NoteBlock | LinkBlock | ImageBlock | VideoBlock | DividerBlock} FaqBlock
 */

export {};
