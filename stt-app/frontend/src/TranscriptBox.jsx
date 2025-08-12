
export const TranscriptBox = (props) => {
    return (
        <div className="relative flex m-auto bg-white/30 w-[50vh] max-w-2xl h-[35vh] shadow p-5 rounded-2xl">
            {props.loading ? (
                <span className="relative flex justify-center items-center animate-pulse text-4xl text-[var(--color-sunset-pink)] font-bold w-full h-full">CREATING TRANSCRIPT...</span>
            ) : ('')}
            <div className="scrollbar-thin scrollbar-webkit overflow-y-auto">
                <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{props.transcript ?? ""}</pre>
            </div>
        </div>
    )
}
