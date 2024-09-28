import Freyda from "./employments/Freyda";
import Links from "./Links";
import NhsDigital from "./employments/NhsDigital";
import SectionHeading from "./SectionHeading";
import ThomsonReuters from "./employments/ThomsonReuters";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";

function EmploymentHistory() {
  return (
    <Flex direction="column" gap="4">
      <SectionHeading id="employment">Employment</SectionHeading>

      <Links
        icon={<DoubleArrowDownIcon />}
        links={[
          {
            text: "Freyda • 2024",
            url: "#freyda",
          },
          {
            text: "NHS Digital • 2020",
            url: "#nhs-digital",
          },
          {
            text: "Thomson Reuters • 2005",
            url: "#thomson-reuters",
          },
        ]}
      />

      <Freyda />
      <NhsDigital />
      <ThomsonReuters />
    </Flex>
  );
}

export default EmploymentHistory;
