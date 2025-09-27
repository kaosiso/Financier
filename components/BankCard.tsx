import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
    return (
        <div className='flex flex-col'>
            <Link href="/" className='bank-card relative overflow-hidden'>
                <div className="bank-card_content">
                    <div>
                        <h1 className='text-16 font-semibold text-white'>
                            {userName}
                        </h1>
                        <p className="font-ibm-plex-serif font-black text-white">
                            {formatAmount(account.currentBalance)}
                        </p>
                    </div>
                    <article className='flex flex-col gap-2'>
                        <div className="flex justify-between">
                            <h1 className="text-12 font-semibold text-white">
                                {userName}
                            </h1>
                            <h2 className="text-10 font-semibold text-white">
                                ⬤⬤ / ⬤⬤
                            </h2>
                        </div>
                        <p className='text-12 font-semibold tracking-[1.1px] text-white'>
                            ⬤⬤⬤⬤ ⬤⬤⬤⬤ ⬤⬤⬤⬤ <span className='text-12'>1234</span>
                        </p>
                    </article>
                </div>

                {/* Background + Icons */}
          <Image 
                src="/icons/lines.png"
                width={316}
                height={190}
                alt="lines"
                className="absolute top-0 -left-10 z-0"
                />

                <Image
                src="/icons/Paypass.svg"
                width={20}
                height={24}
                alt="pay"
                className="absolute top-4 right-4 z-10"
                />

                <Image
                src="/icons/mastercard.svg"
                width={45}
                height={32}
                alt="mastercard"
                className="absolute bottom-4 right-4 z-10"
                />

            </Link>
        </div>
    )
}

export default BankCard
