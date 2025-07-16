export const Heading = ({ children, type = "h1", color = "" }) => {
    const customizedColor = color === 'white' ? 'text-white' : 'text-text'
    if(type === 'h1'){
        return <h1 className={`text-[4.625rem] leading-[5.25rem] font-custom-graphik font-bold ${customizedColor}`}>{children}</h1>
    }
    return <h2 className={`text-5xl leading-[3.4375rem] font-custom-graphik ${customizedColor}`}>{children}</h2>
}