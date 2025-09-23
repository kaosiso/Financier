'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Financier Logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Financier</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'sidebar-link items-center ',
                isActive
                  ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <div className='relative size-6' >
                <Image src={item.imgURL} alt={item.label} fill 
                className={cn({
                  'brightness-[3] invert-0': isActive
                })} />

              </div>
              <p className={cn('sidebar-label',{
                '!text-white' : isActive
              })} >
                {item.label}
              </p>
            </Link>
          )
        })}
        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar
