import * as actions from "./actionTypes";

// const state = []
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.BUGADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === actions.BUGREMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);

  } else if (action.type === actions.BUGRESOLVED) {
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  }else if(action.type === actions.DELETEALLBUGS){
    return []
  }

  return state;
}

/* with switch case */
// function reducer(state = [], action) {
//   switch (action.type) {
//     case "bugAdded":
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case "bugRemoved":
//       return state.filter((bug) => bug.id !== action.payload.id);

//     default:
//       return state;
//   }
// }
