import { useQuery } from "@tanstack/react-query";
import { getJournalId } from "@/api/journal.api";
import { useAuth } from "@/components/AuthProviders";

export function useJournalId() {
  const { auth } = useAuth();
  return useQuery({
    queryKey: ["journal"],
    queryFn: () => getJournalId(),
    enabled: !!auth?.username,
    retry: false,
  });
}
