import React, { useCallback, useEffect, useId, useMemo, useState } from 'react'
import { ToggleButtonGroupContext } from '../ToggleButton'
import type { ToggleButtonGroupContextValue, ToggleButtonSize } from '../ToggleButton'
import './ButtonGroup.css'

// =============================================================================
// Spec: components/button-group.md 0.1.0
// A thin composition component: a <fieldset> + <legend> that owns layout and,
// for selection, which Toggle Buttons belong together and what is selected.
// It defines no button styles and adds no keyboard handling (native only).
//
// data-selection marks the mode for consumers and tooling; it needs no styling
// (radio vs checkbox carries the behaviour). Declared for the cheatsheet generator:
// ripple:semantic-attr data-selection
// =============================================================================

export type ButtonGroupSelection = 'action' | 'single' | 'multiple'

export interface ButtonGroupProps
  extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange' | 'defaultValue'> {
  /** What the group does. Decides the children and their input type. Default: 'action'. */
  selection?: ButtonGroupSelection
  /** Accessible name of the group, rendered as <legend>. Required. */
  legend: string
  /** Shows the legend above the group. Default: false (visually hidden). */
  legendVisible?: boolean
  /** Controlled selection: string (single) or string[] (multiple). Ignored in 'action'. */
  value?: string | string[]
  /** Uncontrolled initial selection. Ignored in 'action'. */
  defaultValue?: string | string[]
  /** Fires with the new selection: string (single) or string[] (multiple). */
  onChange?: (value: string | string[]) => void
  /** Shared input name for the children. Generated when omitted. */
  name?: string
  /** Size for every Toggle Button child. Default: 'medium'. */
  size?: ToggleButtonSize
  /** Layout direction. Default: 'horizontal'. */
  orientation?: 'horizontal' | 'vertical'
  /** Padded variant: surface background, border, 4px padding. Default: false. */
  padded?: boolean
  /** Disables every child through <fieldset disabled>. */
  disabled?: boolean
  children: React.ReactNode
}

// Development-only warnings, same approach as Navbar.
let isDev = true
try { isDev = process.env.NODE_ENV !== 'production' } catch { isDev = false }
const warned = new Set<string>()
function warnOnce(message: string) {
  if (!isDev || warned.has(message)) return
  warned.add(message)
  console.warn(`[Ripple] ButtonGroup: ${message}`)
}

function toArray(v: string | string[] | undefined): string[] {
  if (v === undefined) return []
  return Array.isArray(v) ? v : [v]
}

export const ButtonGroup = React.forwardRef<HTMLFieldSetElement, ButtonGroupProps>(
  function ButtonGroup(
    {
      selection = 'action',
      legend,
      legendVisible = false,
      value: valueProp,
      defaultValue,
      onChange,
      name: nameProp,
      size = 'medium',
      orientation = 'horizontal',
      padded = false,
      disabled = false,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const generatedName = useId()
    const name = nameProp ?? `button-group-${generatedName}`
    const isSelection = selection !== 'action'

    // Internal state for uncontrolled use; ignored when `value` is provided.
    const [internal, setInternal] = useState<string | string[] | undefined>(defaultValue)
    const isControlled = valueProp !== undefined
    const current = isControlled ? valueProp : internal

    const count = React.Children.toArray(children).filter(React.isValidElement).length

    useEffect(() => {
      if (selection === 'single' && valueProp === undefined && defaultValue === undefined) {
        warnOnce('selection="single" needs `value` or `defaultValue`; one option must always be selected.')
      }
    }, [selection, valueProp, defaultValue])

    useEffect(() => {
      if (count < 2 || count > 5) warnOnce(`expects 2 to 5 children, received ${count}.`)
    }, [count])

    const handleToggle = useCallback(
      (childValue: string, checked: boolean) => {
        let next: string | string[]
        if (selection === 'single') {
          if (!checked) return // radios cannot be cleared by the user
          next = childValue
        } else {
          const set = toArray(current).filter(v => v !== childValue)
          next = checked ? [...set, childValue] : set
        }
        if (!isControlled) setInternal(next)
        onChange?.(next)
      },
      [selection, current, isControlled, onChange],
    )

    const context = useMemo<ToggleButtonGroupContextValue | null>(() => {
      if (!isSelection) return null
      const value =
        selection === 'single'
          ? (typeof current === 'string' ? current : null)
          : toArray(current)
      return {
        selection: selection as 'single' | 'multiple',
        name,
        size,
        value,
        onToggle: handleToggle,
      }
    }, [isSelection, selection, current, name, size, handleToggle])

    return (
      <fieldset
        ref={ref}
        className={['button-group', className].filter(Boolean).join(' ')}
        data-selection={selection}
        data-orientation={orientation}
        data-padded={padded ? '' : undefined}
        disabled={disabled}
        {...rest}
      >
        <legend
          className={[
            'button-group__legend',
            legendVisible ? 'button-group__legend--visible' : 'button-group__legend--hidden',
          ].join(' ')}
        >
          {legend}
        </legend>
        <ToggleButtonGroupContext.Provider value={context}>
          {children}
        </ToggleButtonGroupContext.Provider>
      </fieldset>
    )
  },
)
