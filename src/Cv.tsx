import Links from "./Links";
import { ActivityLogIcon } from "@radix-ui/react-icons";

function Cv() {
  return (
    <Links
      icon={<ActivityLogIcon />}
      links={[
        {
          text: "Download CV (.docx)",
          url: "/cariad-eccleston.docx",
        },
        {
          text: "Download CV (.pdf)",
          url: "/cariad-eccleston.pdf",
        },
      ]}
    />
  );
}

export default Cv;
