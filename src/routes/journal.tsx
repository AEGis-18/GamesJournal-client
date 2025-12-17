import { SectionTitle } from "@/components/SectionTitle";
import { MyCard } from "@/components/ui/MyCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SectionTitle className="">My Journal</SectionTitle>
      <MyCard className="mt-8 p-4">
        <p> In development...</p>
      </MyCard>
    </div>
  );
}
