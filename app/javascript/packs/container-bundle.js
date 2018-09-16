import ReactOnRails from "react-on-rails";

import Container from "../bundles/Container/components/Container";
import Team from "../bundles/Container/components/team/Team";
import States from "../bundles/Container/components/States";
import Indicators from "../bundles/Container/components/Indicators";

import DNA from "../bundles/Container/components/DNA";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Container,
  Indicators,
  States,
  Team,
  DNA
});
