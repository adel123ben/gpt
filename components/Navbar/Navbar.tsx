"use client";

import { Button } from "@/components/ui/button"
import {GoArrowRight} from "react-icons/go"
import toast,{Toaster} from "react-hot-toast";
import Link from "next/link";


const Navbar = () => {
    const handelToast = () => {
        toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://static.vecteezy.com/ti/vecteur-libre/p3/10967316-avatar-homme-barbu-gratuit-vectoriel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Adel Benmouhoub
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      For now the app is ended
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
    }
    return(
        <div className="fixed top-0 left-0 w-full bg-white z-10">
            <div className="flex flex-row p-2 justify-evenly items-center text-sm border-b-2 border-gray-200/60">
            <div className="flex flex-row items-center">
                <Link href="/">
                <h1 className=" font-medium">gpt.</h1>
                </Link>
                
            </div>

            <div className="flex items-center flex-row gap-4 space-x-4 ml-20">
                <Link href="/pricing">
                <h1 className="cursor-pointer">Pricing</h1>
                </Link>
                <h1 className="cursor-pointer">Sign in</h1>
                
                <Button onClick={handelToast}>Get started <GoArrowRight className="ml-2" size={20} /></Button>
                <Toaster />




                
            </div>
        </div>
        </div>
        
    )
}

export default Navbar;