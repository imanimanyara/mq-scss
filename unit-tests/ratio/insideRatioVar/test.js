import unitTest from '../../../gulp/helpers/unitTest';

unitTest('insideRatioVar', __dirname, '@media (max-aspect-ratio: 2 / 1) and (min-aspect-ratio: 1 / 1){.unitTest{color:#000}}')
