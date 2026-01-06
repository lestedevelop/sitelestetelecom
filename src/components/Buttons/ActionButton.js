'use client'

import Link from "next/link";

export default function ActionButton({children, handle, className, link,router}) {
    const handleClick = () => handle()
    return (
   <>
       {handle &&
           <button onClick={handleClick} className={`w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition ${className}`}>
               {children}
           </button>
       }
       {link &&
           <a href={link} className={`w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition ${className}`}>
               {children}
           </a>
       }
       {router &&
           <Link href={router} className={`w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition ${className}`}>
               {children}
           </Link>
       }
   </>
)
}