import { render, screen } from '~/utils/tests'

import { BirthDaySlider } from '.'

describe('<BirthDaySlider />', () => {
  it('renders', () => {
    render(<BirthDaySlider />)

    expect(true).toBe(true)
  })
})
