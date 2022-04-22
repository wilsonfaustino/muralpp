import { render, screen } from '~/utils/tests'

import { PrincipleBox } from '.'

describe('<PrincipleBox />', () => {
  it('renders', () => {
    render(<PrincipleBox prop="principlebox" />)

    expect(screen.getByRole('heading', { name: /principlebox/i })).toBeInTheDocument()
  })
})

