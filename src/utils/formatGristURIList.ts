const formatGristURIList = (list: Array<string>): Array<string> => {
  if (!list) {
    return [];
  }
  return list.filter(uri => {
    try {
      new URL(uri);
      return true;
    } catch {
      return false;
    }
  });
};

export default formatGristURIList;
