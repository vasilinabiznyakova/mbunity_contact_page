import {
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  InquiryDescr,
  InquiryLink,
  List,
  GeneralInquiryListItem,
} from "./GeneralInquiryList.styled";

export const GeneralInquiryList = () => {
  return (
    <List>
      <GeneralInquiryListItem>
        <InquiryLink href="tel:+1012 3456 789">
          <PhoneIcon />
          <InquiryDescr>+1012 3456 789</InquiryDescr>
        </InquiryLink>
      </GeneralInquiryListItem>
      <GeneralInquiryListItem>
        <InquiryLink href="mailto:demo@gmail.com">
          <EmailIcon />
          <InquiryDescr>demo@gmail.com</InquiryDescr>
        </InquiryLink>
      </GeneralInquiryListItem>
      <GeneralInquiryListItem>
        <InquiryLink href="https://goo.gl/maps/d11NtAn3ZEPw3yCM6">
          <span>
            <LocationIcon />
          </span>

          <InquiryDescr>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </InquiryDescr>
        </InquiryLink>
      </GeneralInquiryListItem>
    </List>
  );
};
