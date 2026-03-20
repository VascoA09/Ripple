import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup, AvatarWithStatus } from './Avatar'
import type { AvatarProps, AvatarSize, StatusType } from './Avatar'

// ---------------------------------------------------------------------------

const meta: Meta<AvatarProps> = {
  title:      'Components/Avatar',
  component:  Avatar,
  parameters: { layout: 'centered' },
  argTypes: {
    size:    { control: 'select', options: ['s', 'm', 'l', 'xl', '2xl', '3xl'] },
    name:    { control: 'text' },
    src:     { control: 'text' },
    href:    { control: 'text' },
  },
}

export default meta
type Story = StoryObj<AvatarProps>

// ---------------------------------------------------------------------------
// Default — interactive via Storybook controls
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    name: 'Vasco Antunes',
    size: 'l',
  },
}

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

const sizes: AvatarSize[] = ['s', 'm', 'l', 'xl', '2xl', '3xl']
const sizeDiameters: Record<AvatarSize, string> = {
  s:   '24px',
  m:   '32px',
  l:   '40px',
  xl:  '48px',
  '2xl': '64px',
  '3xl': '84px',
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Sizes — initials
      </p>

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap' }}>
        {sizes.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar name="Vasco Antunes" size={s} />
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>
              {s} · {sizeDiameters[s]}
            </span>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '32px 0 12px' }}>
        sizes — image
      </p>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap' }}>
        {sizes.map(s => (
          <Avatar
            key={s}
            name="Vasco Antunes"
            size={s}
            src="https://randomuser.me/api/portraits/men/8.jpg"
          />
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Initials derivation
// ---------------------------------------------------------------------------

export const InitialsDerivation: Story = {
  name: 'Initials Derivation',
  parameters: { layout: 'padded' },
  render: () => {
    const cases = [
      { name: 'Alice Chen',           label: 'Two words → AC' },
      { name: 'Ben',                  label: 'One word → B' },
      { name: 'Clara Nguyen Torres',  label: 'Three words → CT (first + last)' },
      { name: 'Vasco Antunes',        label: 'Two words → VA' },
    ]

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
          Initials Derivation
        </p>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {cases.map(({ name, label }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Avatar name={name} />
              <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)', textAlign: 'center', maxWidth: '100px' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '24px 0 12px' }}>
          size s → single character only
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Avatar name="Alice Chen" size="s" />
          <Avatar name="Vasco Antunes" size="s" />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>
            "Alice Chen" → A · "Vasco Antunes" → V
          </span>
        </div>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Image with fallback
// ---------------------------------------------------------------------------

export const ImageWithFallback: Story = {
  name: 'Image & Fallback',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Image & Fallback
      </p>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Alice Chen" src="https://randomuser.me/api/portraits/women/25.jpg" size="xl" />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>image loaded</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Ben Torres" src="https://broken-url.invalid/image.jpg" size="xl" />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>broken src → initials</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Clara Ng" size="xl" />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>no src → initials</span>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Interactive
// ---------------------------------------------------------------------------

export const Interactive: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        Interactive
      </p>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Alice Chen" href="#" size="l" />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>href → &lt;a&gt;</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Ben Torres" onClick={() => alert('clicked')} size="l" />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>onClick → &lt;button&gt;</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar
            name="Clara Ng"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            href="#"
            size="l"
          />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>image + href</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar name="Dan Kim" size="l" />
          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>static → &lt;span&gt;</span>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// AvatarGroup
// ---------------------------------------------------------------------------

const groupMembers = [
  { name: 'Alice Chen',  src: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { name: 'Ben Torres',  src: 'https://randomuser.me/api/portraits/men/32.jpg'   },
  { name: 'Clara Ng',    src: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Dan Kim',     src: 'https://randomuser.me/api/portraits/men/47.jpg'   },
  { name: 'Eve Wu',      src: 'https://randomuser.me/api/portraits/women/63.jpg' },
  { name: 'Frank Osei',  src: 'https://randomuser.me/api/portraits/men/72.jpg'   },
]

export const Group: Story = {
  name: 'Avatar Group',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: 0 }}>
        Avatar Group
      </p>

      {/* Overlap — no max */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>overlap (default) · no max</p>
        <AvatarGroup size="m">
          {groupMembers.map(m => (
            <Avatar key={m.name} name={m.name} src={m.src} size="m" />
          ))}
        </AvatarGroup>
      </div>

      {/* Overlap — with max */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>overlap · max=3 · 6 total → +3 counter</p>
        <AvatarGroup max={3} size="m">
          {groupMembers.map(m => (
            <Avatar key={m.name} name={m.name} src={m.src} size="m" />
          ))}
        </AvatarGroup>
      </div>

      {/* Inline — with max */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>inline (overlap=false) · max=4</p>
        <AvatarGroup overlap={false} max={4} size="m">
          {groupMembers.map(m => (
            <Avatar key={m.name} name={m.name} src={m.src} size="m" />
          ))}
        </AvatarGroup>
      </div>

      {/* Sizes */}
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>all sizes · overlap · max=3</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          {(['s', 'm', 'l', 'xl'] as AvatarSize[]).map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <AvatarGroup max={3} size={s}>
                {groupMembers.map(m => (
                  <Avatar key={m.name} name={m.name} size={s} />
                ))}
              </AvatarGroup>
              <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// AvatarWithStatus
// ---------------------------------------------------------------------------

const statuses: StatusType[] = ['active', 'away', 'busy', 'offline']
const statusNames: Record<StatusType, string> = {
  active:  'Active',
  away:    'Away',
  busy:    'Busy',
  offline: 'Offline',
}

export const WithStatus: Story = {
  name: 'With Status',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        With Status
      </p>

      {/* All statuses */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>all statuses · size l</p>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {statuses.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <AvatarWithStatus status={s} size="l">
              <Avatar name="Alice Chen" size="l" />
            </AvatarWithStatus>
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>{statusNames[s]}</span>
          </div>
        ))}
      </div>

      {/* All sizes with active status */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '32px 0 12px' }}>all sizes · active status</p>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap' }}>
        {sizes.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <AvatarWithStatus status="active" size={s}>
              <Avatar name="Ben Torres" size={s} />
            </AvatarWithStatus>
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-soft)' }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Image with status */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', margin: '32px 0 12px' }}>image avatar with status</p>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        {statuses.map(s => (
          <AvatarWithStatus key={s} status={s} size="xl">
            <Avatar
              name="Clara Ng"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              size="xl"
            />
          </AvatarWithStatus>
        ))}
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In Context — realistic layout
// ---------------------------------------------------------------------------

const teamMembers = [
  { name: 'Alice Chen',  status: 'active'  as StatusType, src: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { name: 'Ben Torres',  status: 'away'    as StatusType, src: 'https://randomuser.me/api/portraits/men/32.jpg'   },
  { name: 'Clara Ng',    status: 'busy'    as StatusType, src: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Dan Kim',     status: 'offline' as StatusType, src: 'https://randomuser.me/api/portraits/men/47.jpg'   },
]

export const InContext: Story = {
  name: 'In Context',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '320px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: '24px' }}>
        In Context
      </p>

      {/* Team member list */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>team list</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '32px' }}>
        {teamMembers.map(({ name, status, src }) => (
          <div
            key={name}
            style={{
              display:        'flex',
              alignItems:     'center',
              gap:            '12px',
              padding:        '8px 12px',
              borderRadius:   '8px',
              background:     'var(--bg-hover)',
              fontSize:       '14px',
              color:          'var(--text)',
            }}
          >
            <AvatarWithStatus status={status} size="m">
              <Avatar name={name} src={src} size="m" />
            </AvatarWithStatus>
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{name}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-soft)' }}>{statusNames[status]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Assigned users */}
      <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-soft)', marginBottom: '12px' }}>assigned users</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderRadius: '8px', background: 'var(--bg-hover)' }}>
        <span style={{ fontSize: '14px', color: 'var(--text-soft)' }}>Assignees</span>
        <AvatarGroup max={3} size="s">
          {teamMembers.map(m => (
            <Avatar key={m.name} name={m.name} src={m.src} size="s" />
          ))}
        </AvatarGroup>
      </div>
    </div>
  ),
}
