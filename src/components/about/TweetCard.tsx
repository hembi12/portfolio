import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark, FaShareSquare } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const TweetCard = ({
  img,
  name,
  username,
  body,
  verified,
  timestamp,
  comments,
  retweets,
  likes,
  bookmarks,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  verified?: boolean;
  timestamp: string;
  comments: string;
  retweets: string;
  likes: string;
  bookmarks: string;
}) => {
  return (
    <div className="flex flex-col w-[290px] border rounded-lg p-3 bg-black">
      <div className="flex items-center gap-3">
        <img
          className="w-8 h-8 rounded-full"
          src={img}
          alt={`Foto de perfil de ${name}`}
          loading="lazy"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-200 text-sm">{name}</span>
            {verified && <IoMdCheckmarkCircle className="text-blue-500 text-xs" aria-label="Cuenta verificada" />}
          </div>
          <span className="text-gray-400 text-xs">@{username}</span>
        </div>
        <HiOutlineDotsHorizontal className="ml-auto text-white cursor-pointer text-xl" aria-label="Más opciones" />
      </div>
      <p className="mt-2 text-gray-200 text-sm">{body}</p>
      <span className="text-gray-400 text-xs mt-2">{timestamp}</span>
      <div className="flex justify-between text-gray-100 mt-2 text-xs">
        <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer" aria-label="Comentarios">
          <FaRegComment className="text-sm" />
          <span>{comments}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-green-400 cursor-pointer" aria-label="Retweets">
          <FaRetweet className="text-sm" />
          <span>{retweets}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer" aria-label="Me gusta">
          <FaRegHeart className="text-sm" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer" aria-label="Guardados">
          <FaRegBookmark className="text-sm" />
          <span>{bookmarks}</span>
        </div>
        <FaShareSquare className="text-sm hover:text-gray-400 cursor-pointer" aria-label="Compartir" />
      </div>
    </div>
  );
};
