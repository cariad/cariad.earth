import Links from "./Links";
import { ActivityLogIcon } from "@radix-ui/react-icons";

function Cv() {
  return (
    <Links
      icon={<ActivityLogIcon />}
      links={[
        {
          text: "Full Stack CV (.docx)",
          url: "/cariad_eccleston_full_stack_cv.docx",
        },
        {
          text: "Full Stack CV (.pdf)",
          url: "/cariad_eccleston_full_stack_cv.pdf",
        },
        {
          text: "DevOps CV (.docx)",
          url: "/cariad_eccleston_devops_cv.docx",
        },
        {
          text: "DevOps CV (.pdf)",
          url: "/cariad_eccleston_devops_cv.pdf",
        },
      ]}
    />
  );
}

export default Cv;
