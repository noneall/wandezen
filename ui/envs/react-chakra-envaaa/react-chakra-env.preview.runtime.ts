import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { PreviewThemeProvider } from './providers';

import { ReactChakraEnvAspect } from './react-chakra-env.aspect';

export class ReactChakraEnvPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const reactChakraEnvPreviewMain = new ReactChakraEnvPreviewMain();
    react.registerProvider([PreviewThemeProvider]);

    return reactChakraEnvPreviewMain;
  }
}

ReactChakraEnvAspect.addRuntime(ReactChakraEnvPreviewMain);
