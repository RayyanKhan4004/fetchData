import React from 'react'
import Navbar from '../Components/Navbar'

function Services() {
  return (
    <div><Navbar/>
    <section className="feature__section bg-[#F4F4F7]">
  <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
    <div className="flex flex-col gap-y-3">
      <p className="text-sm text-[#1EBFC1]">FITNESS CLASSES</p>
      <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-zinc-800">Join Our Fitness Classes</h2>
      <p className="md:max-w-lg">Explore our range of fitness classes tailored to your needs, designed to help you achieve
        your fitness goals.</p>
    </div>
    <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
        <div className="flex flex-col gap-y-2.5">
          <h3 className="text-lg font-semibold">Yoga</h3>
          <p className="text-xl font-semibold">$150</p>
        </div>
        <p className="text-slate-700/70 text-base">Find balance and inner peace with our yoga classes led by experienced
          instructors.</p>
        <div className="flex items-center justify-between pt-5 w-full">
          <p className="bg-[#E0F7F6] px-2 py-0.5 text-sm rounded border border-cyan-500">30 classes</p>
          <p className="bg-gray-200 px-2 py-0.5 text-sm rounded border border-gray-300">2 months</p>
        </div>
      </div>
      <div
        className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
        <div className="flex flex-col gap-y-2.5">
          <h3 className="text-lg font-semibold">HIIT</h3>
          <p className="text-xl font-semibold">$200</p>
        </div>
        <p className="text-slate-700/70 text-base">Burn calories and boost your metabolism with high-intensity interval
          training sessions.</p>
        <div className="flex items-center justify-between pt-5 w-full">
          <p className="bg-[#E0F7F6] px-2 py-0.5 text-sm rounded border border-cyan-500">20 classes</p>
          <p className="bg-gray-200 px-2 py-0.5 text-sm rounded border border-gray-300">1.5 months</p>
        </div>
      </div>
      <div
        className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
        <div className="flex flex-col gap-y-2.5">
          <h3 className="text-lg font-semibold">Pilates</h3>
          <p className="text-xl font-semibold">$180</p>
        </div>
        <p className="text-slate-700/70 text-base">Strengthen and tone your muscles while improving flexibility and posture
          with Pilates.</p>
        <div className="flex items-center justify-between pt-5 w-full">
          <p className="bg-[#E0F7F6] px-2 py-0.5 text-sm rounded border border-cyan-500">25 classes</p>
          <p className="bg-gray-200 px-2 py-0.5 text-sm rounded border border-gray-300">2 months</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Services