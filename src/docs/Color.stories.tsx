import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundation/Color',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const ColorRow = ({
  name,
  description,
  className,
}: {
  name: string
  description: string
  className: string
}) => (
  <div className="flex items-center gap-4 py-3 border-b border-border last:border-b-0">
    <div className={`w-10 h-10 rounded-lg shrink-0 ${className}`} />
    <div>
      <p className="text-sm font-medium text-text font-mono">{name}</p>
      <p className="text-xs text-text-muted">{description}</p>
    </div>
  </div>
)

const ScaleRow = ({ shades }: { shades: { level: string; className: string }[] }) => (
  <div className="flex gap-1">
    {shades.map((s) => (
      <div key={s.level} className="flex flex-col items-center gap-1">
        <div className={`w-12 h-12 rounded-lg ${s.className}`} />
        <span className="text-[10px] text-text-muted font-mono">{s.level}</span>
      </div>
    ))}
  </div>
)

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-text mt-8 mb-2">{children}</h2>
)

const SubsectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-text mt-6 mb-3">{children}</h3>
)

export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-text mb-4">Colors</h1>
      <p className="text-base text-text-muted leading-relaxed mb-8">
        yasmro's color system is inspired by Japanese calligraphy — ink on paper. The consistent use
        of color in our design system keeps cognitive loads low and makes for a unified and
        accessible user experience. Colors adapt automatically between light and dark mode.
      </p>

      <SectionTitle>Color keys</SectionTitle>

      <SubsectionTitle>Semantic colors</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="background" description="Page background color" className="bg-background" />
        <ColorRow
          name="surface"
          description="Card and container surfaces"
          className="bg-surface border border-border"
        />
        <ColorRow
          name="text"
          description="Primary text color for body content"
          className="bg-text"
        />
        <ColorRow
          name="text-muted"
          description="Secondary text for descriptions and helper text"
          className="bg-text-muted"
        />
        <ColorRow
          name="border"
          description="Default border for dividers and containers"
          className="bg-border"
        />
        <ColorRow
          name="accent"
          description="Vermillion accent for emphasis and highlights"
          className="bg-accent"
        />
      </div>

      <SubsectionTitle>Status colors</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow
          name="success"
          description="Positive actions and states (completion, approval)"
          className="bg-success"
        />
        <ColorRow
          name="warning"
          description="Caution states that need attention"
          className="bg-warning"
        />
        <ColorRow
          name="error"
          description="Destructive actions and error states"
          className="bg-error"
        />
      </div>

      <SubsectionTitle>Ink &amp; Paper</SubsectionTitle>
      <p className="text-sm text-text-muted mb-3">
        Core brand palette inspired by Japanese calligraphy. These are the foundational colors.
      </p>
      <div className="border border-border rounded-xl px-5">
        <ColorRow
          name="ink-black"
          description="Darkest ink tone — primary text and emphasis"
          className="bg-ink-black"
        />
        <ColorRow
          name="ink-dark"
          description="Secondary ink tone for headings"
          className="bg-ink-dark"
        />
        <ColorRow
          name="ink-medium"
          description="Medium ink tone for body text"
          className="bg-ink-medium"
        />
        <ColorRow
          name="ink-light"
          description="Light ink for muted or disabled text"
          className="bg-ink-light"
        />
        <ColorRow
          name="paper-white"
          description="Lightest paper — main background"
          className="bg-paper-white border border-border"
        />
        <ColorRow
          name="paper-warm"
          description="Warm paper tone for subtle backgrounds"
          className="bg-paper-warm border border-border"
        />
        <ColorRow
          name="paper-cream"
          description="Cream paper for cards and elevated surfaces"
          className="bg-paper-cream border border-border"
        />
        <ColorRow
          name="sumi"
          description="Sumi (墨) — traditional ink accent"
          className="bg-sumi"
        />
        <ColorRow
          name="sumi-faded"
          description="Faded sumi for secondary accents"
          className="bg-sumi-faded"
        />
        <ColorRow
          name="vermillion"
          description="Vermillion (朱) — traditional Japanese red"
          className="bg-vermillion"
        />
      </div>

      <SectionTitle>Color scales</SectionTitle>

      <SubsectionTitle>Primary</SubsectionTitle>
      <p className="text-sm text-text-muted mb-3">
        Primary color scale mapped from theme tokens. The default theme uses blue; seasonal themes
        override this entire scale.
      </p>
      <ScaleRow
        shades={[
          { level: '100', className: 'bg-primary-100' },
          { level: '200', className: 'bg-primary-200' },
          { level: '300', className: 'bg-primary-300' },
          { level: '400', className: 'bg-primary-400' },
          { level: '500', className: 'bg-primary-500' },
          { level: '600', className: 'bg-primary-600' },
          { level: '700', className: 'bg-primary-700' },
          { level: '800', className: 'bg-primary-800' },
          { level: '900', className: 'bg-primary-900' },
        ]}
      />

      <SubsectionTitle>Gray</SubsectionTitle>
      <p className="text-sm text-text-muted mb-3">
        Neutral gray scale defined in OKLCH for perceptually uniform steps.
      </p>
      <ScaleRow
        shades={[
          { level: '50', className: 'bg-gray-50' },
          { level: '100', className: 'bg-gray-100' },
          { level: '200', className: 'bg-gray-200' },
          { level: '300', className: 'bg-gray-300' },
          { level: '400', className: 'bg-gray-400' },
          { level: '500', className: 'bg-gray-500' },
          { level: '600', className: 'bg-gray-600' },
          { level: '700', className: 'bg-gray-700' },
          { level: '800', className: 'bg-gray-800' },
          { level: '900', className: 'bg-gray-900' },
          { level: '950', className: 'bg-gray-950' },
        ]}
      />

      <SectionTitle>Seasonal themes</SectionTitle>
      <p className="text-sm text-text-muted mb-4">
        Eight seasonal color themes based on the Japanese 二十四節気 (24 solar terms). Each theme
        overrides the primary color scale via the{' '}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">data-season</code> attribute on
        the root element.
      </p>
      <div className="flex flex-col gap-5">
        {(
          [
            { label: 'Spring Early', jp: '立春', hue: 12 },
            { label: 'Spring Late', jp: '春分', hue: 138 },
            { label: 'Summer Early', jp: '立夏', hue: 162 },
            { label: 'Summer Peak', jp: '夏至', hue: 45 },
            { label: 'Autumn Early', jp: '立秋', hue: 230 },
            { label: 'Autumn Late', jp: '秋分', hue: 70 },
            { label: 'Winter Early', jp: '立冬', hue: 250 },
            { label: 'Winter Deep', jp: '冬至', hue: 255 },
          ] as const
        ).map((season) => (
          <div key={season.label} className="flex flex-col gap-1">
            <p className="text-sm font-medium text-text">
              {season.label} <span className="text-text-muted">({season.jp})</span>
            </p>
            <div className="flex gap-0.5">
              {([100, 200, 300, 400, 500, 600, 700, 800, 900] as const).map((shade) => {
                const lightness =
                  shade === 100
                    ? 0.96
                    : shade === 200
                      ? 0.91
                      : shade === 300
                        ? 0.83
                        : shade === 400
                          ? 0.74
                          : shade === 500
                            ? 0.64
                            : shade === 600
                              ? 0.56
                              : shade === 700
                                ? 0.46
                                : shade === 800
                                  ? 0.36
                                  : 0.27
                const chroma =
                  shade <= 200 ? 0.04 : shade <= 500 ? 0.09 : shade <= 700 ? 0.08 : 0.05
                return (
                  <div
                    key={shade}
                    className="w-8 h-8 rounded-sm first:rounded-l-lg last:rounded-r-lg"
                    style={{ backgroundColor: `oklch(${lightness} ${chroma} ${season.hue})` }}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}
