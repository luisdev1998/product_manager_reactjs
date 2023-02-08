// function Alert({alert}) {
//   return (
//     <div className={`${alert.error ? 'bg-red-600' : 'bg-green-600'} rounded text-white text-center text-sm p-2 mb-3 mt-3`}>
//         {alert.msg}
//     </div>
//   )
// }

// export default Alert
import { useState,useEffect } from 'react';
function Alert({errorObj}) {
  const [showError, setShowError] = useState();
  const [showType, setShowType] = useState();
  const [showMessage, setShowMessage] = useState();

  useEffect(() => {
    if(errorObj.msg){
      setShowType(errorObj.error);
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 3000);
      
      setShowMessage(errorObj.msg);
    }
  }, [errorObj]);

  return (
    <div className={`fixed top-0 -right-64 w-64 transition duration-500 ease-in-out transform ${
      !showError ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className={` ${showType ? 'bg-red-600' : 'bg-green-600'} m-4 p-4 text-white rounded-lg`}>
          {showMessage}
        </div>
    </div>
  );
}

export default Alert