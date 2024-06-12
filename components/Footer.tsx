import React from "react";
import Image from "next/image";

import discord from "../assets/discord-line.svg";
import twitter from "../assets/twitter-x-line.svg";
import telegram from "../assets/telegram-line.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center space-y-3 py-5">
      <div className="flex items-center justify-center gap-4">
        <a href="https://discord.com/invite/KueW8zcVrV">
          <Image src={discord} alt="Discord" width={24} height={24} />
        </a>
        <a href="https://x.com/GweiToken_eth">
          <Image src={twitter} alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://t.me/GweiToken">
          <Image src={telegram} alt="Telegram" width={24} height={24} />
        </a>
      </div>
      <p className="text-xs text-dark">All rights reserved, $GWEI 2024</p>
    </footer>
  );
};

export default Footer;
