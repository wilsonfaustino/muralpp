import { render, screen } from '~/utils/tests'

import { PersonCard } from '.'

describe('<PersonCard />', () => {
  it('renders', () => {
    render(<PersonCard prop="personcard" />)

    expect(screen.getByRole('heading', { name: /personcard/i })).toBeInTheDocument()
  })
})

