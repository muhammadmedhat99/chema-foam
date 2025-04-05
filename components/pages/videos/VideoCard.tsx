import React from "react";
type VideoCardProps = {
  name: string;
  description: string;
  url: string;
};
export const VideoCard = ({ name, description, url }: VideoCardProps) => {
  return (
    <div className="flex flex-col items-center gap-5 border-2 border-secondary pb-5">
      <iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-[331px] w-full"
      ></iframe>

      <h6 className="max-w-[80%] text-xl font-bold text-primary">{name}</h6>
      <p className="w-11/12 text-center text-xs text-svg lg:w-9/12">
        {description}
      </p>
    </div>
  );
};
