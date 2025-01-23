import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.BUGADDED,
  payload: {
    description,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUGREMOVED,
  payload: {
    id,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUGRESOLVED,
  payload: {
    id,
  },
});

export const deleteAllBugs = () => ({
  type: actions.DELETEALLBUGS,
});
