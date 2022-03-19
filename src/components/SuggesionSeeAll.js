import React from 'react'
import ReactDOM from 'react-dom';
import { XIcon } from "@heroicons/react/outline"

const SuggesionSeeAll = ({seeAll,setSeeAll}) => {
    if(!seeAll) return null;
    return ReactDOM.createPortal(
        <>
            <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-[60] bg-black/70">
                <div className="h-[80vh] relative w-[40vw] bg-white rounded-md">
                    <div onClick={()=>{setSeeAll(!seeAll)}} className="bg-pink-300 absolute cursor-pointer right-[-10px] top-[-10px] rounded-full ">
                        <XIcon className="h-6 " />

                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default SuggesionSeeAll
