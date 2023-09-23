import React from 'react';
import Image from 'next/image';
import hoodi from '@/public/images/The-North-Face-Drew-Peak-Grey_NF00AHJYLXS1_1_f55697ea-f1f0-4264-9cb3-73031ed4a0a6_460x.jpg'

const BestSelling = () => {
  return (
    <section className="section-style">
      <h3 className="text-gray-700 mb-4">Best Selling Product</h3>
      <div className="flex items-center  justify-between  border-t py-4">
        <div className="flex items-center">
          <Image width={65} height={65} src={hoodi} alt="hoodi" />
          <div className='ml-3'>
            <p className='text-sm font-medium'>North Face Drew</p>
            <span className="text-gray-500 text-xs ">
              26-08-2022
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium">Price</p>
          <span className="text-sm text-gray-500">$29.00</span>
        </div>
        <div>
          <p className="text-xs font-medium">Orders</p>
          <span className="text-sm text-gray-500">62</span>
        </div>
        <div>
          <p className="text-xs font-medium">Stock</p>
          <span className="text-sm text-gray-500">510</span>
        </div>
        <div>
          <p className="text-xs font-medium">Amount</p>
          <span className="text-sm text-gray-500">$1.798</span>
        </div>
      </div>
      <div className="flex items-center  justify-between  border-t py-6">
        <div className="flex items-center">
          <Image width={65} height={65} src={hoodi} alt="hoodi" />
          <div className='ml-3'>
            <p className='text-sm font-medium'>North Face Drew</p>
            <span className="text-gray-500 text-xs ">
              26-08-2022
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium">Price</p>
          <span className="text-sm text-gray-500">$29.00</span>
        </div>
        <div>
          <p className="text-xs font-medium">Orders</p>
          <span className="text-sm text-gray-500">62</span>
        </div>
        <div>
          <p className="text-xs font-medium">Stock</p>
          <span className="text-sm text-gray-500">510</span>
        </div>
        <div>
          <p className="text-xs font-medium">Amount</p>
          <span className="text-sm text-gray-500">$1.798</span>
        </div>
      </div>
      <div className="flex items-center  justify-between  border-t py-6">
        <div className="flex items-center">
          <Image width={65} height={65} src={hoodi} alt="hoodi" />
          <div className='ml-3'>
            <p className='text-sm font-medium'>North Face Drew</p>
            <span className="text-gray-500 text-xs ">
              26-08-2022
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium">Price</p>
          <span className="text-sm text-gray-500">$29.00</span>
        </div>
        <div>
          <p className="text-xs font-medium">Orders</p>
          <span className="text-sm text-gray-500">62</span>
        </div>
        <div>
          <p className="text-xs font-medium">Stock</p>
          <span className="text-sm text-gray-500">510</span>
        </div>
        <div>
          <p className="text-xs font-medium">Amount</p>
          <span className="text-sm text-gray-500">$1.798</span>
        </div>
      </div>
    </section>
  );
}

export default BestSelling