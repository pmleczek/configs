import config from "./config.json";

type User = {
  id: string;
  tags: string[];
};

class Base {
  run(): void {}
}

class Service extends Base {
  override run(): void {}
}

void Service;

const users: Record<string, User> = {
  alice: {
    id: "1",
    tags: ["admin"],
  },
};

// noUncheckedIndexedAccess
const maybeUser = users["alice"];

if (maybeUser) {
  void maybeUser.id;

  const firstTag = maybeUser.tags[0];

  if (firstTag) {
    firstTag.toUpperCase();
  }
}

// noPropertyAccessFromIndexSignature
const dict: Record<string, string> = {
  foo: "bar",
};

void dict["foo"];

// resolveJsonModule
void config.name;

// exactOptionalPropertyTypes=false
type Settings = {
  theme?: "light" | "dark";
};

const settings: Settings = {
  theme: undefined,
};

void settings;

// isolatedModules / verbatimModuleSyntax / bundler
export {};
