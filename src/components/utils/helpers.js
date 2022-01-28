import {
  Q1,
  Q1_COMPARISON,
  Q_OPERATOR,
  Q2,
  Q2_COMPARISON,
  OTHER_QUERIES,
  BASIC_URL,
} from "../../config";

const getWhereQuery = (payload) => {
  let where = `where=${Q1}+${Q1_COMPARISON}%27${payload.input1.trim()}%27`;

  if (!payload.input2) {
    return where;
  } else {
    where += `+${Q_OPERATOR}+${Q2}+${Q2_COMPARISON}%27${payload.input2.trim()}%27`;
    return where;
  }
};

export const fetchURL = (payload) => {
  let url = BASIC_URL + getWhereQuery(payload);

  for (const [key, value] of Object.entries(OTHER_QUERIES)) {
    url += `&${key}=${value}`;
  }
  return url;
};
