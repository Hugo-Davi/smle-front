const OptionIcon = () => {
    return(
        <div className="flex justify-around w-24 h-4 cursor-pointer group">
            <div className="w-1/6 rounded-full bg-slate-300 group-hover:bg-fuchsia-500">&nbsp;</div>
            <div className="w-1/6 rounded-full bg-slate-300 group-hover:bg-yellow-300">&nbsp;</div>
            <div className="w-1/6 rounded-full bg-slate-300 group-hover:bg-green-400">&nbsp;</div>
        </div>
    )
}

export default OptionIcon;