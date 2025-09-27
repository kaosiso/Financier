import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className='right-sidebar'>
            <section className='flex flex-col pb-8' >
                <div className='profile-banner' >
                </div>
                <div className="profile">
                    <div className="profile-img">
                        <span className='text-5xl font-bold text-blue-500' >
                            {user.name[0]}
                        </span>
                    </div>
                    <div className="profile-details">
                        <h1 className='profile-name' >
                            {user.name}
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className='profile-email' >
                            {user.email}
                        </p>
                    </div>
                </div>


            </section>
            <section className="banks">
                <div className="flex w-full justify-between">
                    <h2 className='header-2' >
                        My banks
                    </h2>
                    <Link href="/" className='flex gap-2'>
                        <Image
                            src="/icons/plus.svg"
                            width={20}
                            height={20}
                            alt='plus'
                        />
                        <h2 className='text-14 font-semibold text-gray-600 ' >
                            add Bank

                        </h2>
                    </Link>
                </div>
                {banks?.length > 0 && (
                    <div className="relative flex flex-col gap-4 mt-4">
                        {/* BankCard 1 (bottom layer) */}
                        <div className="w-full p-4 bg-white rounded-lg text-center relative z-0">
                            <BankCard
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={`${user.name}`}
                                showBalance={false}
                            />
                        </div>

                        {/* BankCard 2 (top layer) */}
                        {banks[1] && (
                            <div className="absolute right-0 -top-6 w-[90%] z-10">
                                <BankCard
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    userName={`${user.name}`}
                                    showBalance={false}
                                />
                            </div>
                        )}
                    </div>
                )}


            </section>
        </aside>
    )
}

export default RightSidebar
