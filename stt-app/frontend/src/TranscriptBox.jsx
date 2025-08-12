
export const TranscriptBox = (props) => {
    return (
        <>
            <div className="flex justify-center m-auto bg-white/30 w-[50vh] max-w-2xl h-[40vh] shadow p-5 rounded-2xl">
                <div className='scrollbar-thin scrollbar-webkit overflow-y-auto' style={{ whiteSpace: "pre-wrap" }}>
                    {props.transcript}
                </div>
            </div>
        </>
    )
}
