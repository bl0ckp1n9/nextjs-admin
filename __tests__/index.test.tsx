import Home from '@/pages/index'
import { render } from '@/tests/test-utils'

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home />)
  })
})
