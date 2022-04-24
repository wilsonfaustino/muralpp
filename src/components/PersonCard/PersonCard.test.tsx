import { render, screen } from '~/utils/tests'

import { personsData } from '../BirthDaySlider/personsData'

import { PersonCard } from '.'

describe('<PersonCard />', () => {
  it('renders', () => {
    render(<PersonCard {...personsData[0]} />)

    expect(true).toBe(true)
  })
})
