import React, { useContext, useEffect } from 'react'
import { Tooltip } from '../Tooltip'
import './ToggleButton.css'

// =============================================================================
// GROUP CONTEXT
// Spec: components/toggle-button.md 0.1.0, "Toggle group"; components/button-group.md 0.1.0.
// Button Group owns selection and the selected value. It provides input type,
// shared name, size, value and onToggle to its Toggle Buttons through this
// context. Toggle Buttons never coordinate with each other.
// =============================================================================

export interface ToggleButtonGroupContextValue {
  /** 'single' renders radios sharing `name`; 'multiple' renders checkboxes. */
  selection: 'single' | 'multiple'
  /** Shared input name. Required for single selection. */
  name?: string
  /** One size for every toggle in the group. */
  size?: ToggleButtonSize
  /**
   * Current group selection. When provided, a child is checked when its
   * `value` matches (single) or is included (multiple). `null` means the
   * group is controlled with nothing selected; `undefined` leaves children
   * uncontrolled.
   */
  value?: string | string[] | null
  /** Child reports a change; the group computes the new value. */
  onToggle?: (childValue: string, checked: boolean) => void
}

export const ToggleButtonGroupContext =
  React.createContext<ToggleButtonGroupContextValue | null>(null)

// =============================================================================
// TYPES
// =============================================================================

export type ToggleButtonSize = 'xsmall' | 'small' | 'medium' | 'large'

export interface ToggleButtonProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'checked' | 'defaultChecked' | 'children'
  > {
  /** Visible label. Required unless icon-only. Must not change between states. */
  children?: React.ReactNode
  /** Leading icon, or the only content when `children` is omitted. */
  icon?: React.ReactNode
  /** Accessible name. Required when icon-only; applied to the input. */
  'aria-label'?: string
  /** Tooltip text. Required when icon-only. Defaults to `aria-label`. */
  tooltip?: string
  /** Controlled selected state. Maps to the input's `checked`. */
  selected?: boolean
  /** Uncontrolled initial state. */
  defaultSelected?: boolean
  /** Button size. All toggles in a group share one size. Default: 'medium'. */
  size?: ToggleButtonSize
  /**
   * @deprecated Use Button Group `selection="single"`. Removed at the next major.
   * Puts the toggle in a single-selection set (renders a radio with this name).
   */
  groupName?: string
}

// Warn once per session per message, so lists of toggles do not flood the console.
// Development-only, same approach as Navbar: bundlers replace process.env.NODE_ENV.
let isDev = true
try { isDev = process.env.NODE_ENV !== 'production' } catch { isDev = false }
const warned = new Set<string>()
function warnOnce(message: string) {
  if (!isDev || warned.has(message)) return
  warned.add(message)
  console.warn(message)
}

// =============================================================================
// TOGGLE BUTTON
// =============================================================================

/**
 * Toggle Button: a Button (ghost, neutral) with persistent state.
 *
 * Markup: a <label> styled as Button wrapping a native <input>. The input owns
 * the state; no aria-pressed or aria-checked is added.
 * - Standalone or multiple selection: type="checkbox".
 * - Single selection (Button Group, or deprecated groupName): type="radio".
 */
export const ToggleButton = React.forwardRef<HTMLInputElement, ToggleButtonProps>(
  function ToggleButton(
    {
      children,
      icon,
      tooltip,
      selected,
      defaultSelected,
      size: sizeProp,
      groupName,
      disabled = false,
      name: nameProp,
      className,
      style,
      'aria-label': ariaLabel,
      ...rest
    },
    ref,
  ) {
    const group = useContext(ToggleButtonGroupContext)
    const isIconOnly = children == null

    useEffect(() => {
      if (groupName !== undefined) {
        warnOnce(
          '[Ripple] ToggleButton: `groupName` is deprecated. Wrap toggles in a Button Group with selection="single". It will be removed in the next major.',
        )
      }
    }, [groupName])

    useEffect(() => {
      if (isIconOnly && !ariaLabel) {
        warnOnce('[Ripple] ToggleButton: icon-only toggles require `aria-label`.')
      }
    }, [isIconOnly, ariaLabel])

    // Group wins over the deprecated prop: the group is the selection owner.
    const isSingle = group ? group.selection === 'single' : groupName !== undefined
    const type = isSingle ? 'radio' : 'checkbox'
    const name = group?.name ?? nameProp ?? groupName
    const size = group?.size ?? sizeProp ?? 'medium'

    // Group-controlled: the group value decides `checked`; the child reports changes.
    const childValue = rest.value === undefined ? undefined : String(rest.value)
    const groupControlled = !!group && group.value !== undefined && childValue !== undefined
    const groupChecked = groupControlled
      ? Array.isArray(group.value)
        ? group.value.includes(childValue as string)
        : group.value === childValue && group.value !== null
      : undefined
    const checked = groupControlled ? groupChecked : selected

    const { onChange, ...inputRest } = rest
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      if (group?.onToggle && childValue !== undefined) group.onToggle(childValue, event.target.checked)
    }

    const label = (
      <label
        className={['button', 'toggle-button', className].filter(Boolean).join(' ')}
        style={style}
        data-variant="ghost"
        data-color="neutral"
        data-size={size}
        data-icon-only={isIconOnly ? '' : undefined}
        data-icon-start={!isIconOnly && icon ? '' : undefined}
        data-disabled={disabled ? '' : undefined}
      >
        <input
          ref={ref}
          type={type}
          name={name}
          className="toggle-button__input"
          checked={checked}
          defaultChecked={checked === undefined ? defaultSelected : undefined}
          disabled={disabled}
          aria-label={ariaLabel}
          onChange={handleChange}
          {...inputRest}
        />
        {icon && (
          <span className="toggle-button__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </label>
    )

    const tooltipText = tooltip ?? (isIconOnly ? ariaLabel : undefined)
    if (!tooltipText) return label

    return (
      <Tooltip content={tooltipText} disabled={disabled}>
        {label}
      </Tooltip>
    )
  },
)
