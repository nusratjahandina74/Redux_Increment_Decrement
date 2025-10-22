import { useDispatch, useSelector } from "react-redux"
import { increment , decrement } from "./Slice/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(count);
  const handleIncrement = () => {
    dispatch(increment())

  }
  const handleDecrement = () => {
    dispatch(decrement())

  }
  return (
    <>
      <div className="w-1/2  flex justify-center items-center mx-auto">
        <div className="bg-black w-full h-full text-white text-center font-bold text-2xl my-[30%] py-[10%] ">
          <h1>Count : {count}</h1>
          <button className="bg-white py-[20px] px-[20px] rounded-lg text-black font-semibold text-[18px] mt-[5px]" onClick={handleIncrement}>Increment</button>
           
         <button className="bg-white py-[20px] px-[20px] rounded-lg text-black font-semibold text-[18px] mt-[5px] ml-[10px]" onClick={handleDecrement}>Decrement</button>

        </div>

      </div>
    </>
  )
}

export default App
