import Links from "./Links";
import { Box } from "@radix-ui/themes";
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";

function BackToEmploymentHistory() {
  return (
    <Box mt="7">
      <Links
        icon={<DoubleArrowUpIcon />}
        links={[
          {
            text: "Back to employment history",
            url: "#employment",
          },
        ]}
      />
    </Box>
  );
}

export default BackToEmploymentHistory;
