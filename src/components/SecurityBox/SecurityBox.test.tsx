import { render, screen } from '~/utils/tests'

import { SecurityBox } from '.'

describe('<SecurityBox />', () => {
  it('renders', () => {
    render(<SecurityBox prop="securitybox" />)

    expect(screen.getByRole('heading', { name: /securitybox/i })).toBeInTheDocument()
  })
})

