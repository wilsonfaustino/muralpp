import { render, screen } from '~/utils/tests'

import { BirthDaySlider } from '.'

describe('<BirthDaySlider />', () => {
  it('renders', () => {
    render(<BirthDaySlider prop="birthdayslider" />)

    expect(screen.getByRole('heading', { name: /birthdayslider/i })).toBeInTheDocument()
  })
})

