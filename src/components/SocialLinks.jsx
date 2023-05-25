import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

const PopoverDemo = () => (
    <Popover.Root>
        <Popover.Trigger asChild>
            <button
                className='bg-pink-400 px-4 py-3 rounded-2xl transition active:scale-95 hover:scale-105'
                aria-label="Update dimensions"
            >
                <h1 className='text-xl'>Social Handles</h1>
            </button>
        </Popover.Trigger>
        <Popover.Portal>
            <Popover.Content
                className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                sideOffset={5}
            >
                <div className="font-bold text-zinc-700 flex flex-col gap-2.5">
                    <fieldset
                        className="flex gap-5 items-center hover:scale-110 hover:text-red-500 active:scale-95 left-0 cursor-pointer origin-top-left"
                        onClick={() => {
                            window.open('https://www.instagram.com/rohitmondallll', '_blank')
                        }}
                    >
                        Instagram
                    </fieldset>
                    <fieldset
                        className="flex gap-5 items-center hover:scale-110 hover:text-red-500 active:scale-95 left-0 cursor-pointer origin-top-left"
                        onClick={() => {
                            window.open('https://twitter.com/RohitMo62534745', '_blank')
                        }}
                    >
                        Twitter
                    </fieldset>
                    <fieldset
                        className="flex gap-5 items-center hover:scale-110 hover:text-red-500 active:scale-95 left-0 cursor-pointer origin-top-left"
                        onClick={() => {
                            window.open('https://www.linkedin.com/in/rohit-mondal-61662a16b/', '_blank')
                        }}
                    >
                        LinkedIn
                    </fieldset>
                    <fieldset
                        className="flex gap-5 items-center hover:scale-110 hover:text-red-500 active:scale-95 left-0 cursor-pointer origin-top-left"
                        onClick={() => {
                            window.open('https://9qr.de/vFkccd', '_blank')
                        }}
                    >
                        Github
                    </fieldset>
                </div>
                <Popover.Close
                    className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
                    aria-label="Close"
                >
                    <Cross2Icon />
                </Popover.Close>
                <Popover.Arrow className="fill-white" />
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export default PopoverDemo;