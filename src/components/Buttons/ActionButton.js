'use client'

export default  function ActionButton ({children,handle,className}) {
    const handleClick = () => handle()
    return (
        <button onClick={handleClick} className={`w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition ${className}`}>
            {children}
        </button>
    )
}