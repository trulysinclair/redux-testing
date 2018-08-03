import {
  Bundle,
  BundleProducer,
  EnvPlugin,
  FuseBox,
  WebIndexPlugin,
} from 'fuse-box';
let fuse: FuseBox;
let app: Bundle;

const DEV_ENV = process.env['NODE_ENV'] === 'development';
const PROD_ENV = process.env['NODE_ENV'] === 'production';

function build(): Promise<BundleProducer> {
  fuse = FuseBox.init({
    homeDir: 'src',
    output: 'dist/$name.js',
    target: 'browser@esnext',
    plugins: [
      EnvPlugin({ NODE_ENV: PROD_ENV ? 'production' : 'development' }),
      WebIndexPlugin({ template: 'resources/index.html', path: '.' }),
    ],
  });

  if (DEV_ENV) {
    fuse.dev();
  }

  app = fuse.bundle('app').instructions('> app/index.tsx + fuse-box-css');

  if (DEV_ENV) {
    app.watch().hmr();
  }

  return fuse.run();
}

build();
