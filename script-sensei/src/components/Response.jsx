
const Response = (props) => {
  return (
    <div className="flex justify-center mt-5 ">
    <div className="text-white text-xl p-4 bg-black text-center border-2 border-blue-400 w-1/2">
        <p className="info">{props.result}</p>
    </div>
    </div>
  )
}

export default Response