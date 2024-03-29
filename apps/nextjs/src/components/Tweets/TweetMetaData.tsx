import { useFormattedDate } from "~/hooks/useFormattedDate";
import React from "react";
import {
  ColorType,
  PickVerificationIcon,
} from "./PickedVerificationIcon";

import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";
export type UserData = User

export type TweetProps = Tweet & {
  user: User;
  likes: Like[];
  retweets: Retweet[];
  replies: Reply[];
};


export function TweetMetadata({
  color,
  ...props
}: { user: UserData } & ColorType & TweetProps) {
  const formattedDate = useFormattedDate(props.createdAt);

  return (
    <>
      <div className="flex">
        <h1 className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
          {props.user.name || props.user.username}
          <PickVerificationIcon color={color} />
          <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
            @{props.user.username} · {formattedDate}
          </span>
        </h1>
      </div>
    </>
  );
}
