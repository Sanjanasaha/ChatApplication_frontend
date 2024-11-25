import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://chatapplication-backend-c1f3.onrender.com/api/users",
          {
            method: "GET", // GET request to fetch users
            headers: {
              "Content-Type": "application/json", // Optional, depending on your needs
            },
            credentials: "include", // This ensures cookies (like jwt) are sent with the request
          }
        );

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
