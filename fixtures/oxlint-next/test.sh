#!/usr/bin/env bash

EXPECTED_ERRORS=8
EXPECTED_WARNINGS=1

output=$(./node_modules/.bin/oxlint -c ./oxlint.config.ts -f unix src/ 2>&1)
code=$?

if [ $code -eq 0 ]; then
  printf 'FAIL: Expected lint violations but oxlint exited 0\n' >&2
  exit 1
fi

actual_errors=$(printf '%s\n' "$output" | grep -c '\[Error/')
actual_warnings=$(printf '%s\n' "$output" | grep -c '\[Warning/')

if [ "$actual_errors" != "$EXPECTED_ERRORS" ] || [ "$actual_warnings" != "$EXPECTED_WARNINGS" ]; then
  printf 'FAIL: Expected %s error(s) and %s warning(s), got %s error(s) and %s warning(s)\n' \
    "$EXPECTED_ERRORS" "$EXPECTED_WARNINGS" "$actual_errors" "$actual_warnings" >&2
  printf '%s\n' "$output" >&2
  exit 1
fi

printf 'PASS: %s error(s) and %s warning(s) as expected\n' "$actual_errors" "$actual_warnings"
