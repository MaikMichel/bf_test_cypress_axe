# Demo Accessibility Test using cypress and axe

## What is inside
- cypress e2e tests using axe-core
- Application being tested is located here: https://github.com/MaikMichel/apex_a11y_demo_app
- You have to install it on your own or follow the instruction there to rebuild this app on https://apex.oracle.com


## how to test

### Install cypress and dependencies

```bash
  npm install
```

### create file cypress.env.json to reflect your application credentials with the following content:

```json
{
  "user_name": "<YOUR_USERMANE>",
  "pass_word": "<YOUR_PASSWORD>"
}
```

### Run all tests with
```bash
  npx cypress run
```

### Open cypress

```bash
  npx cypress open
```