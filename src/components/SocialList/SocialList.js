import {
  GeneralSocialList,
  GeneralSocialListItem,
  GeneralSocialListLink,
} from "./SocialList.styled";

import { ReactComponent as TwitterLogo } from "../../img/contact_sect/twitter.svg";
import { ReactComponent as InstagramLogo } from "../../img/contact_sect/instagram_logo.svg";
import { ReactComponent as DiscordLogo } from "../../img/contact_sect/discord_logo.svg";

export const SocialList = () => {
  return (
    <GeneralSocialList>
      <GeneralSocialListItem>
        <GeneralSocialListLink href="/">
          <TwitterLogo />
        </GeneralSocialListLink>
      </GeneralSocialListItem>

      <GeneralSocialListItem>
        <GeneralSocialListLink href="/">
          <InstagramLogo />
        </GeneralSocialListLink>
      </GeneralSocialListItem>
      <GeneralSocialListItem>
        <GeneralSocialListLink href="/">
          <DiscordLogo />
        </GeneralSocialListLink>
      </GeneralSocialListItem>
    </GeneralSocialList>
  );
};
