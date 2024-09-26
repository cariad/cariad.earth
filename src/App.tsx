import PageTitle from "./PageTitle";
import SocialLinks from "./SocialLinks";
import { Container } from "@radix-ui/themes";

function App() {
  return (
    <Container size="2">
      <PageTitle>Cariad Eccleston</PageTitle>
      <SocialLinks />
    </Container>
  );
}

export default App;
