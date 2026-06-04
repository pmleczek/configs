#!/usr/bin/env bash

EXPECTED=6

output=$(oxfmt --check 2>&1)
code=$?

if [ $code -eq 0 ]; then
  printf 'FAIL: Expected %s file(s) with format violations, but none were found\n' "$EXPECTED" >&2
  exit 1
fi

actual=$(printf '%s\n' "$output" | grep -oE 'above [0-9]+' | grep -oE '[0-9]+')

if [ "${actual:-0}" != "$EXPECTED" ]; then
  printf 'FAIL: Expected %s file(s) with format violations, got %s\n' "$EXPECTED" "${actual:-0}" >&2
  printf '%s\n' "$output" >&2
  exit 1
fi

printf 'PASS: %s file(s) have format violations as expected\n' "$actual"
