import { useState } from "react";

import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import yourAudioFile from "../assets/audio.mp3";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened, isLoading } = props;
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleAudioButtonClick = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-[#71a71a] w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <>
            <MenuButton
              label="Home"
              onClick={() => onSectionChange(0)}
            />
            <MenuButton
              label="About"
              onClick={() => onSectionChange(1)}
            />
            <MenuButton
              label="Projects"
              onClick={() => onSectionChange(2)}
            />
            <MenuButton
              label="Contact"
              onClick={() => onSectionChange(3)}
            />
          </>
        </div>
        <div className=" end-0 pb-10 text-xl flex items-start justify-center gap-6 cursor-pointer ">
          <a
            className="socials"
            href="https://github.com/blackingg"
            target="_blank"
          >
            <AiOutlineGithub className=" hover:text-[#436112] transition-colors" />
          </a>
          <a
            className="socials"
            href="https://www.linkedin.com/in/mubarak-odetunde-258494236/"
            target="_blank"
          >
            <AiFillLinkedin className=" hover:text-[#436112] transition-colors" />
          </a>
        </div>
      </div>

      <button
        className={`z-20 fixed top-12 right-[6.5rem] p-3 w-11 h-11 rounded-md first-letterfirst-line text-white
				${isAudioPlaying ? "bg-[#71a71a]  " : " bg-[#a8aaa5]"}
				`}
        onClick={handleAudioButtonClick}
      >
        {isAudioPlaying ? <HiSpeakerWave /> : <HiSpeakerXMark color="white" />}
      </button>
      {isAudioPlaying && (
        <audio autoPlay>
          <source
            src={yourAudioFile}
            type="audio/mp3"
          />
        </audio>
      )}
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-[#436112] transition-colors"
    >
      {label}
    </button>
  );
};
