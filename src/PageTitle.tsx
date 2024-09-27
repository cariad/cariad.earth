import { Avatar, Flex, Heading } from "@radix-ui/themes";

function PageTitle() {
  return (
    <Flex
      align="center"
      gap={{
        initial: "2",
        sm: "4",
      }}
      justify={{
        initial: "center",
        sm: "start",
      }}
    >
      <Avatar
        size={{
          initial: "2",
          sm: "5",
        }}
        src="/cariad-eccleston.jpg"
        radius="full"
        fallback="CE"
      />

      <Heading
        size={{
          initial: "8",
          sm: "9",
        }}
      >
        Cariad Eccleston
      </Heading>
    </Flex>
  );
}

export default PageTitle;
