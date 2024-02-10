import { fetchAccounts } from "./accounts.actions";
import { accountsActions } from "./accounts.slice";

const allActions = {
  ...accountsActions,
  fetchAccounts,
};

export { allActions as accountsActions };

export { accountsReducer, accountsName } from "./accounts.slice";
