# Reset Beer Count

## Setup Project

This section will describe how to setup the project and perform actions.

### Install Dependencies

```bash
yarn install
```

### Package

```bash
yarn package
```

### Upload Packaged Code

```bash
cd compiled/
zip -r function.zip .  # create zip file of compiled/
```

You then need to upload the created archive `function.zip` in the `compiled/` folder to your AWS Lambda.
