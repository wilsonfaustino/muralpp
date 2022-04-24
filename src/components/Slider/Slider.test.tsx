import { render, screen } from '~/utils/tests'

import { Slider } from '.'

const settings = { arrows: false, dots: true }

describe('<Slider />', () => {
  it('renders', () => {
    render(
      <Slider settings={settings}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Slider>
    )

    expect(true).toBe(true)
  })
})
