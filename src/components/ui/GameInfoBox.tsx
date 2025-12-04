import { type PropsWithChildren } from "react";
import { MyCard } from "./MyCard";
import { CardContent } from "./card";

type GameInfoBoxProps = {};

export default function GameInfoBox({
  children,
}: PropsWithChildren<GameInfoBoxProps>) {
  return (
    <div className="flex justify-center  min-h-[70vh] ">
      <MyCard className="rounded-md border-none shadow-md min-w-md bg-neutral-900 shadow-blue-800 mx-4 ">
        <CardContent>{children}</CardContent>
      </MyCard>
    </div>
  );
}
