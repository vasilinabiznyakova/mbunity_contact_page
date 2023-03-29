import {
  GeneralSocialList,
  GeneralSocialListItem,
  GeneralSocialListLink,
  LogoWrapper,
} from "./SocialList.styled";

import { ReactComponent as TwitterLogo } from "../../img/contact_sect/twitter.svg";
import { ReactComponent as InstagramLogo } from "../../img/contact_sect/instagram_logo.svg";
import { ReactComponent as DiscordLogo } from "../../img/contact_sect/discord_logo.svg";

export const SocialList = () => {
  return (
    <GeneralSocialList>
      <GeneralSocialListItem>
        <LogoWrapper>
          <GeneralSocialListLink href="/">
            <TwitterLogo />
          </GeneralSocialListLink>
        </LogoWrapper>
      </GeneralSocialListItem>
      <GeneralSocialListItem>
        <GeneralSocialListLink href="/">
          <InstagramLogo />
        </GeneralSocialListLink>
      </GeneralSocialListItem>
      <GeneralSocialListItem>
        <LogoWrapper>
          <GeneralSocialListLink href="/">
            <DiscordLogo />
          </GeneralSocialListLink>
        </LogoWrapper>
      </GeneralSocialListItem>
    </GeneralSocialList>
  );
};
