import type { Meta, StoryObj } from '@storybook/react'
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Users,
  Star,
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart2,
  Bookmark,
} from 'lucide-react'
import { Tag } from '../Tag'
import { Badge } from '../Badge'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardDivider,
  CardSection,
} from './Card'
import type { CardProps } from './Card'

// ---------------------------------------------------------------------------

const meta: Meta<CardProps> = {
  title:      'Components/Card',
  component:  Card,
  parameters: { layout: 'padded' },
  argTypes: {
    variant:     { control: 'select', options: ['elevated', 'flat'] },
    interactive: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<CardProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    variant:     'elevated',
    interactive: false,
  },
  render: (args) => (
    <Card {...args} style={{ width: '320px' }}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Supporting description text that provides context.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-base)', fontSize: '14px', color: 'var(--text)', lineHeight: '1.5' }}>
          Main content area. Cards have no built-in padding — all spacing comes from section sub-components.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="small">Action</Button>
      </CardFooter>
    </Card>
  ),
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start', background: 'var(--bg-app)', minHeight: '200px' }}>
      <p style={{ width: '100%', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', margin: '0 0 8px' }}>Variants</p>

      {/* Elevated */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '8px' }}>elevated (default)</p>
        <Card style={{ width: '280px' }}>
          <CardHeader>
            <CardTitle>Elevated card</CardTitle>
            <CardDescription>White surface with a subtle shadow. For primary content on the page background.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button size="small" variant="ghost">Learn more</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Flat — shown inside elevated to demonstrate use */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '8px' }}>flat (inside elevated)</p>
        <Card style={{ width: '280px' }}>
          <CardHeader>
            <CardTitle>Parent card</CardTitle>
            <CardDescription>Elevated card containing nested flat cards.</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Card variant="flat">
                <CardSection padding="var(--spacing-75)">
                  <p style={{ margin: 0, fontFamily: 'var(--font-family-base)', fontSize: '13px', color: 'var(--text)' }}>Flat card A</p>
                </CardSection>
              </Card>
              <Card variant="flat">
                <CardSection padding="var(--spacing-75)">
                  <p style={{ margin: 0, fontFamily: 'var(--font-family-base)', fontSize: '13px', color: 'var(--text)' }}>Flat card B</p>
                </CardSection>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Interactive
// ---------------------------------------------------------------------------

export const Interactive: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', background: 'var(--bg-app)' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '16px' }}>Interactive</p>
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>hover, focus (tab), active states</p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {/* Click action */}
        <Card
          interactive
          style={{ width: '220px' }}
          onClick={() => alert('Card clicked')}
        >
          <CardHeader>
            <CardTitle as="h4">Action card</CardTitle>
            <CardDescription>Triggers onClick — renders as div[role=button].</CardDescription>
          </CardHeader>
          <CardFooter style={{ justifyContent: 'flex-end' }}>
            <ArrowRight size={16} style={{ color: 'var(--text-soft)' }} />
          </CardFooter>
        </Card>

        {/* Link navigation */}
        <Card
          interactive
          href="#"
          style={{ width: '220px' }}
        >
          <CardHeader>
            <CardTitle as="h4">Link card</CardTitle>
            <CardDescription>Navigates on click — renders as an anchor element.</CardDescription>
          </CardHeader>
          <CardFooter style={{ justifyContent: 'flex-end' }}>
            <ArrowRight size={16} style={{ color: 'var(--text-soft)' }} />
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context — real-world compositions
// ---------------------------------------------------------------------------

const metrics = [
  { label: 'Total users',   value: '24,891', delta: '+12%', trend: 'up',   icon: <Users size={16} />,   color: 'blue'  as const },
  { label: 'Revenue',       value: '£84,320', delta: '+8%',  trend: 'up',   icon: <BarChart2 size={16} />, color: 'green' as const },
  { label: 'Churn rate',    value: '2.4%',    delta: '−0.3%', trend: 'down', icon: <TrendingDown size={16} />, color: 'red' as const },
]

const articles = [
  {
    title:   'Building scalable design systems',
    excerpt: 'How to architect a token-based component library that scales across products.',
    author:  'Mia Tanaka',
    time:    '5 min read',
    tags:    [
      { label: 'Design Systems', color: 'blue'   as const },
      { label: 'Tokens',         color: 'purple' as const },
    ],
    saved: false,
  },
  {
    title:   'React performance patterns',
    excerpt: 'Practical techniques for reducing unnecessary re-renders in large applications.',
    author:  'Lena Park',
    time:    '8 min read',
    tags:    [
      { label: 'React',       color: 'aqua'   as const },
      { label: 'Performance', color: 'orange' as const },
    ],
    saved: true,
  },
]

