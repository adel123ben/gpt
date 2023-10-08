const Steps = () => {
    return(
        <div className="flex flex-col items-center justify-center space-x-14 shadow-2xl">
            <div className="flex flex-row space-x-14">
            <div className="flex flex-col border-t-2 border-gray-300">
                <h1 className="text-sky-500">step 1</h1>
              <div>
                <h1 className="flex font-medium text-neutral-900">Sign in and start a new accounte</h1>
              </div>
              <div>
                <p className="flex text-gray-500 text-sm">Starting a new plan or chose the <span className="underline text-sky-500 ml-1">Pro paln</span></p>
              </div>
            </div>
            <div className="flex flex-col border-t-2 border-gray-300">
                <h1 className="text-sky-500">step 2</h1>
              <div>
                <h1 className="flex font-medium text-neutral-900">Sign in and start a new accounte</h1>
              </div>
              <div>
                <p className="flex text-gray-500 text-sm">Starting a new plan or chose the <span className="underline text-sky-500 ml-1">Pro paln</span></p>
              </div>
            </div>

            <div className="flex flex-col border-t-2 border-gray-300">
                <h1 className="text-sky-500">step 3</h1>
              <div>
                <h1 className="flex font-medium text-neutral-900">Sign in and start a new accounte</h1>
              </div>
              <div>
                <p className="flex text-gray-500 text-sm">Starting a new plan or chose the <span className="underline text-sky-500 ml-1">Pro paln</span></p>
              </div>
            </div>
            </div>
            



            <img className="flex mb-6 shadow-2xl mt-16 rounded-md h-96   " src="/img.jpeg" alt="" />


            <div className="flex flex-row items-center justify-center bg-white mt-28 mb-10">
            <h1 className="flex flex-row text-gray-500 text-sm">2023 Pawword by Adel Benmouhoub</h1>
        </div>
        </div>
    )
}

export default Steps;