import EventBlock from "./EventBlock";
import SectionHeading from "./SectionHeading";
import { Code, Flex, Link } from "@radix-ui/themes";

function OpenSourceHistory() {
  return (
    <Flex direction="column">
      <SectionHeading id="open-source">Open Source</SectionHeading>
      <EventBlock>
        <p>
          I maintain, and have contributed to, many open-source projects on
          GitHub at <Link href="https://github.com/cariad">@cariad</Link>. The
          following are a selection of my personal favourites and the most
          influential.
        </p>
      </EventBlock>
      <EventBlock heading="boto/boto3">
        <p>
          In 2021, I earned a{" "}
          <Link href="https://github.com/cariad?achievement=mars-2020-contributor&tab=achievements">
            Mars 2020 Contributor badge
          </Link>{" "}
          from GitHub and JPL for my contributions to{" "}
          <Link href="https://github.com/boto/boto3">boto/boto3</Link>, which
          was used during NASA's Ingenuity helicopter mission on Mars.
        </p>
        <p>
          The badge was{" "}
          <Link href="https://github.com/readme/featured/nasa-ingenuity-helicopter/">
            spotlighted by the GitHub ReadME Project
          </Link>
          .
        </p>
      </EventBlock>
      <EventBlock heading="wa11y.co">
        <p>
          During the Wordle craze of 2021-22, I released{" "}
          <Link href="https://wa11y.co">wa11y.co</Link> (
          <Link href="https://github.com/cariad/wa11y.co">source</Link>), short
          for "Wordle Accessibility", to translate the game's emoji patterns
          into screen reader-friendly text to share on social media.
        </p>

        <p>
          The app translated over 30k games per month during its peak, and
          earned mentions on{" "}
          <Link href="https://www.theverge.com/22892044/wordle-free-game-online-how-to-puzzle">
            The Verge
          </Link>
          ,{" "}
          <Link href="https://slate.com/culture/2022/02/wordle-word-game-results-accessibility-twitter.html">
            Slate
          </Link>{" "}
          and{" "}
          <Link href="https://gamerant.com/wordle-issues-accessibility-social-media-sight-impaired-emojis-readibility/">
            GameRant
          </Link>
          .
        </p>
      </EventBlock>
      <EventBlock heading="wev">
        <p>
          <Link href="https://github.com/cariad/wev">wev</Link> (
          <Link href="https://wevcli.app">documentation</Link>), short for "with
          environment variables", is a cross-platform command-line application
          for running other command-line applications with environment variables
          resolved at runtime.
        </p>

        <p>
          For example, the{" "}
          <Link href="https://github.com/cariad/wev-awsmfa">wev-awsmfa</Link> (
          <Link href="https://asciinema.org/a/386493">demo</Link>) plugin allows
          the AWS CLI (or any other application) to be run with credentials
          generated by multi-factor authentication. So, to run{" "}
          <Code>aws s3 ls</Code> with multi-factor authenticated credentials,
          you would run <Code>wev aws s3 ls</Code>.
        </p>

        <p>
          One critical plugin I developed for the development and data science
          teams at Freyda was{" "}
          <Link href="https://github.com/cariad/wev-awscodeartifact">
            wev-awscodeartifact
          </Link>{" "}
          (<Link href="https://asciinema.org/a/386503">demo</Link>), which
          generates AWS CodeArtifact tokens for accessing private repositories.
          This saved developers time every day by allowing{" "}
          <Code>wev pipenv install</Code> to work as seamlessly with the
          company's private repository as if using PyPI.
        </p>
      </EventBlock>
      <EventBlock heading="slash3">
        <p>
          <Link href="https://github.com/cariad/slash3">slash3</Link> (
          <Link href="https://cariad.github.io/slash3/">documentation</Link>) is
          a Python package for building and navigating Amazon Web Services S3
          paths, much like the built-in <Code>pathlib</Code> supports building
          and navigating filesystem paths.
        </p>

        <p>
          These strongly-typed S3 paths significantly reduce the risk of errors
          when building or reading paths, allow new keys to be quickly built on
          top of prefixes, and easily convert bucket / key strings to URIs and
          vice-versa.
        </p>

        <p>
          I used slash3 at Freyda to develop safe and highly-tested interactions
          with S3.
        </p>
      </EventBlock>
      <EventBlock heading="greas3">
        <p>
          <Link href="https://github.com/cariad/greas3">greas3</Link> (
          <Link href="https://cariad.github.io/greas3/">documentation</Link>) is
          a Python package and command-line application for uploading files to
          Amazon Web Services S3.
        </p>

        <p>
          Unlike the AWS CLI, greas3 uses checksums rather than timestamps to
          avoid re-uploading files that are already present and up-to-date. This
          is vital in CI pipelines that upload files to S3 after pulling them
          from Git, since the local file's timestamp will be updated on every CI
          run. Naively trusting the timestamp in this case will result in
          significant wasted time and network traffic, which greas3 saves.
        </p>
      </EventBlock>
      <EventBlock heading="rolumns">
        <p>
          <Link href="https://github.com/cariad/rolumns">rolumns</Link> (
          <Link href="https://cariad.github.io/rolumns/">documentation</Link>)
          is a Python package for manipulating data into tables.
        </p>

        <p>
          For example, rolumns allows you to flatten hierarchical objects into
          rows, perform grouping of lists of objects, define inline value
          manipulations and add user-defined columns.
        </p>

        <p>
          I used rolumns at Freyda to build a reporting framework that
          transforms deeply-hierarchical financial information into Microsoft
          Excel spreadsheets. I've also published some example usage with public
          APIs at{" "}
          <Link href="https://github.com/cariad/rolumns-examples">
            cariad/rolumns-examples
          </Link>
          .
        </p>
      </EventBlock>
      <EventBlock heading="cline">
        <p>
          <Link href="https://github.com/cariad/cline">cline</Link> (
          <Link href="https://cariad.github.io/cline/">documentation</Link>) is
          Python package for building command-line applications. It separates
          the concerns of understanding the command-line arguments received and
          operating on strongly-typed arguments, and helps developers to write
          readable and testable code.
        </p>

        <p>I used cline to build command-line tools for Freyda.</p>
      </EventBlock>
      <EventBlock heading="asking">
        <p>
          <Link href="https://github.com/cariad/asking">asking</Link> (
          <Link href="https://cariad.github.io/asking/">documentation</Link>) is
          a Python package and command-line application for gathering user input
          through question / answer sessions on the command-line.
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

      <EventBlock heading="lambdaq">
        <p>
          <Link href="https://github.com/cariad/lambdaq">lambdaq</Link> ("lambda
          queue") is a Python package that handles all the boilerplate for AWS
          Lambda functions to receive events from Step Functions state machines,
          either by SQS queues, by direct invocation, or to safely migrate from
          one to another.
        </p>

        <p>
          I used lambdaq at Freyda to significantly reduce the amount of time I
          spent developing, and the amount of time my team spent reviewing, the
          same code across dozens of projects.
        </p>
      </EventBlock>

      <EventBlock heading="lackadaisical">
        <p>
          <Link href="https://github.com/cariad/lackadaisical">
            lackadaisical
          </Link>{" "}
          is a Python package for unit-testing performance; for example, to
          assert that a function completes within a specified number of seconds.
        </p>

        <p>
          I used lackadaisical at Freyda to test for database performance
          regression.
        </p>
      </EventBlock>

      <EventBlock heading="s3headersetter">
        <p>
          <Link href="https://github.com/cariad/s3headersetter">
            s3headersetter
          </Link>{" "}
          is a Golang command-line application for setting the{" "}
          <Code>Cache-Control</Code> and <Code>Content-Type</Code> HTTP headers
          on AWS S3 objects according to their file types.
        </p>

        <p>
          I used s3headersetter at Freyda to set appropriate headers on deployed
          frontend files.
        </p>
      </EventBlock>

      <EventBlock heading="cariad.earth">
        <p>
          This website is a React.js application built with TypeScript and Radix
          UI components, and the source is available at{" "}
          <Link href="https://github.com/cariad/cariad.earth">
            github.com/cariad/cariad.earth
          </Link>
          .
        </p>
      </EventBlock>
    </Flex>
  );
}

export default OpenSourceHistory;
