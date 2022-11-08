import { Center, Spinner, StatusBar } from "native-base";

export function Loading() {
  return (
    <Center>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
    </Center>
  );
}