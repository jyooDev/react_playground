export const EmojiBox = (props) => {
    return (
        <div className="relative flex m-auto bg-white/30 md:w-[50vh] w-full md:max-w-2xl h-[10vh] shadow p-5 rounded-2xl">
            {props.loading ? (
                <span className="relative flex justify-center items-center animate-pulse text-4xl text-[var(--color-sunset-pink)] font-bold w-full h-full">CREATING EMOJIS...</span>
            ) : ('')}
            { props.emojis ? (
                <div className="flex relative justify-center items-center w-full text-xl scrollbar-thin scrollbar-webkit overflow-y-auto">
                    {props.emojis}
                </div>
            ) : ('')}
        </div>
    )
}
