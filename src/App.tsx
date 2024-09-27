import EmploymentHistory from "./EmploymentHistory";
import Introduction from "./Introduction";
import PageTitle from "./PageTitle";
import SocialLinks from "./SocialLinks";
import { Container, Flex } from "@radix-ui/themes";

function App() {
  return (
    <Container
      mb="9"
      ml="3"
      mr="3"
      mt="9"
      size={{
        initial: "1",
        sm: "2",
      }}
    >
      <Flex direction="column" gap="9">
        <PageTitle />
        <SocialLinks />
        <Introduction />
        <EmploymentHistory />
      </Flex>
    </Container>
  );
}

export default App;
