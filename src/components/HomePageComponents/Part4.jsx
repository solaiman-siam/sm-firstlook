import React from 'react'
import Container from '../Container'
import { ArrowUpRight } from 'lucide-react'

function Part4() {
  return (
    <div className='border-t border-dashed border-white/13 '>
    <Container>
      <div className="text-white  p-10 py-20 border-r border-l border-dashed border-white/13">
        <div className="flex items-center justify-between ">
            <h3 className="text-text01 font-semibold">Bookmarks</h3>
            <h3 className="text-text01 font-semibold flex items-center hover:text-white transition-all duration-300 cursor-pointer gap-2 group">View all <ArrowUpRight strokeWidth={1.2} className="group-hover:rotate-45 transition-all duration-200 " /></h3>
        </div>
        <div className='grid grid-cols-2 gap-4 pt-10'>
            <div className='flex hover:ring-3 ring-white/10 gap-4 items-start border transition-all duration-300 border-white/10 p-4  bg-[#1A1A1A] hover:bg-[#232323] rounded-lg '>
                <img className='size-8 mt-1 rounded-md' src="https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?scale-down-to=512" alt="" />
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-[15px] text-white/90'>Native or Web-Based? Selecting the Right Approach for Your Mobile App</h3>
                    <p className='text-text01 font-semibold text-sm'>Product Design</p>
                </div>
            </div>
            <div className='flex hover:ring-3 ring-white/10 gap-4 items-start border transition-all duration-300 border-white/10 p-4  bg-[#1A1A1A] hover:bg-[#232323] rounded-lg '>
                <img className='size-8 mt-1 rounded-md' src="https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?scale-down-to=512" alt="" />
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-[15px] text-white/90'>What Is Holistic Design? The Future of UX or a Buzzword?</h3>
                    <p className='text-text01 font-semibold text-sm'>Product Design</p>
                </div>
            </div>
            <div className='flex hover:ring-3 ring-white/10 gap-4 items-start border transition-all duration-300 border-white/10 p-4  bg-[#1A1A1A] hover:bg-[#232323] rounded-lg '>
                <img className='size-8 mt-1 rounded-md' src="https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?scale-down-to=512" alt="" />
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-[15px] text-white/90'>
                    Navigating the Gen AI Era: A Strategic Guide for Business Leaders</h3>
                    <p className='text-text01 font-semibold text-sm'>Artificial Inteligence</p>
                </div>
            </div>
            <div className='flex hover:ring-3 ring-white/10 gap-4 items-start border transition-all duration-300 border-white/10 p-4  bg-[#1A1A1A] hover:bg-[#232323] rounded-lg '>
                <img className='size-8 mt-1 rounded-md' src="https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?scale-down-to=512" alt="" />
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-[15px] text-white/90'>The UX of Notifications | How to Master the Art of Interrupting</h3>
                    <p className='text-text01 font-semibold text-sm'>Product Design</p>
                </div>
            </div>

        </div>
      </div>
    </Container>
  </div>
  )
}

export default Part4