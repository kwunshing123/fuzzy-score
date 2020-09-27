/**
 * Find the Fuzzy Score which indicates the similarity score between two Strings.
 * 
 * @param term a full term that should be matched against, must not be null
 * @param query the query that will be matched against a term, must not be null
 */
export default (term: string, query: string): number => {
  // Checking
  if(typeof term !== 'string' || typeof query !== 'string') {
    throw new Error("term or query must be string.");
  }

  // Exit early if either are empty.
  if (term.length === 0 || query.length === 0) {
    return 0;
  }

  // Convert to lower case
  term = term.toLocaleLowerCase();
  query = query.toLocaleLowerCase();

  // similarity point
  let points: number = 0;

  let termIndex: number = 0;

  let lastCharMatchIndex: number = -2;

  for (const queryChar of query) {
    let termCharMatch: boolean = false;

    for (; termIndex < term.length && !termCharMatch; termIndex++) {
      if (queryChar === term[termIndex]) {
        points++;
        // Last character matched
        if (lastCharMatchIndex + 1 === termIndex) {
          points += 2;
        }
        lastCharMatchIndex = termIndex;
        termCharMatch = true;
      }
    }
  }
  
  return points;
}
