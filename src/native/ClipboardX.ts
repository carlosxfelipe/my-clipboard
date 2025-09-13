import { NativeModules } from 'react-native';

type Spec = {
  setString(text: string): Promise<void>;
  getString(): Promise<string>;
};

const { ClipboardX } = NativeModules;

export default {
  setString: (t: string) => ClipboardX.setString(t),
  getString: (): Promise<string> => ClipboardX.getString(),
} as Spec;
