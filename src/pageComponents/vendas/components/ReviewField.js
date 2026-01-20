export default function ReviewField({ label, value }) {
    return (
        <div>
            <div className="font-bold text-dark">{label}</div>
            <div className="text-graylight break-words">{value || "-"}</div>
        </div>
    );
}