export const InContext: Story = {
  name: 'In Context',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '720px', background: 'var(--bg-app)', minHeight: '100vh' }}>

      {/* Metric cards */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>metric cards</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
        {metrics.map(({ label, value, delta, trend, icon, color }) => (
          <Card key={label}>
            <CardSection padding="var(--spacing-100) var(--spacing-100) var(--spacing-75)">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span style={{ color: 'var(--icon-soft)' }}>{icon}</span>
                <Badge color={trend === 'up' ? 'positive' : 'negative'} variant="outline" size="small">{delta}</Badge>
              </div>
              <div style={{ fontFamily: 'var(--font-family-base)', fontSize: '22px', fontWeight: 700, color: 'var(--text-loud)', lineHeight: 1.2, marginBottom: '4px' }}>{value}</div>
              <div style={{ fontFamily: 'var(--font-family-base)', fontSize: '13px', color: 'var(--text-soft)' }}>{label}</div>
            </CardSection>
          </Card>
        ))}
      </div>

      {/* Article cards */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>article cards (interactive)</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        {articles.map(({ title, excerpt, author, time, tags, saved }) => (
          <Card key={title} interactive href="#">
            <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                <CardTitle as="h4">{title}</CardTitle>
                <Bookmark size={16} style={{ color: saved ? 'var(--icon-accent)' : 'var(--icon-soft)', flexShrink: 0, marginTop: '3px' }} />
              </div>
              <CardDescription>{excerpt}</CardDescription>
            </CardHeader>
            <CardDivider />
            <CardFooter style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Avatar name={author} size="s" />
                <span style={{ fontFamily: 'var(--font-family-base)', fontSize: '12px', color: 'var(--text-soft)' }}>{author}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {tags.map(t => <Tag key={t.label} color={t.color} size="small">{t.label}</Tag>)}
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-family-base)', fontSize: '12px', color: 'var(--text-soft)' }}>
                  <Clock size={12} /> {time}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Selection cards */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>selection cards</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '32px' }}>
        {[
          { label: 'Starter',     price: 'Free',    features: ['5 projects', '1 user'],        status: null,        icon: <Star size={20} /> },
          { label: 'Pro',         price: '£12/mo',  features: ['Unlimited', '5 users'],        status: 'popular',   icon: <TrendingUp size={20} /> },
          { label: 'Enterprise',  price: 'Custom',  features: ['Unlimited', 'Unlimited users'], status: null,        icon: <CheckCircle2 size={20} /> },
        ].map(({ label, price, features, status, icon }) => (
          <Card key={label} interactive onClick={() => {}}>
            <CardSection>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span style={{ color: 'var(--icon-accent)' }}>{icon}</span>
                {status && <Badge size="small" color="primary">{status}</Badge>}
              </div>
              <div style={{ fontFamily: 'var(--font-family-base)', fontWeight: 600, fontSize: '15px', color: 'var(--text-loud)', marginBottom: '2px' }}>{label}</div>
              <div style={{ fontFamily: 'var(--font-family-base)', fontSize: '20px', fontWeight: 700, color: 'var(--text-loud)', marginBottom: '10px' }}>{price}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-family-base)', fontSize: '13px', color: 'var(--text-soft)' }}>
                    <CheckCircle2 size={12} style={{ color: 'var(--icon-accent)', flexShrink: 0 }} /> {f}
                  </div>
                ))}
              </div>
            </CardSection>
          </Card>
        ))}
      </div>

      {/* Profile card */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>profile card</p>
      <Card style={{ maxWidth: '300px' }}>
        <CardSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingBottom: 0 }}>
          <Avatar
            name="Mia Tanaka"
            src="https://randomuser.me/api/portraits/women/25.jpg"
            size="xl"
            style={{ marginBottom: '12px' }}
          />
          <CardTitle as="h4" style={{ marginBottom: '2px' }}>Mia Tanaka</CardTitle>
          <CardDescription>Senior Design Engineer · Ripple team</CardDescription>
          <div style={{ display: 'flex', gap: '6px', marginTop: '10px', marginBottom: '16px' }}>
            <Tag color="blue" size="small">Design Systems</Tag>
            <Tag color="purple" size="small">React</Tag>
          </div>
        </CardSection>
        <CardDivider />
        <CardSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { label: 'Components', value: '48' },
              { label: 'Reviews',    value: '124' },
            ].map(({ label, value }) => (
              <Card key={label} variant="flat">
                <CardSection padding="var(--spacing-75)">
                  <div style={{ fontFamily: 'var(--font-family-base)', fontSize: '18px', fontWeight: 700, color: 'var(--text-loud)' }}>{value}</div>
                  <div style={{ fontFamily: 'var(--font-family-base)', fontSize: '12px', color: 'var(--text-soft)' }}>{label}</div>
                </CardSection>
              </Card>
            ))}
          </div>
        </CardSection>
        <CardDivider />
        <CardFooter style={{ justifyContent: 'stretch', padding: 'var(--spacing-75) var(--spacing-100)' }}>
          <Button variant="ghost" size="small" style={{ flex: 1 }}>Message</Button>
          <Button size="small" style={{ flex: 1 }}>Follow</Button>
        </CardFooter>
      </Card>

      {/* Alert card */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px', marginTop: '32px' }}>alert / status card</p>
      <Card style={{ maxWidth: '400px', borderLeft: '3px solid var(--border-negative)' }}>
        <CardSection style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <AlertCircle size={18} style={{ color: 'var(--icon-negative)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-family-base)', fontWeight: 600, fontSize: '14px', color: 'var(--text-loud)', marginBottom: '4px' }}>
              Deployment failed
            </div>
            <div style={{ fontFamily: 'var(--font-family-base)', fontSize: '13px', color: 'var(--text-soft)', lineHeight: 1.5, marginBottom: '12px' }}>
              Build pipeline failed at the test step. 3 tests did not pass.
            </div>
            <Button size="small" color="negative">View logs</Button>
          </div>
        </CardSection>
      </Card>

    </div>
  ),
}
