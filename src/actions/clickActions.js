import { INCREMENT } from "./types";
import { incrementCountAsync } from "../lib/getLeaders";

export const increment = (user, session) => dispatch => {
  incrementCountAsync(user, session).then(clicks =>
    dispatch({
      type: INCREMENT,
      payload: clicks
    })
  );
};
