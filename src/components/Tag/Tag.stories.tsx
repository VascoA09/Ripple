import type { Meta, StoryObj } from '@storybook/react'
import {
  Code2,
  Palette,
  Globe,
  Zap,
  Leaf,
  Droplets,
  Music,
  Flame,
  Sun,
  Layers,
  Tag as TagIcon,
} from 'lucide-react'
import { Tag } from './Tag'
import type { TagProps, TagColor } from './Tag'

// ---------------------------------------------------------------------------

const meta: Meta<TagProps> = {
  title:      'Components/Tag',
  component:  Tag,
  parameters: { layout: 'centered' },
  argTypes: {
    size:    { control: 'select', options: ['small', 'medium', 'large'] },
    color:  { control: 'select', options: ['gray', 'blue', 'green', 'emerald', 'aqua', 'purple', 'violet', 'pink', 'red', 'orange', 'ochre'] },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<TagProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: 'Technology',
    color:   'blue',
    size:     'medium',
  },
}

// ---------------------------------------------------------------------------
// Colors — all 11
// ---------------------------------------------------------------------------

const allColors: { color: TagColor; label: string }[] = [
  { color: 'gray',    label: 'Gray'    },
  { color: 'blue',    label: 'Blue'    },
  { color: 'green',   label: 'Green'   },
  { color: 'emerald', label: 'Emerald' },
  { color: 'aqua',    label: 'Aqua'    },
  { color: 'purple',  label: 'Purple'  },
  { color: 'violet',  label: 'Violet'  },
  { color: 'pink',    label: 'Pink'    },
  { color: 'red',     label: 'Red'     },
  { color: 'orange',  label: 'Orange'  },
  { color: 'ochre',   label: 'Ochre'   },
]

export const Colors: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '16px' }}>
        Colors
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {allColors.map(({ color, label }) => (
          <Tag key={color} color={color}>{label}</Tag>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '16px' }}>
        Sizes
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
        <Tag size="small"  color="blue">Small</Tag>
        <Tag size="medium" color="blue">Medium</Tag>
        <Tag size="large"  color="blue">Large</Tag>
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>with icons</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Tag size="small"  color="green"  icon={<Leaf />}>Small</Tag>
        <Tag size="medium" color="green"  icon={<Leaf />}>Medium</Tag>
        <Tag size="large"  color="green"  icon={<Leaf />}>Large</Tag>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With Icons
// ---------------------------------------------------------------------------

const iconTags: { color: TagColor; label: string; icon: React.ReactNode }[] = [
  { color: 'blue',    label: 'Frontend',    icon: <Code2 />     },
  { color: 'purple',  label: 'Design',      icon: <Palette />   },
  { color: 'aqua',    label: 'Platform',    icon: <Globe />      },
  { color: 'orange',  label: 'Performance', icon: <Zap />       },
  { color: 'green',   label: 'Sustainable', icon: <Leaf />      },
  { color: 'emerald', label: 'Hydration',   icon: <Droplets />  },
  { color: 'violet',  label: 'Audio',       icon: <Music />     },
  { color: 'red',     label: 'Critical',    icon: <Flame />     },
  { color: 'ochre',   label: 'Warm',        icon: <Sun />       },
  { color: 'pink',    label: 'Layers',      icon: <Layers />    },
  { color: 'gray',    label: 'General',     icon: <TagIcon />   },
]

export const WithIcons: Story = {
  name: 'With Icons',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '16px' }}>
        With Icons
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {iconTags.map(({ color, label, icon }) => (
          <Tag key={color} color={color} icon={icon}>{label}</Tag>
        ))}
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>small with icons</p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {iconTags.slice(0, 5).map(({ color, label, icon }) => (
          <Tag key={color} color={color} size="small" icon={icon}>{label}</Tag>
        ))}
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>large with icons</p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {iconTags.slice(0, 5).map(({ color, label, icon }) => (
          <Tag key={color} color={color} size="large" icon={icon}>{label}</Tag>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context
// ---------------------------------------------------------------------------

const articles = [
  {
    title:   'Building scalable design systems',
    excerpt: 'How to architect a token-based component library that scales across products.',
    tags:    [
      { label: 'Design Systems', color: 'blue'   as TagColor },
      { label: 'Tokens',         color: 'purple' as TagColor },
      { label: 'Architecture',   color: 'gray'   as TagColor },
    ],
  },
  {
    title:   'React performance patterns',
    excerpt: 'Practical techniques for reducing unnecessary re-renders in large applications.',
    tags:    [
      { label: 'React',       color: 'aqua'   as TagColor },
      { label: 'Performance', color: 'orange' as TagColor },
      { label: 'Frontend',    color: 'blue'   as TagColor },
    ],
  },
  {
    title:   'Accessibility from the ground up',
    excerpt: 'Making WCAG compliance a natural part of your component workflow.',
    tags:    [
      { label: 'Accessibility', color: 'green'   as TagColor },
      { label: 'WCAG',          color: 'emerald' as TagColor },
      { label: 'Inclusive',     color: 'violet'  as TagColor },
    ],
  },
]

const issueTypes: { label: string; color: TagColor; icon: React.ReactNode }[] = [
  { label: 'Bug',         color: 'red',    icon: <Flame />  },
  { label: 'Feature',     color: 'blue',   icon: <Zap />    },
  { label: 'Enhancement', color: 'green',  icon: <Leaf />   },
  { label: 'Design',      color: 'purple', icon: <Palette />},
  { label: 'Docs',        color: 'gray',   icon: <TagIcon />},
]

export const InContext: Story = {
  name: 'In Context',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '480px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        In Context
      </p>

      {/* Article list */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>article tags</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '32px' }}>
        {articles.map(({ title, excerpt, tags }) => (
          <div
            key={title}
            style={{
              padding:      '12px 16px',
              borderRadius: '8px',
              background:   'var(--bg-hover)',
            }}
          >
            <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text)', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-soft)', marginBottom: '10px' }}>{excerpt}</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {tags.map(t => (
                <Tag key={t.label} color={t.color} size="small">{t.label}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Issue type legend */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>issue types</p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {issueTypes.map(({ label, color, icon }) => (
          <Tag key={label} color={color} icon={icon}>{label}</Tag>
        ))}
      </div>
    </div>
  ),
}
