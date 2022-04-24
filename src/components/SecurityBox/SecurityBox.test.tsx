import { render, screen } from '~/utils/tests'

import { SecurityBox } from '.'

describe('<SecurityBox />', () => {
  it('renders', () => {
    render(<SecurityBox />)

    expect(true).toBe(true)
  })
})
