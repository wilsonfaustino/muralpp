import { render, screen } from '~/utils/tests'

import { IconValues } from '.'

describe('<IconValues />', () => {
  it('renders', () => {
    render(<IconValues prop="iconvalues" />)

    expect(screen.getByRole('heading', { name: /iconvalues/i })).toBeInTheDocument()
  })
})

