import {renderHook, act} from '@testing-library/react-hooks'

import {useCounter} from '../use-counter'

test('exposes the count and increment/decrement functions', () => {
  const {result} = renderHook(useCounter)

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  act(() => result.current.increment())
  expect(result.current.count).toBe(2)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(1)
})

test('allows customization of the initial count', () => {
  const {result} = renderHook(useCounter, {
    initialProps: {
      initialCount: 4,
    },
  })

  expect(result.current.count).toBe(4)
})

test('allows customization of the step', () => {
  const {result} = renderHook(useCounter, {
    initialProps: {
      step: 3,
    },
  })

  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(3)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})
