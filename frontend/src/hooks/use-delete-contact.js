import useSWRMutation from "swr/mutation";
import { BACKEND_URL } from "../global.config";

const fetcher = (url, { arg }) => fetch(`${url}/${arg}`, { method: "DELETE" });

const useDeleteContact = () => {
  const { data, isLoading, trigger } = useSWRMutation(
    `${BACKEND_URL}/api/contacts`,
    fetcher
  );

  return {
    contacts: data,
    isLoading,
    trigger,
  };
};

export default useDeleteContact;
