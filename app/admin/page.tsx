'use client'
import { Dialog, Transition } from '@headlessui/react';
import React, { useState, Fragment, FormEvent } from 'react'
import loader from '@/public/loader.svg'

type Props = {}
const Content = () => {
    const [busnumber, setBusnumber] = useState('');
    const [start, setStart] = useState('');
    const [stop, setStop] = useState('');
    const [nodes, setNodes] = useState<string[]>([]);


    async function handleBus(event: FormEvent<HTMLDivElement>): Promise<any> {
        event.preventDefault();

        const newBus = [{
            "bus-number": busnumber,
            "from": start,
            "to": stop,
            "stops": [nodes]
        }];
        const response = await fetch('/api/bus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBus),
        });

        const data = await response.json();
        alert(data.message)
    }

    return (
        <>

                <div onSubmit={handleBus}
                >
                    <form action="" className='flex flex-col gap-2'>
                        <label htmlFor="busnumber">
                            <p className='font-bold my-1'>Bus Number</p>
                            <input value={busnumber} onChange={(e) => setBusnumber(e.target.value)} id='number' className='p-2 rounded-lg font-semibold' type="text" />
                        </label>
                        <label htmlFor="route">
                            <p className='font-bold my-1'>Starting Stop</p>
                            <input value={start} onChange={(e) => setStart(e.target.value)} id='start' className='p-2 rounded-lg font-semibold' type="text" />
                            <p className='font-bold my-1'>Ending Stop</p>
                            <input value={stop} onChange={(e) => setStop(e.target.value)} id='stop' className='p-2 rounded-lg font-semibold' type="text" />
                        </label>
                        <label htmlFor="stops">
                            <p className='font-bold my-1'>Stops</p>
                            <input value={nodes} onChange={(e) => {
                                const arr = e.target.value.split(",")
                                setNodes(arr);
                            }} id='nodes' className='p-2 rounded-lg font-semibold overflow-y-scroll' type="text" />
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

export default function Page({ }: Props) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <div className='flex m-6'>
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
                                            <div className="text-onprimary">
                                                <Content />
                                            </div>
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
        </>
    )
}