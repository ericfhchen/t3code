import type { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";
import { withUniwind } from "uniwind";

const ThemedPath = withUniwind(Path);

/**
 * Compact monochrome CODE mark. Width derives from the square viewBox.
 */
export function T3Wordmark(props: {
  readonly height: number;
  readonly color?: ColorValue;
  readonly colorClassName?: string;
}) {
  const aspectRatio = 1;
  return (
    <Svg
      accessibilityLabel="CODE"
      height={props.height}
      width={props.height * aspectRatio}
      viewBox="0 0 64 64"
    >
      <ThemedPath
        d="M48 18C43.8 14.1 38.2 12 32 12C19.3 12 9 21.8 9 34S19.3 56 32 56C38.2 56 43.8 53.9 48 50"
        color={props.color}
        colorClassName={props.colorClassName}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={8}
      />
    </Svg>
  );
}
