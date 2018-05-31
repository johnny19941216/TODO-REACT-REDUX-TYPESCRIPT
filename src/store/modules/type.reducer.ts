export const ADD_TYPE = 'ADD_TYPE'
export const DELETE_TYPE = 'DELETE_TYPE'

const defaultState = {
  types: ['默认']
}

export const addType = (type: string) => ({
  type: ADD_TYPE,
  payload: type
})

export const deleteType = (index: number) => ({
  type: DELETE_TYPE,
  payload: index
})

export default (state = defaultState, { type, payload }: any): any => {
  console.log(payload)
  switch (type) {
    case ADD_TYPE:
      return {
        ...state,
        types: [...state.types, payload]
      }
    case DELETE_TYPE:
      return {
        ...state,
        types: [...state.types.filter((_, index) => index !== payload)]
      }
    default:
      return { ...state }
  }
}