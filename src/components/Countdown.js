import Countdown, { zeroPad } from "react-countdown";
import { styled } from "styled-components";
import { Text } from "./Text";

// Countdown container with intense styles
const CountdownContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.gothicFont};
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

// Countdown number with intense styles
const CountdownNumber = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  text-shadow: 0 0 10px ${(props) => props.theme.colors.danger},
    0 0 20px ${(props) => props.theme.colors.danger};
`;

const CountdownWrapper = ({ children, countdownTo, ...props }) => (
  <Countdown
    date={countdownTo}
    renderer={({ hours, minutes, seconds, days, completed }) =>
      completed ? (
        { ...children }
      ) : (
        <CountdownContainer {...props}>
          <Text {...props}>
            Faltan
            <CountdownNumber {...props}>
              {zeroPad(days, 2)}
            </CountdownNumber>{" "}
            días y{" "}
            <CountdownNumber {...props}>{zeroPad(hours, 2)}</CountdownNumber>:
            <CountdownNumber {...props}>{zeroPad(minutes, 2)}</CountdownNumber>:
            <CountdownNumber {...props}>{zeroPad(seconds, 2)}</CountdownNumber>
          </Text>
        </CountdownContainer>
      )
    }
  />
);

export { CountdownWrapper as Countdown };
