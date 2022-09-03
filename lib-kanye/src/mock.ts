import type { Interceptable } from 'undici'
import { MockAgent, setGlobalDispatcher } from 'undici'

let globalMockAgent: MockAgent

const mockGlobalDispatcher = (origin: string): Interceptable => {
  if (!globalMockAgent) {
    globalMockAgent = new MockAgent()
    globalMockAgent.disableNetConnect()
    setGlobalDispatcher(globalMockAgent)
  }

  return globalMockAgent.get(origin)
}

export { mockGlobalDispatcher }
