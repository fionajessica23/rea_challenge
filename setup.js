import hook from 'css-modules-require-hook';
import sass from 'node-sass';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

hook({
  extensions: ['.scss', '.css'],
  generateScopedName: '[local]___[hash:base64:5]',
  preprocessCss: (data, file) => sass.renderSync({ file }).css,
});

configure({ adapter: new Adapter() });
