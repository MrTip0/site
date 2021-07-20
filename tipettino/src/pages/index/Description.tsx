
export default function Description() {
    const desc1:String = "Hi, I'm an italian computer science student. I have a simple knowledge of some Programming Languages such as Javascript, Python, Swift and C#."
    const desc2:String = "I'm currently attending the fourth year of high school. The most important thing, I ❤️ Coding, but I also ❤️ my girlfriend."
    return(
        <div className="bg-primary-200 flex flex-col content-center h-auto">
            <h1 className="text-center text-4xl uppercase text-primary-500">About me</h1>
            <div className="grid grid-flow-row grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 h-auto">
                <div className="flex flex-col items-center w-full">
                    <div className="bg-secondary-100 mb-8 mt-4 rounded-xl shadow-xl w-10/12 transition-transform duration-200 transform hover:-rotate-6">
                        <p className="m-3 text-lg font-semibold break-normal sm:break-all md:break-all">
                            {desc1}
                            </p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="bg-secondary-100 mb-8 mt-4 rounded-xl shadow-xl w-10/12 transition-transform duration-200 transform hover:rotate-6">
                        <p className="m-3 text-lg font-semibold break-normal sm:break-all md:break-all">
                            {desc2}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}