export default function Button({name, func}: {name: string, func: () => void}){  
    return(
        <button className="bg-blue-500 text-white px-3" onClick={func}>
            {name}
        </button>
    )
}