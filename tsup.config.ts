import { defineConfig } from 'tsup'

export default defineConfig([
  // Variants (CSS-only, for Astro)
  {
    entry: {
      'variants/index': 'src/variants/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    external: ['react', 'react-dom'],
  },
  // Components (React)
  {
    entry: {
      'components/index': 'src/components/index.ts',
      'components/lv1/index': 'src/components/lv1/index.ts',
      'components/lv2/index': 'src/components/lv2/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
  },
  // Seasonal theme utilities
  {
    entry: {
      'themes/seasonal/index': 'src/themes/seasonal/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', 'react-dom'],
  },
])
