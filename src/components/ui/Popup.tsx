
const Popup = ({message, success}: {message: string, success: boolean}) => {
  return (
    <div 
    className="
        min-w-[100px] 
        absolute top-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2
        text-center text-white
        p-2 rounded-md
        shadow

    "
    style={{
        backgroundColor: success ? 'green': 'red'
        }}
    >
        {message}
    </div>
  )
}

export default Popup