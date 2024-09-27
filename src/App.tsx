import EmploymentHistory from "./EmploymentHistory";
import PageTitle from "./PageTitle";
import SocialLinks from "./SocialLinks";
import { Container, Flex } from "@radix-ui/themes";

function App() {
  return (
    <Container
      mt={{
        initial: "5",
        sm: "9",
      }}
      size={{
        initial: "1",
        sm: "2",
      }}
    >
      <Flex direction="column" gap="3">
        <PageTitle>Cariad Eccleston</PageTitle>
        <SocialLinks />
        <EmploymentHistory />
      </Flex>
    </Container>
  );
}

export default App;
