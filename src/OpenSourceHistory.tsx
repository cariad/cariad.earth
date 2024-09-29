import EventBlock from "./EventBlock";
import SectionHeading from "./SectionHeading";
import { Flex, Link } from "@radix-ui/themes";

function OpenSourceHistory() {
  return (
    <Flex direction="column">
      <SectionHeading id="open-source">Open Source</SectionHeading>

      <EventBlock>
        <p>
          I maintain a large number of open-source projects on GitHub at{" "}
          <Link href="https://github.com/cariad">github.com/cariad</Link>. The
          following are a selection of the most influential.
        </p>
      </EventBlock>

      <EventBlock heading="cline">
        <p>
          <Link href="https://github.com/cariad/cline">cline</Link> (
          <Link href="https://cariad.github.io/cline/">documentation</Link>) is
          Python package for building command line applications. It separates
          the concerns of understanding the command line arguments received and
          operating on strongly-typed arguments, and helps developers to write
          readable and testable code.
        </p>

        <p>I used cline to build command-line tools for Freyda.</p>
      </EventBlock>

      <EventBlock heading="asking">
        <p>
          <Link href="https://github.com/cariad/asking">asking</Link> (
          <Link href="https://cariad.github.io/asking/">documentation</Link>) is
          a Python package and command line application for gathering user input
          through question / answer sessions on the command line.
        </p>

        <p>
          Sessions are defined by schemas, which include the options for
          multiple choice or free text answers, regular expressions for
          acceptable answers, and branching depending on answers.
        </p>

        <p>
          In the end, the user's responses are returned as a dictionary when
          used as a Python package, or as JSON when run as a command-line
          application.
        </p>

        <p>
          Sessions can also be run non-interactively and are fully
          unit-testable.
        </p>

        <p>I used asking to build command-line tools for Freyda.</p>
      </EventBlock>
    </Flex>
  );
}

export default OpenSourceHistory;
