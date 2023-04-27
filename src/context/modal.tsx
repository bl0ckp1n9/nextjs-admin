import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'

export type MODAL_VIEWS = 'EXAMPLE'

interface IModalState {
  view?: MODAL_VIEWS
  data?: any
  isOpen: boolean
}

type Action = { type: 'open'; view?: MODAL_VIEWS; payload?: any } | { type: 'close' }

const initialState: IModalState = {
  view: undefined,
  isOpen: false,
  data: null
}

function modalReducer(state: IModalState, action: Action): IModalState {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        view: action.view,
        data: action.payload,
        isOpen: true
      }
    case 'close':
      return {
        ...state,
        view: undefined,
        data: null,
        isOpen: false
      }
    default:
      throw new Error('Unknown Modal Action!')
  }
}

const ModalStateContext = createContext<IModalState>(initialState)
ModalStateContext.displayName = 'ModalStateContext'
const ModalActionContext = createContext<Dispatch<Action> | undefined>(undefined)
ModalActionContext.displayName = 'ModalActionContext'

export function ModalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  return (
    <ModalStateContext.Provider value={state}>
      <ModalActionContext.Provider value={dispatch}>{children}</ModalActionContext.Provider>
    </ModalStateContext.Provider>
  )
}

export function useModalState() {
  const context = useContext(ModalStateContext)
  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`)
  }

  return context
}

export function useModalAction() {
  const dispatch = useContext(ModalActionContext)
  if (dispatch === undefined) {
    throw new Error(`useModalAction must be used within a ModalProvider`)
  }

  return {
    openModal(view?: MODAL_VIEWS, payload?: unknown) {
      dispatch({ type: 'open', view, payload })
    },
    closeModal() {
      dispatch({ type: 'close' })
    }
  }
}
