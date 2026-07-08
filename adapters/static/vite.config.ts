import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  const retiredRoute = ['ca', 'reer'].join('');

  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan']
      }
    },
    plugins: [
      staticAdapter({
        origin: 'https://co-IT.eu',
        exclude: [retiredRoute, `${retiredRoute}/**`]
      })
    ]
  };
});
