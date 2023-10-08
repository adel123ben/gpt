import Link from "next/link";
import { Button } from "../ui/button";
import {GoArrowRight} from "react-icons/go"

const Feed = () => {
    return(
        <div className="flex flex-col items-center justify-center mt-44">
            <h1 className="text-5xl  text-neutral-900 font-semibold">Chat withe your</h1>
            <div>
                <h1 className="text-5xl  text-neutral-900 font-semibold"><span className="text-sky-700">friends</span>  in seconds.</h1>
            </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500/70 mt-5 w-[700px] text-sm">L'intelligence artificielle est une technologie qui permet aux machines d'apprendre et de prendre des</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500/70 mt-1  w-[700px] text-sm flex flex-col items-center justify-center">décisions de manière autonome en simulant la pensée humaine.</p>
        </div>


        <div className="flex flex-row items-center justify-center mt-11">
            <Link href="/pricing">
            <Button>Get started <GoArrowRight className="ml-2" size={20} /></Button>
            </Link>
        
        </div>

        <div className="flex flex-row items-center justify-center">
            <img className=" mb-6 shadow-2xl mt-16 rounded-md " src="https://media.licdn.com/dms/image/D4D22AQEhyXFxPm6wxg/feedshare-shrink_800/0/1694948316677?e=1698883200&v=beta&t=MhN7MEe5bbZcSVJ_epeXRIqhPzfLJbbMT--eqX7ViEo" alt="" />
        </div>

<div className="flex flex-row items-center justify-center mt-20">
    <h1 className="text-3xl text-neutral-900 font-bold">Start chatting in minuttes</h1>
</div>
<div>
    <p className="text-sm text-gray-600 mt-2">Adding friends and chatt with hem</p>
</div>
        </div>
    )
}

export default Feed;