/* global mocha, chai */
import './tests/ArrayBufferReader-test.js';
import './tests/BlobReader-test.js';
import './tests/unzipit-test.js';

const settings = Object.fromEntries(new URLSearchParams(window.location.search).entries());
if (settings.reporter) {
  mocha.reporter(settings.reporter);
}
mocha.run((failures) => {
  window.testsPromiseInfo.resolve(failures);
});
