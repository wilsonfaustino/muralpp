import { render, screen } from '~/utils/tests'

import { GridBottom } from '.'

describe('<GridBottom />', () => {
  it('renders', () => {
    render(<GridBottom prop="gridbottom" />)

    expect(screen.getByRole('heading', { name: /gridbottom/i })).toBeInTheDocument()
  })
})

