import { render, screen } from '~/utils/tests'

import { companyTargets } from '../GridBottom/companyTargets'
import { Icons } from '../Icons'

import { PrincipleBox } from '.'

describe('<PrincipleBox />', () => {
  it('renders', () => {
    render(
      <PrincipleBox
        {...companyTargets[0]}
        icon={<Icons icon={companyTargets[0].icon} />}
      />
    )

    expect(true).toBe(true)
  })
})
