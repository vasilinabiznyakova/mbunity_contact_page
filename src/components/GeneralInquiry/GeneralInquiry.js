import { Article, Wrapper } from "./GeneralInquiry.styled";

export const GeneralInquiry = () => {
  return (
    <Article>
      <Wrapper>
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
        <ul>
          <li>
            <a href="tel:+1012 3456 789">+1012 3456 789</a>
          </li>
          <li>
            <a href="mailto:demo@gmail.com">demo@gmail.com</a>
          </li>
          <li>
            {" "}
            <a href="https://goo.gl/maps/d11NtAn3ZEPw3yCM6">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Linkedin Logo</a>
          </li>
          <li>
            <a href="/">Insta Logo</a>
          </li>
          <li>
            <a href="/">Discord Logo</a>
          </li>
        </ul>
      </Wrapper>
    </Article>
  );
};
