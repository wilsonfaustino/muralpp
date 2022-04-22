import { render, screen } from '~/utils/tests'

import { IconVision } from '.'

describe('<IconVision />', () => {
  it('renders', () => {
    render(<IconVision prop="iconvision" />)

    expect(screen.getByRole('heading', { name: /iconvision/i })).toBeInTheDocument()
  })
})

