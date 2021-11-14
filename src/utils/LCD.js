import { LCDClient } from '@terra-money/terra.js';

export default terra = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12',
});
