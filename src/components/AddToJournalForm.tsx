import { useForm, type SubmitHandler } from "react-hook-form";
import { SectionTitle } from "./SectionTitle";
import { Button } from "./ui/button";
import GameInfoBox from "./ui/GameInfoBox";
import type { JournalGame } from "@/types/JournalGameTypes";
import { useJournalId } from "@/hooks/useJournalId";
import { addJournalEntry } from "@/api/journal.api";
import { toast } from "react-toastify";

type FormFields = {
  score: number;
  comment: string;
};

type TitleInfo = {
  title: string;
  url: string;
  gameId: number;
};

export function AddToJournalForm({ title, url, gameId }: TitleInfo) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const {
    data: journal,
    isSuccess: isJournalLoaded,
    isLoading: isLoadingJournal,
  } = useJournalId();

  const onSubmmit: SubmitHandler<FormFields> = async (data) => {
    try {
      if (!isJournalLoaded || !journal?.journalId) {
        setError("root", {
          message: "Journal not found. Please log in again.",
        });
        return;
      }

      const journalEntry: JournalGame = {
        journalId: journal.journalId,
        gameId: gameId,
        score: data.score,
        comment: data.comment,
      };
      // console.log(journalEntry);
      const res = await addJournalEntry(journalEntry);

      console.log(res);

      if (res.status === 200 || res.status === 201) {
        console.log("Game added");
        toast.success("Game added", {
          className:
            "!rounded-md !border-none !shadow-md !bg-neutral-900 !shadow-blue-800 !mx-4 !py-4 !font-bold",
          position: "bottom-right",
          theme: "colored",
          closeButton: false,
          progressClassName: "!bg-blue-500 ",
          icon: false,
          autoClose: 1250,
        });
      } else {
        setError("root", { message: "Error while adding game. Try again" });
        return;
      }
    } catch (error) {
      setError("root", { message: "Error while sending entry" });
      console.log(error);
    }
  };

  const scoreValues = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <GameInfoBox>
      <div className="mr-4">
        <SectionTitle className="">Add Game</SectionTitle>
      </div>
      <div className="grid grid-cols-2 gap-6 m-8">
        <div>
          <img src={url} alt={title} width={250} height={375}></img>
          <h4 className=" text-white text-shadow-lg font-bold p-2 ">{title}</h4>
        </div>
        <form
          onSubmit={handleSubmit(onSubmmit)}
          className="flex flex-1 flex-col gap-4"
        >
          <div className="flex items-center justify-between">
            <label htmlFor="score-select" className="mr-4">
              Score
            </label>
            <select
              id="score-select"
              className="m-2 pr-1 rounded-md border border-white shadow-sm bg-neutral-900 text-right"
              {...register("score", { valueAsNumber: true })}
            >
              <option value="" className="">
                --
              </option>
              {scoreValues.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="comment-box">Comment</label>
          <textarea
            id="comment-box"
            className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            {...register("comment")}
          ></textarea>
          <div className="mt-4 -skew-x-12 hover:scale-[115%] transform transition-transform rounded-none self-center">
            <Button
              className="bg-green-700 rounded-none scale-150"
              size={"sm"}
              disabled={isSubmitting || isLoadingJournal}
            >
              <h3 className="skew-x-12">Add</h3>
            </Button>
          </div>
          {errors.root && (
            <p className="text-red-500 text-sm">{errors.root.message} </p>
          )}
        </form>
      </div>
    </GameInfoBox>
  );
}
