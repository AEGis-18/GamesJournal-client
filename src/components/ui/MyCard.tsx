import { Card } from "./card";

export function MyCard({ children, className }: React.ComponentProps<"div">) {
  return (
    <Card
      className={`rounded-md border-none shadow-md bg-neutral-900 shadow-blue-800 mx-4 py-4 ${className}`}
    >
      {children}
    </Card>
  );
}
