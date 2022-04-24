import { render, screen } from '~/utils/tests'

import { Slider } from '.'

describe('<Slider />', () => {
  it('renders', () => {
    render(<Slider prop="slider" />)

    expect(screen.getByRole('heading', { name: /slider/i })).toBeInTheDocument()
  })
})

