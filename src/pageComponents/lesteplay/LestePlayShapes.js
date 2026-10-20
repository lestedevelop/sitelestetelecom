export default function LestePlayShapes({shapes, className}) {
  return shapes.map(({wrapper, shape}) => (
    <div key={wrapper} aria-hidden="true" className={`pointer-events-none absolute items-center justify-center ${wrapper} ${className}`}>
      <div className="flex-none -skew-x-12 scale-y-98">
        <div className={`border border-solid ${shape}`}/>
      </div>
    </div>
  ));
}
