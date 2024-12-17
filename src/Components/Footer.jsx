import StyledFooter from "./Styles/StyledFooter";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <>
      <StyledFooter className="footer">
        <a href="https://github.com/mansko10/shopping-cart" target="_blank">
          <Github /> View on Github
        </a>
      </StyledFooter>
    </>
  );
}
