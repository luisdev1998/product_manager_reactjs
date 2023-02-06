function Alert({alert}) {
  
  return (
    <div className={`${alert.error ? 'bg-red-600' : 'bg-green-600'} rounded text-white text-center text-sm p-2 mb-3 mt-3`}>
        {alert.msg}
    </div>
  )
}

export default Alert