---
title: "Advent of Code 2024: {{ dateFormat "02" .Date }}. päivä"
linkTitle: "{{ dateFormat "02" .Date }}. päivä"
lastmod: {{ dateFormat "2006-01-02T15:04:05-0700" .Date }}
summary: ""
---
### Ensimmäinen osa

### Toinen osa

{{< highlight shell >}}
$ go run . -d {{ dateFormat "02" .Date }} -s 1
Day 10 / Step 1 result: 557
Execution time 5.693667ms

$ go run . -d {{ dateFormat "02" .Date }} -s 2
Day 10 / Step 2 result: 1062
Execution time 5.706208ms
{{< /highlight >}}

- [Haastesivu](https://adventofcode.com/2024/day/{{ dateFormat "02" .Date }})
- [Ratkaisun koodi](https://github.com/saaste/advent-of-code-2024/blob/main/pkg/puzzle/{{ dateFormat "02" .Date }}.go)