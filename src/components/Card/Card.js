import {
  CardContainer,
  ContentContainer,
  ButtonContainer,
} from "../componentStyling/styles/Container.styles";
import { Tag, H1, P } from "../componentStyling/styles/Elements";
import Button from "../componentStyling/Button";
import { StyledTitle } from "../componentStyling/styles/Custom.styles";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <H1>
          <StyledTitle text="React Styled Component" color="#262626" />
        </H1>
        <P>
          Exclusive React JS Tutorial on Styled Components whree we need this
          and how to use it
        </P>
        <ButtonContainer>
          <Button link="https://www.google.com" text="Visit Now" />
          <Button link="https://www.google.com" text="Watch Now" />
        </ButtonContainer>
      </ContentContainer>
    </CardContainer>
  );
}
