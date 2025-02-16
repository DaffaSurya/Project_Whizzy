import React from 'react'
import DefaultLayout from '../../Layout/DefautLayout'
import { Link } from '@inertiajs/react'

const Index = () => {
  return (
    <DefaultLayout>

      {/* header */}
      <header className="sticky top-0 backdrop-blur-md bg-black/70 border-b border-gray-800 hover:text-yellow-400">
        {/* Tabs */}
        <div className="flex">
          <Link href="/komunitas/all" className="flex-1 px-4 py-3 text-center text-gray-500 hover:text-yellow-400">
            <span className="font-bold text-gray-500">Komunitas</span>
          </Link>
          <Link href="/Komunitas/forum" className="flex-1 px-4 py-3 text-center border-b-2 border-yellow-400">
            <span className='font-bold text-yellow-400'>Forum</span>
          </Link>
        </div>
      </header>

    <p className='text-center py-5'>Forum masih dalam tahap pengembangan , nantikan yaa...</p>


    </DefaultLayout>
  )
}

export default Index