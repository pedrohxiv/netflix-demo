import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => (window.scrollY > 100 ? setShow(true) : setShow(false));

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 px-8 py-5 ${
        show && 'bg-neutral-900'
      } transition ease-in duration-500`}
    >
      <div className="flex justify-between items-center">
        <Image
          src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg"
          height={0}
          width={0}
          alt="Netflix Logo"
          priority
          className="w-20 cursor-pointer"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          height={30}
          width={30}
          alt="Netflix Avatar"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
