'use client'

export default function ActionButton({children, handle, className, link}) {
    const handleClick = () => handle()
    return (
   <>
       {!link &&
           <button onClick={handleClick} className={`w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition ${className}`}>
               {children}
           </button>
       }
       {link &&
           <a href={link} className={`w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition ${className}`}>
               {children}
           </a>
       }
   </>
)
}