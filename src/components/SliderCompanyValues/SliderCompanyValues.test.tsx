import { render, screen } from '~/utils/tests'

import { SliderCompanyValues } from '.'

describe('<SliderCompanyValues />', () => {
  it('renders', () => {
    render(<SliderCompanyValues prop="slidercompanyvalues" />)

    expect(screen.getByRole('heading', { name: /slidercompanyvalues/i })).toBeInTheDocument()
  })
})

