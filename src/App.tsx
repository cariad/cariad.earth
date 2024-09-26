import PageTitle from "./PageTitle";
import { Container } from "@radix-ui/themes";

function App() {
  return (
    <Container
      // Maximum width ("2" = 688px): https://www.radix-ui.com/themes/docs/components/container
      size="2"
    >
      <PageTitle>Cariad Eccleston</PageTitle>
    </Container>
  );
}

export default App;
