import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

export default function TeamBio({ member }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center">
          Read Bio{" "}
          <span className="text-orange">
            <ChevronRight />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-md">
        <DialogHeader className="flex flex-col items-center">
          <img
            src={`/imgs/${member.image}`}
            alt="team member"
            className="h-[286px] w-[271px] object-cover"
          />
          <DialogTitle>{member.name}</DialogTitle>
          <p>{member.position}</p>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <p className="text-balance text-justify">{member.bio}</p>
        </div>
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button type="button">Close</button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
