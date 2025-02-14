export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  UPDATE_COFFEE = "UPDATE_COFFEE",
  ADD_ORDER = "ADD_ORDER",
  REMOVE_ORDER = "REMOVE_ORDER",
  SET_INFO_ORDER = "SET_INFO_ORDER",
  CLEAR_ORDER = "CLEAR_ORDER",
}

export function addOrderAction(title: string, quantity: number) {
  return {
    type: ActionTypes.ADD_ORDER,
    payload: {
      title,
      quantity,
    },
  };
}

export function removeOrderAction(title: string) {
  return { 
    type: ActionTypes.REMOVE_ORDER, 
    payload: { title } 
  };
}

export function setInfoOrderAction(data: any) {
  return {
    type: ActionTypes.SET_INFO_ORDER,  
    payload: data,  
  };
}

export function clearOrderAction() {
  return {
    type: ActionTypes.CLEAR_ORDER,
  };
}
