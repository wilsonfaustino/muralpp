import { render, screen } from '~/utils/tests'

import { IconMission } from '.'

describe('<IconMission />', () => {
  it('renders', () => {
    render(<IconMission prop="iconmission" />)

    expect(screen.getByRole('heading', { name: /iconmission/i })).toBeInTheDocument()
  })
})

