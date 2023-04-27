import { render } from '@/tests/test-utils'

import Index from './index'

describe('Index', () => {
  it('should render the children components', () => {
    render(
      <Index>
        <h1>Index children</h1>
      </Index>
    )
  })
})
