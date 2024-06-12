import useSWR from "swr";
import { BACKEND_URL } from "../global.config";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useContacts = () => {
  const { data, isLoading, mutate } = useSWR(
    `${BACKEND_URL}/api/contacts`,
    fetcher
  );

  const onInsert = (contact) => {
    mutate([contact, ...(data || [])]);
  };

  const onRemove = (id) => {
    if (Array.isArray(data)) {
      mutate(...data.filter((c) => c.id !== id));
    }
  };

  return {
    contacts: data,
    isLoading,
    onInsert,
    onRemove,
  };
};

export default useContacts;
