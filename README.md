# Fuzzy Score in Typescript

Fuzzy Score algorithm implementation 
- Used to find the similarity of the strings
- A higher score indicates a higher similarity
- This package mainly converted from [org.apache.commons.text.similarity.FuzzyScore](http://commons.apache.org/proper/commons-text/apidocs/org/apache/commons/text/similarity/FuzzyScore.html)

## Install

```bash
npm install -S fuzzy-score
```

## Usage

```
import fuzzyScore from "fuzzy-score";

fuzzyScore('', '');
// 0

fuzzyScore('Workshop', 'b');
// 0

fuzzyScore('Room', 'o');
// 1

fuzzyScore('Workshop', 'w');
// 1

fuzzyScore('Workshop', 'ws');
// 2

fuzzyScore('Workshop', 'wo');
// 4

```