import { render, screen } from '~/utils/tests'

import { MothersDaySlider } from '.'

describe('<MothersDaySlider />', () => {
  it('renders', () => {
    render(<MothersDaySlider prop="mothersdayslider" />)

    expect(true).toBe(true)
  })
})
