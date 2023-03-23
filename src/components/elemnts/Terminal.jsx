
export const Terminal = (props) => {
    const { p1, p2 } = props
    return (

        <div className="w-1/2 mx-auto">
            <div className="w-full group relative shadow-2xl subpixel-antialiased rounded h-64 bgsa border-black mx-auto">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                <div className="flex relative items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                    <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                    </div>
                    <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                    </div>
                    <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                    </div>
                    <div className="mx-auto pr-16" id="terminaltitle">
                        <p className="text-center text-sm">Terminal</p>
                    </div>

                </div>
                <div className="pl-1 pt-1 h-full relative bg-opacity-60  text-green-200 font-mono text-xs bg-black" id="console">
                    <p className="pb-1">{p1}</p>
                    <p className="pb-1">{p2}</p>
                </div>
            </div>
        </div>

    )
}
