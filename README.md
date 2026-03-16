# vitest-async-leaks
Test project to reproduce an async leak problem with Vitest

## Steps to reproduce

1 -
```bash
npm install
```

2 - 
```
npx vitest run --no-file-parallelism CompA
```
The `--no-file-parallelism` is not mandatory to reproduce the leak.
