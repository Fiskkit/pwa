import SassPlugin from '@pawjs/sass/webpack';
import ImageOptimizer from '@pawjs/image-optimizer/webpack';
import SrcSet from '@pawjs/srcset/webpack';

export default class ProjectWebpack {
  constructor({ addPlugin }) {
    addPlugin(new SassPlugin());

    // Image optimization
    const optimizerOptions = {
      supportedEnv: [
        'production',
      ],
      configLabel: 'MAX_QUALITY',
    };
    addPlugin(new ImageOptimizer(optimizerOptions));
    addPlugin(new SrcSet());
  }
}
