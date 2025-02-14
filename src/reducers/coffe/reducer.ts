import {
  InfoOrderCoffeType,
  InfosCoffeeType,
  OrderCoffeType,
} from "../../contexts/InfoCoffeeContext";
import { ActionTypes } from "./actions";
import { produce } from "immer";

interface InitialStateType {
  infosCoffee: Record<string, InfosCoffeeType>;
  quantityCoffe: OrderCoffeType[];
  infoOrderCoffe: InfoOrderCoffeType | null;
}

export function coffeeReducer(state: InitialStateType, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ADD_COFFEE:
        draft.infosCoffee[action.payload.title] = action.payload;
        break;

      case ActionTypes.REMOVE_COFFEE:
        delete draft.infosCoffee[action.payload.title];
        break;

      case ActionTypes.UPDATE_COFFEE:
        draft.infosCoffee[action.payload.title] = action.payload;
        break;

      case ActionTypes.ADD_ORDER: {
        const existingOrder = draft.quantityCoffe.find(
          (order) => order.type === action.payload.title
        );

        if (existingOrder) {
          existingOrder.quantity = action.payload.quantity;
        } else {
          draft.quantityCoffe.push({
            type: action.payload.title,
            quantity: action.payload.quantity,
          });
        }
        break;
      }

      case ActionTypes.REMOVE_ORDER:
        draft.quantityCoffe = draft.quantityCoffe.filter(
          (order) => order.type !== action.payload.title
        );
        break;

      case ActionTypes.SET_INFO_ORDER:
        draft.infoOrderCoffe = action.payload;
        break;

      case ActionTypes.CLEAR_ORDER:
        draft.quantityCoffe = [];
        break;

      default:
        return state;
    }
  });
}
