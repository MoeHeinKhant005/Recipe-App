const Button = ({ children, onClick }) => {
    return (
        <button className="w-auto h-12 bg-primary text-white border-2 border-primary font-dm-sans text-sm outline-none px-4 flex flex-none flex-row justify-center items-center gap-x-2 transition-all hover:bg-white hover:text-primary" onClick={onClick}>{ children }</button>
    )
}

export default Button;