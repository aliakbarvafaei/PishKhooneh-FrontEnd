// const ActionType ={
//   LOGIN : 'login',
//   LOGOUT : 'logout',
// }

// type Login {
//   type: .LOGIN;
//   payload: string[];
// }

// interface Logout {
//   type: ActionType.LOGOUT;
// }

// // interface SearchRepositoriesErrorAction {
// //   type: ActionType.SEARCH_REPOSITORIES_ERROR;
// //   payload: string;
// // }

export interface Action {
  type: string;
  payload: string[];
}