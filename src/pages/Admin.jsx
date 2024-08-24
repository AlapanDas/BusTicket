import React from 'react'
import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {addBus} from '../middleware/addBus'

const Content = () => {
     function handleBus() {
          const number=document.getElementById('number').value;
          const start=document.getElementById('start').value;
          const stop=document.getElementById('stop').value;
          const nodes=document.getElementById('nodes').value;
          addBus(number,start,stop,nodes);         
     }
     return (
          <>
               <div onSubmit={handleBus} 
               >
                    <form action="" className='flex flex-col gap-2'>
                         <label htmlFor="busnumber">
                              <p className='font-bold my-1'>Bus Number</p>
                              <input id='number' className='p-2 rounded-lg font-semibold' type="text" />
                         </label>
                         <label htmlFor="route">
                              <p className='font-bold my-1'>Starting Stop</p>
                              <input id='start' className='p-2 rounded-lg font-semibold' type="text" />
                              <p className='font-bold my-1'>Ending Stop</p>
                              <input id='stop' className='p-2 rounded-lg font-semibold' type="text" />
                         </label>
                         <label htmlFor="stops">
                              <p className='font-bold my-1'>Stops</p>
                              <input id='nodes' className='p-2 rounded-lg font-semibold overflow-y-scroll' type="text" />
                         </label>
                         <button
                             type='submit'
                              className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 w-fit mx-auto text-sm font-medium text-red-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                         >
                              Add Bus
                         </button>
                    </form>
               </div>

          </>
     )
}

export default function Admin() {
     let [isOpen, setIsOpen] = useState(false)

     function closeModal() {
          setIsOpen(false);
     }

     function openModal() {
          setIsOpen(true);
     }
     return (
          <>
               <Header />
               <div  className='flex m-6'>
                    <div className="block mx-auto">
                         <button
                              type="button"
                              onClick={openModal}
                              className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                         >
                              Add a Bus
                         </button>
                    </div>

                    <Transition appear show={isOpen} as={Fragment}>
                         <Dialog as="div" className="relative z-20 " onClose={closeModal}>
                              <Transition.Child
                                   as={Fragment}
                                   enter="ease-out duration-300"
                                   enterFrom="opacity-0"
                                   enterTo="opacity-100"
                                   leave="ease-in duration-200"
                                   leaveFrom="opacity-100"
                                   leaveTo="opacity-0"
                              >
                                   <div className="fixed inset-0 bg-black/25" />
                              </Transition.Child>

                              <div className="fixed inset-0 top-10 overflow-y-auto">
                                   <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                             as={Fragment}
                                             enter="ease-out duration-200"
                                             enterFrom="opacity-0 scale-95"
                                             enterTo="opacity-100 scale-100"
                                             leave="ease-in duration-200"
                                             leaveFrom="opacity-100 scale-100"
                                             leaveTo="opacity-0 scale-95"
                                        >
                                             <Dialog.Panel className="z-50 border-onsecondary border bg-secondary text-center transform overflow-hidden rounded-2xl p-6 align-middle shadow-xl transition-all">
                                                  <Dialog.Title
                                                       as="h3"
                                                       className="text-lg font-medium leading-6 text-gray-900"
                                                  >
                                                       Add a new Bus !!
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                       <p className="text-onprimary">
                                                            <Content />
                                                       </p>
                                                  </div>

                                                  <div className="mt-4">
                                                       <button
                                                            type="button"
                                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                            onClick={closeModal}
                                                       >
                                                            Close
                                                       </button>
                                                  </div>
                                             </Dialog.Panel>
                                        </Transition.Child>
                                   </div>
                              </div>
                         </Dialog>
                    </Transition>
               </div>
               <Footer />
          </>
     )
}
