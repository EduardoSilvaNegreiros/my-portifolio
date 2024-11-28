import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/edunegreiross_/profilecard/?igsh=MWRkamh4YzNnbmdyNA==">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/eduardonegreiross/">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/EduardoSilvaNegreiros">
        <GithubIcon />
      </a>
    </div>
  );
}
