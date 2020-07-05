import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: any;
  }
}

interface PluginConfig {
  except?: string[];
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().use(reactotronRedux()).connect();

  tron.clear!();

  console.tron = tron;
}
