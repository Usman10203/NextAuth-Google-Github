// import { doLogout } from "@/app/actions"

// const Logout = () => {
//   return (
//     <form action={doLogout}>
//         <button className="bg-blue-400 my-2 text-white p-1 rounded" type="submit">Logout</button>
//     </form>
//   )
// }

// export default Logout
'use client'
import { useState } from 'react';
import { doLogout } from '@/app/actions';

const Logout = () => {
  // State to track if the logout process is in progress
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle logout
  const handleLogout = async (event) => {
    event.preventDefault(); // Prevent form submission reload
    setIsLoading(true); // Set loading to true when logout starts

    await doLogout(); // Perform the logout

    setIsLoading(false); // Set loading to false after logout completes
  };

  return (
    <div>
      {isLoading ? (
        <div className="loader">Logging out...</div> // Show the loader when logging out
      ) : (
        <form onSubmit={handleLogout}>
          <button
            className="bg-blue-400 my-2 text-white p-1 rounded"
            type="submit"
          >
            Logout
          </button>
        </form>
      )}
    </div>
  );
};

export default Logout;